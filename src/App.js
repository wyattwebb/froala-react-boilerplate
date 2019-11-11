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

  componentDidMount() {
    this.setState({content: 'SOMETHING ELSE LOADED AFTER'});
  }

  render() {
    return (
      <div className="App">
        The editor should say "SOMETHING ELSE LOADED AFTER"
        <FroalaEditor
          model={this.state.content}
        />
        <br/>
        State: Content: {this.state.content}
      </div>
    );
  }
}

export default App;
