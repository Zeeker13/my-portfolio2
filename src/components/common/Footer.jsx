import React from "react";
import { social } from "../data/dummydata";

const Footer = () => {
  return (
    <footer>
      {social.map((item) => (
        <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer">
          <i data-aos="zoom-in">{item.icon}</i>
        </a>
      ))}
      <p data-aos="zoom-in">All Rights Reserved 2018</p>
    </footer>
  );
};

export default Footer;
