import "../LegalPages.css"

function CookiePolicy() {
  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <h1>Cookie Policy</h1>
        <div className="legal-divider"></div>
      </div>

      <div className="legal-content">
        <p className="legal-effective-date">Effective Date: May 12, 2025</p>

        <div className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            This Cookie Policy explains how EcoCertification ("we", "us", or "our") uses cookies and similar
            technologies on our website. We use cookies to enhance your browsing experience, analyze site traffic, and
            personalize content.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help our site work
            properly and improve your experience. Cookies can be "persistent" (remaining until you delete them) or
            "session" (deleted when you close your browser).
          </p>
        </div>

        <div className="legal-section">
          <h2>3. Types of Cookies We Use</h2>

          <h3>3.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality such as
            security, network management, and account access. You may disable these by changing your browser settings,
            but this may affect how the website functions.
          </p>
          <p>Examples include cookies used for form submissions and user authentication.</p>

          <h3>3.2 Analytics Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website. This helps us improve our site and
            enhance user experience. All information these cookies collect is aggregated and anonymous.
          </p>
          <p>We use Google Analytics to collect anonymous data about website usage.</p>

          <h3>3.3 Functional Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your language preference) and provide
            enhanced features. They may be set by us or by third-party providers whose services we have added to our
            pages.
          </p>
          <p>For example, we use cookies to remember your language preference (English or German).</p>
        </div>

        <div className="legal-section">
          <h2>4. Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third parties on our website. These include Google Analytics and Google
            Translate, which help us analyze site usage and provide translation services.
          </p>
          <p>
            For more information about Google's privacy practices, please visit:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Managing Cookies</h2>
          <p>You can control cookies in several ways:</p>

          <h3>5.1 Cookie Consent</h3>
          <p>
            When you first visit our website, you will see a cookie banner where you can choose to accept all cookies or
            only essential cookies.
          </p>

          <h3>5.2 Browser Settings</h3>
          <p>
            Most web browsers allow you to manage cookies through their settings. You can usually find these settings in
            the "options" or "preferences" menu of your browser. You can:
          </p>
          <ul>
            <li>Delete all cookies</li>
            <li>Block all cookies</li>
            <li>Allow only essential cookies</li>
            <li>Clear cookies when you close your browser</li>
          </ul>
          <p>For more information about managing cookies, visit the help pages of your browser:</p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>6. Legal Basis (for EU/German Users)</h2>
          <p>
            The legal basis for essential cookies is Art. 6(1)(f) GDPR (legitimate interest). For all other cookies, the
            legal basis is Art. 6(1)(a) GDPR (your consent). You have the right to withdraw your consent at any time.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Contact Us</h2>
          <p>If you have any questions about our Cookie Policy, please contact us:</p>
          <ul>
            <li>By email: yosheplc@gmail.com</li>
            <li>By phone: +251 97 498 4675</li>
            <li>By mail: Ecopia PLC, PO Box 1072, Addis Ababa</li>
          </ul>
        </div>

        <p className="legal-last-updated">Last updated: May 12, 2025</p>
      </div>
    </div>
  )
}

export default CookiePolicy
