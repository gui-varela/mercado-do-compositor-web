import { useState, useRef, useEffect } from 'react'
import { Container } from './styles'
import { Play, Pause, SkipForward, SkipBack, Heart } from 'phosphor-react'
import audioTrack from '../../assets/sounds/98014_538383-lq.mp3'

interface IPlayerProps {
  isSimple?: boolean
}

export function SimplePlayer({ isSimple = false }: IPlayerProps) {
  const [audio, setAudio] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [likeProps, setLikeProps] = useState({
    fill: false,
  })

  const audioPlayer = useRef<HTMLAudioElement>(null)
  const progressBar = useRef<HTMLInputElement>(null)
  const animationRef = useRef(requestAnimationFrame(() => {}))

  useEffect(() => {
    setAudio(audioTrack)
    console.log(audio)
    if (audioPlayer.current && progressBar.current) {
      const seconds = Math.floor(audioPlayer.current.duration)
      setDuration(seconds)
      progressBar.current.max = seconds.toString()
    }
  }, [
    audio,
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ])

  const calculateTime = (timeInSeconds: number = 0) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
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
    if (progressBar.current && audioPlayer.current && animationRef.current) {
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

  const toggleLikeButtonProps = () => {
    setLikeProps({ fill: !likeProps.fill })
  }

  return (
    <Container>
      <div className="audioPlayer">
        <audio ref={audioPlayer} src={audio} preload="metadata"></audio>
        {!isSimple && (
          <button className="forwardBackward">
            <SkipBack weight="fill" size={14} />
          </button>
        )}
        <button className="playPause" onClick={toggleIsPlaying}>
          {isPlaying ? (
            <Pause size={14} weight="fill" />
          ) : (
            <Play weight="fill" size={14} />
          )}
        </button>
        {!isSimple && (
          <button className="forwardBackward">
            <SkipForward size={14} weight="fill" />
          </button>
        )}

        {/* current time */}
        <div className="currentTime">
          {currentTime ? calculateTime(currentTime) : '0:00'}
        </div>

        {/* progress bar */}

        <input
          ref={progressBar}
          className="progressBar"
          type="range"
          defaultValue={0}
          onChange={handleRange}
        />

        {/* duration */}
        <div className="duration">
          {duration ? calculateTime(duration) : ''}
        </div>
      </div>
      <div
        onClick={toggleLikeButtonProps}
        className={
          likeProps.fill
            ? 'likeButtonContainer likeButtonFilled'
            : 'likeButtonContainer likeButtonOutline'
        }
      >
        <Heart weight={likeProps.fill ? 'fill' : 'bold'} size={16} />
      </div>
    </Container>
  )
}
