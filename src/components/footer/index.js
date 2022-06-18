const Footer = () => {
    return (
      <footer
        className="main-footer">
        <ul>
          <li>
            <a href="https://facebook.com/wiresharkfest">
              <img src="/assets/social-media/facebook.jpg" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/wiresharkfest">
              <img src="/assets/social-media/twitter.jpg" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="hhttps://www.linkedin.com/groups/1802965">
              <img src="/assets/social-media/linkedin.jpg" alt="LinkedIn icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/SharkFest2015">
              <img src="/assets/social-media/youtube.jpg" alt="YouTube icon" />
            </a>
          </li>
        </ul>
        <ul
          className="footer-text">
          <li>
            <a href="https://www.sysdig.com/">© Sysdig</a> —
          </li>
          <li>
            <a href="https://sysdig.com/privacy-policy/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://sysdig.com/legal/">
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