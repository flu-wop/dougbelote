import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MEDIA } from "@/lib/data";

/**
 * MediaPlayers — renders the MEDIA list from data.ts.
 *  - "video" items embed a YouTube player (src = YouTube video ID).
 *  - "audio" items use a native <audio> player (src = /audio/file.mp3).
 * Swap a Vimeo embed in if Doug prefers — only this file changes.
 */
export function MediaPlayers() {
  const videos = MEDIA.filter((m) => m.type === "video");
  const audio = MEDIA.filter((m) => m.type === "audio");

  return (
    <div className="space-y-16">
      {/* Video reel(s) */}
      {videos.length > 0 && (
        <div>
          <p className="eyebrow mb-6">Video</p>
          <div className="space-y-8">
            {videos.map((v) => (
              <div key={v.id}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${v.src}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="mt-3 font-serif text-xl text-cream">{v.title}</p>
                {v.description && (
                  <p className="text-sm text-mist">{v.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Audio clips */}
      {audio.length > 0 && (
        <div>
          <p className="eyebrow mb-6">Audio</p>
          <div className="grid gap-5 md:grid-cols-2">
            {audio.map((a) => (
              <Card key={a.id}>
                <CardContent className="py-6">
                  <Badge variant="secondary" className="mb-3">
                    Clip
                  </Badge>
                  <p className="font-serif text-xl text-cream">{a.title}</p>
                  {a.description && (
                    <p className="mt-1 text-sm text-mist">{a.description}</p>
                  )}
                  {/* Native player. Drop the real file at /public{a.src}. */}
                  <audio
                    controls
                    preload="none"
                    className="mt-4 w-full"
                    src={a.src}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
