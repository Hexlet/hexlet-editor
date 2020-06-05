import React from 'react';
import {
  Editor, Terminal, Button, EditorToolbar,
} from './components';


export const App = () => (
  <main className="container-fluid my-5">
    <div className="row mb-4">
      <div className="col-12">
        <Button />
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <div className="card">
          <Editor />
          <EditorToolbar />
        </div>
        <Button />
      </div>
      <div className="col-6">
        <Terminal />
      </div>
    </div>
  </main>
);
