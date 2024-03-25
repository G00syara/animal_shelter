import React from 'react';
import styled from '@emotion/styled';

import { DARK_GRAY_COLOR, WHITE_COLOR, BLACK_COLOR } from 'const/colors';
import { footerItems } from 'const/elements';

const Footer = () => {
  return (
    <FooterContainer>
      {footerItems.map((item) => (
        <FooterBlock key={item.name} style={{ backgroundImage: `url(${item.background})` }}>
          <FooterBlockLink key={item.name} href={item.href}>
            <FooterLink>{item.name}</FooterLink>
          </FooterBlockLink>
        </FooterBlock>
      ))}
    </FooterContainer>
  );
};

const FooterBlockLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const FooterContainer = styled.footer`
  display: flex;
  background-color: ${DARK_GRAY_COLOR};
  color: ${WHITE_COLOR};
  text-align: center;
  width: 100%;
`;

const FooterBlock = styled.div`
  flex: 1;
  padding: 3rem;
  border: 1px solid ${BLACK_COLOR};
  background-size: contain;
  background-position: center;
  max-width: 400px;
  @media (max-width: 1440px) {
    max-width: 350px;
  }
  @media (max-width: 1200px) {
    max-width: 300px;
  }
  @media (max-width: 1024px) {
    max-width: 250px;
  }
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const FooterLink = styled.a`
  color: ${WHITE_COLOR};
  text-decoration: none;
  font-size: 5rem;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default Footer;
