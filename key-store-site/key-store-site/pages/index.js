export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand-strong">PSYCHO</span> MACRO ENGINE
        </div>
        <nav className="nav-links">
          <a href="#what-it-does">Overview</a>
          <a href="#features">Features</a>
          <a href="#buy">Get a license</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Windows desktop &middot; WPF &middot; .NET 10</p>
            <h1>
              A macro engine built for<br />
              speed you can tune to the millisecond.
            </h1>
            <p className="lede">
              Psycho Macro V1 runs three configurable macro modes for fast keyboard
              workflows, with per-profile keybinds, timing control, and a target
              window lock so input goes exactly where you want it.
            </p>
            <div className="hero-actions">
              <a href="#buy" className="btn-primary">Get a license</a>
              <a href="#what-it-does" className="btn-ghost">See what it does</a>
            </div>
          </div>

          <div className="hud" aria-hidden="true">
            <div className="hud-title">STATUS</div>
            <div className="hud-row">
              <span>Engine</span>
              <span className="hud-value hud-live">RUNNING</span>
            </div>
            <div className="hud-row">
              <span>Profile</span>
              <span className="hud-value">Profile 2</span>
            </div>
            <div className="hud-row">
              <span>Ping</span>
              <span className="hud-value">5 ms</span>
            </div>
            <div className="hud-row">
              <span>System load</span>
              <span className="hud-value">0%</span>
            </div>
            <div className="hud-row">
              <span>Target</span>
              <span className="hud-value">AsHotplugCtrl</span>
            </div>
          </div>
        </section>

        <section id="what-it-does" className="modes">
          <h2>Three macro modes, each one purpose-built</h2>
          <div className="mode-list">
            <div className="mode">
              <h3>Drag Macro</h3>
              <p>
                Hold an edit key, and after a set delay the select key is held
                automatically — timing is yours to tune down to the millisecond.
              </p>
            </div>
            <div className="mode">
              <h3>Pick Up Macro</h3>
              <p>
                Hold a spam key while a pick-up key fires at whatever repeat
                speed you configure.
              </p>
            </div>
            <div className="mode">
              <h3>Double Edit Macro</h3>
              <p>
                A hold-trigger key drives an edit and select sequence, with
                independent action delay and repeat rate.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Everything runs from one panel</h2>
          <div className="feature-grid">
            <div className="feature">
              <h3>Per-macro control</h3>
              <p>Custom keybinds, timing, and an on/off switch for each mode independently.</p>
            </div>
            <div className="feature">
              <h3>Multiple profiles</h3>
              <p>Save and switch between full setups instantly — only the active profile runs.</p>
            </div>
            <div className="feature">
              <h3>Target window lock</h3>
              <p>Pick the exact game window or process the engine should send input to.</p>
            </div>
            <div className="feature">
              <h3>Runtime status</h3>
              <p>Live engine state, ping, and system load, visible while you play.</p>
            </div>
            <div className="feature">
              <h3>Local persistence</h3>
              <p>Config and profile data are saved on your machine between sessions.</p>
            </div>
            <div className="feature">
              <h3>One-time key activation</h3>
              <p>Licensed through Supabase — each key activates a single install.</p>
            </div>
          </div>
        </section>

        <section id="buy" className="buy">
          <div className="buy-panel">
            <h2>Get a license</h2>
            <p className="lede">
              One key, one activation. You'll get your key immediately after payment.
            </p>
            <div className="price">
              <span className="price-amount">$--.--</span>
              <span className="price-note">one-time</span>
            </div>
            <button className="btn-primary btn-buy" disabled>
              Buy now
            </button>
            <p className="buy-note">Payment setup in progress — check back shortly.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Psycho Macro Engine</span>
        <span className="footer-dim">Licensed per install</span>
      </footer>

      <style jsx>{`
        .page {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }

        .brand {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: var(--muted);
        }

        .brand-strong {
          color: var(--white);
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 14px;
        }

        .nav-links a {
          color: var(--muted);
          transition: color 0.15s ease;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
          padding: 88px 0 96px;
        }

        .kicker {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--muted-dim);
          margin: 0 0 20px;
        }

        h1 {
          font-size: 44px;
          line-height: 1.12;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .lede {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.6;
          max-width: 46ch;
          margin: 0 0 32px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn-primary {
          display: inline-block;
          background: var(--white);
          color: var(--bg);
          font-weight: 600;
          font-size: 14px;
          padding: 13px 24px;
          border: none;
          cursor: pointer;
        }

        .btn-primary:disabled {
          background: var(--panel-raised);
          color: var(--muted-dim);
          cursor: not-allowed;
        }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          color: var(--text);
          padding: 13px 4px;
          border-bottom: 1px solid var(--border);
        }

        .hud {
          background: var(--panel);
          border: 1px solid var(--border);
          padding: 28px;
        }

        .hud-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
          color: var(--text);
        }

        .hud-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-top: 1px solid var(--border);
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--muted);
        }

        .hud-row:first-of-type {
          border-top: none;
        }

        .hud-value {
          color: var(--text);
        }

        .hud-live {
          color: var(--white);
          font-weight: 500;
        }

        section h2 {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 40px;
          max-width: 32ch;
        }

        .modes {
          padding: 64px 0;
          border-top: 1px solid var(--border);
        }

        .mode-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .mode {
          background: var(--bg);
          padding: 28px;
        }

        .mode h3 {
          font-size: 17px;
          margin-bottom: 12px;
        }

        .mode p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .features {
          padding: 64px 0;
          border-top: 1px solid var(--border);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .feature {
          background: var(--bg);
          padding: 24px 28px;
        }

        .feature h3 {
          font-size: 15px;
          margin-bottom: 10px;
        }

        .feature p {
          color: var(--muted);
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
        }

        .buy {
          padding: 64px 0 96px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: center;
        }

        .buy-panel {
          width: 100%;
          max-width: 420px;
          background: var(--panel);
          border: 1px solid var(--border);
          padding: 36px;
          text-align: left;
        }

        .buy-panel h2 {
          margin-bottom: 12px;
        }

        .buy-panel .lede {
          margin-bottom: 28px;
        }

        .price {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 24px;
        }

        .price-amount {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 36px;
          font-weight: 600;
        }

        .price-note {
          color: var(--muted-dim);
          font-size: 13px;
        }

        .btn-buy {
          width: 100%;
          margin-bottom: 14px;
        }

        .buy-note {
          color: var(--muted-dim);
          font-size: 12.5px;
          text-align: center;
          margin: 0;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          padding: 32px 0 48px;
          font-size: 13px;
          color: var(--muted-dim);
        }

        @media (max-width: 860px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 56px 0 64px;
          }
          h1 {
            font-size: 32px;
          }
          .mode-list, .feature-grid {
            grid-template-columns: 1fr;
          }
          .nav-links {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
