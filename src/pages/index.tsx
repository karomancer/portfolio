import React from 'react';

import Layout from '../components/Layout';
import HeroSection from '../components/Hero';
import PortfolioSection from '../components/portfolio/Section';
import BlogSection from '../components/blog/Section';



const IndexPage = () => (
  <Layout>
    <HeroSection />
    <PortfolioSection showHeader />
    <BlogSection showHeader />
  </Layout>
);

export default IndexPage;
