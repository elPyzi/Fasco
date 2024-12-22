import Button from '../Buttons/Button/Button';
import { Link } from 'react-router-dom';
import '../../assets/styles/style-components/HomeHeader.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-nav">
                <h1 className="header-nav__title">Fasco</h1>
                <nav className="header-nav__nav">
                    <a className="header-nav__nav-link">Home</a>
                    <a className="header-nav__nav-link">Deals</a>
                    <a className="header-nav__nav-link">New Arrivals</a>
                    <a className="header-nav__nav-link">Packages</a>
                    <Link className="header-nav__nav-link" to="/signup">
                        Sign up
                    </Link>
                    <Link to="/signin">
                        <Button padding="20px 45px">Sign in</Button>
                    </Link>
                </nav>
            </div>
            <div className="header-content">
                <aside className="header-content__aside-content left">
                    <img
                        src="/src/assets/images/header/left-side.png"
                        alt="modern-man"
                    />
                </aside>
                <div className="header-content__top-pic">
                    <img src="src\assets\images\header\top.png" alt=""></img>
                </div>

                <div className="header-content__offer">
                    <h2 className="header-content__slogan ultimate">
                        Ultimate
                    </h2>
                    <h2 className="header-content__slogan sale">Sale</h2>
                    <h3 className="header-content__slogan new-collection">
                        new collection
                    </h3>
                    <Link to="/shop-page">
                        <Button padding="20px 60px">Shop Now</Button>
                    </Link>
                </div>
                <img
                    src="src\assets\images\header\bottom.png"
                    alt=""
                    className="header-content__bottom-pic"
                ></img>
                <aside className="header-content__aside-content right">
                    <img
                        src="src\assets\images\header\right-side.png"
                        alt="modern-man"
                    />
                </aside>
            </div>
        </header>
    );
};

export default Header;
