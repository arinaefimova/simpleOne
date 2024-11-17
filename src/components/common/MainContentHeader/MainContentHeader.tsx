import { useEffect, useState } from "react";
import "./MainContentHeader.scss";
import {Modal,Button} from "../../index";

const MainContentHeader = ({drawerOpen}:{drawerOpen:boolean}) => {
	const [isSticky, setIsSticky] = useState(false);
    const [openModal, setOpenModal] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    const headerClass = isSticky
    ? drawerOpen
      ? "sticky-drawer-open"
      : "sticky-drawer-closed"
    : "";

    
    

   
	return (
        <>
            <div className={`content-header-main ${headerClass}`}>
                        <div className="content-header-main__row">
                            <h4>Подзадача</h4>
                            <Button title="Создать" onButtonClick={()=>setOpenModal(true)} />
                        </div>
                        <div className="content-header-main__row">
                            <Button title="Сохранить" type="primary" />
                            <Button title="Сохранить и выйти" />
                        </div>
                    </div>
                    {openModal && <Modal setOpenModal={()=>setOpenModal(false)}/>}
        </>
	);
};

export default MainContentHeader;
