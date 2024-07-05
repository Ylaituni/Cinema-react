import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import SinglePage from './components/watch/SinglePage';
import HomePage from './home/HomePage';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={HomePage} />
				<Route path='/singlepage/:id' component={SinglePage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
