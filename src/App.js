import { ThemeProvider } from 'styled-components';

import './App.css';
import Quiz from './components/Quiz';
import { defaultTheme } from './styles/theme/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;
