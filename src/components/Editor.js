import React from 'react';

function Editor({ editorValueChange, input }) {
  return (
    <div className='EditorContainer'>
      <textarea className='Editor' value={input} onChange={editorValueChange} />
    </div>
  );
}

export default Editor;
