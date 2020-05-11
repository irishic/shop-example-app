import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionLink,
  CollectionPreviewContainer,
  PreviewListContainer,
} from './collection-preview.styles';

function CollectionPreview({ title, items, routeName }) {
  return (
    <CollectionPreviewContainer>
      <CollectionLink to={`shop/${routeName}`}>
        {title.toUpperCase()}
      </CollectionLink>
      <PreviewListContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewListContainer>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;
