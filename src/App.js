import React, { Component } from 'react';

import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from 'react-froala-wysiwyg';

import $ from 'jquery';
window.$ = $;

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: 'Hello World'
    };
  }

  render() {
    return (
      <div className="App">
        <FroalaEditor
          /* As of v3.0.4 this results in nothing being displayed in the editor
          tag="textarea" */
          model={this.state.content}
        />
      </div>
    );
  }
}

export default App;
