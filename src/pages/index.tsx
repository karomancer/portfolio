import React from 'react';

import Layout from '../components/Layout';
import HeroSection from '../components/Hero';
import PortfolioSection from '../components/portfolio/Section';

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <PortfolioSection showHeader />
  </Layout>
);

export default IndexPage;
