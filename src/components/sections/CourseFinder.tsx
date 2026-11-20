"use client";

import Link from "next/link";
import { useState } from "react";
import { GOALS, GoalId, PROFILES, PROFILE_WHY, ProfileId, RECOMMENDATIONS } from "@/data/home";

export default function CourseFinder() {
  const [profile, setProfile] = useState<ProfileId>("fresher");
  const [goal, setGoal] = useState<GoalId>("dev");
  const rec = RECOMMENDATIONS[goal];

  return (
    <section className="sec" aria-labelledby="finder">
      <div className="wrap split-5-7">
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 id="finder" className="t-h1">
            Find your course in two taps
          </h2>
          <p className="t-lead muted">
            Tell us where you are and where you want to go. We&apos;ll point you to the course most learners
            like you pick.
          </p>
        </div>
        <div className="card card--line" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontWeight: 600 }}>I am…</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {PROFILES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={profile === p.id ? "chip on" : "chip"}
                  aria-pressed={profile === p.id}
                  onClick={() => setProfile(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontWeight: 600 }}>I want to work in…</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {GOALS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  className={goal === g.id ? "chip on" : "chip"}
                  aria-pressed={goal === g.id}
                  onClick={() => setGoal(g.id)}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              background: "var(--brand-soft)",
              borderRadius: "var(--r-lg)",
              padding: 24,
              display: "flex",
              gap: 24,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 6 }}>
              <p className="t-label">Recommended for you</p>
              <p className="t-h2" style={{ fontSize: 28 }}>
                {rec.name}
              </p>
              <p className="t-small muted">{PROFILE_WHY[profile]}</p>
              <p className="t-small" style={{ fontWeight: 600 }}>
                {rec.facts}
              </p>
            </div>
            <Link className="btn btn--primary" href="/courses">
              See the course
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
