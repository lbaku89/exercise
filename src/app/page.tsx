import Image from 'next/image'
import styles from './page.module.css'
import ClientComponent from '@/component/ClientComponent'
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h3>To Do list</h3>
        <ClientComponent></ClientComponent>
      </div>
    </main>
  )
}
