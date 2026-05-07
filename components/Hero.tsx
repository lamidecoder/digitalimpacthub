"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* LEFT - Content */}
      <div className="hero-left">
        <div className="hero-overline a1">
          <div className="hero-overline-dot" />
          <span className="hero-overline-text">Digital Skills · AI Learning · Growth Community</span>
        </div>

        <h1 className="hero-h1 a2">
          Your Space<br />
          to Learn,<br />
          <em>Connect</em><br />
          and Thrive<br />
          in Tech.
        </h1>

        <p className="hero-body a3">
          We equip individuals with the digital skills, AI knowledge and community
          connections needed to thrive in a rapidly evolving world.
        </p>

        <div className="hero-ctas a4">
          <a href="#webinar" className="btn-primary">Join Upcoming Webinar</a>
          <a href="#about" className="btn-secondary">Our Story</a>
        </div>

        <div className="hero-stats a5">
          <div>
            <div className="stat-n">2K+</div>
            <div className="stat-l">Community Members</div>
          </div>
          <div>
            <div className="stat-n">10+</div>
            <div className="stat-l">Events Hosted</div>
          </div>
          <div>
            <div className="stat-n">AI</div>
            <div className="stat-l">Focused Curriculum</div>
          </div>
        </div>
      </div>

      {/* RIGHT - Photo */}
      <div className="hero-right a6">
        <Image
          src="/oyinda.jpg"
          alt="Oyinda Lawal, Founder of The Digital Impact Hub"
          fill
          className="hero-photo"
          style={{ objectFit: "cover", objectPosition: "center 12%" }}
          priority
        />
        <div className="hero-photo-tag">
          <div className="photo-tag-label">Founder</div>
          <div className="photo-tag-name">Oyinda Lawal</div>
          <div className="photo-tag-role">The Digital Impact Hub</div>
        </div>
      </div>
    </section>
  );
}
