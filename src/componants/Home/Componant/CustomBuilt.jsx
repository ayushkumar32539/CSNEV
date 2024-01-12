import React, { useState } from "react";
import "./Style/CustomBuilt.css";

const CustomBuilt = (props) => {
  return (
    <div className='CustomBuilt-main--container'>
      <div className='CustomBuilt-heading--container'>
        <div className='CustomBuilt-heading'>
          <h1>{props.data.Heading}</h1>
        </div>
        <div className='CustomBuilt-sub--heading'>
          <h5>{props.data.SubHeading}</h5>
        </div>
      </div>
      {/* map container */}
      <div id='google-maps'>
        <Map />
      </div>
    </div>
  );
};

export default CustomBuilt;

function Map() {
  const [pointerEvents, setPointerEvents] = useState("none");

  const handleMapClick = () => {
    setPointerEvents("auto");
  };

  const handleMapMouseLeave = () => {
    setPointerEvents("none");
  };
  return (
    <div
      id='google-maps'
      onMouseUp={handleMapClick}
      onMouseLeave={handleMapMouseLeave}
    >
      <iframe
        src='https://www.google.com/maps/d/embed?mid=1x_EJg9OtrK8mbekZDFN020vuYlpt65o&ehbc=2E312F&z=3'
        style={{ border: 0, pointerEvents: pointerEvents }}
      ></iframe>
    </div>
  );
}
