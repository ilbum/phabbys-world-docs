import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import BlogLayout from '../../components/blog-layout';

const BlogPost = ({ data }) => {
  return (
    <BlogLayout pageTitle={data.mdx.frontmatter.title}>
      <h1>Concepts</h1>
      <ul>
        <li>
          {data.mdx.frontmatter.concepts.map((bulletPoint) => (
            <li>{bulletPoint}</li>
          ))}
        </li>
      </ul>
      <MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
        {data.mdx.body}
      </MDXRenderer>
    </BlogLayout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        concepts
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
