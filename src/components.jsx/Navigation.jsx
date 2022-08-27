import React from 'react'
import './Navigation.css'
import Logo from './Logo'
import en from '../images/en.png'
import ru from '../images/ru.png'
import { useTranslation } from 'react-i18next';


const Navigation = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
  i18n.changeLanguage(language);
	};
	return (
		<nav className='Navbar'>
			<button onClick={() => changeLanguage("en")}><img className='England' src={en} alt="en" /></button>
      <button onClick={() => changeLanguage("ru")}><img className='Russia' src={ru} alt="ru" /></button>
			<Logo />
			<a href='#' className='Artificialintelligence'>{t("Artificialintelligence")}</a>
			<a href='#' className='Home'>{t("Home")}</a>
			<a href='#' className='About'>{t("About")}</a>
			<a href='#' className='Services'>{t("Services")}</a>
			<a href='#' className='Blog'>{t("Blog")}</a>
			<a href='#' className='Contact'>{t("Contact")}</a>
			
			<btn className='Log_in'><a href=''>{t("Sign In")}</a></btn>	
		</nav>
	)
}

export default Navigation;