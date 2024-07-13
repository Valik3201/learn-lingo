import { useState } from "react";

export const usePaginatedData = <T>(data: T[], itemsPerPage: number) => {
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return {
    paginatedData: data.slice(0, visibleCount),
    loadMore,
    hasMore: visibleCount < data.length,
  };
};
