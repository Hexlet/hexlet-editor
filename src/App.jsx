import React from 'react';
import { Editor } from './features';
import Terminal from './components/Terminal/Terminal.jsx';

export const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">header</div>
    </nav>
    <main className="container-fluid my-5">
      <div className="row">
        <div className="col-6">
          <Editor />
        </div>
        <div className="col-6">
          <Terminal />
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
