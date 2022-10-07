import {classNames} from "helpers/classNames";
import cls from "./Sidebar.module.scss";
import React, {useState} from "react";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>

            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;