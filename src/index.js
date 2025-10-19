import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import NoteState from './context/notes/noteState';
import TrialExpired from './components/trialPeriod.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<BrowserRouter><NoteState><App/></NoteState></BrowserRouter> );
root.render(<TrialExpired/> );
        registerServiceWorker();