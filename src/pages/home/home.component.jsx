import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './home.styles';

function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default HomePage;
