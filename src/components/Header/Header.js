import './Header.css';

function Header() {
  return (
    <>
    <header>
        <div className="header-wrap">
            <h1 className="logo"></h1>
            <nav id="topNav">
                <ul className="gnb">
                    <li className="active"><a href="#section1"><span>Home</span></a></li>
                    <li><a href="#section2"><span>About</span></a></li>
                    <li><a href="#section3"><span>Project</span></a></li>
                    <li><a href="#section4"><span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  );
}

export default Header;