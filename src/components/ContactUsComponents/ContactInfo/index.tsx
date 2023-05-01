import React from "react";
import Map from "../Map";

const ContactUsInfo = () => {
  return (
    <div>
      <h2 className="fw-bold fs-3 mb-2">Our Info: </h2>
      <div className="my-4">
        <p>8 Desaine Street, St. Augustine Trinidad & Tobago </p>
        <p>Trinidad and Tobago, W.I</p>
        <p> Email: support@fortress.tt</p>
        <p>Phone: 1-(868)-223-2223</p>
        <p>Fax: 1-(868)-663-3364</p>
      </div>

      <Map center={{ lat: 10.631749, lng: -61.401868 }} zoom={30} />
    </div>
  );
};

export default ContactUsInfo;
