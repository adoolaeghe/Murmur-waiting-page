import React from "react";
import ReactDOM from "react-dom"
import Layout from './components/waitingPage'
require('../../public/css/app.sass');

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app);
