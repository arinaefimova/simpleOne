import { useEffect, useState } from "react";
import {MainContent, Drawer} from "../../index";

import "./Main.scss";
const Main = () => {
	const [drawerOpen, setDrawerOpen] = useState(true);
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 990) {
				setDrawerOpen(false);
			} else {
				setDrawerOpen(true);
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div className="main">
			
			<Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} className='menu' />
			
			<MainContent drawerOpen={drawerOpen} />
		</div>
	);
};

export default Main;
