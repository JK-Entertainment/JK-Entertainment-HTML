import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './kontakt.css'

const Kontakt = (props) => {
  return (
    <div className="kontakt-container">
      <Helmet>
        <title>Kontakt - JK-Entertainment</title>
        <meta property="og:title" content="Kontakt - JK-Entertainment" />
      </Helmet>
      <header data-role="Accordion" className="kontakt-header">
        <Link to="/" className="kontakt-navlink">
          <img
            alt="logo"
            src="/playground_assets/black%20on%20transparent-200h.png"
            className="kontakt-image"
          />
        </Link>
        <div className="kontakt-separator"></div>
        <nav className="kontakt-nav">
          <NavigationLinks1 rootClassName="navigation-links1-root-class-name10"></NavigationLinks1>
        </nav>
        <div data-type="AccordionHeader" className="kontakt-accordion-header">
          <svg viewBox="0 0 1024 1024" className="kontakt-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="AccordionContent" className="kontakt-accordion-content">
          <div className="kontakt-nav1">
            <NavigationLinks1 rootClassName="navigation-links1-root-class-name11"></NavigationLinks1>
          </div>
        </div>
      </header>
      <h1 className="kontakt-text">
        <span className="kontakt-text01">Kontakt</span>
      </h1>
      <div className="kontakt-container1"></div>
      <div className="kontakt-container2">
        <div className="kontakt-personal-card-kai">
          <div className="kontakt-testimonial">
            <span className="kontakt-text02">
              <span>E-Mail: Kai@JK-Entertainment.ch</span>
              <br></br>
              <span>
                Instagram:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.instagram.com/kai_hagmann/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="kontakt-text06">@kai_hagmann</span>
              </a>
              <br></br>
              <span>
                Telefon:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=41774312979"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="kontakt-text09">+41 77 431 29 79</span>
              </a>
              <span className="kontakt-text10"></span>
            </span>
            <span className="kontakt-text11">Kai Hagmann</span>
            <span className="kontakt-text12">
              <span>DJ</span>
              <br></br>
              <span>Tontechniker</span>
            </span>
            <img
              alt="profile"
              src="/playground_assets/kai_portrait-200h.jpeg"
              className="kontakt-image1"
            />
          </div>
        </div>
        <div className="kontakt-personal-card-joel">
          <div className="kontakt-testimonial1">
            <span className="kontakt-text16">
              <span>E-Mail: Joel@JK-Entertainment.ch</span>
              <br></br>
              <span>
                Instagram:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.instagram.com/_j031_.mp4/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="kontakt-text20">@_j031_.mp4</span>
              </a>
              <br></br>
              <span>
                Telefon:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=41794854442"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="kontakt-text23">+41 79 485 44 42</span>
              </a>
              <span className="kontakt-text24"></span>
            </span>
            <span className="kontakt-text25">Joel Bürki</span>
            <span className="kontakt-text26">
              <span>Adminstration</span>
              <br></br>
              <span>Licht und Bild Techniker</span>
            </span>
            <img
              alt="profile"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;w=200"
              className="kontakt-image2"
            />
          </div>
        </div>
      </div>
      <footer className="kontakt-footer">
        <div className="kontakt-container3">
          <div className="kontakt-logo">
            <Link to="/" className="kontakt-navlink1">
              <img
                alt="logo"
                src="/playground_assets/black%20on%20transparent-200h.png"
                className="kontakt-image3"
              />
            </Link>
          </div>
          <div className="kontakt-links-container">
            <div className="kontakt-container4">
              <div className="kontakt-contact">
                <span className="kontakt-text30">Kontaktiere uns</span>
                <span className="kontakt-text31">info@JK-Entertainment.ch</span>
                <span>+41 79 485 44 42</span>
              </div>
              <div className="kontakt-socials">
                <span className="kontakt-text33">Folge uns</span>
                <div className="kontakt-icon-group">
                  <a
                    href="https://twitter.com/JKEntertain_"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kontakt-link4"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="kontakt-icon2"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/1jkentertainment/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="kontakt-link5"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="kontakt-icon4"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="kontakt-icon6"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kontakt-separator1"></div>
        <span className="kontakt-text34">
          <span>© 2022 JK-Entertainment, All Rights Reserved.</span>
          <span className="kontakt-text36"></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Kontakt
