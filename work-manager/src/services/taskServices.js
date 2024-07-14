import { httpAxios } from "@/helper/httpHelper";

export async function addWork(work){
    const result = await httpAxios.post("/api/works",work).then((response) => response.data)
    return result
}