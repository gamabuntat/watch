import ReactDOM from 'react-dom';

import App from 'App/index';
import GlobalStyle from 'components/GlobalStyle/index';
import ThemeProvider from 'providers/ThemeProvider/index';
import themes from 'constants/themes/index';

ReactDOM.render(
  <ThemeProvider themes={themes}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
