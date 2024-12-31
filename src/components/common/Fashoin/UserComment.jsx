import React, { useState } from 'react';

const UserComment = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText.trim() === '' || rating === 0) return;

    const newComment = {
      id: Date.now(),
      text: commentText,
      rating,
      createdAt: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setCommentText('');
    setRating(0);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comments & Ratings</h2>
      <CommentForm 
        commentText={commentText} 
        setCommentText={setCommentText} 
        rating={rating} 
        setRating={setRating} 
        handleAddComment={handleAddComment} 
      />
      <CommentList comments={comments} onDelete={handleDeleteComment} />
    </div>
  );
};

const CommentForm = ({ commentText, setCommentText, rating, setRating, handleAddComment }) => (
  <form onSubmit={handleAddComment} className="mb-4 flex flex-col w-full md:w-full lg:w-1/3">
    <textarea
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Write your comment..."
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div className="flex items-center mt-2">
      <label className="mr-2 text-gray-700">Rating:</label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value={0}>Select</option>
        {[1, 2, 3, 4, 5].map((rate) => (
          <option key={rate} value={rate}>
            {rate} Star{rate > 1 ? 's' : ''}
          </option>
        ))}
      </select>
    </div>
    <button
      type="submit"
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      Add Comment
    </button>
  </form>
);

const CommentList = ({ comments, onDelete }) => (
  <div>
    {comments.length > 0 ? (
      comments.map((comment) => (
        <div
          key={comment.id}
          className="p-3 w-full md:w-full lg:w-1/3 mb-2 bg-gray-100 rounded-md shadow-sm flex justify-between items-center"
        >
          <div>
            <p className="text-gray-800">{comment.text}</p>
            <p className="text-yellow-500 text-sm">
              {'⭐'.repeat(comment.rating)} ({comment.rating} Star{comment.rating > 1 ? 's' : ''})
            </p>
            <span className="text-sm text-gray-500">{comment.createdAt}</span>
          </div>
          <button
            onClick={() => onDelete(comment.id)}
            className="text-red-500 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No comments yet. Be the first to comment!</p>
    )}
  </div>
);

export default UserComment;
