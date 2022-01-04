import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Phabby's World Documentation">
      <h2>Motivation</h2>
      <p>
        This website is used to organize and assist in the creation of Phabby's
        World.
      </p>

      <h2>Pages</h2>
      <p>Redo this query</p>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`books/${node.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const allMdxQuery = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
