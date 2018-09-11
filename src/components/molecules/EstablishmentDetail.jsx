import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledDetail = styled.div`
  margin-top: 5rem
  border-radius: 1%
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  width: 300px
  height: 200px
  background-color: ${({theme}) => theme.palette_red.primary}
`;

const StyledContainer = styled.div`
  display: flex
  flex-flow: row wrap
  font-weight: bold
  text-align: center
  `;

const StyledTitle = styled.div`
  background-color: #d22b22
`;

class EstablishmentDetail extends Component {
  constructor (props) {
    super(props);
 }

 render () {
    return (
      <StyledDetail>
        <StyledContainer>
          <StyledTitle>TITRE DU RESTAURANT</StyledTitle>
        </StyledContainer>
      </StyledDetail>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.estDetail
});

const EstDetail = connect(mapStateToProps, null)(EstablishmentDetail);


export default EstDetail;
