import React from "react";
import ReactDOM from "react-dom"
import Layout from './components/waitingPageThankYou'
require('../../public/css/app.sass');

const app = document.getElementById('app-thanks')

ReactDOM.render(<Layout />, app);
