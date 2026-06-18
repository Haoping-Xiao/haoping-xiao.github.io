import { visit } from 'unist-util-visit';
import { randomBytes } from 'node:crypto';

const DIAGRAM_LANGS = new Set(['mermaid']);

/**
 * 将 ```mermaid 代码块转为图表容器，客户端渲染为 SVG。
 * @returns {import('unified').Plugin}
 */
export function remarkTextDiagram() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || !node.lang || !DIAGRAM_LANGS.has(node.lang)) return;

      const diagramId = `diagram-${randomBytes(6).toString('hex')}`;
      const encodedSource = Buffer.from(node.value, 'utf8').toString('base64');

      parent.children[index] = {
        type: 'html',
        value: `
<div class="text-diagram not-prose" data-text-diagram data-diagram-id="${diagramId}">
  <button type="button" class="text-diagram__expand" data-diagram-expand aria-label="放大查看" hidden>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
  </button>
  <div class="text-diagram__preview" data-diagram-preview data-diagram-source="${encodedSource}">
    <div class="text-diagram__loading" data-diagram-loading>渲染中…</div>
  </div>
</div>`.trim(),
      };
    });
  };
}
