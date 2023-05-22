import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="text-editor">
      <textarea
        className="text-editor__textarea"
        value={content}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
};

export default TextEditor;
