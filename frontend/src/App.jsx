import React from "react";
import Home from './Pages/Home/Home';
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
