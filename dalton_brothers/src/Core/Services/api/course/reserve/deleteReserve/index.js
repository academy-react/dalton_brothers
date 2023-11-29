import http from "../../../../interceptor";
export const deleteReserve = async (courseId) => {
  try {
    const response = await http.delete("/CourseReserve", courseId);
    return response;
  } catch (error) {
    console.log(error);
  }
};
