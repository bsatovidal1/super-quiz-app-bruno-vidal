import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  text-align: center;
  padding: 0.5em;
  margin: auto;
  background-color: ${(props) => props.theme['bg-container']};
  color: ${(props) => props.theme['container-text']};
`;

export const Header = styled.header`
  font-size: 30px;
  font-weight: 600;
`;

export const QuestionContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;

export const ImageTimerPair = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const QuestionAnswersPair = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const QuestionImage = styled.img`
  max-width: 100%;
  max-height: 40rem;
  object-fit: cover;
`;

export const ScoreText = styled.div`
  background-color: ${(props) => props.theme['bg-purple']};
  width: 70%;
  height: 10em;
  font-size: 28px;
  text-align: center;
  margin: 50px auto;
  padding: 5px;
  border-radius: 2em;

  p {
    margin: auto;
    color: ${(props) => props.theme['score-text']};
  }
`;

export const ButtonContainer = styled.div`
  flex: 2rem;
  flex-direction: column;
  align-content: flex-start;
  gap: 5px;

  button:hover {
    background-color: ${(props) => props.theme['button-hover']};
  }
`;

export const Button = styled.button`
  width: 80%;
  /* height: 5rem; */
  padding: 1em 2em;
  font-size: large;
  font-weight: 900;
  background-color: ${(props) => props.theme['zinc-400']};
  color: ${(props) => props.theme['white']};
  margin-bottom: 1rem;
`;
