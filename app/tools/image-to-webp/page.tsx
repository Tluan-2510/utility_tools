"use client";

import React, { useState, useCallback, useRef } from "react";
import AdUnit from "@/components/AdUnit";

interface ImageFile {
  id: string;
  file: File;
  preview: string;
  status: "idle" | "converting" | "done" | "error";
  webpBlob?: Blob;
  webpUrl?: string;
  originalSize: number;
  webpSize?: number;
}

export default function ImageToWebP() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [quality, setQuality] = useState(0.8);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | File[]) => {
    const newImages: ImageFile[] = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        preview: URL.createObjectURL(file),
        status: "idle",
        originalSize: file.size,
      }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const convertToWebP = async (imgFile: ImageFile) => {
    if (imgFile.status === "converting") return;

    setImages((prev) =>
      prev.map((img) =>
        img.id === imgFile.id ? { ...img, status: "converting" } : img
      )
    );

    try {
      const img = new Image();
      img.src = imgFile.preview;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get canvas context");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setImages((prev) =>
              prev.map((item) =>
                item.id === imgFile.id
                  ? {
                      ...item,
                      status: "done",
                      webpBlob: blob,
                      webpUrl: url,
                      webpSize: blob.size,
                    }
                  : item
              )
            );
          }
        },
        "image/webp",
        quality
      );
    } catch (error) {
      setImages((prev) =>
        prev.map((item) =>
          item.id === imgFile.id ? { ...item, status: "error" } : item
        )
      );
    }
  };

  const convertAll = () => {
    images.forEach((img) => {
      if (img.status !== "done") {
        convertToWebP(img);
      }
    });
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      const removed = prev.find((img) => img.id === id);
      if (removed) {
        URL.revokeObjectURL(removed.preview);
        if (removed.webpUrl) URL.revokeObjectURL(removed.webpUrl);
      }
      return filtered;
    });
  };

  const clearAll = () => {
    images.forEach((img) => {
      URL.revokeObjectURL(img.preview);
      if (img.webpUrl) URL.revokeObjectURL(img.webpUrl);
    });
    setImages([]);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="p-6 lg:p-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Image to <span className="text-blue-600">WebP</span> Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Convert your images to high-quality WebP format instantly. 
          Faster loading times, better compression, and 100% secure.
        </p>
      </div>

      {/* Drag & Drop Area */}
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer border-2 border-dashed rounded-[2.5rem] p-16 text-center transition-all duration-500 ${
          isDragging
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/10 scale-[0.98] shadow-2xl shadow-blue-500/10"
            : "border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl"
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          multiple
          accept="image/*"
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Drop your images here
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Supports PNG, JPG, and JPEG. Or click to browse.
          </p>
        </div>
      </div>

      {images.length > 0 && (
        <div className="mt-10 space-y-6">
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-8 p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm">
            <div className="flex-1 min-w-[240px] space-y-4">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  Conversion Quality
                </label>
                <span className="text-sm font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg">
                  {Math.round(quality * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={quality}
                onChange={(e) => setQuality(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={convertAll}
                className="btn-primary px-8"
              >
                Convert All
              </button>
              <button
                onClick={clearAll}
                className="btn-secondary px-8"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Image List */}
          <div className="grid grid-cols-1 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="flex flex-wrap items-center gap-6 p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                  <img
                    src={img.preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-[150px]">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[200px]">
                    {img.file.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Original: {formatSize(img.originalSize)}
                  </p>
                  {img.status === "done" && (
                    <p className="text-xs text-green-500 font-bold">
                      WebP: {formatSize(img.webpSize || 0)} (
                      {Math.round(
                        (1 - (img.webpSize || 0) / img.originalSize) * 100
                      )}
                      % smaller)
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {img.status === "idle" && (
                    <button
                      onClick={() => convertToWebP(img)}
                      className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Convert
                    </button>
                  )}
                  {img.status === "converting" && (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-gray-500">Processing...</span>
                    </div>
                  )}
                  {img.status === "done" && (
                    <a
                      href={img.webpUrl}
                      download={img.file.name.replace(/\.[^/.]+$/, "") + ".webp"}
                      className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-600 text-sm font-bold rounded-xl hover:bg-green-200 transition-all"
                    >
                      Download
                    </a>
                  )}
                  <button
                    onClick={() => removeImage(img.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ad Unit - End of Tool */}
      <AdUnit slotId="tool-bottom-slot" format="horizontal" className="my-12" />

      {/* Info Section */}
      <div className="mt-20 prose dark:prose-invert max-w-none border-t border-gray-100 dark:border-gray-800 pt-12">
        <h2 className="text-3xl font-extrabold mb-8 tracking-tight">Why convert to WebP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Better Compression</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              WebP offers superior lossless and lossy compression for images on the web. 
              WebP lossless images are 26% smaller than PNGs.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Privacy Guaranteed</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Conversion happens entirely in your browser. Your images are never 
              uploaded to any server, keeping your data private and secure.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Fast & Efficient</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              No waiting for uploads or server processing. Use the power of 
              your own device to convert images in milliseconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
