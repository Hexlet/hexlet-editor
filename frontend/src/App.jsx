import React from 'react';
import { Editor, Footer } from './features';

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
          output
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
