import styled from 'styled-components';

export const ContainerProgressbar = styled.div`
  height: 0.5rem;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 5em;
`;

export const ProgressbarStyle = styled.div`
  height: 100%;
  width: ${({ progress }) => `${progress * 10}%`};
  background-color: ${(props) => props.theme['progress-bar-green']};
  border-radius: inherit;
  text-align: right;
`;

export const LabelStyles = styled.span`
  padding: 5;
  color: white;
  font-weight: bold;
`;
