'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import marked from 'marked';


interface MarkdownViewerProps {
  fileUrl: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ fileUrl }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    axios.get(fileUrl)
      .then(response => {
        setMarkdown(marked(response.data));
      })
      .catch(error => {
        console.error('Error fetching markdown file: ', error);
      });
  }, [fileUrl]);

  return (
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  );
};

export default MarkdownViewer;