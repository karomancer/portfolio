import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import './styles.scss';

const RichText = props => {
  const getAsset = data => {
    const fields = data?.target?.fields;
    const {
      title: { 'en-US': title },
    } = fields;

    const file = fields?.file && fields?.file['en-US'];
    const url = fields?.url && fields?.url['en-US'];

    switch (file?.contentType) {
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/gif':
      case 'image/png':
        return <img alt={title} src={file.url} />;
    }

    if (url) {
      if (url.match(/codepen/)) {
        const slug = url.split('/').pop();
        return (
          <>
            <p
              className="codepen"
              data-height="600"
              data-theme-id="light"
              data-default-tab="result"
              data-user="karomancer"
              data-slug-hash={slug}
              data-pen-title={title}
            >
              <span>
                See the Pen <a href={url}>{title}</a> by karomancer (
                <a href="https://codepen.io/karomancer">@karomancer</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </span>
            </p>
          </>
        );
      }
      if (url.match(/vimeo/)) {
        return (
          <iframe
            src={url}
            width="100%"
            height="600"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        );
      }
      if (url.match(/youtube/)) {
        return (
          <iframe
            width="100%"
            height="600"
            src={url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      }
    }
  };

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ color: props.color }}>{node.content[0].value}</h2>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote style={{ borderColor: props.color }}>{children}</blockquote>
      ),
      [BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => getAsset(data),
      'embedded-entry-inline': ({ data }, children) => getAsset(data),
    },
  };

  return (
    <div className="richtext">
      {documentToReactComponents(props.document.json, options)}
    </div>
  );
};

export default RichText;
