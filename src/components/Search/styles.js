import styled, { css } from "styled-components"
import { Search } from "styled-icons/fa-solid/Search"
import Magnifier from "../../images/magnifier.svg"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focussed = css`
  background: ${props => props.theme.white};
  color: ${props => props.theme.darkBlue};
  cursor: text;
  + ${SearchIcon} {
    color: ${props => props.theme.darkBlue};
    margin: 0.3em;
  }
`

// const collapse = css`
//   width: 0;
//   cursor: pointer;
//   color: ${props => props.theme.lightBlue};
//   + ${SearchIcon} {
//     color: ${props => props.theme.white};
//   }
//   ${props => props.focussed && focussed}
//   margin-left: ${props => (props.focussed ? `-1.6em` : `-1em`)};
//   padding-left: ${props => (props.focussed ? `1.6em` : `1em`)};
//   ::placeholder {
//     color: ${props => props.theme.gray};
//   }
// `

// const expand = css`
//   background: ${props => props.theme.veryLightGray};
//   width: 6em;
//   margin-left: -1.6em;
//   padding-left: 1.6em;
//   + ${SearchIcon} {
//     margin: 0.3em;
//   }
// `

export const Input = styled.input`
  outline: none;
  font-size: 1em;
  background: #fff url(${Magnifier});
  background-repeat: no-repeat;
  background-position:right 10px center;
  border-radius: 5px;
  border:1px solid #ddd;
  padding: 0.8rem;
  width: 100%;
  ${props => props.focussed && focussed}
  box-shadow: ${props => (props.focussed ? `0px 0px 4px rgba(0, 0, 0, 0.3)` : `0`)};
  ::placeholder {
    color: ${props => props.theme.gray};
  }
 
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

const list = css`
  position: absolute;
  right: 0;
  left:0;
  top: calc(100% + 0.5em);
  width: 100%;
  background-color:#ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  padding: 0.7em 1em 0.4em;
  background: ${props => props.theme.white};
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 1px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid #e9ecef;
  }
`

const grid = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
    grid-gap: 1em;
    li {
      padding: 0.3em 0.5em;
      background: ${props => props.theme.veryLightGray};
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
`


export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  ${props => (props.hitsAsGrid ? grid : list)};

  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    h3 {
      color: ${props => props.theme.white};
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`

export const By = styled.span`
  font-size: 0.6em;
  text-align: end;
  padding: 0;
`