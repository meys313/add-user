import classes from "./Modal.module.css"
import Card from "../UI/Card";
const Modal = (props)=>{
    return(
        <div className={props.active? `${classes.modal} ${classes.active}`: `${classes.modal}`}
         onClick={()=> props.onDisplay(prevState => !prevState)}>

            <Card className={classes.modal__content} onClick = {e => e.stopPropagation()}>
                <div className={classes.modal__title}>{props.warn}</div>
                <div className={classes.modal__description}>{props.description}</div>
            </Card>

        </div>
    )
}

export default Modal