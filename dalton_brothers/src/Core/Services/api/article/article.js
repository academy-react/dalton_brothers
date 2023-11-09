import http from "../../interceptor"

export const articleListApi = async ()=> {
    try {
        const Response = await http.get("/Home/GetCoursesTop?count=8")
        return Response
    } catch (error) {
        console.log(error)
        return []
    }
}