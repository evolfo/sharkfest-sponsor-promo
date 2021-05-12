/** @jsx jsx */
import { jsx } from 'theme-ui'
import Countdown from 'react-countdown'

import sflogo from './sflogo.png'

const Header = () => {
  return (
    <header
      className="main-header"
      sx={{
        py: 4,
        backgroundImage:
          'linear-gradient(to bottom,rgb(0,36,72),rgb(9, 89, 169))',
        variant: 'styles.header',
        fontFamily: 'body',
        color: 'background',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
          paddingTop: 'headerLogoTopPadding',
        }}
      >
        <a href="#" title="Home">
          <img alt="UI Logo" src={sflogo} sx={{ maxWidth: '100px' }} />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999,
            }}
          >
            Home
          </span>
        </a>
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>SharkFest'21 Virtual EUROPE Sponsors</h1>
      </div>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h3
          sx={{
            padding: 'headerPadding',
            marginTop: 'headerBottomMarginFix',
          }}
        >
          June 14 - 18
        </h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sharkfestus.wireshark.org"
        >
          <h3
            sx={{
              padding: 'headerPadding',
              marginTop: 'headerBottomMarginFix',
            }}
          >
            Event Website
          </h3>
        </a>
        <h3
          sx={{
            padding: 'headerPadding',
            marginTop: 'headerBottomMarginFix',
          }}
        >
          Closes: &nbsp;
          <Countdown date={new Date(2021, 6, 14)} />
        </h3>
      </div>
    </header>
  )
}

export default Header
