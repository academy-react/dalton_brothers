import http from "../../../interceptor";

export const editUSerProfile = async (user) => {
  try {
    const response = await http.put(`/SharePanel/UpdateProfileInfo`,user);

    return response;
  } catch (error) {
    return false;
  }
};
