import './app.css'
import ShowUsers from "./components/showUsers/ShowUsers";
import FormUser from "./components/formUser/FormUser";
import Modal from "./components/modal/Modal";
import {useState} from "react";
function App() {
    const [modalActive, setModalActive] = useState(false)
    const [users, setUser] = useState([])
    const [messageModal, setMessageModal] = useState({})
    const showModalHandler = (warn, desc) => {
        setModalActive(prevState => !prevState)
        setMessageModal({warn: warn, desc: desc})
    }
    return (
        <div className="App">
            <FormUser onNewUser={setUser} onModal={showModalHandler}/>
            <ShowUsers users={users}/>
            <Modal
                active={modalActive}
                onDisplay = {setModalActive}
                warn= {messageModal.warn}
                description={messageModal.desc}
            />
        </div>
    );
}

export default App;
