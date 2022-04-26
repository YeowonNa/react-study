import ReviewItem from "./ReviewItem";

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
