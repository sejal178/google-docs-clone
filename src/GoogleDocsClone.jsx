import React from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import PrimaryToolbar from './PrimaryToolbar';

const GoogleDocsClone = () => {
  return (
    <div className="google-docs-clone">
      <Toolbar />
      <PrimaryToolbar/>
      <div className="google-docs-clone__content">
       
        <Sidebar />
        <TextEditor />
      </div>
    </div>
  );
};

export default GoogleDocsClone;
