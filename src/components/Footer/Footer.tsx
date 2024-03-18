import React from 'react';
import styled from '@emotion/styled';

import githubBackground from 'images/githubBackground.png';
import vkBackground from 'images/vkBackground.png';
import telegramBackground from 'images/telegramBackground.png';
import discordBackground from 'images/discordBackground.png';

const Footer = () => {
  const footerItems = [
    {
      href: 'https://github.com/G00syara',
      name: 'Github',
      background: githubBackground,
    },
    {
      href: 'https://vk.com/prekrasniy__mir',
      name: 'VK',
      background: vkBackground,
    },
    {
      href: 'https://t.me/Goosyara_0',
      name: 'Telegram',
      background: telegramBackground,
    },
    {
      href: 'https://discordapp.com/users/189435729309335552',
      name: 'Discord',
      background: discordBackground,
    },
  ];

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
  background-color: #333;
  color: #fff;
  text-align: center;
  width: 100%;
`;

const FooterBlock = styled.div`
  flex: 1;
  padding: 3rem;
  border: 1px solid #000000;
  background-size: contain;
  background-position: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 5rem;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  font-weight: bold;
`;

export default Footer;
