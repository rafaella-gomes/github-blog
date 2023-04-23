import styled from 'styled-components'
import img from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  
	width: 100%;
  height: 18.5rem;
	background:url(${img});
	background-size: cover;
  display: flex;
  align-items: center;
	justify-content: center;

	img {
		margin-bottom: 5rem ;
	}

`
