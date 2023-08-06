import React from 'react';
import { Button, TextField, Container, Stack, ImageList, ImageListItem } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userSearched = searchParams.get('q');
  let results;

  if (userSearched) {
    results = (
      <ImageList>
        <ImageListItem>
          <img src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" alt="cat 1" />
          <img src="https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg" alt="cat 2" />
        </ImageListItem>
      </ImageList>
    );
  }

  const search = () => {
    const query = document.getElementById('search-field')?.value;
    setSearchParams({ q: query });
  };

  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <TextField id="search-field" label="Search" />
        <Button variant="contained" onClick={search}>Search</Button>
      </Stack>

      {results}
    </Container>
  );
};

export default SearchPage;
