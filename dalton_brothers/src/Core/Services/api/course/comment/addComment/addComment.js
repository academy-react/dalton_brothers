import http from "../../../../interceptor";

export const addComment = async (url) => {
  try {
    const response = await http.post(`/Course/AddCommentCourse`, url);
    return response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
export const addArticleComment = async (url) => {
  try {
    const response = await http.post(`/News/CreateNewsComment`, url);
    //console.log(response);
    return response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
