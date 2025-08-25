import React from 'react';
import Section from '../components/Section';
import buddhistTexts from '../data/buddhistTexts';
import './TextsPage.css';

const TextsPage = () => {
  return (
    <div className="texts-page">
      <Section id="texts-intro" title={buddhistTexts.title}>
        <p>{buddhistTexts.introduction}</p>
        <div className="sources-section">
          <h3>Primary Sources for this Account:</h3>
          <ul>
            {buddhistTexts.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="authenticity" title={buddhistTexts.authenticity.title}>
        <p>{buddhistTexts.authenticity.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {buddhistTexts.authenticity.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
      </Section>

      {buddhistTexts.collections.map((collection, index) => (
        <Section key={index} id={`collection-${index}`} title={collection.title}>
          <p>{collection.description}</p>
          <div className="sources-section">
            <h4>Sources:</h4>
            <ul>
              {collection.sources && collection.sources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>
          <div className="texts-grid">
            {collection.sections.map((section, idx) => (
              <div key={idx} className="text-card">
                <h3 className="text-title">{section.title}</h3>
                <p className="text-description">{section.description}</p>
                <div className="sources-section">
                  <h4>Sources:</h4>
                  <ul>
                    {section.sources && section.sources.map((source, id) => (
                      <li key={id}>{source}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section id="preservation" title={buddhistTexts.preservation.title}>
        <p>{buddhistTexts.preservation.description}</p>
        <div className="sources-section">
          <h4>Sources:</h4>
          <ul>
            {buddhistTexts.preservation.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </div>
        <ul className="preservation-list">
          {buddhistTexts.preservation.methods.map((method, index) => (
            <li key={index} className="preservation-item">{method}</li>
          ))}
        </ul>
      </Section>

      <Section id="major-collections" title={buddhistTexts.majorCollections.title}>
        <p>{buddhistTexts.majorCollections.description}</p>
        <div className="texts-grid">
          {buddhistTexts.majorCollections.canons.map((canon, index) => (
            <div key={index} className="text-card">
              <h3 className="text-title">{canon.title}</h3>
              <p className="text-description">{canon.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {canon.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="languages" title="Languages of Buddhist Texts">
        <div className="languages-grid">
          {buddhistTexts.languages.map((language, index) => (
            <div key={index} className="language-card">
              <h3 className="language-title">{language.title}</h3>
              <p className="language-description">{language.description}</p>
              <div className="sources-section">
                <h4>Sources:</h4>
                <ul>
                  {language.sources && language.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="textual-criticism" title={buddhistTexts.textualCriticism.title}>
        <p>{buddhistTexts.textualCriticism.description}</p>
        <div className="texts-grid">
          {buddhistTexts.textualCriticism.areas.map((area, index) => (
            <div key={index} className="text-card">
              <h3 className="text-title">{area.title}</h3>
              <p className="text-description">{area.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default TextsPage;