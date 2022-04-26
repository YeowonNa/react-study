import React from "react";
import styles from "./ReviewList.module.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
const ReviewItem = ({ item }) => {
  return (
    <div className={styles.reviewListItem}>
      <img
        className={styles.reviewListItem_img}
        src={item.imgUrl}
        alt={item.title}
      />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default ReviewItem;