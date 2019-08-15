import React, { Component } from 'react';

import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from 'react-froala-wysiwyg';

import $ from 'jquery';
window.$ = $;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using v3.0.3 setting the model prop here works. As of v3.0.4 this results in nothing being displayed in the editor */}
        <FroalaEditor tag='textarea' model="Hello World" />
      </div>
    );
  }
}

export default App;
