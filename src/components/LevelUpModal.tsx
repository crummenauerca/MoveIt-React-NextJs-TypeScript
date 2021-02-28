import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>2</header>
        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nível :)</p>
        <button type="button" onClick={() => {}}>
          <img src="/icons/close.svg" alt="Ícone para fechar modal"/>
        </button>
      </div>
    </div>
  )
}