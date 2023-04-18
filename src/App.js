import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Pages';
import { Navigation } from './Components';

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <Home />
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
