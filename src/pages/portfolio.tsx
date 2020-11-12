import React from 'react';

import Layout from '../components/Layout';
import CircuitsHero from '../components/CircuitsHero';
import PortfolioSection from '../components/portfolio/Section';


const PortfolioPage = () => (
  <Layout>
    <div className="page">
      <CircuitsHero>Things I've Done</CircuitsHero>
      <PortfolioSection />
    </div>
  </Layout>
);

export default PortfolioPage;
