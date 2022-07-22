import './Header.scss';

const navItem = ['男款', '女款', '最新消息', '客製商品', '聯絡我們'];

const Header = () => {
  return (
    <header className="site-header">
      <div className="container mx-auto">
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            {navItem.map((item) => {
              return (
                <li className="nav-item m-3" key={navItem.indexOf(item) + 1}>
                  {item}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
