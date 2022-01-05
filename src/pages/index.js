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
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <p>
            <Link to={`${node.frontmatter.type}/${node.slug}`}>
              {node.frontmatter.title}
            </Link>
          </p>
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
          type
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
