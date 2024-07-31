"use client"
import { MutatingDots } from "react-loader-spinner"

export default function Loading(){
    return(
        <>
        <div className="flex justify-center items-center bg-white min-h-screen">
        <MutatingDots 
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor= '#4fa94d'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
        </div>
        </>
    )
}