
import React from 'react';
import './Department.css';

function Parcel({ parcel, signParcel, index}) {

    return (
        <div
          className="parcel"
        >
          <h4>{parcel.Description[0].Name}</h4>
          <h5>{parcel.Value} EUR, {parcel.Weight} KG </h5>
          <button id="parcelButton" onClick={() => signParcel(index)}>Sign</button>        
          
        </div>
    );  
}

export default Parcel;