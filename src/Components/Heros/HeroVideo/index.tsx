
type HeroVideoProps = {
  youtubeId: string
}

export const HeroVideo = ({ youtubeId }: HeroVideoProps) => {
  return (
    <div className="overflow-hidden relative w-full">
      <div className="z-2 frame-container">
        <iframe className="w-full absolute" height="300" src={`https://www.youtube.com/embed/${youtubeId}?si=bTIMQI34JuS9Nvx_?rel=0&loop=1&playlist=${youtubeId}&background=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1`} allow="autoplay" title="YouTube video player" allowFullScreen></iframe>
      </div>
      <div className="z-1 w-full absolute darken-image h-full" />

    </div>
  )
}