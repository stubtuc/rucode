import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { atomone } from "@uiw/codemirror-theme-atomone"

const lang = {
  'html': html,
  'css': css,
  'javascript': javascript,
}

interface ICodeEditor {
  language: 'html' | 'css' | 'javascript';
  value: string;
  height: number;
  withoutResize?: boolean;
  onChange: (value: string) => void;
  onResize?: (diffX: number) => void;
  id: string
}

export const CodeEditor: React.FC<ICodeEditor> = ({ language, value, onChange, height, withoutResize, onResize, id }) => {
  const [initialPos, setInitialPos] = useState<number>(0);
  const [initialSize, setInitialSize] = useState<number>(0);

  const extension = lang[language];

  return (
    <div className="code-container" id={id}>
      <div className="code">
        <div className="code__language">{ language }</div>
        <CodeMirror
          value={value}
          className="codemirror"
          onChange={(val) => onChange(val)}
          extensions={[extension()]}
          theme={atomone}
          height={`${height - 46}px`}
        />
      </div>
      { !withoutResize && (
        <div
          className="code-resize"
          draggable={true}
          onDragStart={(e) => {
            // @ts-ignore
            const resizable = document.getElementById(id);
            setInitialPos(e.clientX);
            setInitialSize(resizable.offsetWidth);
          }}
          onDrag={(e) => {
            e.clientX > 0 && onResize && onResize(initialSize + (e.clientX - initialPos));
          }}
        />)
      }
    </div>
  );
};