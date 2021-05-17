import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function Preview() {
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;

  function createMarkup() {
    return { __html: marked(markdown, renderer) };
  }

  return (
    <div className='PreviewContainer'>
      <div
        className='Preview'
        className='markdown'
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
}

export default Preview;
