import { useEffect, useState } from 'react';

export const usePagination = <T>(filteredData: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const pageCount = Math.ceil((filteredData?.length || 0) / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return { setCurrentPage, pageCount, currentPosts };
};
