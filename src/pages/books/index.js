import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Phabby's World Documentation">
      <h2>General Book Outline</h2>

      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/${node.frontmatter.type}/${node.slug}`}>
            {node.frontmatter.title}
          </Link>
          <ul>
            <li>
              {node.frontmatter.concepts.map((bulletPoint) => (
                <li>{bulletPoint}</li>
              ))}
            </li>
          </ul>
        </article>
      ))}
    </Layout>
  );
};

export const allBooksQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "books" } } }
      sort: { fields: frontmatter___title }
    ) {
      nodes {
        frontmatter {
          title
          type
          concepts
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
