import { useState } from 'react';

interface TFilteredData {
  length: number;
  slice: (v1: number, v2: number) => any;
}

export const usePagination = <T extends TFilteredData>(filteredData: T) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const pageCount = Math.ceil((filteredData?.length || 0) / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

  return { setCurrentPage, pageCount, currentPosts };
};
