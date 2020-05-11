/** @jsx jsx */
import { jsx } from 'theme-ui'
import Countdown from 'react-countdown'

const Header = () => {
  return (
    <header
      sx={{
        py: 4,
        backgroundImage:
          'linear-gradient(to bottom, rgb(0, 36, 72), rgb(1, 56, 111))',
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
        <a href="" title="Home">
          <img
            alt="UI Logo"
            src="../../public/sflogo.png"
            sx={{ maxWidth: '100px' }}
          />
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
        <h1>SharkFest'20 Virtual Giftbag</h1>
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
          October 12 - 16
        </h3>
        <h3
          sx={{
            padding: 'headerPadding',
            marginTop: 'headerBottomMarginFix',
          }}
        >
          Event Website
        </h3>
        <h3
          sx={{
            padding: 'headerPadding',
            marginTop: 'headerBottomMarginFix',
          }}
        >
          Closes: &nbsp;
          <Countdown date={new Date(2020, 9, 12)} />
        </h3>
      </div>
    </header>
  )
}

export default Header
