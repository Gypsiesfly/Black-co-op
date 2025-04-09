import React from 'react';

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar Skeleton */}
      <aside className="w-64 border-r border-gray-200 flex flex-col">
        <div className="p-4 flex flex-col h-full">
          {/* Logo and Tools Skeleton */}
          <div className="flex items-center justify-between mb-8">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Current Book Skeleton */}
          <div className="h-8 w-full bg-gray-200 rounded-full animate-pulse mb-4" />

          {/* Content Skeleton */}
          <div className="space-y-4 mb-auto">
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Logout Button Skeleton */}
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse mt-4" />
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1 flex flex-col">
        {/* Top Navigation Skeleton */}
        <nav className="h-16 border-b border-gray-200 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
          </div>
        </nav>

        {/* Reading Area Skeleton */}
        <div className="flex-1 px-6 py-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Title Skeleton */}
            <div className="text-center space-y-4">
              <div className="h-8 w-48 bg-gray-200 rounded-full mx-auto animate-pulse" />
              <div className="h-4 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
              <div className="h-12 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
            </div>

            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
