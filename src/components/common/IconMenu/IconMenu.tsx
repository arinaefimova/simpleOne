import { FC } from "react";
import "./IconMenu.scss";
import { ContentType, IconMenuProps } from "../../../types";

const IconMenu:FC<IconMenuProps> = ({handleMenuIconSelect, drawerOpen, selectedContent, className}) => {
	return (
		<div className={`icon-menu ${className}` }>
			<ul>
				<li onClick={()=>handleMenuIconSelect(ContentType.List)}>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3 20C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3ZM2 3C2 2.44772 2.44772 2 3 2H6V18H3C2.44772 18 2 17.5523 2 17V3ZM8 18V2H17C17.5523 2 18 2.44772 18 3V17C18 17.5523 17.5523 18 17 18H8Z"
							
                            fill={drawerOpen && selectedContent === ContentType.List ? '#005999' : 'var(--main-color)'}

						/>
					</svg>
				</li>
				<li onClick={()=>handleMenuIconSelect(ContentType.Star)}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 1C12.3806 1 12.7282 1.21607 12.8967 1.55738L15.7543 7.34647L22.1446 8.28051C22.5212 8.33555 22.8339 8.59956 22.9512 8.96157C23.0686 9.32357 22.9703 9.72083 22.6977 9.98636L18.0745 14.4894L19.1656 20.851C19.23 21.2261 19.0757 21.6053 18.7677 21.8291C18.4598 22.0528 18.0515 22.0823 17.7145 21.9051L12 18.8998L6.28545 21.9051C5.94853 22.0823 5.54024 22.0528 5.23226 21.8291C4.92429 21.6053 4.77004 21.2261 4.83439 20.851L5.92548 14.4894L1.30227 9.98636C1.02965 9.72083 0.931375 9.32357 1.04875 8.96157C1.16613 8.59956 1.47881 8.33555 1.85537 8.28051L8.24574 7.34647L11.1033 1.55738C11.2718 1.21607 11.6194 1 12 1ZM12 4.25925L9.80671 8.70262C9.66117 8.99747 9.37998 9.20193 9.05463 9.24949L4.14841 9.9666L7.69773 13.4236C7.93361 13.6534 8.04127 13.9845 7.98561 14.309L7.14818 19.1917L11.5345 16.8849C11.8259 16.7317 12.1741 16.7317 12.4655 16.8849L16.8518 19.1917L16.0144 14.309C15.9587 13.9845 16.0664 13.6534 16.3023 13.4236L19.8516 9.9666L14.9454 9.24949C14.62 9.20193 14.3388 8.99747 14.1933 8.70262L12 4.25925Z"
                            fill={drawerOpen && selectedContent === ContentType.Star ? '#005999' : 'var(--main-color)'}
						/>
					</svg>
				</li>
			</ul>
		</div>
	);
};

export default IconMenu;
