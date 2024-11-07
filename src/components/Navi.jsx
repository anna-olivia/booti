import navStyle from '../styles/Nav.module.css';
import colors from '../styles/Colors.module.css';

const Navi = () => {
  return (
    <nav className={`${colors.customBg} navbar navbar-expand-lg px-5`}>
    <a className="navbar-brand" href="#">LOGO</a>
    <button className={`navbar-toggler ${navStyle.btn}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={`navbar-toggler-icon  ${navStyle.icon}` }></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Nav-link(active)</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nav-link 1</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nav-link 2</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Nav-link(disabled)</a>
            </li>
        </ul>
    </div>
</nav>
  );
}

export default Navi;