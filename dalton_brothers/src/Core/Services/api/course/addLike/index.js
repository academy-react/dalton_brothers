import http from '../../../interceptor'

export const addLike = async (user) => {
  try {
    const response = await http.post(user);
    return response;
  } catch (error) {
    console.log(error);
  }
};
