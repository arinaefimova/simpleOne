import { FiSettings } from "react-icons/fi";
import "./Header.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setTheme } from "../../../redux/slices/themeSlice";
import {Popup, Drawer, Search, User} from "../../index";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const dispatch = useAppDispatch()
    const theme = useAppSelector((state)=>state.theme.theme)
    const [settingsOpen, setSettingsOpen] = useState(false)
    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light'? 'dark':'light'))   
    }
    useEffect(() => {
        if(theme === 'dark'){
            document.body.classList.add('dark')
        }
       else{
        document.body.classList.remove('dark')
       }
    }, [theme]);
	return (
		<header className="header">
			<div className="header__wrapper">
				<a href="#" className="header__logo">
                    {theme === 'light'? <img src="/logo.png" alt="logo" />:<img src="/logo-w.png" alt="logo" /> }
				</a>
                <div className="header__drawer">
                    <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
                </div>
				<div className="header__inp">
                    <Search placeholder="Поиск" icon="search" inputWidth="260px"/>
                </div>
				<User />
				<div className="header__settings bordered" onClick={()=>setSettingsOpen(prev=>!prev)}>
					<FiSettings size={20} />
				</div>
                {settingsOpen && (
                        <Popup setSettingsOpen={setSettingsOpen}  toggleTheme={toggleTheme}/>
                    )
                }
			</div>
		</header>
	);
};

export default Header;
