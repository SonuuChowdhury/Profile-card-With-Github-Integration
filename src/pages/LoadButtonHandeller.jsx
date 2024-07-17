import { useEffect, useState } from "react";
import "./LoadingPopUp.css"

function LoadButtonHandeller(props) {
  const [JsonInfo, SetJsonInfo] = useState({});
  const [IsLoading,SetIsLoading]=useState(false)

  useEffect(() => {
    SetIsLoading(true)
    fetch(`https://api.github.com/users/${props.UserSearch}`)
    .then(async function (res) {
        const json = await res.json();
        SetJsonInfo(json);
      }
    );
  }, [props.UserSearch]);

  useEffect(()=>{
    if (IsLoading) {
        const timer = setTimeout(() => {
          SetIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [IsLoading])

  return <div>
    {IsLoading?<LoadingPopup/>:<ErrorPassHandler JsonInfo={JsonInfo}/>}
  </div> 
}

function LoadingPopup() {
    return (
    <div className="Loading-Overlay">
    <div className="loading-popup">
        <div className="hourglassBackground">
            <div className="hourglassContainer">
                <div className="hourglassCurves"></div>
                <div className="hourglassCapTop"></div>
                <div className="hourglassGlassTop"></div>
                <div className="hourglassSand"></div>
                <div className="hourglassSandStream"></div>
                <div className="hourglassCapBottom"></div>
                <div className="hourglassGlass"></div>
            </div>
        </div>
    </div>
    </div>
      
    );}

function ErrorPassHandler(props){
    console.log(props.JsonInfo)

    if(props.JsonInfo.status=="404"){
        console.log("Nahi Mila Bhai")
    } 
}

export default LoadButtonHandeller;
