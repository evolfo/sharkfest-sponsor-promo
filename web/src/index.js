import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'

import App from './App'
import theme from './theme'

import './scaffold.css'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <App />
      </RedwoodProvider>
    </FatalErrorBoundary>
  </ThemeProvider>,
  document.getElementById('redwood-app')
)
