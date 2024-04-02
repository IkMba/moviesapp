import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Nav from "../components/Nav";

function AppLayout() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <Header setShowNav={setShowNav} />
      {showNav && <Nav setShowNav={setShowNav} />}
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
