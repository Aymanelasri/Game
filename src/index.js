import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import reportWebVitals from './reportWebVitals';

import UsersApp from './UserManagement/UsersApp';
import Ttt from './Exercice/Ttt';
import Projets from './ProjetsFinal/Projets';
import ThreeDAutoRotate from './Events/Event'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router /> */}
     {/*<App /> */}
    {/*} <Form />*/}
    {/*<Main />*/}
    {/*<UsersApp />*/}
    {/*<Ttt />*/}
    <Projets />
    
    {/* <Exercice />} */}
  </React.StrictMode>
);

reportWebVitals();