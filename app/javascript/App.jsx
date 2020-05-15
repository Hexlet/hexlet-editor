import React from 'react';
import { Editor, SelectLanguage } from './features';

export const App = () => (
  <div>
    <main className="container-fluid my-5">
      <SelectLanguage />
      <div className="row">
        <div className="col-6">
          <Editor />
        </div>
        <div className="col-6">
          output
        </div>
      </div>
    </main>
    <footer className="footer pb-5 mt-auto">
      <div className="container">
        footer
      </div>
    </footer>
  </div>
);
