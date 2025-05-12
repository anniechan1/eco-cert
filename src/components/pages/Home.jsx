import React from 'react';
import '../../App.css';

import HeroOption1 from '../HeroOption1';
import HomeAboutSection from '../HomeAboutSection';


function Home() {
  return (
    <>
      <HeroOption1 />
      <HomeAboutSection /> {/* Change to designOption={2} to see the second design */}
    
    </>
  );
}

export default Home;