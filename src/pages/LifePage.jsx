import React, { useState } from 'react';
import Section from '../components/Section';
import lifeOfBuddha from '../data/lifeOfBuddha';
import Quote from '../components/Quote';
import './LifePage.css';

const LifePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="life-page">
      <Section id="life-intro" title={lifeOfBuddha.title}>
        <p>{lifeOfBuddha.introduction}</p>
        <div className="sources-section">
          <h3>Primary Sources for this Account:</h3>
          <ul>
            {lifeOfBuddha.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        <Quote 
          text="As a lotus flower is born in water, grows in water and rises out of water to stand above it unsoiled, so I, born in the world, raised in the world, having overcome the world, live unsoiled by the world." 
          author="Buddha (Dhammapada, Verse 55)" 
        />
      </Section>

      <Section id="life-timeline" title="Life Timeline">
        <div className="timeline">
          {lifeOfBuddha.timeline.map((event, index) => (
            <div key={index} className="timeline-event">
              <h3 className="timeline-period">{event.period}</h3>
              <p className="timeline-description">{event.description}</p>
              {event.sources && (
                <div className="event-sources">
                  <strong>Sources:</strong>
                  <ul>
                    {event.sources.map((source, idx) => (
                      <li key={idx}>{source}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Reflect on the Buddha's Journey ({count} reflections)
        </button>
      </Section>

      <Section id="life-significance" title="Significance of the Buddha's Life">
        <p>{lifeOfBuddha.significance}</p>
      </Section>

      <Section id="historical-context" title={lifeOfBuddha.historicalContext.title}>
        <p>{lifeOfBuddha.historicalContext.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {lifeOfBuddha.historicalContext.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="archaeological-evidence" title={lifeOfBuddha.archaeologicalEvidence.title}>
        <p>{lifeOfBuddha.archaeologicalEvidence.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {lifeOfBuddha.archaeologicalEvidence.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default LifePage;