import React from 'react';
import { Await, defer, useLoaderData, useSearchParams } from 'react-router-dom';
import { CircularProgress, Button, TextField, Stack } from '@mui/material';

import { fetchSearchResults } from '../api/pixabay';
import SearchResults from '../components/SearchResults';

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);
  const searchQuery = queryParams.get('q');

  return defer({
    searchResult: searchQuery ? fetchSearchResults(searchQuery).then(response => response.json()) : null
  });
}

const SearchPage = () => {
  const { searchResult } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = document.getElementById('search-field')?.value;
    setSearchParams({ q: query });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField id="search-field" label="Search" defaultValue={searchQuery} />
          <Button variant="contained" type="submit">Search</Button>
        </Stack>
      </form>

      { searchQuery &&
        <React.Suspense fallback={<CircularProgress />}>
          <Await
            resolve={searchResult}
            errorElement={<div>There was an error loading the search results.</div>}
            children={(resolvedSearchResults) => <SearchResults hits={resolvedSearchResults.hits} />}
          />
        </React.Suspense>
      }
    </>
  );
};

export default SearchPage;
