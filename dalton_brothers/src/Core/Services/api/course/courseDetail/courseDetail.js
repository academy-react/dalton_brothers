import http from "../../../interceptor";

export const getDetail = async (url) => {
  try {
    const Response = await http.get(url);
    return Response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
