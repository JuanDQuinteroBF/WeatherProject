import styles from '../styles/home.module.css'
import HomeForm from './Form/HomeForm'

const Home = () => {
  
  
  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Widget Weather</h1>
        <HomeForm />
    </div>
  )
}

export default Home