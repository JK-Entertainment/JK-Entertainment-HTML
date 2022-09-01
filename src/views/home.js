import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>JK-Entertainment</title>
        <meta property="og:title" content="JK-Entertainment" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <Link to="/" className="home-navlink">
          <img
            alt="logo"
            src="/playground_assets/black%20on%20transparent-200h.png"
            className="home-image"
          />
        </Link>
        <div className="home-separator"></div>
        <nav className="home-nav">
          <NavigationLinks1 rootClassName="rootClassName19"></NavigationLinks1>
        </nav>
        <div data-type="AccordionHeader" className="home-accordion-header">
          <NavigationLinks1 rootClassName="rootClassName20"></NavigationLinks1>
        </div>
        <div data-type="AccordionContent" className="home-accordion-content">
          <div className="home-nav1"></div>
        </div>
      </header>
      <div className="home-banner">
        <h2 className="home-text">
          <span>
            <span>
              Auf unserer Info Seite kannst du uns besser kennenlernen und sehen
              was wir bieten.
            </span>
          </span>
        </h2>
        <Link to="/info" className="home-navlink1 button">
          Erfahre mehr
        </Link>
      </div>
      <h1 className="home-text03">Unsere Veranstaltungen</h1>
      <div className="home-gallery">
        <div className="home-gallery-card">
          <img
            id="schulball2022"
            alt="image"
            src="/playground_assets/20220603_193206-1200h.jpg"
            loading="eager"
            className="home-image1"
          />
          <h2 className="home-text04">Schulball 2022</h2>
        </div>
        <div className="home-gallery-card1">
          <img
            id="uhcranger"
            alt="image"
            src="/playground_assets/heim_logo-1400w.jpg"
            loading="eager"
            className="home-image2"
          />
          <h2 className="home-text05">UHC Ranger Grabs-Werdenberg</h2>
        </div>
        <div className="home-gallery-card2">
          <img
            alt="image"
            src="/playground_assets/20220806_215807-1200h.jpg"
            loading="eager"
            className="home-image3"
          />
          <h2 className="home-text06">Schopffest 2022</h2>
        </div>
        <div className="home-gallery-card3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxuYXR1cmV8ZW58MHx8fHwxNjI2NDQ3ODAw&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="home-image4"
          />
          <h2 className="home-text07">Schulball 2022</h2>
          <span className="home-text08">
            Den alljährigen Schulball der OZ Türggenau
          </span>
        </div>
        <div className="home-gallery-card4">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1529948723647-8b7bd77b441c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjbGlmZnxlbnwwfHx8fDE2MjY0NDc4MjQ&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="home-image5"
          />
          <h2 className="home-text09">Schulball 2022</h2>
          <span className="home-text10">
            Den alljährigen Schulball der OZ Türggenau
          </span>
        </div>
        <div className="home-gallery-card5">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxvY2VhbnxlbnwwfHx8fDE2MjY0NDc4ODQ&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="home-image6"
          />
          <h2 className="home-text11">Schulball 2022</h2>
          <span className="home-text12">
            Den alljährigen Schulball der OZ Türggenau
          </span>
        </div>
      </div>
      <div className="home-banner1">
        <h2 className="home-text13">
          <span>
            <span>Abonniere hier unsere Newsletter.</span>
          </span>
          <br></br>
          <span>
            So wirst du immer eine Benachrichtigung bekommen, Wann und Wo unser
            nächstes Event statt findet.
          </span>
        </h2>
        <a
          href="https://www.jk-entertainment.ch/index.php/newsletter"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link button"
        >
          Hier Abonnieren
        </a>
      </div>
      <div className="home-container1"></div>
      <footer className="home-footer">
        <div className="home-container2">
          <div className="home-logo">
            <Link to="/" className="home-navlink2">
              <img
                alt="logo"
                src="/playground_assets/black%20on%20transparent-200h.png"
                className="home-image7"
              />
            </Link>
          </div>
          <div className="home-links-container">
            <div className="home-container3">
              <div className="home-contact">
                <span className="home-text18">Kontaktiere uns</span>
                <span className="home-text19">info@JK-Entertainment.ch</span>
                <span>+41 79 485 44 42</span>
              </div>
              <div className="home-socials">
                <span className="home-text21">Folge uns</span>
                <div className="home-icon-group">
                  <a
                    href="https://twitter.com/JKEntertain_"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/1jkentertainment/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon2"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon4"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://www.thomann.de/de/index.html?partner_id=37025"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link3"
        >
          <img
            id="https://www.thomann.de/de/index.html?partner_id=37025"
            alt="image"
            src="/playground_assets/linkpartn1-200h.gif"
            loading="eager"
            className="home-image8"
          />
        </a>
        <div className="home-separator1"></div>
        <span className="home-text22">
          <span>© 2022 JK-Entertainment, All Rights Reserved.</span>
          <span className="home-text24"></span>
          <span></span>
        </span>
        <div>Placeholder for widget timer</div>
      </footer>
    </div>
  )
}

export default Home
