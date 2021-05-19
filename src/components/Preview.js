import React from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function Preview({ input, resizeWindow, minimizeOnClick, addStyles }) {
  function createMarkup() {
    return { __html: marked(input, renderer) };
  }

  return (
    <div className='window' style={addStyles}>
      <div className='top-bar'>
        <div className='window-action'>
          <ul>
            <li onClick={minimizeOnClick}></li>
            <li onClick={minimizeOnClick}></li>
            <li onClick={resizeWindow}></li>
          </ul>
        </div>
        <div className='preview-text'>PREVIEWER</div>
      </div>
      <div className='screen'>
        <div className='markdown' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default Preview;
