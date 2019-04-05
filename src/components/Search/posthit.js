import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"

const PostHit = clickHandler => ({ hit }) => (
  <div id="posthit">
    <Link to={hit.slug} onClick={clickHandler}>
      <h6 className="font-weight-normal">
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h6>
    </Link>
  </div>
)

export default PostHit