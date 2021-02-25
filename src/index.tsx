import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MainMenu from "./Routes/main-menu/MainMenu";
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
import {UnknownPage as NotFound} from "./Routes/404/404";

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainMenu} exact>
            <MainMenu />
          </Route>
          <Route path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

document.onload = () =>
{
  switch (document.location.pathname)
  {
    case "/":
    case "/drive":
      break;
    // case ""
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
