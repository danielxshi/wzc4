import style from '../../styles/modules/_nav.module.scss'
import React, { useState, useEffect } from 'react';
import MenuItems from '../JSON/MenuItems';
import { useRouter } from 'next/router';
import Link from 'next/link';

function DesktopMenu() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    const router = useRouter();

    return (
        <div className={click ? [style['nav-menu-wrapper'], style['active']].join(' ') : [style['desktop-nav-menu-wrapper'], style['nav-menu-wrapper']].join(' ')}>
            <ul className={style['nav-menu']}>
                {MenuItems.NavMenuItems.map((item, index) => {
                    return (
                        <li className="flex" onClick={closeMobileMenu}
                            key={index}>
                            <div
                                className={
                                    router.pathname == item.pName
                                        ? style['active']
                                        : style['nav--wrapper']
                                }
                            >
                                <Link
                                    href={item.href}
                                    passHref={true}
                                    smooth={true}
                                    spy={true}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>);
}

export default DesktopMenu;