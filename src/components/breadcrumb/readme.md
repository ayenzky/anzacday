## Breadcrumb Component

### Setup

**Import the following on your page or article template**

`import Breadcrumb from '../components/breadcrumb'`

`import breadcrumbHelper from '../components/breadcrumb/helper'`

**Initialize**

For page template, initialize the following `helper1`

*ex.*

```
const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    return (
      ...
    )
}
export default PageTemplate
```

For article template, initialize the following `helper2`

*ex.*

```
const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper2(data);
    return (
      ...
    )
}
export default PageTemplate
```

**Inside the `return {}` statement add the following**

*ex.*

```
const PageTemplate = ({ data }) => {
    var breadcrumbData = breadcrumbHelper.helper1(data);
    return (
      <Breadcrumb breadData={breadcrumbData}/>
      ...
    )
}
export default PageTemplate
```

### Graphql

```
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
"staticWebsiteBuildURL": "${process.env.WEBSITE_BUILD_URL || 'https://api.netlify.com/build_hooks/5bda5cc9c6aed631e73d2c3a'}"
```