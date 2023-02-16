import * as React from "react";
import { useEffect, useState } from "react";
import "ui/styles.css";
import { CodeEditor } from "ui";
import withNavbar from "ui/layouts/withNavbar";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { getSnippetById, updateSnippet } from "../../../api/services/snippets/snippets.service";

type Language = 'html' | 'css' | 'javascript';
type CodeSnippet = {
  [key in Language]: string;
};
interface CodePanelSizes {
  html: number | string;
  css: number | string;
}

const getBlobUrl = (code: string, type: string) => {
  const blob = new Blob([code], { type });
  return URL.createObjectURL(blob);
}

const workspaceStyle = (topPanelHeight: number) => ({
  width: '100%',
  height: 'calc(100vh - 58px)',
  display: 'grid',
  gap: '10px',
  gridTemplateRows: `${topPanelHeight}px auto`,
  overflow: 'hidden',
})
const topPanelStyle = ({ html, css }: CodePanelSizes) => ({
  display: 'grid',
  gridTemplateColumns: `${html} ${css} 1fr`,
  marginTop: '7px',
  padding: '0 7px',
});
const languages:Language[] = ['html', 'css', 'javascript'];

function Code () {
  const router = useRouter();
  const id = router.query.id?.toString() as string;
  const isNew = router.query.id === 'new';

  const [snippet, setSnippet] = useState<CodeSnippet>({
    html: '',
    css: '',
    javascript: '',
  });
  const [saved, setSaved] = useState<boolean>(true);

  useQuery(getSnippetById, {
    variables: { id: parseInt(id) },
    onCompleted: (data) => {
      const { html, css, js: javascript } = data.getSnippetById;
      setSnippet({ html, css, javascript });
    },
    skip: !id || isNew,
  });

  const [update] = useMutation(updateSnippet);

  const [src, setSrc] = useState<string>('');
  const [codePanelSizes, setCodePanelSizes] = useState<CodePanelSizes>({ html: '1fr', css: '1fr' });
  const [topPanelHeight, setTopPanelHeight] = useState<number>(380);

  const [initialPos, setInitialPos] = useState<number>(0);
  const [initialSize, setInitialSize] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const htmlDoc = `
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="${getBlobUrl(snippet.css, 'text/css')}" />
            </head>
            <body>${snippet.html}</body>
            <script src="${getBlobUrl(snippet.javascript, 'text/javascript')}"></script>
        </html>
      `;
      setSrc(getBlobUrl(htmlDoc, 'text/html'));

      if (!saved) {
        update({
          variables: {
            snippet: {
              id,
              html: snippet.html,
              css: snippet.css,
              js: snippet.javascript
            }
          }
        });
        setSaved(true);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [snippet])

  return (
      <div className="workspace" style={workspaceStyle(topPanelHeight)}>
        <div id="res4">
          <div style={topPanelStyle(codePanelSizes)}>
            {
              languages.map((lang, index) => (
                <CodeEditor
                  language={lang}
                  value={snippet[lang]}
                  height={topPanelHeight}
                  id={`lang${index + 1}`}
                  withoutResize={index === languages.length - 1}
                  onChange={(value) => {
                    if (value !== snippet[lang]) {
                      setSaved(false);
                    }
                    setSnippet({ ...snippet, [lang]: value });
                  }}
                  onResize={(size) => setCodePanelSizes({ ...codePanelSizes, [lang]: size + 'px' })}
                />
              ))
            }
          </div>
          <div
            className="top-panel-resize"
            draggable={true}
            onDragStart={(e) => {
              // @ts-ignore
              const resizable = document.getElementById('res4') as HTMLElement;
              setInitialPos(e.clientY);
              setInitialSize(resizable.offsetHeight);
            }}
            onDrag={(e) => {
              e.clientY > 0 && setTopPanelHeight(initialSize + (e.clientY - initialPos))
            }}
          />
        </div>
        <div className="bottom-panel">
          <iframe
            src={src}
            title="output"
            sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
            allow="accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"
            scrolling="auto"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
  );
}

export default () => withNavbar(Code);