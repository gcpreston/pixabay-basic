import React from 'react';

const ImageDetails = ({ hit }) => (
  <div>
    <h3>Details</h3>
    <ul>
      <li>User: {hit.user} <img height={30} src={hit.userImageURL} alt={hit.user} /></li>
      <li>Tags: {hit.tags}</li>
    </ul>
  </div>
);

export default ImageDetails;
