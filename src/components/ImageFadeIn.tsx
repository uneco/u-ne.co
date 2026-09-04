import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  /** フェードインにかける秒数 */
  duration?: number
}

/**
 * 画像の読み込み完了後に opacity を 0 → 1 へ遷移させる <img>。
 */
export default function ImageFadeIn({ src, duration = 0.5, style, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let active = true
    const img = new Image()
    img.onload = () => {
      if (active) setLoaded(true)
    }
    img.src = src
    if (img.complete) setLoaded(true)
    return () => {
      active = false
    }
  }, [src])

  return (
    <img
      src={src}
      {...rest}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: `opacity ${duration}s ease 0s`,
      }}
    />
  )
}
