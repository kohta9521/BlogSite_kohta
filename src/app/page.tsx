import Button from './components/atoms/Button'
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      sample code
      <Button text='Click me!' color='blue' size='large' />
      <Button text='Hello!' color='green' />
      <Button text='Pus!' color='red' />
    </main>
  )
}
