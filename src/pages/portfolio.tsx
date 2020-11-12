import React from 'react';

import Layout from '../components/Layout';
import PortfolioSection from '../components/portfolio/Section';

import Circuits from '../sketches/Circuits';

const PortfolioPage = () => (
  <Layout>
    <div className="page">
      <div className="circuits-hero">
        <Circuits />
        <h1>Things I've Done</h1>
      </div>
      <PortfolioSection />
    </div>
  </Layout>
);

export default PortfolioPage;
