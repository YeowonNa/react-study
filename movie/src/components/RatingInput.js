import { useState } from "react";
import Rating from "./Rating";
import styles from "./RatingInput.module.css";

function RatingInput({ name, value, onChange }) {
  // 선택한 별점을 보여주거나 마우스 올렸을 때 별점 미리보여주기
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className={styles.RatingInput}
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
