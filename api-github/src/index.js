import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/*propriedade passada no componente */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
