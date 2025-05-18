"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { AnimateInView } from "@/components/animate-in-view"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

interface PhotoGalleryProps {
  photos: Photo[]
  className?: string
}

export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const isMobile = useMediaQuery("(max-width: 640px)")

  return (
    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3", className)}>
      {photos.map((photo, index) => (
        <AnimateInView key={index} animation="fadeIn" delay={0.1 * index} once={true}>
          <Dialog>
            <DialogTrigger asChild>
              <div
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={isMobile ? 400 : photo.width}
                  height={isMobile ? 300 : photo.height}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white font-medium">확대보기</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] sm:max-w-3xl p-0 bg-transparent border-none">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={photo.width * 1.5}
                height={photo.height * 1.5}
                className="w-full rounded-lg object-contain shadow-xl"
              />
            </DialogContent>
          </Dialog>
        </AnimateInView>
      ))}
    </div>
  )
} 