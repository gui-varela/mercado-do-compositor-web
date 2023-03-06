import { useState, useRef, useEffect } from 'react'
import { Container } from './styles'
import { Play, Pause, SkipForward, SkipBack } from 'phosphor-react'

import audio from '../../assets/sounds/98014_538383-lq.mp3'

export function SimplePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef<HTMLAudioElement>(null)
  const progressBar = useRef<HTMLInputElement>(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (audioPlayer.current && progressBar.current) {
      const seconds = Math.floor(audioPlayer.current.duration)
      setDuration(seconds)
      progressBar.current.max = seconds.toString()
    }
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${returnedSeconds}`
  }

  const toggleIsPlaying = () => {
    const prevValue = isPlaying

    setIsPlaying(!prevValue)

    if (!prevValue) {
      audioPlayer.current?.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current?.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      const currentTimeInFloat = parseFloat(progressBar.current.value)
      progressBar.current.value = audioPlayer.current.currentTime.toString()
      changePlayerCurrentTime(currentTimeInFloat)
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const handleRange = () => {
    if (audioPlayer.current && progressBar.current) {
      const currentTimeInFloat = parseFloat(progressBar.current.value)
      audioPlayer.current.currentTime = currentTimeInFloat
      changePlayerCurrentTime(currentTimeInFloat)
    }
  }

  const changePlayerCurrentTime = (currentTimeInFloat: number) => {
    if (progressBar.current) {
      progressBar.current.style.setProperty(
        '--seek-before-width',
        `${(currentTimeInFloat / duration) * 100}%`,
      )
      setCurrentTime(currentTimeInFloat)
    }
  }

  return (
    <Container>
      <div className="audioPlayer">
        <audio ref={audioPlayer} src={audio} preload="metadata"></audio>
        <button className="forwardBackward">
          <SkipBack weight="fill" size={20} />
        </button>
        <button className="playPause" onClick={toggleIsPlaying}>
          {isPlaying ? (
            <Pause size={20} weight="fill" />
          ) : (
            <Play weight="fill" size={20} />
          )}
        </button>
        <button className="forwardBackward">
          <SkipForward size={20} weight="fill" />
        </button>

        {/* current time */}
        <div className="currentTime">
          {duration && !isNaN(duration) && calculateTime(currentTime)}
        </div>

        {/* progress bar */}

        <div>
          <input
            ref={progressBar}
            className="progressBar"
            type="range"
            defaultValue={0}
            onChange={handleRange}
          />
        </div>

        {/* duration */}
        <div className="duration">
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </Container>
  )
}
