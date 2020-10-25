import logo from './logo.svg';

import {BrowserRouter, Route} from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import BrowseListings from './pages/BrowseListings/BrowseListings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/browse" component={BrowseListings}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
