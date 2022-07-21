import React from "react";
import Header from "./Layouts/Header/index";
import Sidebar from "./Layouts/Sidebar/index";
import Footer from "./Layouts/Footer/index";

function App() {
  return (
    <div className="App">
      <nav className="Header  main-header navbar-expand navbar-white navbar-light">
        <Header />
      </nav>

      <div className="Sidebar sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden">
        <Sidebar />
      </div>

      {/* <div className="content-wrapper">
        <section className="content">
          qwe
        </section>
      </div> */}
      <footer className="main-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
