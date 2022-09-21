import  React  from 'react';
import "./styles/App.scss";
import MainPage from "./components/layout";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
