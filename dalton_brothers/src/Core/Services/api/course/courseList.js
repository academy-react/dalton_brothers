import http from "../../interceptor"

// export const courseListApi = async ()=> {
//     try {
//         const Response = await http.get("/Home/GetCoursesTop?count=8")
//         return Response
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }
// export const landingCourseList = async ()=> {
//     try {
//         const Response = await http.get("/Home/GetCoursesTop?count=3")
//         return Response
//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }

export const basicGet = async (url)=> {
    try {
        const Response = await http.get(url)
        return Response
    } catch (error) {
        console.log(error)
        return []
    }
}

