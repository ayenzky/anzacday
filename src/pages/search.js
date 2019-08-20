import algoliasearch from 'algoliasearch/lite'
import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import {Col, Row} from 'react-bootstrap'
import {
  InstantSearch,
  Hits,
  Index,
  SearchBox,
  Configure,
  Pagination,
  Highlight
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './pages.css'


const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);



class App extends Component {
  render() {
    return (
      <Layout pageTitle='Search' layoutClass='main-page search-page'>
      <Row>
        <Col>
          <div className="ais-InstantSearch">
          <InstantSearch
            searchClient={searchClient}
            indexName="Pages"
          >
            <SearchBox type="search" />
            <div className="mt-5">
            <Configure hitsPerPage={8} />
            <Index indexName="Pages">
              <Configure hitsPerPage={20} />
              <Hits hitComponent={Hit}  />
            </Index>
            <Index indexName="Posts">
              <Configure hitsPerPage={20} />
              <Hits hitComponent={Hit} />
            </Index>
             <Pagination className="mt-4"/>
             </div>
          </InstantSearch>
          
        </div>
        </Col>
      </Row>
      </Layout>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Link to={props.hit.slug} >
      <h6 className="font-weight-normal">
        <Highlight attribute="title" hit={props.hit} tagName="mark" />
      </h6>
    </Link>
      </div>

    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
