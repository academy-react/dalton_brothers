import http from "../../../interceptor";
export const addSave = async (courseId) => {
  try {
    const response = await http.post("/Course/AddCourseFavorite", {
      data: courseId,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};