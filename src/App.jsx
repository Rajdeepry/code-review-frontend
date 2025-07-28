import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

import TestConnection from "./TestConnection";

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(`Review your COde in Rplatform`)

  const [ review, setReview ] = useState(``)
const apiUrl = import.meta.env.VITE_API_URL;
fetch(`${apiUrl}/api/test`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    // your data here

    
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Response from backend:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



  useEffect(() => {
    prism.highlightAll()
    
  }, []);

  function App() {
  return (
    <div>
      <h1>Code Review App</h1>
      <TestConnection />
    </div>
  );
}

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                 wordWrap: 'break-word'
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App