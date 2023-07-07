import Image from 'next/image'
import styles from './page.module.css'
import test from '../../public/images/test.png'
import check from '../../public/images/check.svg'
import me from '../../public/images/me.png'
import sky from '../../public/images/sky.jpg'
import proj from '../../public/images/project-screenshot.png'


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.work}>
        <h1>WORK</h1>
        <div className={styles.leftOutter}>
          <Image src={test} alt="test"/>
        </div>
        <div className={styles.leftHalf}>
          <Image src={check} alt="check"/>
        </div>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.play}>
        <h1>PLAY</h1>
        <div className={styles.rightHalf}>
          <Image src={me} alt="me"/>
        </div>
        <div className={styles.rightOutter}>
          <Image src={sky} alt="sky"/>
        </div>
      </section>
    </main>
  )
}
