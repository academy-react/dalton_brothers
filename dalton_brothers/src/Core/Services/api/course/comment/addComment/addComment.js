import http from "../../../../interceptor";

export const addComment = async (url) => {
  try {
    const response = await http.post(`/Course/AddCommentCourse`, url);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
