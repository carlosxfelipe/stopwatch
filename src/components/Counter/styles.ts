import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 64px;
  align-items: center;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 24px;
  justify-content: space-evenly;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
})`
  color: black;
  font-family: 'Ubuntu-Medium';
  text-align: left;
  font-size: 64px;
  text-align: center;
`;
