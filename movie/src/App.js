import { useEffect, useState } from "react";
import ReviewList from "./components/ReviewList";
import { getReviews, UpdateReview } from "./api";
import { createReview } from "./api";
import ReviewForm from "./components/ReviewForm";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setisLoading(true);
      setLoadingError(null);
      result = await getReviews(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setisLoading(false);
    }
    const { paging, reviews } = result;
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(options.offset + options.limit);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleCreateSuceess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  const handleUpdateSuccess = (review) => {
    setItems((prevItems) => {
      const splitIdx = prevItems.findIndex((item) => item.id === review.id);
      return [
        ...prevItems.slice(0, splitIdx),
        review,
        ...prevItems.slice(splitIdx + 1),
      ];
    });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm
        onSubmit={createReview}
        onSubmitSuccess={handleCreateSuceess}
      />
      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={UpdateReview}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
