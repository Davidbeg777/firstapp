import { t } from 'i18next';
import React from 'react';
import Footer_image from '../images/Footer_image.png'
import './Footer.css'
import { useTranslation } from 'react-i18next';
const Footer = () => {
		const { t, i18n } = useTranslation();
		const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		};
	return (
		<div className='Footer'>
			<p className='Footer_text'>
				<h3 className='h3_text'>{t("What our clients say about our awesome solutions")}</h3>
				<p className='To_take'>{t("To take a trivial example")}</p>
				<p className='Lorem1'>{t("Lorem ipsum_msg")}</p>
				<p className='Lorem2'>{t("Lorem ipsum_msg")}</p>
				<p className='Lorem3'>{t("Lorem ipsum_msg")}</p>
			</p>
			<div className='Footer_img'>
				<img src={Footer_image} alt="Footerimage" />
			</div>
		</div>

	)
}
export default Footer;