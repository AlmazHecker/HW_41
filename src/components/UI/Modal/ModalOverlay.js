import classes from './ModalStyle.module.css'
import Card from "../Card/Card";
import Button from "../Button/Button";
import Backdrop from '../Backdrop';

const ModalOverlay = props => {

    let btn = <Button onClick={props.onConfirm} >Okay</Button>
    if(!props.onConfirm){
        btn =  <> 
        <Button onClick={props.onDelete}>Delete</Button> 
        <Button onClick={props.onCancel}>Cancel</Button>
    </>
    }


    return (
        <>
        <Backdrop onConfirm={props.onConfirm ? props.onConfirm : props.onCancel} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title ? props.title : 'Delete User'}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message ? props.message : 'Do you want to delete this user ?'}</p>
                </div>
                <footer className={classes.actions}>
                    {btn} 
                </footer>
            </Card>
    </>
        )
}

export default ModalOverlay;