import { useState } from 'react';

const MAX_LENGTH = 280;

function Contact() {
  // Controlled form input state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // UI visibility toggle state
  const [showTip, setShowTip] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <h2 className="section__heading">Contact</h2>
      <p className="section__body section__body--intro">
        Have a question or want to collaborate? Send a message below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-form__label" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="contact-form__input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitted(false);
          }}
          placeholder="Enter your name"
        />

        <label className="contact-form__label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="contact-form__input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSubmitted(false);
          }}
          placeholder="Enter your email"
        />

        <label className="contact-form__label" htmlFor="message">
          Message
          <button
            type="button"
            className="tip-toggle"
            onClick={() => setShowTip((prev) => !prev)}
            aria-expanded={showTip}
          >
            {showTip ? 'Hide tip' : 'Need a tip?'}
          </button>
        </label>

        {showTip && (
          <p className="tip-box">
            Tip: mention what you'd like to collaborate on or which project caught your eye.
          </p>
        )}

        <textarea
          id="message"
          className="contact-form__textarea"
          value={message}
          maxLength={MAX_LENGTH}
          onChange={(e) => {
            setMessage(e.target.value);
            setSubmitted(false);
          }}
          placeholder="Type your message here..."
          rows={6}
        />

        <div className="contact-form__preview" aria-label="Entered details preview">
          <p className="contact-form__preview-line">
            <span className="contact-form__preview-key">Name:</span> {name}
          </p>
          <p className="contact-form__preview-line">
            <span className="contact-form__preview-key">Email:</span> {email}
          </p>
          <p className="contact-form__preview-line">
            <span className="contact-form__preview-key">Message:</span> {message}
          </p>
        </div>

        <div className="contact-form__meta">
          <span className="char-count">
            {message.length} / {MAX_LENGTH} characters
          </span>
          <button
            type="submit"
            className="contact-form__submit"
            disabled={!name.trim() || !email.trim() || !message.trim()}
          >
            Send
          </button>
        </div>

        {submitted && (
          <p className="contact-form__success" role="status">
            Thanks {name} — your message has been captured (demo only, not actually sent to {email}).
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
