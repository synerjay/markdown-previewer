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
    <div className='window'>
      <div className='top-bar'>
        <div className='window-action'>
          <ul>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
          </ul>
        </div>
        <div className='preview-text'>PREVIEWER</div>
      </div>
      <div className='screen'>
        <div className='Preview' dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default Preview;
