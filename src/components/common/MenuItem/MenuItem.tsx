import { FC, useState } from 'react';
import './MenuItem.scss';
import { MenuItemProps } from '../../../types';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const MenuItem: FC<MenuItemProps> = ({ title, subItems }) => {
    const [menuItemOpen, setMenuItemOpen] = useState(false);

    return (
        <li className='menu-item'>
            <div onClick={() => setMenuItemOpen((prev) => !prev)} className="menu-item__header">
                {menuItemOpen ? (
                    <IoIosArrowDown size={16} />
                ) : (
                    <IoIosArrowForward size={16} />
                )}
                <p className={`dots ${menuItemOpen ? 'menu-item__title-active' : ''}`}>
                    {title}
                </p>
            </div>
            <ul
                className={`menu-item__sub-items ${
                    menuItemOpen ? 'menu-item__sub-items--open' : ''
                }`}
            >
                {subItems.map((item) => (
                    <li key={item.title} className="dots">
                        {item.title}
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default MenuItem;
