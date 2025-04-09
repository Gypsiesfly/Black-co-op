"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useDropzone } from "react-dropzone"

export function FileUpload() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className={`border border-dashed rounded-2xl p-6 lg:p-12 transition-colors ${
        isDragActive ? "bg-amber-50 border-amber-300" : "border-gray-300"
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <input {...getInputProps()} />
        <Image
          src="/img/drag-drop.png"
          alt="Drag and drop illustration"
          width={180}
          height={120}
          className="mb-4 lg:mb-6 w-[180px] lg:w-[220px] h-auto"
        />
        <h2 className="text-lg lg:text-xl font-semibold mb-2">
          {isDragActive ? "Drop your document here" : "Drag and drop your document here"}
        </h2>
        <p className="text-sm text-gray-600 mb-4">Or click to browse your files</p>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 mb-6 w-full sm:w-auto">
          Browse files
        </Button>
        <p className="text-xs text-gray-500 mb-2">Supported formats: PDF, DOC, DOCX, TXT</p>
        <p className="text-xs text-gray-500">(Max 50MB)</p>
      </div>
    </div>
  )
}
