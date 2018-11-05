import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SideMenu from "../components/menu";
import menuHelper from "../components/menu/helper";

const SecondPage = ({data}) => (
  var menuData = menuHelper(data);

  return (
    <SideMenu menuContent={menuData}/>
  )

)

export default SecondPage

export const query = graphql`
  query allStrapiPages {
    edges {
      node {
        id
        Title
        slug
        article {
          id
          title
          slug
          page
        }
      }
    }
  }
`;