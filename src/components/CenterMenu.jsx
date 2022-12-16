import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const CenterMenu = () => {
  const liStyle = "md:mr-[3rem] md:p-0 p-2 cursor-pointer";
  return (
    <div className="md:flex md:p-0 w-[100%] justify-between">
      <AnchorLink className={liStyle} href="#home">
        Home
      </AnchorLink>
      <br />
      <AnchorLink className={liStyle} offset='-150' href="#about">
        About
      </AnchorLink>
      <br />
      <AnchorLink className={liStyle} offset='-300' href="#preformer">
        Preformer
      </AnchorLink>
      <br />
      <AnchorLink className={liStyle} href="#event">
        Event
      </AnchorLink>
    </div>
  );
};

export default CenterMenu;
