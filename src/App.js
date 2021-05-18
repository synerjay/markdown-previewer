import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  // Editor Text Input State
  const [inputValue, setInputValue] = useState(placeholder);
  const editorValueChange = (e) => {
    setInputValue(e.target.value);
  };

  // Single Window Mode
  const [singleWindowMode, setSingleWindowMode] = useState(false);

  const singleWindowStyle = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
    justifyContent: null,
    alignItems: null,
  };

  // Show Editor State
  const [showEditor, setShowEditor] = useState(true);

  const maximizeEditor = () => {
    setSingleWindowMode(true);
    setShowPreviewer(false);
  };

  const minimizeEditor = () => {
    setSingleWindowMode(false);
    setShowPreviewer(true);
  };

  // Show Previewer State
  const [showPreviewer, setShowPreviewer] = useState(true);

  const maximizePreviewer = () => {
    setSingleWindowMode(true);
    setShowEditor(false);
  };

  const minimizePreviewer = () => {
    setSingleWindowMode(false);
    setShowEditor(true);
  };

  return (
    <div className='App' style={singleWindowMode ? singleWindowStyle : null}>
      {showEditor && (
        <Editor
          input={inputValue}
          editorValueChange={editorValueChange}
          minimizeOnClick={
            !singleWindowMode ? maximizePreviewer : minimizeEditor
          }
          resizeWindow={singleWindowMode ? minimizeEditor : maximizeEditor}
        />
      )}
      {showPreviewer && (
        <Preview
          input={inputValue}
          minimizeOnClick={
            !singleWindowMode ? maximizeEditor : minimizePreviewer
          }
          resizeWindow={
            singleWindowMode ? minimizePreviewer : maximizePreviewer
          }
        />
      )}
    </div>
  );
}

export default App;

const placeholder = `
Welcome to my Markdown Previewer App!

This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading
## Heading 2

- list item 1
- list item 2
- list item 3

[Visit my website](https://codepen.io/synerjay/full/rNLjEJe)

This is an inline code \`<div></div>\`

This is a block of code:

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)

`;
