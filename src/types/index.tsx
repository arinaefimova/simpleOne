export interface SearchProps {
	placeholder: string;
	icon: string;
	inputWidth?: string;
    handleSearchChange?: (searchValue: string) => void;
    searchValue?: string;
}
export type SubItem = {
	id: string;
	title: string;
};

export type MenuItem = {
	id: string;
	title: string;
	subItems?: SubItem[];
};
export type MenuItemProps = {
	title: string;
	subItems: SubItem[];
};

export type PopupType={
    setSettingsOpen:(v:boolean)=>void;
    toggleTheme:()=>void;
}

export const enum ContentType{
    List = 'list',
    Star = 'star',
}
export type DrawerContentProps = {
	setDrawerOpen: (drawerOpen: boolean) => void;
    selectedContent:ContentType
};
export type IconMenuProps={
    handleMenuIconSelect:(type:ContentType)=>void;
    drawerOpen:boolean;
    selectedContent:ContentType;
    className?:string;

}
export type DrawerProps={
    drawerOpen:boolean;
    setDrawerOpen: (drawerOpen: boolean) => void;
    className?: string;

}
export type ButtonProps={
    title: string;
    type?: 'primary';
    onButtonClick?: () => void;
}
export type InputFieldProps={
    label: string;
    id: string;
    isImportant?: boolean;
    search?: boolean;
    plus?: boolean;
    date?: boolean;
    type?: string;
    multiple?: boolean;
    options?:string[];
    className?: string;
    last?: boolean;
    onChange?: (value: string | string[]) => void;
  
}
export type ModalProps={
    setOpenModal: (openModal: boolean) => void;
}
export type InputIconsProps={
    plus?: boolean;
  search?: boolean;
  date?: boolean;
  onAddClick?: () => void;
  onSearchClick?: () => void;
  onDateClick?: () => void;
}
export type TagBoxProps={
    tags: string[];
    onRemove: (value: string) => void;
}