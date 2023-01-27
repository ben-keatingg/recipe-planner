import { Fragment } from "react"
import Logo from "../logo/Logo"
import styles from './Header.module.css'

interface Props {
  hideSubHeader?: boolean
}

const Header: React.FC<Props> = ({ hideSubHeader }) => {

  return (
    <Fragment>
      <Logo className={styles['logo']}/>
      <div className={styles['header-container']}>
        <h1 className={`${styles['header-title']} ${hideSubHeader ? styles['header-title--smaller'] : ''}`}>Meal Planner</h1>
        {!hideSubHeader && (
          <p className={styles['header-text']}>Use our handy planner to easily plan your meals for the week</p>
        )}
      </div>
    </Fragment>
  )
}

export default Header