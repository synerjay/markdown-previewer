import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [inputValue, setInputValue] = useState(placeholder);

  const editorValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='App'>
      <Editor input={inputValue} editorValueChange={editorValueChange} />
      <Preview input={inputValue} />
    </div>
  );
}

export default App;

const placeholder = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;
