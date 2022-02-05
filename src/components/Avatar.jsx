import React from "react";
import "@styles/Avatar.scss";

import LogoMario from "@img/mario.png";

export default function Avatar() {
  return (
    <div>
      <div className="my-shape">
        <div className="my-shape-container-simpleTriangle"></div>
        <div className="my-shape-container-simpleTriangleSmallTop"></div>
        <div className="my-shape-container-simpleTriangleSmallBottom"></div>
        <div className="my-shape-container-simpleCircleSmallRight"></div>
        <div className="my-shape-container-simpleCircleSmallLeft"></div>

        <div className="my-shape-container-simpleCircleSmallTop"></div>

        <div className="my-shape-container">
          <div className="my-shape-container-roundedTriangle"></div>
          <span className="my-shape-container-img">
            <img src={LogoMario} alt="Mario Logo" width="255" height={337} />
          </span>
        </div>
      </div>
    </div>
  );
}
