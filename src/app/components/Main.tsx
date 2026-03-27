import { useState } from 'react'
import { DownloadInput } from './DownloadInput'
import { MusicCardSkeleton } from './MusicCardSkeleton'
import { MusicCard } from './MusicCard'

const demoMusicData = {
  coverUrl:
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
  title: 'Sunset Dreams',
  artist: 'Electronic Waves',
  duration: '3:45',
  bpm: 128,
  musicKey: 'Gm',
  genre: 'Electronic',
}

interface Props {
  title: string
  subtitle?: string
}

export const Main = ({
  title = 'Descarga musica en alta calidad',
  subtitle,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const handleDownload = (url: string) => {
    console.log('Downloading:', url)
    setIsLoading(true)
    setShowCard(false)
    setDownloadProgress(0)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setShowCard(true)

      // Simulate download progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        setDownloadProgress(progress)
        if (progress >= 100) {
          clearInterval(interval)
        }
      }, 300)
    }, 2000)
  }

  return (
    <main className="container mx-auto px-4 py-12 relative z-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-muted-white text-lg">{subtitle}</p>
        </div>

        <DownloadInput
          placeholder="Youtube/SoundCloud URL here..."
          onDownload={handleDownload}
          isLoading={isLoading}
        />
        {isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <MusicCardSkeleton />
          </div>
        )}

        {showCard && !isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <MusicCard {...demoMusicData} downloadProgress={downloadProgress} />
          </div>
        )}
      </div>
    </main>
  )
}
