import React from "react";
import "./Footer.css";
import { getFooterCopy } from '../utils/utils';

const Footer = () => (
  <footer className="border-t-4 text-center p-4 mt-auto"
  style={{ borderColor: "var(--main-color)" }}>
    <p>
      Copyright {new Date().getFullYear()} - {getFooterCopy(true)}
    </p>
  </footer>
);

export default Footer;