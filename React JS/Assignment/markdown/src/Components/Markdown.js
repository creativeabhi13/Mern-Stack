

import React, { useState } from 'react';
import marked from 'marked';


const Markdown = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const renderMarkdown = () => {
    return { __html: marked(markdown, { sanitize: true }) };
  };

  return (
    <div className="markdown-editor-container">
      <div className="editor">
        <h2>Markdown Editor</h2>
        <textarea
          value={markdown}
          onChange={handleChange}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={renderMarkdown()} />
      </div>
    </div>
  );
};

export default Markdown;
