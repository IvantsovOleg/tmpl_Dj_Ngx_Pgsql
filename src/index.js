import React from "react";
import * as ReactDomClient from "react-dom/client";
import App from './components/App';
import * as ThemeJs from './js/theme/theme.bundle';

const app = ReactDomClient.createRoot(document.getElementById('app'))
app.render(<App />)