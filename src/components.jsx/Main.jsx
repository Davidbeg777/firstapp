import React from 'react';
import './Main.css'
import Mainimage from '../images/Mainimage.png'
import Main_1 from '../images/Main_1.png'
import Main_2 from '../images/Main_2.png'
import Main_3 from '../images/Main_3.png'
import Main_4 from '../images/Main_4.png'
import Phone_brain from '../images/Phone_brain.png'
import Qualities_1 from '../images/Qualities_1.png'
import Qualities_2 from '../images/Qualities_2.png'
import Qualities_3 from '../images/Qualities_3.png'
import Qualities_4 from '../images/Qualities_4.png'
import Qualities_5 from '../images/Qualities_5.png'
import Footer from './Footer';
import Footer_2 from './Footer2';
import { useTranslation } from 'react-i18next';



const Main = () => {
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
  i18n.changeLanguage(language);
	};
	return (
		<main className='Main'>
			<p className='Next_gen'>
			{t("Next genaretion platform")}
			</p>
			<h1 className='Main_h1'>
			{t("Artificial intelligence & Cyber security")}
			</h1>
			<p className='Main_text'>
			{t("Lorem ipsum")}	</p>
			<btn className='Get_started'><button><a href='#'>{t("Get Started")}</a></button></btn>
			<btn className='Watch_video'><button><a href='#'>{t("Watch Video")}</a></button></btn>
			<div className='Main_image'><img src={Mainimage} alt="logo" /></div>
			<ul className='Main_logo'>
				<li className='Tech_go'><img src={Main_1} alt="Main_logo" /></li>
				<li className='Logoip'><img src={Main_2} alt="Main_logo" /></li>
				<li className='Logo_ip'><img src={Main_3} alt="Main_logo" /></li>
				<li className='logo_ipsum'><img src={Main_4} alt="Main_logo" /></li>
			</ul>
			<div className='Brain_phone'><img src={Phone_brain} alt="Brain" /></div>
			<h2 className='Main_h2text'><h2>{t("Apply AI, Deep Learning and Data Sciece to solve")}</h2></h2>
			<p className='Main2_text'>{t("Lorem ipsum")}</p>
			<btn className='LearnMore'><button>{t("Learn More")}</button></btn>
			<div className='Qualites_container'>
				<div className='Global_award'>
					<div><img src={Qualities_1} alt="Quality_1" /></div>
					<p className='Quality_1_text'><p>{t("Naxly as the Winners in Global Agency Awards")}</p>
					{t("Lorem ipsum")}</p>
				</div>
				<div className='Expert'>
					<div><img src={Qualities_2} alt="Quality_2" /></div>
					<p className='Quality_2_text'>
						<p>{t("Expert Prespective Agency Awards")}</p>
						{t("Lorem ipsum")}
					</p>
				</div>
				<div className='Business'>
					<div><img src={Qualities_3} alt="Quality_3" /></div>
					<p className='Value'>
						<p>{t("Business Prespective Global Agency Awards")}</p>
						{t("Lorem ipsum")}
					</p>
				</div>
				<div className='Global_experience'>
					<div><img src={Qualities_4} alt="Quality_4" /></div>
					<p className='Quality_4_text'>
						<p>{t("Value for Results in Global Agency Awards")}</p>
						{t("Lorem ipsum")}
					</p>
				</div>
				<div className='Last_Quality'>
					<div><img src={Qualities_5} alt="Last" /></div>
					<p className='Last_text'>
						<p>{t("Global Experience in Agency Awards")}</p>
						{t("Lorem ipsum")}
					</p>
				</div>
			</div>
			<Footer />
			<Footer_2/>
		</main>
	)
}
export default Main;
