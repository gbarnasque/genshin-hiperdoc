import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Container from 'react-bootstrap/Container';

import './index.css';
import App from './main/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Container fluid>
      <App /> 
    </Container>
);