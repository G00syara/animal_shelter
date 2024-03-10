import styled from '@emotion/styled';
import React from 'react';
import Blog from './Blog';

const BlogPage = () => {
  const blogs = [
    {
      title: 'Lorem ipsum dolor sit amet',
      date: new Date(),
      description:
        'consectetur adipiscing elit. Vivamus pretium nibh quam, commodo aliquet est iaculis id. Donec facilisis sapien non sapien imperdiet hendrerit vitae non magna.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      date: new Date(),
      description:
        'consectetur adipiscing elit. Vivamus pretium nibh quam, commodo aliquet est iaculis id. Donec facilisis sapien non sapien imperdiet hendrerit vitae non magna.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      date: new Date(),
      description:
        'consectetur adipiscing elit. Vivamus pretium nibh quam, commodo aliquet est iaculis id. Donec facilisis sapien non sapien imperdiet hendrerit vitae non magna.',
    },
  ];

  return (
    <PageContainer>
      <HeaderContainer>
        <HeaderText>Blog</HeaderText>
        <Underline />
      </HeaderContainer>
      <BlogsContainer>
        {blogs.map((blog) => {
          return <Blog key={blog.title} title={blog.title} date={blog.date} description={blog.description} />;
        })}
      </BlogsContainer>
    </PageContainer>
  );
};

export default BlogPage;

const PageContainer = styled.div`
  border-top: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40vh;
  position: relative;
`;

const HeaderContainer = styled.div`
  align-items: start;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-family: 'Protest Revolution', sans-serif;
  font-weight: 800;
  font-size: 42px;
`;

const Underline = styled.div`
  height: 5px;
  width: 7vw;
  background-color: #1d6c86;
`;

const BlogsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  margin-top: auto;
  padding: 100px;
`;