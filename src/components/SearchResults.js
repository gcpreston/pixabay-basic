import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchResults = ({ hits }) => (
  <ImageList cols={1}>
    {hits.map((hit) => (
      <ImageListItem key={hit.id} sx={{ width: hit.previewWidth, height: hit.previewHeight }}>
        <Link to={`/result/${hit.id}`}>
          <img
            src={hit.previewURL}
            alt={hit.type}
          />
        </Link>
      </ImageListItem>
    ))}
  </ImageList>
);

export default SearchResults;
