import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import CircuitsHero from '../components/CircuitsHero';
import PortfolioSection from '../components/portfolio/Section';


const PortfolioPage = () => (
  <Layout>
    <Helmet>
      <title>Portfolio | Karina Chow</title>
    </Helmet>
    <div className="page">
      <CircuitsHero>Things I've Done</CircuitsHero>
      <PortfolioSection />
    </div>
  </Layout>
);

export default PortfolioPage;