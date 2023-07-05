import axios from "axios";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Map = dynamic(() => 
    import("../components/Map"), 
    { ssr: false }
);

interface Props{
    message: string;
}

export default function Test(){
    useEffect(()=>{
        axios.get("http://localhost:8000").then((res:Props)=>{
            console.log(res);
        })
    },[])
    return (
        <Map/>
    )
}
