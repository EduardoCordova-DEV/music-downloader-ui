import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { KeyBadge } from './KeyBadge'
import { Clock, Music2, CheckCircle2, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

interface MusicCardProps {
  coverUrl: string
  title: string
  artist: string
  duration: string
  bpm: number
  musicKey: string
  genre: string
  downloadProgress: number
  onOpenFolder?: () => void
  onDownloadAgain?: () => void
}

export const MusicCard = ({
  coverUrl,
  title,
  artist,
  duration,
  bpm,
  musicKey,
  genre,
  downloadProgress,
  onOpenFolder,
}: MusicCardProps) => {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (downloadProgress >= 100) {
      const timer = setTimeout(() => setIsComplete(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [downloadProgress])

  return (
    <Card className="p-6 space-y-4 bg-card border-border transition-all hover:border-primary/50">
      <div className="flex gap-4">
        <img
          src={coverUrl}
          alt={`${title} cover`}
          className="h-32 w-32 rounded-md object-cover shadow-lg"
        />
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-bold text-foreground line-clamp-1">
            {title}
          </h3>
          <p className="text-muted-foreground">{artist}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="secondary" className="gap-1">
              <Clock className="h-3 w-3" />
              {duration}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Music2 className="h-3 w-3" />
              {bpm} BPM
            </Badge>
            <KeyBadge musicKey={musicKey} />
            <Badge variant="outline">{genre}</Badge>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      {isComplete ? (
        <div className="flex items-center justify-between pt-1">
          {/* Success state */}
          <div className="flex items-center gap-2 text-sm text-spotify-green font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Downloaded successfully
          </div>
          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-muted-foreground hover:text-foreground"
              onClick={onOpenFolder}
            >
              <FolderOpen className="h-4 w-4" />
              Show in folder
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Descargando...</span>
            <span className="text-primary font-semibold">
              {downloadProgress}%
            </span>
          </div>
          <Progress value={downloadProgress} className="h-2" />
        </div>
      )}
    </Card>
  )
}
