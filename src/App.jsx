// import logo from './logo.svg';
// import { render } from "@testing-library/react";
import "./App.css";
import React  from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
// import Loading from "./component/Loading"





 const App =()=> {

  return (
    <div className="app">
      <Navbar />
      <News category="business" country="in" pageSize={10} />
      {/* <Loading /> */}
    </div>
  );
}


export default App;
