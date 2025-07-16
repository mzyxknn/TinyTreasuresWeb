"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, Upload } from "lucide-react"

interface FileUploadProps {
  id: string
  accept?: string
  maxSize?: number // in MB
  maxFiles?: number
  onFilesChange?: (files: File[]) => void
}

export function FileUpload({
  id,
  accept = "image/*,.pdf,.doc,.docx",
  maxSize = 10,
  maxFiles = 5,
  onFilesChange,
}: FileUploadProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || [])

    // Filter out files that are too large
    const validFiles = newFiles.filter((file) => {
      if (maxSize && file.size > maxSize * 1024 * 1024) {
        alert(`File "${file.name}" is too large. Maximum size is ${maxSize}MB`)
        return false
      }
      return true
    })

    // Check if adding new files would exceed the limit
    const totalFiles = selectedFiles.length + validFiles.length
    if (totalFiles > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files. Please remove some files first.`)
      return
    }

    // Add new files to existing ones
    const updatedFiles = [...selectedFiles, ...validFiles]
    setSelectedFiles(updatedFiles)
    onFilesChange?.(updatedFiles)

    // Reset the input value so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = selectedFiles.filter((_, index) => index !== indexToRemove)
    setSelectedFiles(updatedFiles)
    onFilesChange?.(updatedFiles)
  }

  const removeAllFiles = () => {
    setSelectedFiles([])
    onFilesChange?.([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept={accept}
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Area */}
      <div
        onClick={triggerFileInput}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
      >
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <Button
          type="button"
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 mb-2"
        >
          Choose Files
        </Button>
        <p className="text-sm text-gray-500">
          {selectedFiles.length === 0
            ? `Click to upload files (Max ${maxFiles} files, ${maxSize}MB each)`
            : `${selectedFiles.length}/${maxFiles} files selected`}
        </p>
        <p className="text-xs text-gray-400 mt-1">You can select multiple files at once</p>
      </div>

      {/* Selected Files List */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700">Selected Files:</h4>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={removeAllFiles}
              className="text-xs text-gray-500 hover:text-red-500"
            >
              Remove All
            </Button>
          </div>

          <div className="max-h-40 overflow-y-auto space-y-2">
            {selectedFiles.map((file, index) => (
              <div key={`${file.name}-${index}`} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="ml-2 text-gray-400 hover:text-red-500 hover:bg-red-50 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
