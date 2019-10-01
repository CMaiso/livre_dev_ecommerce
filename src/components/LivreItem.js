import React from 'react'
import WithPanier from '../context/WithPanier'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #C7CFD9;
  padding: 8px 16px;
  width: 96%;
  margin: auto;
  color: #403C3B;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  font-family: 'PT Sans', serif;
`

const Prix = styled.div`
  flex: 1;
  display: flex;
  ${'' /* border: 1px solid goldenrod; */}
  font-weight: 700;
  min-height: 56px;
`

const Auteur = styled.div`
  font-style: italic;
  font-size: 16px;
  ${'' /* text-transform: uppercase; */}
  color: #989DA6;
  font-family: 'PT Sans', serif;
`

const Description = styled.p`
  font-weight: 400;
  line-height: 1.35;
  ${'' /* text-transform: uppercase; */}
`

const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Tag = styled.p`
  font-weight: 700;
  background: #A67153;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  font-family: 'PT Sans', serif;
  text-transform: uppercase;
  color: #F0F1F2;
`

const Quantite = styled.p`
  width: 24px;
  height: 24px;
  background: #A67153;
  display: flex;
  color: #F0F1F2;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 8px;
`

const Buttons = styled.div`
  display: flex;
`

const Titre = styled.h2`
  font-family: 'PT Sans', display;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
  margin-block-start: 0;
  margin-block-end: 0;
  ${'' /* color: white; */}
`

const Button = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  margin: 2px;
  font-weight: 700;
  color: ${({ moins }) => (moins ? 'GAINSBORO' : 'DARKSLATEGRAY')};
  background: ${({ moins }) => (moins ? 'SLATEGRAY' : 'GAINSBORO')};
`

const PanierItem = ({ context, livre }) => {
  return (
    <Container>
      <Titre>
        <span role="img" aria-label="Livre">
          📕
        </span>{' '}
        {livre.titre}
      </Titre>
      <div>
        <Auteur>{livre.auteur}</Auteur>
        <Description>{livre.description}</Description>
      </div>
      <Tags>
        <Tag>{livre.tag}</Tag>
      </Tags>
      <Info>
        <Prix>
          {livre.quantite && livre.quantite !== 0 ? (
            <Quantite>{livre.quantite}</Quantite>
          ) : null}
          {livre.quantite ? (
            <p>{livre.quantite && livre.prix * livre.quantite},00€</p>
          ) : (
            <p>{livre.prix},00€</p>
          )}
        </Prix>
        <Buttons>
          {livre.quantite && livre.quantite !== 0 ? (
            <Button moins onClick={() => context.supprimerDuPanier(livre.id)}>
              -
            </Button>
          ) : null}

          <Button onClick={() => context.ajouterAuPanier(livre.id)}>+</Button>
        </Buttons>
      </Info>
    </Container>
  )
}

export default WithPanier(PanierItem)
