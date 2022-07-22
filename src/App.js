import React, {useState} from "react";
import Header from "./Layouts/Header/index";

import Footer from "./Layouts/Footer/index";
import Content from "./Layouts/Content/index";
function App() {
  const [num, setNum] = useState("");
  return (
    <div className="App">
       {/* Navbar */}
      <nav class="Header main-header navbar navbar-expand navbar-white navbar-light">
        <Header />
      </nav>
  
      {/* main-wrapper*/}
      <div className="content-wrapper">
        <Content  />
      </div>
      
     {/* Footer */}
      <footer className="main-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
