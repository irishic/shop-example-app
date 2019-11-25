import React from "react";

import Directory from '../../components/directory/directory.component'

function HomePage() {
  return (
    <div className="home-page">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
}

export default HomePage;
