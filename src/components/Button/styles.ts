import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
  margin: number;
};

export const Container = styled.View<ContainerProps>`
  border-width: 1.5px;
  border-color: ${({color}) => color || '#12A454'};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: ${({margin}) => margin || 0}px;
`;

export const Title = styled.Text`
  color: black;
  font-family: 'Ubuntu-Regular';
  font-size: 24px;
`;
