import React from 'react'
import styled from 'styled-components'

const Titre = styled.h1`
  background: #403C3B;
  font-family: 'PT Sans', display;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  font-size: 24px;
  padding: 16px;
  border-bottom: 1px solid darkgoldenrod;
  margin-block-start: 0;
  margin-block-end: 0;
`

const Header = ({ titre }) => {
  return (
    <Titre>
      <span role="img" aria-label="Livre">
        📖
      </span>{' '}
      Les meilleurs livres du Développeur Front End
    </Titre>
  )
}

export default Header
