import Api from "../api"
import {getCookie, setCookie, deleteCookie} from "../utils.js"
export async function Auth(){
    const token = getCookie("token")
    console.log(token)
    if (!token || token == 'null' || token == null || token == false || token =="") {
        return {error: "No token"}
    }
    const result = await Api.users.JWT(token)
    if (result.id){
        return result;
    }
   deleteCookie("token")
    window.location.href = "/"
}
