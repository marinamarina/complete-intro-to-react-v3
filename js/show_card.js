import React from 'react'
import {string} from 'prop-types'
import styled from 'styled-components'

const grey = '#333'
const Wrapper = styled.div`
  width: 32%;
  border: 2px solid ${grey};
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`

const Image = styled.img`
  width: 46%;
  float: left; 
  margin-right: 10px;
`

const ShowCard = (props) => (
  <Wrapper className='show-card'>
    <Image alt={`${props.title} show poster`} src={`/public/img/posters/${props.poster}`} />
    <h3>{props.title}</h3>
    <h4>({props.year})</h4>
    <p>{props.description}</p>
  </Wrapper>
)

ShowCard.propTypes = {
    poster: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    year: string.isRequired
}

export default ShowCard
