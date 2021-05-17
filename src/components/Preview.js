import React from 'react';

function Preview() {
  return (
    <div className='PreviewContainer'>
      <div className='Preview' dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
}

export default Preview;
