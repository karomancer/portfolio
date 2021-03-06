import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: 'Screw the rules, I have green hair.',
                },
                {
                  name: 'keywords',
                  content:
                    'karina chow, karina, chow, portfolio site, portfolio, personal site, personal website',
                },
                {
                  name: 'og:title',
                  content: 'Karina Chow | Jack of all Trades',
                },
                { name: 'og:url', content: 'http://www.karinachowtime.com' },
                {
                  name: 'og:image',
                  content: 'http://www.karinachowtime.com/images/og_image.png',
                },
              ]}
            >
              <script
                async
                src="https://static.codepen.io/assets/embed/ei.js"
              ></script>
              <link
                rel="stylesheet"
                href="https://use.typekit.net/vgz8xeo.css"
              />
              <html lang="en" />
            </Helmet>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page_layout">
                <SideBar fullMenu={fullMenu} color={this.props.color} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
