import { useState } from 'react';

type TProps = {
  filteredData: any;
};

type TReturnValues = {
  setCurrentPage: (v: number) => void;
  pageCount: number;
  currentPosts: any;
};

export const usePagination = ({ filteredData }: TProps): TReturnValues => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const pageCount = Math.ceil((filteredData?.length || 0) / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost);

  return { setCurrentPage, pageCount, currentPosts };
};
