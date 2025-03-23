import ReactDOM from 'react-dom/client';
import { clarity } from 'react-microsoft-clarity';
import App from './App';

clarity.init('qng0avuxil');
clarity.consent();
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
