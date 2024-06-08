import ReactDOM from 'react-dom/client';
import { Alert } from './components/Alert';
import List from './components/List';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className='container'>
        <nav className='navbar sticky-top navbar-light bg-dark'>
          <h1 className='navbar-brand text-light'>Rick and Morty</h1>
        </nav>
        <List />
        <Alert
          type="information"
          heading="Success"
          closable
          onClose={() => console.log("closed")}
        >
          Everything is really good!
        </Alert>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);