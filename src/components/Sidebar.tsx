import { useSelector } from 'react-redux'
import styles from '../styles/sidebar.module.css'
import { RootState } from '../store'

const Sidebar = () => {
  
  const isOpen = useSelector((state: RootState)=> state.aside.open)


  return (
    <div className={isOpen ? `${styles.sidebarMainOpen}` : `${styles.sidebarMainClosed}` }>
      <div className={styles.title}>
        <h2>Sidebar</h2>
      </div>
        <ul className={styles.list}>
          <li>
              Home
          </li>
          <li>
            Weather
          </li>
        </ul>
    </div>
  )
}

export default Sidebar