import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/WelcomeLayout.scss';

function WelcomeLayout() {
  return (
    <div className="welcome-wrapper">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default WelcomeLayout;