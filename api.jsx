import axios from "axios";
export const getanime = ()=>{
    const result= axios.get("https://api.jikan.moe/v3/search/anime?q=boku");
    return(result);
   
}