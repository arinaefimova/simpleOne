import { useRef, useEffect, useState, FC } from "react";
import "./Modal.scss";
import { IoCloseOutline } from "react-icons/io5";
import { ModalProps } from "../../../types";
import {Form, Button} from "../../index";

const Modal:FC<ModalProps> = ({setOpenModal}) => {
	const contentRef = useRef<HTMLDivElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

	const [isScrollable, setIsScrollable] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
                
				const contentHeight = contentRef.current.scrollHeight;
				const windowHeight = window.innerHeight;
				setIsScrollable(contentHeight > windowHeight - 100);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

        document.body.classList.add("lock");

        return () => {
          window.removeEventListener("resize", handleResize);
          document.body.classList.remove("lock");
        }
	}, []);

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (modalRef.current && !contentRef.current?.contains(e.target as Node)) {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        const closeModal = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                setOpenModal(false);
            }
        };
        document.addEventListener("keydown", closeModal);
        return () => {
            document.removeEventListener("keydown", closeModal);
        };
    }, []);
    
   
	return (
		<div className="modal" ref={modalRef} onClick={handleOutsideClick}>
			<div
				className={`modal__box ${
					isScrollable ? "modal__scrollable" : "modal__centered"
				}`}
			>
				<div className="modal__content" ref={contentRef}>
					<div className="modal__header">
						<h4>Подзадача</h4>

						<div className="modal__row">
							<Button title="Сохранить" type="primary" />
							<Button title="Отменить" onButtonClick={()=>setOpenModal(false)} />
						</div>
                        <div className="modal__close bordered bordered_md" onClick={()=>setOpenModal(false)}>
                        <IoCloseOutline size={30} strokeWidth={2}/>
                        </div>
					</div>
					<div className="modal__inner">
						<h3 className="modal__title">Новая запись</h3>
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
