import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer>
    &copy; {new Date().getFullYear()} by{' '}
    <a
      href="https://www.linkedin.com/in/phillipshim/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Phillip Shim{' '}
    </a>
    on{' '}
    <a
      href="https://github.com/shimphillip/just-do-it"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github
    </a>
  </footer>
);

export default Footer;
