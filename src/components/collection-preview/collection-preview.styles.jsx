import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionLink = styled(Link)`
  display: inline-block;
  font-size: 2em;
  text-decoration: none;
  color: black;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CollectionPreviewContainer = styled.div`
  font-family: 'Open Sans Condensed';
  margin-top: 25px;
`;

export const PreviewListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1vw;
  width: 100%;
`;
