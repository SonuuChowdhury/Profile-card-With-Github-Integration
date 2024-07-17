import React, { useState, useCallback } from "react";
import LoadButtonHandeller from "./LoadButtonHandeller";
import "./LandingPageStyle.css";

export function LandingPage() {
  return (
    <>
      <RenderTopSection />
      <RenderMainSection />
    </>
  );
}

function RenderTopSection() {
  return (
    <div className="TopSection">
      <h1 className="MainTittle">GitHub Profile Explorer</h1>
      <h3 className="MainTittleCredit">-Made By @SonuuChowdhury</h3>
    </div>
  );
}

function RenderMainSection() {
  const [UserSearch, SetUserSearch] = useState("@");
  const [showHandler, setShowHandler] = useState(false);

  const handleClick = useCallback(() => {
    setShowHandler(true);
  }, []);

  return (
    <div className="SearchSection">
      <h2>Search The GitHub Profile</h2>
      <input
        type="text"
        placeholder="Search Here"
        className="SearchBox"
        onChange={(event) => {
          SetUserSearch(event.target.value);
          setShowHandler(false); // Hide handler on input change
        }}
      />
      {UserSearch.length ? (
        <>
          <ButtonRender UserSearch={UserSearch} onClick={handleClick} />
          {showHandler && <LoadButtonHandeller UserSearch={UserSearch} />}
        </>
      ) : null}
    </div>
  );
}

const ButtonRender = React.memo(function ButtonRender({onClick }) {
  return (
    <>
      <button className="LoadButton" onClick={onClick}>
        Load Profile
      </button>
    </>
  );
});

