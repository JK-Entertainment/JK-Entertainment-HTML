import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './preise.css'

const Preise = (props) => {
  return (
    <div className="preise-container">
      <Helmet>
        <title>Preise - JK-Entertainment</title>
        <meta property="og:title" content="Preise - JK-Entertainment" />
      </Helmet>
      <header data-role="Accordion" className="preise-header">
        <Link to="/" className="preise-navlink">
          <img
            alt="logo"
            src="/playground_assets/black%20on%20transparent-200h.png"
            className="preise-image"
          />
        </Link>
        <div className="preise-separator"></div>
        <nav className="preise-nav">
          <NavigationLinks1 rootClassName="navigation-links1-root-class-name18"></NavigationLinks1>
        </nav>
        <div data-type="AccordionHeader" className="preise-accordion-header">
          <svg viewBox="0 0 1024 1024" className="preise-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="AccordionContent" className="preise-accordion-content">
          <div className="preise-nav1">
            <NavigationLinks1 rootClassName="navigation-links1-root-class-name21"></NavigationLinks1>
          </div>
        </div>
      </header>
      <div className="preise-features">
        <div className="preise-card1">
          <div className="preise-container1">
            <span className="preise-text">Paket 1</span>
            <span className="preise-text01">150 CHF</span>
            <span className="preise-text02">ab 4 Stunden</span>
          </div>
          <span className="preise-text03">
            <span className="preise-text04">
              <span>
                Ein DJ mit kompletter Anlage. inkl. Aufbau und Abbau. Für jede
                weitere Stunde 50 CHF aufpreis.
              </span>
            </span>
          </span>
          <form
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="preise-form"
          >
            <a
              href="mailto:info@jk-entertainment.ch?subject=Paket 1"
              className="preise-link button"
            >
              Kontaktieren
            </a>
          </form>
        </div>
        <div className="preise-card-3">
          <div className="preise-container2">
            <span className="preise-text06">Paket 3</span>
            <span className="preise-text07">250 CHF</span>
            <span className="preise-text08">ab 2 Stunden</span>
          </div>
          <span className="preise-text09">
            <span className="preise-text10">
              <span>Ein DJ mit kompletter Anlage.</span>
              <br></br>
              <span>Beleuchtungstechnik nach Wahl.</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span></span>
            <span>
              Kameras + Zubehör für Livestream oder internem Streaming.
            </span>
            <br></br>
            <span>inkl. Aufbau und Abbau</span>
            <br></br>
            <span>Für jede weitere Stunde 50 CHF aufpreis</span>
          </span>
          <form
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="preise-form1"
          >
            <a
              href="mailto:info@jk-entertainment.ch?subject=Paket 3"
              className="preise-link1 button"
            >
              Kontaktieren
            </a>
          </form>
        </div>
        <div className="preise-card2">
          <div className="preise-container3">
            <span className="preise-text22">Paket 2</span>
            <span className="preise-text23">150 CHF</span>
            <span className="preise-text24"> ab 4 Stunden</span>
            <form
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className="preise-form2"
            >
              <a
                href="mailto:info@jk-entertainment.ch?subject=Paket 2"
                className="preise-link2 button"
              >
                Kontaktieren
              </a>
            </form>
          </div>
          <span className="preise-text25">
            <span className="preise-text26">
              <span>Ein DJ mit kompletter Anlage.</span>
              <br></br>
              <span>Beleuchtungstechnik nach Wahl</span>
              <br></br>
              <span> inkl. Aufbau und Abbau</span>
            </span>
            <br></br>
            <span>Für jede weitere Stunde 50 CHF aufpreis</span>
          </span>
        </div>
        <div className="preise-card-4">
          <div className="preise-container4">
            <span className="preise-text34">Paket 4</span>
            <span className="preise-text35">70 CHF</span>
          </div>
          <span className="preise-text36">
            <span className="preise-text37">
              <span></span>
            </span>
            <span></span>
            <span>
              Kameras + Zubehör für Livestream oder internem Streaming.
            </span>
            <br></br>
            <span>inkl. Aufbau und Abbau</span>
            <br></br>
            <span>Für jede weitere Stunde 30 CHF aufpreis</span>
          </span>
          <form
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="preise-form3"
          >
            <a
              href="mailto:info@jk-entertainment.ch?subject=Paket 4"
              className="preise-link3 button"
            >
              Kontaktieren
            </a>
          </form>
        </div>
      </div>
      <footer className="preise-footer">
        <div className="preise-container5">
          <div className="preise-logo">
            <Link to="/" className="preise-navlink1">
              <img
                alt="logo"
                src="/playground_assets/black%20on%20transparent-200h.png"
                className="preise-image1"
              />
            </Link>
          </div>
          <div className="preise-links-container">
            <div className="preise-container6">
              <div className="preise-contact">
                <span className="preise-text45">Kontaktiere uns</span>
                <span className="preise-text46">info@JK-Entertainment.ch</span>
                <span>+41 79 485 44 42</span>
              </div>
              <div className="preise-socials">
                <span className="preise-text48">Folge uns</span>
                <div className="preise-icon-group">
                  <a
                    href="https://twitter.com/JKEntertain_"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="preise-link4"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="preise-icon2"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/1jkentertainment/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="preise-link5"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="preise-icon4"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="preise-icon6"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="preise-separator1"></div>
        <span className="preise-text49">
          <span>© 2022 JK-Entertainment, All Rights Reserved.</span>
          <span className="preise-text51"></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Preise
