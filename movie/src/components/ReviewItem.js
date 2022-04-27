import React from "react";
import Rating from "./Rating";
import styles from "./ReviewList.module.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
const ReviewItem = ({ item, onDelete }) => {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className={styles.reviewListItem}>
      <img
        className={styles.reviewListItem_img}
        src={item.imgUrl}
        alt={item.title}
      />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
};

export default ReviewItem;
