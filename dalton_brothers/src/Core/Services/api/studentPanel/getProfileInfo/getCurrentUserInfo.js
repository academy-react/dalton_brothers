import http from "../../../interceptor";

export const getCurrentUserInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
