import React from "react";
import SidebarApp from "../components/SidebarApp";
import HeaderApp from "../components/HeaderApp";
import ContentApp from "../components/ContentApp";
import FooterApp from "../components/FooterApp";

const LayoutDefault = () => {
  return (
    <div>
      <SidebarApp />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <HeaderApp />
        <div className="body flex-grow-1 px-3">
          <ContentApp />
        </div>
        <FooterApp />
      </div>
    </div>
  );
};

export default LayoutDefault;
