import ImageFadeIn from '../components/ImageFadeIn'
import kusaLeft from '../assets/kusa_left.png'
import kusaRight from '../assets/kusa_right.png'
import unecoStand from '../assets/uneco_stand.png'
import unecoHorizontal from '../assets/uneco_horizontal.png'
import twitterBanner from '../assets/twitter@2x.png'
import flower from '../assets/flower.png'
import styles from './Home.module.css'

/** ページ読み込みごとにランダムで A / B どちらかの構図を表示する */
const mode: 'a' | 'b' = Math.random() < 0.5 ? 'a' : 'b'

function ModeA() {
  return (
    <>
      <div className={`${styles.imageContainer} ${styles.kusaLeft}`}>
        <ImageFadeIn src={kusaLeft} alt="kusa" />
      </div>
      <div className={`${styles.imageContainer} ${styles.kusaRight}`}>
        <ImageFadeIn src={kusaRight} alt="kusa" />
      </div>
      <div className={`${styles.imageContainer} ${styles.unecoStand}`}>
        <ImageFadeIn src={unecoStand} alt="uneco" />
      </div>
    </>
  )
}

function ModeB() {
  return (
    <>
      <div className={`${styles.imageContainer} ${styles.flower}`}>
        <ImageFadeIn src={flower} alt="flower" />
      </div>
      <div className={`${styles.imageContainer} ${styles.unecoHorizontal}`}>
        <ImageFadeIn src={unecoHorizontal} alt="uneco" />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <main className="app-content">
      <div className={`${styles.container} ${mode === 'a' ? styles.modeA : styles.modeB}`}>
        {mode === 'a' ? <ModeA /> : <ModeB />}
        <div className={styles.twitterBanner}>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/unecochan">
            <img className={styles.banner} src={twitterBanner} alt="twitter banner" />
          </a>
        </div>
      </div>
    </main>
  )
}
