import React from "react";

export default function BgImage(props) {
  function handleImageLoad(event) {
    let img = event.target;
    img.style.transform = "100%";
    img.style.height = "100%";
    img.classList.remove("object-[15%_top]");
    img.classList.add("object-[25%_center]");
  }

  return (
    <img
      src={props.src}
      onLoad={handleImageLoad}
      className="background w-[180%] h-[180%] md:w-[250%] md:h-[250%] object-[15%_top] object-cover lg:object-left-top"
      alt="background"
    />
  );
}
