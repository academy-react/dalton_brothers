import http from "../../../interceptor";

export const deletePic = async (form) => {
  try {
    const Response = await http.delete("/SharePanel/DeleteProfileImage", form);
    return Response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
