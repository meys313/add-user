import Card from "../UI/Card";
import classes from "./ShowUsers.module.css"
const ShowUsers = (props) => {
    return(
        <Card className={classes.showUsers}>
            {props.users.map((user)=> <p
                key={Math.random().toString()}>
                <span>Имя: </span> {`${user.name}`} <span>Возраст:</span>  {`${user.year}`}
            </p>)}
        </Card>
    )
}

export default ShowUsers