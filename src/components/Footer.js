import React from 'react';
import './footer.css'

const FooterLinks = ({ title, links }) => {
  return <li className="footer-menu-item">
    <a href="/#" className="footer-menu-item__title">{title}</a>
    <ul className="footer-main-sub-menu">
      {links.map((link, index) => (
        <li className="footer-main-sub-menu-item" key={index}>
          <a href="/#" >{link}</a>
        </li>
      ))}
    </ul>
  </li>
}

const Footer = () => {
  return <footer>
    <div className="footer-inner">
      <div className="footer-wrapper">
        <div className="footer-main">
          <div className="footer-main-localization">
            <div className="footer-logo">
              <a href="/#" >
                <div className="">
                  <svg className="logo-svg" aria-hidden="true">
                    <svg id="ufc-logo" viewBox="0 0 341 119" fill="#fff">
                      <path d="M89.9.7h39.7s-26.4 94.3-27.7 99.4c-2.5 9.8-5 18.7-29 18.7-28.9 0-45.7-.1-53.6 0-9.9.1-21.6-9-18.4-20.8L28 .7h40.5S45.8 81.8 45.3 83.9c-.4 2.1-2.7 7.9 9.9 8 9.1.2 9.8-2.2 11.4-8C70.4 70.8 89.9.7 89.9.7zm145.8 0l-7.2 25.9h-86.4L149.3.7h86.4zM116.4 118.8l20.7-74.5h86.4l-7.2 25.9H170l-13.5 48.6h-40.1zm162.8-76.5c-3.7 13.6-7 25.2-10.7 38.9-.7 2.4-2.3 5.9-1.8 8.1 1.1 5.2 18.3 3.2 24.5 3.2h27.6c-2.2 8.7-4.7 17.2-7.1 25.7H246c-9.6-.9-22.1-5-20.9-17.4.4-3.9 2.2-8.3 3.4-12.6 5.9-21.1 11.9-42.7 17.6-63.4 2.5-9.2 4.5-17 11.8-20.7 4.7-2.4 12.2-3.1 17.8-3.4H341c-2.3 8.6-4.7 17.2-7.1 25.7h-37.5c-4.5 0-9.5-.5-12 1.2-2.7 2-4.2 11-5.2 14.7z"></path>
                    </svg>
                  </svg>
                </div>
              </a>
            </div>
            <div className="ufc-localization">UFC-UNITED STATES</div>
          </div>
          <nav className="navigation">
            <ul className="footer-main-menu">
              <FooterLinks
                title="UFC"
                links={['The Sport', 'Community', 'Careers', 'Store', 'Press Credentials']} />
              <FooterLinks
                title="HELP"
                links={['Fight Pass FQA']} />
              <FooterLinks
                title="LEGAL"
                links={['Terms', 'Privacy Policy', 'Ad Choices']} />

            </ul>
          </nav>

        </div>
        <div className="footer-copyright">
          <div>
            Copyright © 2001-2021 UFC All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
