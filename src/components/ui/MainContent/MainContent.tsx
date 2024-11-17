import {Form, MainContentHeader} from "../../index";
import "./MainContent.scss";

const MainContent = ({drawerOpen}:{drawerOpen:boolean}) => {
	return (
		<div className="main-content">
			<MainContentHeader drawerOpen={drawerOpen} />
			<div className="main-content__wrapper">
				<h1 className="dots">
					STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
					некоторые поля остаются редактируемыми для агента если он Caller

				</h1>
                <Form className="fm-fl"/>
               
			</div>
		</div>
	);
};

export default MainContent;
