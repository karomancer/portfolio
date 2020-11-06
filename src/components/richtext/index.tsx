import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import './styles.scss';

const RichText = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => {
        const file = data?.target?.fields?.file['en-US'];
        switch (file.contentType) {
          case 'image/jpeg':
            return <img src={file.url} />;
        }
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
