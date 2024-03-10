import styled from '@emotion/styled';
import { options } from 'const/dates';
import React, { FC } from 'react';

interface BlogProps {
  title: string;
  date: Date;
  description: string;
}

const Blog: FC<BlogProps> = ({ title, date, description }) => {
  return (
    <BlogWrapper>
      <BlogTitle>{title}</BlogTitle>
      <BlogDate>{date.toLocaleDateString('en-GB', options)}</BlogDate>
      <BlogDescription>{description}</BlogDescription>
    </BlogWrapper>
  );
};

export default Blog;

const BlogWrapper = styled.div`
  margin: 0 10px;
  &:hover {
    cursor: pointer;
    h2 {
      color: #0099cd;
    }
  }
`;

const BlogTitle = styled.h2`
  opacity: 0.9;
  color: white;
`;

const BlogDate = styled.div`
  color: #bec2c6;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const BlogDescription = styled.h5`
  color: #cccccc;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;
