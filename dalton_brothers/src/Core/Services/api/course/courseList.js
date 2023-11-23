import http from "../../interceptor"

export const basicGet = async (url)=> {
    try {
        const Response = await http.get(url)
        return Response
    } catch (error) {
        console.log(error)
        return []
    }
}

export const basicPost = async (url,value)=> {
    try {
        const Response = await http.post(url,value)
        return Response
    } catch (error) {
        console.log(error)
        return []
    }
}