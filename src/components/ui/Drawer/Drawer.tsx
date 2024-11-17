import { FC, useState } from "react";
import {DrawerContent, IconMenu} from "../../index";
import "./Drawer.scss";
import { ContentType, DrawerProps } from "../../../types";
const Drawer:FC<DrawerProps> = ({drawerOpen, setDrawerOpen, className}) => {
	const [selectedContent, setSelectedContent] = useState<ContentType>(
		ContentType.List
	);

	const handleMenuIconSelect = (type: ContentType) => {
		setSelectedContent(type);
		setDrawerOpen(true);
	};
	return (
		<div className={`drawer ${className} ${drawerOpen ? "open" : "closed"}`}>
			<IconMenu
              className={className}
				handleMenuIconSelect={handleMenuIconSelect}
				drawerOpen={drawerOpen}
				selectedContent={selectedContent}
			/>
			<div className={`drawer-content ${drawerOpen ? "open" : "closed"}`}>
				{drawerOpen && (
					<DrawerContent
						selectedContent={selectedContent}
						setDrawerOpen={setDrawerOpen}
					/>
				)}
			</div>
		</div>
	);
};

export default Drawer;
