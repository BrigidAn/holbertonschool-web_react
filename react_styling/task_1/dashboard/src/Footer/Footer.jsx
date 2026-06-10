import React from "react";
import { getFooterCopy } from '../utils/utils';

const Footer = () => (
  <footer className="App-footer">
    <p>
      Copyright {new Date().getFullYear()} - {getFooterCopy(true)}
    </p>
  </footer>
);

export default Footer;