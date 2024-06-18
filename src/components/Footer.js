// src/components/Footer.js
import { faFacebook, faGoogle, faInstagram, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px 0;
  color: white;
  text-align: center;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #61dafb;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Farmer Assist. All rights reserved.</p>
      <p>Follow us on</p>
      <IconList>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faFacebook} title="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faInstagram} title="Instagram" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faGoogle} title="Google" />
        </a>
        <a href="https://www.yahoo.com" target="_blank" rel="noopener noreferrer">
          <Icon icon={faYahoo} title="Yahoo" />
        </a>
      </IconList>
    </FooterContainer>
  );
};

export default Footer;
