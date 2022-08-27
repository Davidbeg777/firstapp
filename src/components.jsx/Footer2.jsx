import React from 'react';
import './Footer2.css';
import Locationimg from '../images/Locationimg.png'
import Phone_img from '../images/Phone_img.png'
import Mailimg from '../images/Mailimg.png'
import Logo from '../images/Logo.png'
import Twitter_img from '../images/Twitter_img.png'
import Facebook_img from '../images/Facebook_img.png'
import Instagram_img from '../images/Instagram_img.png'
import Linked_img from '../images/Linked_img.png'
import Youtube_img from '../images/Youtube_img.png'
import { useTranslation } from 'react-i18next';

const Footer_2 = () => {
	const { t, i18n } = useTranslation();
		const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		};
	return (
		<div className='Footer_2'>
			<div className='Adress'>
				<div className='Logo2'><img src={Logo} alt="" /></div>
				<p className='Adress_artificial'>{t("Artificialintelligence")}</p>
				<p className='Adress_text'>{t("Lorem ipsum")}</p>
				<div>
					<p className='Mail'>Company@gmail.com.com</p>
					<div className='message'><img src={Mailimg} alt="" />
					</div>
				</div>
				<div>
					<p className='Phone_number'>{t("Phone: (064) 332-1233")}</p>
					<div className='Phone_img'><img src={Phone_img} alt="" /></div>
				</div>
				<div>
					<p className='Location'>{t("450 Wall Street, USA, New York")}</p>
					<div className='Location_img'><img src={Locationimg} alt="" />
					</div>
				</div>
			</div>
			<div className='Information_block'>
				<div className='Information_block_text'>
					<p className='Information_text'>{t("INFORMATION")}</p>
					<p className='New_collection'>{t("New Collection")}</p>
					<p className='About_store'>{t("About Store")}</p>
					<p className='Contact_us'>{t("Contact Us")}</p>
					<p className='Latest_News'>{t("Latest News")}</p>
					<p className='Our_Sitemap'>{t("Our Sitemap")}</p>
					<p className='Orders_History'>{t("Orders History")}</p>
				</div>
			</div>
			<div className='Footermenu_block'>
				<div className='Footermenu_text'>
					<p className='FOOTER_MENU'>{t("Footer Menu")}</p>
					<p className='Instagram_profile'>{t("Instagram profile")}</p>
					<p className='New_collection2'>{t("New Collection")}</p>
					<p className='Contact_us2'>{t("Contact Us")}</p>
					<p className='Latest_News2'>{t("Latest News")}</p>
					<p className='Terms_Conditions'>{t("Terms & Conditions")}</p>
					<p className='Purchase_Theme'>{t("Purchase Theme")}</p>
				</div>
			</div>
			<div className='Useful_links'>
			<div className='Useful_links_text'>
			    <p className='USEFUL_LINKS'>{t("USEFUL LINKS")}</p>
					<p className='Instagram_profile2'>{t("Instagram profile")}</p>
					<p className='New_Collection3'>{t("New Collection")}</p>
					<p className='Contact_us3'>{t("Contact Us")}</p>
					<p className='Latest_News3'>{t("Latest News")}</p>
					<p className='Terms_Conditions2'>{t("Terms & Conditions")}</p>
					<p className='Purchase_Theme2'>{t("Purchase Theme")}</p>
				</div>
			</div>
			<div className='ABOUT_THE_STORE'>
			<div className='Useful_links_text'>
				<p className='About_store2'>{t("ABOUT THE STORE")}</p>
			    <p className='About_text'>{t("Lorem ipsum")}</p>
					<p className='site_adress'>www.company.com</p>
					<div className='Facebook_logo'><img src={Facebook_img} alt="Facebook" /></div>
					<div className='Instagram_logo'><img src={Instagram_img} alt="Instagram" /></div>
					<div className='Twitter_logo'><img src={Twitter_img} alt="Twitter" /></div>
					<div className='Linked_logo'><img src={Linked_img} alt="Linked" /></div>
					<div className='Youtube_logo'><img src={Youtube_img} alt="Youtube" /></div>
					</div>
		</div>
		</div>
	)
}
export default Footer_2;