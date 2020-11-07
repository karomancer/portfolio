import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import './styles.scss';

const RichText = props => {
  const getAsset = data => {
    const fields = data?.target?.fields;
    const file = fields['en-US']?.file;
    const {
      url: { 'en-US': url },
      title: { 'en-US': title },
    } = fields;

    switch (file?.contentType) {
      case 'image/jpeg':
        return <img src={file.url} />;
    }

    if (url) {
      if (url.match(/codepen/)) {
        return (
          <>
            <p
              className="codepen"
              data-height="600"
              data-theme-id="light"
              data-default-tab="result"
              data-user="karomancer"
              data-slug-hash="yLNdeXE"
              data-preview="true"
              data-pen-title={title}
            >
              <span>
                See the Pen <a href={url}>{title}</a> by karomancer (
                <a href="https://codepen.io/karomancer">@karomancer</a>) on{' '}
                <a href="https://codepen.io">CodePen</a>.
              </span>
            </p>
            <script
              async
              src="https://static.codepen.io/assets/embed/ei.js"
            ></script>
          </>
        );
      }
    }
  };

  const options = {
    renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <h2 style={{ color: props.color}}>{node.content[0].value}</h2>,
      [BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => {
        return getAsset(data);
      },
      'embedded-entry-inline': ({ data }, children) => {
        return getAsset(data);
      },
    },
  };

  return (
    <div className="richtext">
      {documentToReactComponents(props.document.json, options)}
    </div>
  );
};

export default RichText;
