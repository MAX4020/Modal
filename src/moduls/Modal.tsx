import { createPortal } from "react-dom";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { button } from "../styles";
import {useState} from "react"
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonDanger, ButtonSuccess } from "./Button/Button";
import { Isync } from "../App";

export interface Ioverlay{
  children?: React.ReactNode
  close?: () => void  
  view?: () => void
}
export interface Imodal{
  children?: React.ReactNode
  title?: string
  close?: ()=> void
  view?: () => void

}
export interface ImodalConfirm{
  cancle?: () => void
  apply: (args:Isync)=>void
  title?: string
  control?: boolean
}
export interface ImodalForm{
  cancle?: () => void
  apply: any
  title?: string
  control?: boolean
  children?: string
}

export const Overlay = ({children, close}:Ioverlay) => {

  return( 
    <>
      <div onClick={close} className="absolute bg-stone-800/[.50] m-auto h-[100%] w-[100%] top-0 transition-[0.6]">
        <div className='flex flex-col items-center justify-center h-[100%] transition-[0.6]'>{children}</div>
        </div>
    </>
   );
}

export const ModalInfo = ({children, close, title, view}:Imodal)=>{
  return createPortal(
    <Overlay close={close} view={view}>
      <div onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
      <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={close}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
      <div className="p-[10px] overflow-y-scroll h-[400px] flex justify-center flex-col">{children}</div>
      </div>
    </Overlay>,
    document.body
  )
}
export const ModalConfirm = ({cancle, apply, title, control = false}:ImodalConfirm) =>{
  const [result, setResult] = useState(0)

  const applyHandler = () => {
    apply({hideModalConfirm,true,control?setResult:1})
  }

  return createPortal(
    <Overlay close={cancle}>
      <div onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
      <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={cancle}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
      <div className="p-[10px] h-[200px]">
        {result === 0 && 
          <div className="h-[100%] flex justify-center items-center">
            <ButtonDanger className="h-12 w-40 " onClick={cancle}>Отмена</ButtonDanger>
            <ButtonSuccess className="h-12 w-40" onClick={applyHandler}>Подтвердить</ButtonSuccess>
          </div>}
        {result === 1 && 
          <div className="flex justify-center flex-col">
            <span className="flex justify-center h-32 text-3xl items-center">Выполнено</span>
            <ButtonDanger className="h-12 w-40 m-auto" onClick={cancle}>Закрыть</ButtonDanger>
          </div>}
        {result === 2 && 
          <div className="flex flex-col justify-center">
            <span className="flex justify-center h-32 text-3xl items-center">Загрузка</span>
            <CircularProgress color="success" className="m-auto mb-5"/>
          </div>}
        {result === 3 && <span className="text-red-600 text-3xl flex justify-center items-center h-[100%]">Ошибка</span>}
        </div>
      </div>
    </Overlay>,
    document.body
  )
}
export const ModalForm = ({cancle, apply, title, children, control = false}:ImodalForm) =>{
  const [result, setResult] = useState(0)

  const applyHandler = () => {
    apply(true,control?setResult:2)
  }
  return createPortal(
    <Overlay close={cancle}>
      {result === 0 && 
      <form onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
        <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={cancle}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
        <div className="h-[400px]">
          <div className="h-[80%] overflow-y-scroll p-[10px] border-b-2 border-black">{children}</div>
          <div className="h-[20%] flex justify-center">
            <ButtonDanger className="h-12 w-40 " onClick={cancle}>Отмена</ButtonDanger>
            <ButtonSuccess className="h-12 w-40" onClick={applyHandler}>Подтвердить</ButtonSuccess>
          </div>
        </div>
      </form>}
      {result === 1 && 
      <form onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
      <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={cancle}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
      <div className="h-[400px]">
        <div className="h-[80%] overflow-y-scroll p-[10px] border-b-2 border-black">{children}</div>
          <div className="flex justify-center items-center">
            <ButtonDanger className="h-12 w-40" onClick={cancle}>Закрыть</ButtonDanger>
            <span className="text-3xl">Выполнено</span>
            </div>
        </div>
      </form>}
        {result === 2 && 
        <form onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
        <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={cancle}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
          <div className="flex flex-col justify-center">
            <span className="flex justify-center h-32 text-3xl items-center">Загрузка</span>
            <CircularProgress color="success" className="m-auto mb-5"/>
            </div>
        </form>}
        {result === 3 && 
        <form onClick={(e)=>e.stopPropagation()} className="bg-stone-300 w-[800px] border-2 border-black">
        <div className="flex bg-stone-300 w-[100%] justify-between border-b-2 border-black p-[5px]"><header>{title}</header><button onClick={cancle}><AiOutlineCloseCircle className="bg-stone-300 w-[25px] h-[25px] hover:fill-red-600 transition"/></button></div> 
          <span className="text-red-600 text-3xl h-[100px] flex justify-center items-center">Ошибка</span>
        </form>}
    </Overlay>,
    document.body
  )
}