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
        <h1>SharkFest'22 EUROPE Sponsors</h1>
      </div>
      <div>
        <h3>
          31 Oct - 4 Nov, Estoril, Portugal
        </h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sharkfesteurope.wireshark.org"
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

