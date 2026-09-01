import React from "react";

export function ExploreSection() {
  return (
    <section id="explore" className="section ai-vi">
      <div className="container">
        <p className="ai-vi__eyebrow">Inside LaunchMe</p>
        <h2 className="ai-vi__title">
          Everything you need, and so much more.
        </h2>
        <p className="ai-vi__sub">
          A closer look at the features that make LaunchMe more useful every day
          - on every Mac.
        </p>
      </div>
      <div className="ai-vi__track" data-vi-track>
        <article className="vi-card vi-card--narrow">
          <div className="vi-card__media ai-media">
            <img src="/images/Carusel%202/delete-app.jpg" alt="Clean Uninstall" />
          </div>
          <p className="vi-card__text">
            <strong>Clean Uninstall.</strong> Remove the app from Mac and clean
            leftover settings, cache, and related traces. Files will be moved to
            Trash so you can restore them later or completely delete.
          </p>
        </article>
        <article className="vi-card vi-card--narrow">
          <div className="vi-card__media ai-media">
            <img src="/images/Carusel%202/carusel-sorting.jpg" alt="Smart sorting" />
          </div>
          <p className="vi-card__text">
            <strong>Smart sorting.</strong> Arrange apps by name, group in
            folders automaticaly, or restore your Launchpad layout.
          </p>
        </article>
        <article className="vi-card vi-card--wide">
          <div className="vi-card__media ai-media">
            <img
              src="/images/Carusel%202/carusel-folder-window.jpg"
              alt="Folder batch creating"
            />
          </div>
          <p className="vi-card__text">
            <strong>Folder batch creating.</strong> Choose apps you want to add
            to the new folder and add files from Finder. This is the fastest way
            to create folders witout moving apps one by one.
          </p>
        </article>
        <article className="vi-card vi-card--narrow">
          <div className="vi-card__media ai-media">
            <img src="/images/Carusel%202/carusel-spaces.jpg" alt="Spaces" />
          </div>
          <p className="vi-card__text">
            <strong>Spaces.</strong> Save layouts, widgets, wallpaper, icons and
            folders as presets, then switch between them in one shortcut or by
            schedule.
          </p>
        </article>
        <article className="vi-card vi-card--narrow">
          <div className="vi-card__media ai-media">
            <img src="/images/Carusel%202/carusel-workflows.jpg" alt="Workflows" />
          </div>
          <p className="vi-card__text">
            <strong>Workflows.</strong> Launch every app and file you need for a
            task with a single click.
          </p>
        </article>
        <article className="vi-card vi-card--wide">
          <div className="vi-card__media ai-media">
            <img src="/images/Carusel%202/carusel-girl.jpg" alt="For any aesthetic" />
          </div>
          <p className="vi-card__text">
            <strong>For any aesthetic.</strong> You minimalist, gamer or love
            cute cozy customization? LaunchMe is here to be anything you want
            with unlimited ways to customize it.
          </p>
        </article>
      </div>
    </section>
  );
}
