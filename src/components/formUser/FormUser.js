import classes from "./FormUser.module.css"
import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState} from "react";
const FormUser = (props)=>{

    const [inputData, setInputData] = useState({
        text:"",
        number: ""
    });

    const inputHandler = event => {
        setInputData(prevState =>{return {...prevState, [event.target.type]: event.target.value}})
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(inputData.text && inputData.number){
            if(Number(inputData.number) > 0 && Number(inputData.number) <= 110){
                const newUser = {
                    name: inputData.text,
                    year: inputData.number
                }

                props.onNewUser(prevState => [...prevState, newUser])
                setInputData({
                    text:"",
                    number: ""
                })
                setTimeout(() => event.target.reset(), 500);
            } else {
                props.onModal("Некорректный ввод данных", "Вы ввели некорректный возраст");
            }

        }
       else{
           props.onModal("Некорректный ввод данных","Поля не могут быть пустыми");
        }

    }
    return(
        <Card className={classes.formUsers}>
            <form onSubmit={submitHandler}>
                <div className={classes.formUsers__wrapper}>
                    <label>
                        <div className={classes.formUsers__description}>Имя</div>
                        <input type="text" onChange={inputHandler}/>
                    </label>
                </div>

                <div className={classes.formUsers__wrapper}>
                    <label>
                        <div className={classes.formUsers__description}>Возраст</div>
                        <input type="number" onChange={inputHandler}/>
                    </label>
                </div>
                <div className={classes.button__wrapper}>
                    <Button>Добавить Пользователя</Button>
                </div>

            </form>



        </Card>
    )
}

export default FormUser