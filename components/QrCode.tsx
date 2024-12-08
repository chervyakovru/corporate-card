'use client'

import { useEffect, useRef } from 'react'
import QRCodeLib from 'qrcode'

interface QRCodeProps {
  value: string
}

export default function QRCode({ value }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(canvasRef.current, value, { width: 200 }, (error) => {
        if (error) console.error('Error generating QR code:', error)
      })
    }
  }, [value])

  return (
    <div className="flex justify-center p-4">
      <canvas ref={canvasRef} />
    </div>
  )
}

