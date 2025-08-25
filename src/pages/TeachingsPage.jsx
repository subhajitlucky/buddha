import React from 'react';
import Section from '../components/Section';
import buddhaTeachings from '../data/buddhaTeachings';
import './TeachingsPage.css';

const TeachingsPage = () => {
  return (
    <div className="teachings-page">
      <Section id="teachings-intro" title={buddhaTeachings.title}>
        <p>{buddhaTeachings.introduction}</p>
        <div className="sources-section">
          <h3>Primary Sources for this Account:</h3>
          <ul>
            {buddhaTeachings.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="authenticity" title={buddhaTeachings.authenticity.title}>
        <p>{buddhaTeachings.authenticity.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {buddhaTeachings.authenticity.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="four-noble-truths" title={buddhaTeachings.fourNobleTruths.title}>
        <p>{buddhaTeachings.fourNobleTruths.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {buddhaTeachings.fourNobleTruths.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        <div className="teachings-grid">
          {buddhaTeachings.fourNobleTruths.truths.map((truth, index) => (
            <div key={index} className="teaching-card">
              <h3 className="teaching-title">{truth.title}</h3>
              <p className="teaching-description">{truth.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {truth.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="noble-eightfold-path" title={buddhaTeachings.nobleEightfoldPath.title}>
        <p>{buddhaTeachings.nobleEightfoldPath.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {buddhaTeachings.nobleEightfoldPath.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        {buddhaTeachings.nobleEightfoldPath.categories.map((category, index) => (
          <div key={index} className="path-category">
            <h3 className="category-title">{category.title}</h3>
            <p>{category.description}</p>
            <div className="sources-section">
              <h4>Sources:</h4>
              <ul>
                {category.sources.map((source, idx) => (
                  <li key={idx}>{source}</li>
                ))}
              </ul>
            </div>
            <div className="category-factors">
              {category.factors.map((factor, idx) => (
                <div key={idx} className="factor">
                  <h4 className="factor-title">{factor.title}</h4>
                  <p className="factor-description">{factor.description}</p>
                  <div className="sources-section">
                    <h5>Sources:</h5>
                    <ul>
                      {factor.sources.map((source, id) => (
                        <li key={id}>{source}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section id="key-concepts" title="Key Buddhist Concepts">
        <div className="concepts-grid">
          {buddhaTeachings.keyConcepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <h3 className="concept-title">{concept.title}</h3>
              <p className="concept-description">{concept.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {concept.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="advanced-teachings" title={buddhaTeachings.advancedTeachings.title}>
        <p>{buddhaTeachings.advancedTeachings.description}</p>
        <div className="concepts-grid">
          {buddhaTeachings.advancedTeachings.teachings.map((teaching, index) => (
            <div key={index} className="concept-card">
              <h3 className="concept-title">{teaching.title}</h3>
              <p className="concept-description">{teaching.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {teaching.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default TeachingsPage;