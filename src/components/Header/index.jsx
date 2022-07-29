import React, { memo, useCallback } from 'react';
import style from './Header.module.scss';


const navItem = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];

const Header = React.memo((props) => {

  const navItemLi = React.useCallback(navItem.map((item) => {
    const itemKey = navItem.indexOf(item) + 1
    return (
      <li className={`${style.navItem} m-3`} key={itemKey}>
        {item}
      </li>
    );
  }), [navItem])
  return (
    <header>
      <div className="container mx-auto">
        <nav className={style.navbar}>
          <ul className={`${style.navList} mr-auto`}>
            {navItemLi}
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
