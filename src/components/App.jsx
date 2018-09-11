import React from 'react';
import styled from 'styled-components';

import AddressForm from './molecules/AddressForm';
import Map from './molecules/Map';
import Detail from './molecules/EstablishmentDetail';


const StyledApp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	color: #455A64;
	background-color: ${({theme}) => theme.palette_red.background}
	font-size: 10px;
`;

const StyledMap = styled.div`
	box-shadow: 10px 10px 5px ${({theme}) => theme.palette_red.secondary}
`;

const AppTitle = styled.h1`
	margin: 0 0 7.2rem 0;
	padding: 0;
	color: #fff;
	font-size: 3.6rem;
	font-weight: 400;
	line-height: 1.1;
	text-align: center;
	text-shadow: -0.1rem 0.1rem 0.2rem #4527a0;
`;

const Wrapper = styled.div`
	flex: 0 0 80%;
  	max-width: 80%;
`;

const App = () => (
  <StyledApp>
  	<Wrapper>
  		<AppTitle>Food Spy</AppTitle>
	    <AddressForm />
			<StyledMap>
	    	<Map />
			</StyledMap>
			<Detail />
    </Wrapper>
  </StyledApp>
)

export default App
