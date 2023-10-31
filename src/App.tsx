import { ButtonContrast, ButtonDanger, ButtonInfo, ButtonPrimary, ButtonSecondary, ButtonSuccess, ButtonWarning } from "./moduls/Button/Button";
import { FaCircle } from "react-icons/fa"
import {column, container} from "./styles/index"
import {useState} from "react"
import { ModalConfirm, ModalForm, ModalInfo} from "./moduls/Modal";
function App() {
  const [modalInfo, setModalInfo] = useState(false)
  const [modalConfirm, setModalConfirm] = useState(false)
  const [modalForm, setModalForm] = useState(false)

  const hideModalInfo = () =>{setModalInfo(false)}
  const showModalInfo = () =>{setModalInfo(true)}
  const hideModalConfirm = () =>{setModalConfirm(false)}
  const showModalConfirm = () =>{setModalConfirm(true)}
  const hideModalForm = () =>{setModalForm(false)}
  const showModalForm = () =>{setModalForm(true)}

  const parseResult = async (controlResult: (data:number)=>void) => {
    controlResult(2)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_delay=3000')
      const json = await response.json()
      
      controlResult(json[10].completed ? 1:3)
    }
    catch(e){
      controlResult(3)
    }
  }


  return (
    <div className={container}>
      <div className={column}>
        <ButtonPrimary onClick={()=>showModalInfo()}>Информационное окно</ButtonPrimary>
        {modalInfo && <ModalInfo title={"Информация"} view={showModalInfo} close={()=>hideModalInfo()}></ModalInfo>}
        <ButtonPrimary onClick={()=>showModalConfirm()}>Окно подтверждения</ButtonPrimary>
        {modalConfirm && <ModalConfirm apply={parseResult} title={"Подтвердите действие"} cancle={()=>hideModalConfirm()}></ModalConfirm>}
        <ButtonPrimary onClick={showModalForm}>Окно с формой</ButtonPrimary>
        {modalForm && <ModalForm title={"Окно с формой"} apply={""} cancle={()=>hideModalForm()}></ModalForm>}
      </div>
      
    </div>
  );
}


export default App;
