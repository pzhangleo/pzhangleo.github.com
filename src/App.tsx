import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './component/ProfileCard';
import BitcoinPrice from './component/BitcoinPrice';

function App() {
  return (
    <div className="p-card">
      <ProfileCard name={'Sirius'} avatarUrl={'https://pic1.zhimg.com/80/v2-8f7afa205acafd22f5ea66c7c8702dbc_720w.webp'} bio={'Sirius is the brightest star in the night sky. Its name is derived from the Greek word Σείριος, or Seirios, meaning lit. \'glowing\' or \'scorching\'. The star is designated α Canis Majoris, Latinized to Alpha Canis Majoris, and abbreviated α CMa or Alpha CMa. With a visual apparent magnitude of −1.46, Sirius is almost twice as bright as Canopus, the next brightest star. Sirius is a binary star consisting of a main-sequence star of spectral type A0 or A1, termed Sirius A, and a faint white dwarf companion of spectral type DA2, termed Sirius B. The distance between the two varies between 8.2 and 31.5 astronomical units as they orbit every 50 years.'} />
      <BitcoinPrice currency={'usd'} />
    </div>
  );
}

export default App;
