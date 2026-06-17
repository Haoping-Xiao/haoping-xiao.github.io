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
  <div class="text-diagram__preview" data-diagram-preview data-diagram-source="${encodedSource}">
    <div class="text-diagram__loading" data-diagram-loading>渲染中…</div>
  </div>
</div>`.trim(),
      };
    });
  };
}
