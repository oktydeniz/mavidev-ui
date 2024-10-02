import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.scss';

function Layout() {
  return (
    <div className="layout-container">
      <div className="layout-main">
        <Outlet />
      </div>
      <footer className="layout-footer">
        <p>© 2024 MaviDev - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Layout;