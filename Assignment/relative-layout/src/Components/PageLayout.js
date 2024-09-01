// PageLayout.js
import React from 'react';

const PageLayout = ({ header, footer, children }) => {
  return (
    <div className="page-layout">
      <header className="page-header">{header}</header>
      <main className="page-content">{children}</main>
      <footer className="page-footer">{footer}</footer>
    </div>
  );
};

export default PageLayout;
