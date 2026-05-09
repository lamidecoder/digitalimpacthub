"use client";
import { useRef, useState, useEffect } from "react";

interface Props {
  id: string;
  title: string;
  desc: string;
  duration: string;
  src?: string;
  thumb?: string;
  youtubeEmbed?: string;
}

export default function VideoPlayer({ title, desc, duration, src, thumb, youtubeEmbed }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState(duration);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => setTotalTime(fmt(v.duration));
    const onTime = () => {
      setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
      setCurrentTime(fmt(v.currentTime));
    };
    const onEnded = () => setPlaying(false);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnded);
    return () => {
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) { v.pause(); setPlaying(false); }
    else { v.play(); setPlaying(true); }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * v.duration;
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const showCtrl = () => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2500);
  };

  // YouTube embed
  if (youtubeEmbed) {
    return (
      <div className="reveal vp-card">
        <div style={{ position: "relative", aspectRatio: "16/9" }}>
          <iframe
            src={youtubeEmbed}
            title={title}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="vp-meta">
          <div className="vp-tag">{totalTime} · Digital Impact Hub</div>
          <div className="vp-title">{title}</div>
          <div className="vp-desc">{desc}</div>
        </div>
      </div>
    );
  }

  // No video yet
  if (!src) {
    return (
      <div className="reveal vp-card">
        <div className="vp-empty">
          <div className="vp-empty-icon">
            <div className="vp-play-tri" />
          </div>
          <div>
            <div style={{ fontSize: ".82rem", fontWeight: 600, color: "rgba(255,255,255,.55)" }}>Coming Soon</div>
            <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)", marginTop: ".25rem" }}>
              Place MP4 in <code style={{ background: "rgba(255,255,255,.08)", padding: "0 .3rem", borderRadius: 3 }}>/public/videos/</code>
            </div>
          </div>
        </div>
        <div className="vp-meta">
          <div className="vp-tag">{duration} · Digital Impact Hub</div>
          <div className="vp-title">{title}</div>
          <div className="vp-desc">{desc}</div>
        </div>
      </div>
    );
  }

  // Local MP4 player
  return (
    <div className="reveal vp-card">
      <div
        className="vp-wrap"
        onMouseMove={showCtrl}
        onMouseEnter={showCtrl}
        onMouseLeave={() => setShowControls(false)}
        onClick={togglePlay}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          poster={thumb}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          playsInline
          preload="metadata"
        />

        {/* Big play button — shows when paused */}
        {!playing && (
          <div className="vp-play-overlay">
            <div className="vp-play-btn">
              <div className="vp-play-tri" />
            </div>
          </div>
        )}

        {/* Controls bar — shows on hover or when paused */}
        <div
          className={`vp-controls${showControls || !playing ? " visible" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div className="vp-progress" onClick={seek}>
            <div className="vp-progress-track">
              <div className="vp-progress-fill" style={{ width: `${progress}%` }} />
              <div className="vp-progress-thumb" style={{ left: `${progress}%` }} />
            </div>
          </div>

          <div className="vp-controls-row">
            {/* Play/pause */}
            <button className="vp-btn" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Time */}
            <span className="vp-time">{currentTime} / {totalTime}</span>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Mute */}
            <button className="vp-btn" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0016.5 19l1.23 1.23L19 18.73 4.27 3z"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                </svg>
              )}
            </button>

            {/* Fullscreen */}
            <button
              className="vp-btn"
              aria-label="Fullscreen"
              onClick={() => videoRef.current?.requestFullscreen?.()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Duration badge top-right when paused */}
        {!playing && (
          <div className="vp-duration-badge">{totalTime}</div>
        )}
      </div>

      {/* Card text below video */}
      <div className="vp-meta">
        <div className="vp-tag">Digital Impact Hub</div>
        <div className="vp-title">{title}</div>
        <div className="vp-desc">{desc}</div>
      </div>
    </div>
  );
}