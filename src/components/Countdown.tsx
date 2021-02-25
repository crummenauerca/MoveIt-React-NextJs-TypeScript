import { useState, useEffect } from 'react'
import styles from '../styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFineshed, setHasFineshed] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    setTime(25 * 60)
    setIsActive(false)
    clearTimeout(countdownTimeout)
  }

  useEffect(() => {
    if (isActive === true && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1)
    } else {
      if (time == 0 && isActive) {
        setTime(25 * 60)
        setIsActive(false)
        setHasFineshed(true)
        console.log('Finalizou um ciclo!')
      }
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {isActive ? (
        <button type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >Abandonar ciclo</button>
      ) : (
          <button type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >Iniciar um novo ciclo</button>
        )}
    </div>
  )
}