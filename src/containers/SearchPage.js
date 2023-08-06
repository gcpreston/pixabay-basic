import React, { useEffect, useState } from 'react';
import { Button, TextField, Container, Stack, ImageList, ImageListItem } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchResults } from '../api/search';

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    if (searchQuery) {
      const doSearch = async () => {
        const response = await fetchSearchResults(searchQuery);
        const result = await response.json();
        setSearchResult(result);
      };

      doSearch();
    } else {
      setSearchResult(null);
    }
  }, [searchQuery]);

  let resultsBlock;

  if (searchResult) {
    resultsBlock = (
      <ImageList cols={1}>
        {searchResult.hits.map((hit, i) => (
          <ImageListItem key={hit.id} sx={{ width: hit.previewWidth, height: hit.previewHeight }}>
            <img
              src={hit.previewURL}
              alt={searchQuery}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = document.getElementById('search-field')?.value;
    setSearchParams({ q: query });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField id="search-field" label="Search" defaultValue={searchQuery} />
          <Button variant="contained" type="submit">Search</Button>
        </Stack>
      </form>

      {resultsBlock}
    </Container>
  );
};

export default SearchPage;
