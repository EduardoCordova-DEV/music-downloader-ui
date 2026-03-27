import { Main } from '@/app/components/Main'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const YtdlpApp = () => {
  return (
    <>
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground tracking-tight">
              Eduardo Cordova DEV
            </span>
          </div>

          {/* Nav actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground gap-2"
              asChild
            >
              <a
                href="https://github.com/EduardoCordova-DEV"
                target="_blank"
                rel="noreferrer"
              >
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <Main
        title="Music Downloader 🎧"
        subtitle="Download your favorite songs🎼"
      />

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Eduardo Cordova DEV — Powered by{' '}
              <a
                href="https://github.com/yt-dlp/yt-dlp"
                target="_blank"
                rel="noreferrer"
                className="text-spotify-green hover:underline"
              >
                yt-dlp
              </a>
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Download className="h-3.5 w-3.5" />
              Repo
            </a>
            <span className="text-muted-foreground/50">
              © {new Date().getFullYear()} Eduardo Cordova DEV
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
