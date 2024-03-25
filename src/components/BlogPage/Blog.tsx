import styled from '@emotion/styled';
import { BLOGDATE_COLOR, GRAY_COLOR, H2_BLOG_COLOR, WHITE_COLOR } from 'const/colors';
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
      color: ${H2_BLOG_COLOR};
    }
  }
`;

const BlogTitle = styled.h2`
  opacity: 0.9;
  color: ${WHITE_COLOR};
`;

const BlogDate = styled.div`
  color: ${BLOGDATE_COLOR};
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const BlogDescription = styled.h5`
  color: ${GRAY_COLOR};
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;
