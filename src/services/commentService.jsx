import axios from "axios";

const getAllCommentsOfPostService = (postId) =>
  axios.get(`/api/comments/${postId}`);

const addCommentService = (postId, commentData, authorization) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    { headers: { authorization } }
  );

const editCommentService = (postId, commentId, commentData, authorization) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    { headers: { authorization } }
  );

const deleteCommentService = (postId, commentId, authorization) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: { authorization },
  });

export {
  getAllCommentsOfPostService,
  addCommentService,
  editCommentService,
  deleteCommentService,
};
