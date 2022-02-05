import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="Layout back-gradient height100vh flex flex-middle flex-center">
      {children}
    </section>
  );
};

export default Layout;
