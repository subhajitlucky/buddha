import React from 'react';
import Section from '../components/Section';
import meditationPractices from '../data/meditationPractices';
import './MeditationPage.css';

const MeditationPage = () => {
  return (
    <div className="meditation-page">
      <Section id="meditation-intro" title={meditationPractices.title}>
        <p>{meditationPractices.introduction}</p>
        <div className="sources-section">
          <h3>Primary Sources for this Account:</h3>
          <ul>
            {meditationPractices.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="authenticity" title={meditationPractices.authenticity.title}>
        <p>{meditationPractices.authenticity.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {meditationPractices.authenticity.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="meditation-types" title="Types of Meditation">
        <div className="meditation-grid">
          {meditationPractices.types.map((type, index) => (
            <div key={index} className="meditation-card">
              <h3 className="meditation-title">{type.title}</h3>
              <p className="meditation-description">{type.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {type.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
              <div className="meditation-benefits">
                <h4>Benefits:</h4>
                <ul>
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="meditation-practice">
                <h4>How to Practice:</h4>
                <p>{type.practice}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="foundational-practices" title={meditationPractices.foundationalPractices.title}>
        <p>{meditationPractices.foundationalPractices.description}</p>
        <div className="meditation-grid">
          {meditationPractices.foundationalPractices.practices.map((practice, index) => (
            <div key={index} className="meditation-card">
              <h3 className="meditation-title">{practice.title}</h3>
              <p className="meditation-description">{practice.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {practice.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="advanced-practices" title={meditationPractices.advancedPractices.title}>
        <p>{meditationPractices.advancedPractices.description}</p>
        <div className="meditation-grid">
          {meditationPractices.advancedPractices.practices.map((practice, index) => (
            <div key={index} className="meditation-card">
              <h3 className="meditation-title">{practice.title}</h3>
              <p className="meditation-description">{practice.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {practice.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="getting-started" title={meditationPractices.gettingStarted.title}>
        <p>{meditationPractices.gettingStarted.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {meditationPractices.gettingStarted.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        <ol className="steps-list">
          {meditationPractices.gettingStarted.steps.map((step, index) => (
            <li key={index} className="step">{step}</li>
          ))}
        </ol>
      </Section>

      <Section id="meditation-tips" title="Tips for Successful Meditation">
        <ul className="tips-list">
          {meditationPractices.tips.map((tip, index) => (
            <li key={index} className="tip">{tip}</li>
          ))}
        </ul>
      </Section>

      <Section id="common-mistakes" title={meditationPractices.commonMistakes.title}>
        <p>{meditationPractices.commonMistakes.description}</p>
        <div className="meditation-grid">
          {meditationPractices.commonMistakes.mistakes.map((mistake, index) => (
            <div key={index} className="meditation-card">
              <h3 className="meditation-title">{mistake.title}</h3>
              <p className="meditation-description">{mistake.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MeditationPage;