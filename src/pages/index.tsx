import React from 'react';

import Layout from '../components/Layout';
import HeroSection from '../components/Hero';
import PortfolioSection from '../components/portfolio/Section';
import BlogSection from '../components/blog/Section';

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <h2 className="section-title">Social</h2>
    <PortfolioSection showHeader />
    <h2 className="section-title">Blog</h2>
    <BlogSection showHeader />
  </Layout>
);

export default IndexPage;
