## Breadcrumb Component

### Setup
- Import the following on your page or article template

`import Breadcrumb from '../components/breadcrumb'`
`import breadcrumbHelper from '../components/breadcrumb/helper'`

- Initialize 

For page template, initialize the following `helper1`

ex.

`var breadcrumbData = breadcrumbHelper.helper1(data);`

For article template, initialize thefollowing `helper2`

ex.

`var breadcrumbData = breadcrumbHelper.helper2(data);`

- Inside the `return {}` statement add the following

`<Breadcrumb breadData={breadcrumbData}/>`

### Example

`const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    return (
      <Layout pageTitle={data.strapiPages.Title}>
          <Breadcrumb breadData={breadcrumbData}/>
          <ReactMarkdown source={data.strapiPages.Content} />    
      </Layout>
    )
}
export default PageTemplate`

``
export const query = graphql`
  query PageTemplate($slug: String!) {
    strapiPages(slug: {eq: $slug}) {
      id
      Title
      Content
      slug
      subPages {
        id
        Title
        Content
        slug
      }
      parentPage {
        id
        Title
        slug
      }
    }
    allStrapiPages {
      edges {
        node {
          id
          Title
          slug
          parentPage {
            id
            Title
            slug
          }
          subPages {
            id
            Title
            slug
          }
        }
      }
    }
  }
`
``