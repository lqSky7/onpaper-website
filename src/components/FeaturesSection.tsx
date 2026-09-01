import React from "react";

export function FeaturesSection() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <p className="section-kicker">Features</p>
        <h2 className="section-title">
          Everything Launchpad had.
          <br />
          And a lot it didn’t.
        </h2>
        <p className="section-sub">
          A full-screen launcher built for the way you actually work. Search and
          open files, use Clipboard, and make it yours.
        </p>

        {/* Wide card: Liquid Glass / Files */}
        <div className="lm-cards-row" style={{ marginBottom: "30px" }}>
          <article
            className="lm-card lm-card--wide"
            style={{
              backgroundImage: "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">
                Files - Search, copy, delete, preview
              </h3>
            </div>
            <img
              className="lm-card__image"
              src="/images/liquid-glass.png"
              alt="Liquid glass preview"
            />
          </article>
        </div>

        {/* Split cards: Music Widgets & Add Folders */}
        <div className="lm-cards-row lm-cards-row--split">
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Music Widgets</h3>
              <p className="lm-card__subtitle">
                Spotify and Apple Music
                <br />
                with 3 customizable styles
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/layout-freedom.png"
              alt="Layout freedom preview"
            />
          </article>

          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Add Folders</h3>
              <p className="lm-card__subtitle">
                Combine your apps with
                <br />
                fast access to folders
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/add-folder.png"
              alt="Add folder preview"
            />
          </article>
        </div>

        {/* Split cards: Clipboard & Calculator */}
        <div
          className="lm-cards-row lm-cards-row--split"
          style={{ marginTop: "30px" }}
        >
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Clipboard</h3>
              <p className="lm-card__subtitle">
                Easy access to history
                <br />
                of copied files and text
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/clipboard.png"
              alt="Clipboard history preview"
            />
          </article>

          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Calculator</h3>
              <p className="lm-card__subtitle">Built into the search bar</p>
            </div>
            <img
              className="lm-card__image"
              src="/images/calculator.png"
              alt="Calculator with search field preview"
            />
          </article>
        </div>

        {/* Wide card: Dynamic weather and sun wallpapers */}
        <div className="lm-cards-row" style={{ marginTop: "30px" }}>
          <article
            className="lm-card lm-card--wide"
            style={{
              backgroundImage: "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">
                Dynamic weather and sun wallpapers
              </h3>
            </div>
            <img
              className="lm-card__image"
              src="/images/dynamic-weather.png"
              alt="Dynamic Weather and Sun wallpapers"
            />
          </article>
        </div>

        {/* Split cards: Spaces & Workflows */}
        <div
          className="lm-cards-row lm-cards-row--split"
          style={{ marginTop: "30px" }}
        >
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Spaces</h3>
              <p className="lm-card__subtitle">
                Create Spaces for any mood or scenarios
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/spaces.png"
              alt="Spaces preview"
            />
          </article>

          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Workflows</h3>
              <p className="lm-card__subtitle">
                One click will launch all apps and files you need
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/workflows.png"
              alt="Workflows preview"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
