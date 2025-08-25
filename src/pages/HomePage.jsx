import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Quote from '../components/Quote';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Section id="welcome" title="Welcome to the Sanctuary of Enlightenment">
        <p className="intro-text">
          Discover the profound wisdom and compassionate teachings of Siddhartha Gautama, 
          the Enlightened One. This website is dedicated to preserving and sharing the authentic 
          life story and timeless teachings of Buddha, sourced directly from ancient texts and 
          scholarly research.
        </p>
        <div className="quote-container">
          <Quote 
            text="Peace comes from within. Do not seek it without." 
            author="Buddha (Dhammapada, Verse 30)" 
          />
        </div>
        <div className="authentic-art-note">
          <p><em>Note: This website focuses on textual authenticity. While we recognize the value of authentic Buddhist art, we have not included images to ensure complete historical accuracy. All content is sourced from the earliest available texts.</em></p>
        </div>
      </Section>

      <Section id="significance" title="The Significance of Buddha's Teachings">
        <p>
          The Buddha's teachings, known as the Dharma, offer a practical path to understanding 
          and transcending suffering. His insights into the nature of reality, the human condition, 
          and the path to liberation have influenced countless individuals for over 2,500 years.
        </p>
        <p>
          Unlike many religious founders, the Buddha did not claim to be a god or divine being. 
          Instead, he presented himself as a human who had awakened to the truth through his own efforts. 
          He encouraged his followers to test his teachings through their own experience rather than 
          accepting them on faith alone.
        </p>
      </Section>

      <Section id="explore" title="Explore the Teachings">
        <div className="explore-grid">
          <div className="explore-item">
            <h3>Life of Buddha</h3>
            <p>Discover the remarkable journey from princely birth to enlightenment, based on authentic sources including the Pali Canon and early biographical texts.</p>
            <Link to="/life" className="explore-link">Learn More →</Link>
          </div>
          <div className="explore-item">
            <h3>Core Teachings</h3>
            <p>Learn about the Four Noble Truths, the Noble Eightfold Path, and other fundamental principles directly from the Buddha's discourses in the Pali Canon.</p>
            <Link to="/teachings" className="explore-link">Learn More →</Link>
          </div>
          <div className="explore-item">
            <h3>Meditation</h3>
            <p>Explore various meditation techniques taught by Buddha, including mindfulness, loving-kindness, and breathing meditation, with practices from the Satipatthana Sutta.</p>
            <Link to="/meditation" className="explore-link">Learn More →</Link>
          </div>
          <div className="explore-item">
            <h3>Buddhist Texts</h3>
            <p>Access information about authentic Buddhist scriptures and texts that preserve the wisdom of the Buddha through the centuries, including the Pali Canon and Mahayana Sutras.</p>
            <Link to="/texts" className="explore-link">Learn More →</Link>
          </div>
        </div>
      </Section>

      <Section id="authenticity" title="Commitment to Authenticity">
        <p>
          This website is dedicated to presenting the most authentic information about the Buddha and his teachings. 
          All content is sourced from the earliest available texts, including:
        </p>
        <ul className="sources-list">
          <li>The Pali Canon (Tipitaka) - The earliest complete collection of Buddhist texts</li>
          <li>Sanskrit texts and their Chinese translations</li>
          <li>Academic research on early Buddhism and textual criticism</li>
          <li>Traditional commentarial literature</li>
        </ul>
        <p>
          We distinguish between the earliest teachings likely to be from the historical Buddha and later developments 
          in Buddhist thought, clearly indicating sources for all information presented.
        </p>
      </Section>

      <Section id="impact" title="The Global Impact of Buddhism">
        <p>
          Buddhism has had a profound impact on world history, culture, and philosophy. Today, it is practiced by 
          over 500 million people worldwide and continues to offer valuable insights into the human condition.
        </p>
        <p>
          The Buddha's emphasis on compassion, mindfulness, and the reduction of suffering has influenced 
          fields ranging from psychology and neuroscience to ethics and environmentalism. Modern mindfulness 
          practices, now widely used in healthcare and education, have their roots in the Buddha's teachings 
          on awareness and mental development.
        </p>
      </Section>

      <Section id="beginning" title="Beginning Your Journey">
        <p>
          Whether you are new to Buddhism or seeking to deepen your understanding, this website offers a 
          comprehensive and authentic introduction to the life and teachings of the Buddha. 
          Start with any section that interests you most:
        </p>
        <div className="beginning-links">
          <Link to="/life" className="beginning-link">The Life of Buddha</Link>
          <Link to="/teachings" className="beginning-link">Core Teachings</Link>
          <Link to="/meditation" className="beginning-link">Meditation Practices</Link>
          <Link to="/texts" className="beginning-link">Buddhist Texts</Link>
        </div>
        <p className="closing-text">
          May your exploration of the Buddha's teachings bring you wisdom, compassion, and peace.
        </p>
      </Section>
    </div>
  );
};

export default HomePage;