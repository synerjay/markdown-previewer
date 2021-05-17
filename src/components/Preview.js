import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function Preview({ input }) {
  function createMarkup() {
    return { __html: marked(input, renderer) };
  }

  return (
    <div className='PreviewContainer'>
      <div className='Preview' dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

export default Preview;
