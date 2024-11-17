import  { FC } from 'react'
import './Popup.scss'
import { MdOutlineClose } from 'react-icons/md'
import { useAppSelector } from '../../../redux/hooks'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { PopupType } from '../../../types'
const Popup:FC<PopupType> = ({setSettingsOpen, toggleTheme}) => {
    const theme = useAppSelector((state)=>state.theme.theme)
  return (
    <div className='popup'>

        <div onClick={()=>setSettingsOpen(false)}><MdOutlineClose /></div>
        <h3>Сменить тему:</h3>
        <h4 onClick={()=>toggleTheme()}>{theme === 'light'? <p>Темная тема <IoMoon /></p>:<p>Светлая тема <IoSunny /></p>}</h4>
    </div>
  )
}

export default Popup