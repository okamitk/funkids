import '../resources/style/navbar.css';
type NavbarProps = {
    text?: string;
}
export function Navbar(props: NavbarProps) {
    return(
        <header className="main-header">
            <div className="container">
            <nav className="navbar navbar-expand-lg main-nav px-0">
                <a className="navbar-brand" href="/mojo">
                    <img src="http://rajeshdas.com/assets/images/logo.svg" alt="rajeshdas.com"></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar icon-bar-1"></span>
                        <span className="icon-bar icon-bar-2"></span>
                        <span className="icon-bar icon-bar-3"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainMenu">
                <ul className="navbar-nav ml-auto text-uppercase f1">
                    <li>
                    <a href="#home" className="active active-first">home</a>
                    </li>
                    <li>
                    <a href="#about">about us</a>
                    </li>
                    <li>
                    <a href="#service">services</a>
                    </li>
                    <li>
                    <a href="#project">projects</a>
                    </li>
                    <li>
                    <a href="#team">team</a>
                    </li>
                    <li>
                    <a href="#testimony">testimonils</a>
                    </li>
                    <li>
                    <a href="#contact">contact</a>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        </header>
    );
}