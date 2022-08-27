import './App.css';
import Header from './components.jsx/Header';
import Main from './components.jsx/Main';
import './components.jsx/reset.css';
import { useTranslation } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation();
	const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<main className='App-main'>
				<Main />
			</main>
		</div>
	);
}

export default App;
