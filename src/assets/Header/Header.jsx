import './Header.css'
import legoLogo from './LEGO.png'

export default function Header() {
    return (
        <div className="header__inner">
            <a href="#">
                <img className='logo' src={legoLogo} alt="" />
            </a>
            <div className="nav">
                <a href="#">Каталог</a>
                <a href="#">О компании</a>
                <a href="#">Вакансии</a>
            </div>
        </div>
    )
}