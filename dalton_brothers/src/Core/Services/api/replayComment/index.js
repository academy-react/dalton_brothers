import http from "../../interceptor";

export const replayComment = async (comment) => {
  try {
    const response = await http.post("/Course/AddReplyCourseComment", comment);
    return response;
  } catch (error) {
    console.log(error);
  }
};
