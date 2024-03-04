"use client";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  // handles editor changes
  const handleEditorChange = (value: string = "") => {
    console.log(value);
    setCode(value);
  };

  // Create a pre-loaded function from the server action
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

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

      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded bg-green-500 text-white">Save</button>
      </form>
    </div>
  );
}
