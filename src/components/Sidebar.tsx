import { useSelector } from 'react-redux'
import styles from '../styles/sidebar.module.css'
import { RootState } from '../store'
import { Div } from './StyledComponents/Div'
import { List } from './StyledComponents/List'

const Sidebar = () => {
  
  const isOpen = useSelector((state: RootState)=> state.aside.open)


  return (
    <div className={isOpen ? `${styles.sidebarMainOpen}` : `${styles.sidebarMainClosed}` }>
      <div className={styles.title}>
        <h2>Sidebar</h2>
      </div>
        <ul className={styles.list}>
          <List>
              Home
          </List>
          <List>
            Weather
          </List>
        </ul>
    </div>
  )
}

export default Sidebar