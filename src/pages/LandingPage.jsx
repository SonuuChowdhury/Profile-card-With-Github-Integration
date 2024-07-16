import { useState } from "react"
import "./LandingPageStyle.css"

export function LandingPage(){
    const [UserSearch,SetUserSearch]=useState("")
    return <>
    <RenderTopSection/>
    <RenderMainSection UserSearch={UserSearch} SetUserSearch={SetUserSearch}/>   
    </>
}

function RenderTopSection(){
    return(
        <div className="TopSection">
            <h1 className="MainTittle">GitHub Profile Explorer</h1>
            <h3 className="MainTittleCredit">-Made By @SonuuChowdhury</h3>
        </div>
)}

function RenderMainSection({UserSearch,SetUserSearch}){
    return(
        <div className="SearchSection">
            <h2>Search The GitHub Profile</h2>
            <input type="text" placeholder="Search Here" className="SearchBox" onChange={(event)=>SetUserSearch(event.target.value)}/>
            {UserSearch.length?<ButtonRender/>:null}
        </div>
)}

function ButtonRender(){
    return <>
        <button className="LoadButton">Load Profile</button>
    </>
}


