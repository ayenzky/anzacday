import React, { Component, createRef } from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from "react-instantsearch-dom"


import { Root, HitsWrapper } from "./styles"
import Input from "./input"
import * as hitComps from "./hits"

const events = ["mousedown", "touchstart"]

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits ? children : `No results for ${state.query}`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default class Search extends Component {
  state = { query: ``, focussed: false, ref: createRef() }
  searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  updateState = state => this.setState(state)

  focus = () => {
    this.setState({ focussed: true })
  }

  disableHits = () => {
    this.setState({ focussed: false })
  }

  handleClickOutside = event => {
    if (!this.state.ref.current.contains(event.target)) {
      this.setState({ focussed: false })
    }
  }

  componentDidMount() {
    events.forEach(event =>
      document.addEventListener(event, this.handleClickOutside)
    )
  }

  componentWillUnmount() {
    events.forEach(event =>
      document.removeEventListener(event, this.handleClickOutside)
    )
  }

  render() {
    const { query, focussed, ref } = this.state
    const { indices, collapse, hitsAsGrid } = this.props
    return (
      <InstantSearch
        searchClient={this.searchClient}
        indexName={indices[0].name}
        onSearchStateChange={this.updateState}
        root={{ Root, props: { ref } }}
      >
        <Input onFocus={this.focus} {...{ collapse, focussed }} />
        <HitsWrapper
          show={query.length > 0 && focussed}
          hitsAsGrid={hitsAsGrid}
        >
          {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name} className="indexpage">
              <header>
                <h4>{title}</h4>
                <Stats />
              </header>
              <Results>
                <Hits hitComponent={hitComps[hitComp](this.disableHits)} />
              </Results>
            </Index>
          ))}
        </HitsWrapper>
      </InstantSearch>
    )
  }
}