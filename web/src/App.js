/** @jsx jsx */
import { jsx } from 'theme-ui'

import Routes from 'src/Routes'
import Header from 'src/components/Header'

const App = () => {
  return (
    <>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: 256,
          fontFamily: 'body',
        }}
      >
        <Header />
        <Routes />
      </div>
    </>
  )
}

export default App
