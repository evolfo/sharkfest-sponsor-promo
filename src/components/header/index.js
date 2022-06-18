import { h } from 'preact';

import sflogo from '/assets/sflogo.png'

const Header = () => {
  return (
    <header
      className="main-header"
    >
      <div>
        <a href="/" title="Home">
          <img alt="UI Logo" src={sflogo} />
        </a>
      </div>
      <div>
        <h1>SharkFest'22 US Sponsors</h1>
      </div>
      <div>
        <h3>
          July 9-14, Kansas City, MO
        </h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sharkfestus.wireshark.org"
        >
          <h3>
            Event Website
          </h3>
        </a>
      </div>
    </header>
  )
}

export default Header

