import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import container from '../containers/all.js'

class AppRoot extends React.Component {
  constructor (props) {
    super(props)

    this.updatePreview = this.updatePreview.bind(this);
    this.submitMarkdownNotes = this.submitMarkdownNotes.bind(this);
  }

  updatePreview() {
    const markdownInput = this.refs.markdown.value;
    this.props.dispatch({ type: "UPDATE_PREVIEW", markdownPreview: markdownInput });
    console.log('I can see dead code');
  }

  submitMarkdownNotes()  {
    //this.props.dispatch({ type: "SUBMIT_NOTES" });
    console.log('I submitted the Markdown Notes to backendless');
  }

  render () {
    return (
      <main>
        <section className="markdown-container">
          <h1 className="markdown-title">Markdown App</h1>
          <textarea onChange={this.updatePreview} className="textarea" ref="markdown"/>
          <div className="submit-button-container">
          <button className="submit-button" type="submit" onClick={this.submitMarkdownNotes}>Submit</button>
          </div>
        </section>
        <section className="preview-container">
          <h1 className="preview-title">Preview</h1>
          <textarea className="textarea" value={this.props.markdownPreview}/>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
