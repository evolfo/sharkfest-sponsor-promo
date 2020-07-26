/** @jsx jsx */
import { jsx } from 'theme-ui'

const Footer = () => {
  return (
    <footer
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
      <ul>
        <li>
          <a href="https://facebook.com/wiresharkfest">
            <img src="/social-media/facebook.jpg" alt="Facebook icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/wiresharkfest">
            <img src="/social-media/twitter.jpg" alt="Twitter icon" />
          </a>
        </li>
        <li>
          <a href="hhttps://www.linkedin.com/groups/1802965">
            <img src="/social-media/linkedin.jpg" alt="LinkedIn icon" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/SharkFest2015">
            <img src="/social-media/youtube.jpg" alt="YouTube icon" />
          </a>
        </li>
      </ul>
      <ul
        className="footer-text"
        sx={{
          py: [8, 4, null],
          px: [12, 0, null],
          variant: 'styles.footer',
          fontFamily: 'body',
          fontWeight: 'bold',
          display: ['block', 'flex', null],
        }}
      >
        <li>
          <a href="http://www.riverbed.com/us/">© Riverbed Technology</a> —
        </li>
        <li>
          <a href="https://www.riverbed.com/legal/privacy-policy.html">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="http://www.riverbed.com/us/legal_notices.php">
            Legal Notices
          </a>
        </li>
        <li>
          <a href="mailto: sharkfest@wireshark.com">Contact Us</a>
        </li>
        <li>
          <a href="mailto: sharkfest@wireshark.com">Registration Assistance</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
