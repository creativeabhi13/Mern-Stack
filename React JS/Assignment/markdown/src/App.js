import React, { useState } from 'react';


import './App.css';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <textarea
        className="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Write your markdown here..."
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
      
       
    </div>
    
  );
}

export default App;
