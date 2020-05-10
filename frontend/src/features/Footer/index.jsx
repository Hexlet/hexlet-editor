import React from 'react';

export const Footer = () => {
  const vdom = (
    <footer className="pb-5 bg-light">
      <div className="container-xl">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 pt-3">
          <div className="col d-flex flex-column mb-2">
            <h3 className="h3 pb-2 border-bottom">© Hexlet</h3>
            <a className="text-secondary" href="pages/about">О проекте</a>
            <a className="text-secondary" href="https://github.com/Hexlet/hexlet-editor" target="_blank" rel="noopener noreferrer">Исходный код</a>
            <a className="text-secondary" href="http://slack-ru.hexlet.io/" target="_blank" rel="noopener noreferrer">Slack #hexlet-volunteers</a>
          </div>
          <div className="col d-flex flex-column mb-2">
            <h3 className="h3">Помощь</h3>
            <a className="text-secondary" href="https://ru.hexlet.io/knowledge" target="_blank" rel="noopener noreferrer">База знаний</a>
            <a className="text-secondary" href="https://guides.hexlet.io" target="_blank" rel="noopener noreferrer">Hexlet Guides</a>
          </div>
          <div className="col d-flex flex-column mb-2">
            <h3 className="h3">Дополнительно</h3>
            <a className="text-secondary" href="https://ru.code-basics.com" target="_blank" rel="noopener noreferrer">Code Basics</a>
            <a className="text-secondary" href="https://codebattle.hexlet.io" target="_blank" rel="noopener noreferrer">Code Battles</a>
          </div>
        </div>
      </div>
    </footer>
  );

  return vdom;
};
