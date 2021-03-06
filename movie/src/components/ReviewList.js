import { useState } from "react";
import ReviewItem from "./ReviewItem";
import ReviewForm from "./ReviewForm";

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => setEditingId(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content };

          const handleSubmit = (FormData) => onUpdate(id, FormData);

          const handleSuceessSubmit = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSuceessSubmit}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewItem item={item} onDelete={onDelete} onEdit={setEditingId} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
