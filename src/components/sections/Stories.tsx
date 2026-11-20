export default function Stories() {
  const cardStyle = { margin: 0, padding: 32, display: "flex", flexDirection: "column", gap: 24 } as const;
  return (
    <section className="sec" aria-labelledby="stories">
      <div className="wrap">
        <div className="head">
          <h2 id="stories" className="t-h1">
            Learners who made the switch
          </h2>
          <a className="lnk" href="#">
            Read all placement stories
          </a>
        </div>
        <p className="t-small muted" style={{ margin: "-24px 0 32px" }}>
          Quotes from verified Google reviews, shared with the reviewer&apos;s permission.
        </p>
        <div className="g3">
          <figure className="card card--line" style={cardStyle}>
            <blockquote className="t-lead" style={{ margin: 0 }}>
              [Real student quote from your Google reviews — 20 to 30 words about the course and the job they got.]
            </blockquote>
            <figcaption className="person">
              <span className="av">AB</span>
              <span className="t-small">
                <b>[Student name]</b>
                <br />
                <span className="ok">Placed at [Company]</span> · Python Full Stack
              </span>
            </figcaption>
          </figure>
          <figure className="card card--line" style={cardStyle}>
            <blockquote className="t-lead" style={{ margin: 0 }}>
              [Real student quote — a career switcher, e.g. from support or non-IT into cloud.]
            </blockquote>
            <figcaption className="person">
              <span className="av">CD</span>
              <span className="t-small">
                <b>[Student name]</b>
                <br />
                <span className="ok">Placed at [Company]</span> · AWS
              </span>
            </figcaption>
          </figure>
          <figure
            className="card"
            style={{
              ...cardStyle,
              gap: 16,
              justifyContent: "space-between",
              background: "var(--ink)",
              color: "var(--bg)",
            }}
          >
            <p className="t-num" style={{ fontSize: 56 }}>
              [4.9]
            </p>
            <p className="t-lead">Average Google rating from [N] reviews</p>
            <a className="btn btn--invert btn--sm" href="#" style={{ alignSelf: "flex-start" }}>
              Read reviews on Google
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
}
