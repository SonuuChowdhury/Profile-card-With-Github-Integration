import { useCallback, useEffect, useState} from "react"
import { AuthPop } from "../Components/AuthPop"
import React from "react"
import "./LandingPageStyle.css"

export function LandingPage(){

    return <>
    <RenderTopSection/>
    <RenderMainSection/>   
    </>
}

function RenderTopSection(){
    return(
        <div className="TopSection">
            <h1 className="MainTittle">GitHub Profile Explorer</h1>
            <h3 className="MainTittleCredit">-Made By @SonuuChowdhury</h3>
        </div>
)}

function RenderMainSection(){
    const [UserSearch,SetUserSearch]=useState("@")
    return(
        <div className="SearchSection">
            <h2>Search The GitHub Profile</h2>
            <input type="text" placeholder="Search Here" className="SearchBox" onChange={(event)=>SetUserSearch(event.target.value)}/>
            {UserSearch.length?<ButtonRender UserSearch={UserSearch}/>:null}
        </div>
)}

const ButtonRender=React.memo(function ButtonRender({UserSearch}){
    return <>
        <button className="LoadButton" onClick={() => AuthenticateUserName(UserSearch)}>Load Profile</button>
    </>
})

function AuthenticateUserName({UserSearch}) {
    


}


