import styles from '../styles/home.module.css'
import HomeForm from './Form/HomeForm'
import { Button } from './StyledComponents/Button'

const Home = () => {
  
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Widget Weather</h1>
        <HomeForm />
        <Button >XD</Button>
    </div>
  )
}

export default Home