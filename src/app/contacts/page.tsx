"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Link from "next/link";
import { initHackFirstAnimations } from "@/lib/initAnimations";

export default function ContactsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    terms: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      initHackFirstAnimations();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.terms) {
      alert("Please fill out all required fields and accept terms");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="wrapper">
      <Header isHome={false} />
      <section className="contacts">
        <div className="contacts-video">
          <video
            preload="auto"
            playsInline
            autoPlay
            loop
            muted
            src="https://hackfirst.io/video/contacts.mp4"
          />
          <div className="contacts-access">
            <b>SYSTEM RESTORATION:</b>
            <p>
              ▶ onpaper restore --unit 04
              <br />
              ✓ State loaded from local SQLite
              <br />
              ✓ FSRS Review: 2 overdue concept cards
              <br />
              ✓ Ready for assessment
            </p>
          </div>
        </div>
        <div className="contacts-main">
          <div className="contacts-head">
            <div className="badge">
              <span>// Early Access</span>
            </div>
            <h2 className="contacts-title" animate-blur-text="">
              Get early access
            </h2>
            <p className="contacts-desc" animate-blur-el="">
              to the OnPaper CLI, IDE adapters & iOS companion app
            </p>
          </div>

          {submitted ? (
            <div style={{ padding: "40px 0", color: "#E9F7FC" }}>
              <h3 style={{ fontSize: "32px", marginBottom: "16px" }}>
                Welcome to OnPaper Early Access!
              </h3>
              <p style={{ opacity: 0.8 }}>
                We have registered your project. You will receive access instructions shortly.
              </p>
            </div>
          ) : (
            <form className="contacts-form" onSubmit={handleSubmit} animate-blur-el="">
              <div className="contacts-form__row">
                <label className="label">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <div className="label-line"></div>
                </label>
                <label className="label">
                  <span>E-mail address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <div className="label-line"></div>
                </label>
                <label className="label">
                  <span>Target Role / IDE</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="e.g. Staff SWE / Cursor"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                  <div className="label-line"></div>
                </label>
              </div>
              <label className="label label-full" style={{ width: "100%" }}>
                <span>Project Description & Goals</span>
                <textarea
                  name="message"
                  placeholder="Tell us about the repository you want to prepare..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                <div className="label-line"></div>
              </label>
              <div className="contacts-form__row">
                <button type="submit" className="contacts-button">
                  Join Early Access
                </button>
                <label className="contacts-checkbox">
                  <input
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={(e) =>
                      setFormData({ ...formData, terms: e.target.checked })
                    }
                  />
                  <span>
                    ACCEPT <Link href="#">TERMS & CONDITIONS</Link>
                  </span>
                </label>
              </div>
            </form>
          )}
        </div>
      </section>
      <Footer />
      <ScrollProgress />
    </main>
  );
}
