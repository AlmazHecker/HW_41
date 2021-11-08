import classes from './Modal/ModalStyle.module.css'

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

export default Backdrop;