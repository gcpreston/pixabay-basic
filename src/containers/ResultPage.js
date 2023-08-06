import React from 'react';
import { Await, defer, useLoaderData, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import { fetchImage } from '../api/pixabay';
import ImageDetails from '../components/ImageDetails';

export const loader = async ({ params }) => (
  defer({
    imageResult: fetchImage(params.imageId).then(response => response.json())
  })
);

const ResultPage = () => {
  const params = useParams();
  const { imageResult } = useLoaderData();

  return (
    <>
      <h1>Image {params.imageId}</h1>
      <React.Suspense fallback={<CircularProgress />}>
        <Await
          resolve={imageResult}
          errorElement={<div>There was an error loading the image.</div>}
          children={(resolvedImageResult) => {
            const hit = resolvedImageResult.hits[0];

            return (
              <>
                <img
                  src={hit.largeImageURL}
                  width={hit.webformatWidth}
                  height={hit.webformatHeight}
                  alt={hit.type}
                />

                <ImageDetails hit={hit} />
              </>
            );
          }}
        />
      </React.Suspense>
    </>
  );
};

export default ResultPage;
