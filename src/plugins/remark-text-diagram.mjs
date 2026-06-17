import { visit } from 'unist-util-visit';
import { randomBytes } from 'node:crypto';

const DIAGRAM_LANGS = new Set(['mermaid']);

/** @param {string} value */
function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/** @param {string} lang */
function diagramLabel(lang) {
  if (lang === 'mermaid') return 'Mermaid';
  return lang;
}

/**
 * 将 ```mermaid 代码块转为可交互的文本绘图 HTML。
 * @returns {import('unified').Plugin}
 */
export function remarkTextDiagram() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || !node.lang || !DIAGRAM_LANGS.has(node.lang)) return;

      const diagramId = `diagram-${randomBytes(6).toString('hex')}`;
      const displayCode = escapeHtml(node.value);
      const encodedSource = Buffer.from(node.value, 'utf8').toString('base64');
      const langLabel = diagramLabel(node.lang);

      parent.children[index] = {
        type: 'html',
        value: `
<div class="text-diagram not-prose" data-text-diagram data-diagram-id="${diagramId}" data-diagram-lang="${node.lang}">
  <div class="text-diagram__toolbar">
    <span class="text-diagram__title">文本绘图</span>
    <div class="text-diagram__actions">
      <label class="text-diagram__control">
        <span class="text-diagram__control-label">绘图语言</span>
        <select class="text-diagram__select" disabled aria-label="绘图语言">
          <option selected>${langLabel}</option>
        </select>
      </label>
      <label class="text-diagram__control">
        <span class="text-diagram__control-label">视图</span>
        <select class="text-diagram__select" data-view-mode aria-label="视图模式">
          <option value="both" selected>展示代码和图表</option>
          <option value="code">仅展示代码</option>
          <option value="diagram">仅展示图表</option>
        </select>
      </label>
      <button type="button" class="text-diagram__fullscreen" data-fullscreen>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
        全屏
      </button>
    </div>
  </div>
  <div class="text-diagram__content" data-view="both">
    <div class="text-diagram__panel text-diagram__panel--code">
      <div class="text-diagram__code">${displayCode}</div>
    </div>
    <div class="text-diagram__panel text-diagram__panel--diagram">
      <div class="text-diagram__preview" data-diagram-preview data-diagram-source="${encodedSource}">
        <div class="text-diagram__loading" data-diagram-loading>渲染中…</div>
      </div>
    </div>
  </div>
</div>`.trim(),
      };
    });
  };
}
