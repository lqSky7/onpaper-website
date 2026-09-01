import React from "react";

export function CustomizationSection() {
  return (
    <section id="customization" className="section customization">
      <div className="container">
        <p className="section-kicker">Customization</p>
        <h2 className="section-title">Make it yours</h2>
        <p className="section-sub">
          Customize LaunchMe to match your vibe - cozy, minimalistic, or anything
          you want.
          <br />
          Make it truly yours
        </p>

        {/* Split cards: Folder Styles & Icon customization */}
        <div className="lm-cards-row lm-cards-row--split">
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Folder Styles</h3>
              <p className="lm-card__subtitle">Colors, emoji, cover image</p>
            </div>
            <img
              className="lm-card__image"
              src="/images/custom-folders.png"
              alt="Custom folders preview"
            />
          </article>

          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Icon customization</h3>
              <p className="lm-card__subtitle">
                Change any app icons
                <br />
                to follow your style
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/custom-icons.png"
              alt="Icon customization preview"
            />
          </article>
        </div>

        {/* Wide card: Dynamic wallpaper */}
        <div className="lm-cards-row" style={{ margin: "30px 0" }}>
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
                Set custom wallpaper - static, dynamic or even LIVE
              </h3>
            </div>
            <img
              className="lm-card__image"
              src="/images/dynamic-wallpaper.png"
              alt="Dynamic wallpaper preview"
            />
          </article>
        </div>

        {/* Split cards: You Rule Here & Icon Size */}
        <div className="lm-cards-row lm-cards-row--split">
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">You Rule Here</h3>
              <p className="lm-card__subtitle">
                Hide app names or
                <br />
                completely hide apps
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/hide-apps.png"
              alt="Hide apps preview"
            />
          </article>

          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Icon Size</h3>
              <p className="lm-card__subtitle">
                Adjust icon size
                <br />
                to better fit your screen
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/icons-size.png"
              alt="Icon size preview"
            />
          </article>
        </div>

        {/* Wide: monitor image fills the entire rounded card */}
        <div className="lm-cards-row" style={{ marginTop: "30px" }}>
          <article
            className="lm-card lm-card--wide lm-card--media-fill"
            style={{ "--card-bg-color": "transparent" } as React.CSSProperties}
          >
            <img
              className="lm-card__image"
              src="/images/monitor-image.png"
              alt="Multi-display support on multiple monitors"
            />
          </article>
        </div>

        {/* Split cards: System Icon Appearance & Clear Colored Icons */}
        <div
          className="lm-cards-row lm-cards-row--split"
          style={{ marginTop: "30px" }}
        >
          <article
            className="lm-card lm-card--square"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">System Icon Appearance</h3>
              <p className="lm-card__subtitle">Dark | Light | Tinted</p>
            </div>
            <img
              className="lm-card__image"
              src="/images/system-icons.png"
              alt="System icons preview"
            />
          </article>

          <article
            className="lm-card lm-card--square lm-card--white-text"
            style={{ "--card-bg-color": "#f5f5f7" } as React.CSSProperties}
          >
            <div className="lm-card__content">
              <h3 className="lm-card__title">Clear Colored Icons</h3>
              <p className="lm-card__subtitle">
                A unified style with Glass
                <br />
                and colored icons.
              </p>
            </div>
            <img
              className="lm-card__image"
              src="/images/clear-colored.png"
              alt="Clear colored icons preview"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
