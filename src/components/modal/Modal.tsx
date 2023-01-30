import { Fragment, PropsWithChildren } from 'react'
import styles from './Modal.module.css'

interface Props extends PropsWithChildren {
  isOpen: boolean
  handleClose: () => void
}

const Modal: React.FC<Props> = ({ isOpen, handleClose, children }) => {

  return (
    <Fragment>
      <div onClick={handleClose} className={`${styles['modal-outer']} ${isOpen ? styles['modal-outer--show'] : ''}`}>
        
      </div>
      <div className={`${styles['modal-inner']} ${isOpen ? styles['modal-inner--show'] : ''}`}>
        {children}
      </div>
    </Fragment>
  )
}

export default Modal