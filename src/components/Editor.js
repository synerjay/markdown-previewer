import React from 'react';

function Editor({ editorValueChange, input }) {
  return (
    <div className='window'>
      <div className='top-bar'>
        <div className='window-action'>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className='editor-text'>EDITOR</div>
      </div>
      <div className='screen'>
        <textarea
          className='Editor'
          value={input}
          onChange={editorValueChange}
        />
      </div>
    </div>
  );
}

export default Editor;
