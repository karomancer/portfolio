import '../assets/sass/resume.scss';
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import CircuitsHero from '../components/CircuitsHero';
import PDFViewer from '../components/richtext/PDFViewer';

const RESUME_URL = '/pdfs/resume.pdf';

const ResumePage = () => (
  <Layout>
    <section className="page resume">
      <CircuitsHero>Résumé</CircuitsHero>
      <div className="inner">
        <a href={RESUME_URL} target="_blank">
          Download resume
        </a>
        <object className="resume-pdf" data={RESUME_URL} type="application/pdf">
          <embed src={RESUME_URL} type="application/pdf" />
        </object>
      </div>
    </section>
  </Layout>
);

export default ResumePage;
