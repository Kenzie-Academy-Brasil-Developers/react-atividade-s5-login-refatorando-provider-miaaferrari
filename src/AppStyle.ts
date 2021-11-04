import styled from 'styled-components';
import Background from './assets/background.png'

export const Container = styled.div`
  text-align: center;
  background-image: url(${Background});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);


`; 

