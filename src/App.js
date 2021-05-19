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

  const maximizeWindowStyle = {
    width: '100%',
    height: '100%',
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
          addStyles={
            showEditor && singleWindowMode ? maximizeWindowStyle : null
          }
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
          addStyles={
            showPreviewer && singleWindowMode ? maximizeWindowStyle : null
          }
        />
      )}
    </div>
  );
}

export default App;

const placeholder = `
Hi! I'm Jerome and welcome to my Markdown Previewer App!

A markdown previewer is an app that parses markdown code into HTML styles. 

Try it out yourself! 

# How to Use

On the editor panel, type in the markdown code that you want to see on the preview panel on the right.

Try the markdown code below to check it out! 

**To get a bolded text, type in these asterisks**

> An arrow key character makes block Quotes!
> You can have several lines of these
> As many as you can!
> As many as you want!
> Isn't it cool?

To make a heading, try the sharp key as so!

# Heading
## Heading 2
### Heading 3

To make bullet points, it's as simple as: 
- One!
- Two! 
- Three!
- Easy, right?

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
