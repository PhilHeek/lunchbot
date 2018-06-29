import React, { Component } from 'react';
import styled from 'styled-components';

const StyledAddEstablishment = styled.div`
    position: relative;
`;

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: #00A87B;
  border: 2px solid #00A87B;
`;

const StyledInput = styled.input`
    display: block;
  margin: 0;
  padding: 0.8rem 1.6rem;
  color: inherit;
  width: 100%;
  height: 1rem;
  font-family: inherit;
  font-size: 2.1rem;
  font-weight: inherit;
  line-height: 1.8;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    outline: none;
  }
`;

class AddressForm extends Component {

  render () {
    return (
      <StyledAddEstablishment>
        <form>
          <StyledInput/>
          <StyledButton type="submit">
            Find Establishment
          </StyledButton>
        </form>
      </StyledAddEstablishment>
    );
  }
}

export default AddressForm;
