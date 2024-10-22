import { useState } from 'react';

export default function usePagination() {
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const handlePageChange = (newPage: number) => setPage(newPage);

  return { page, initialPage, handlePageChange };
}
