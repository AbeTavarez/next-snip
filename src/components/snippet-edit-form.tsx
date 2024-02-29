"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    console.log(value);
    setCode(value);
  };

  return (
    <div>
      <Editor
        height='40vh'
        theme='vs-dark'
        defaultValue={snippet.code}
        defaultLanguage='javascript'
        onChange={handleEditorChange}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}
