import { Metadata } from "next";

export default (title:string)=>{
    // 浏览器头，小标题
    const metadata:Metadata ={
        title
    }
    return metadata
}