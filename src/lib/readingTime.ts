const CJK_CHARS_PER_MINUTE = 400;
const ENGLISH_WORDS_PER_MINUTE = 200;

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\|[^|\n]+\|/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function estimateReadingMinutes(body: string): number {
  const cleaned = stripMarkdown(body);
  const cjkChars = (cleaned.match(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g) || []).length;
  const withoutCjk = cleaned.replace(/[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g, ' ');
  const englishWords = withoutCjk.match(/\b[a-zA-Z]{2,}\b/g)?.length ?? 0;

  const minutes = cjkChars / CJK_CHARS_PER_MINUTE + englishWords / ENGLISH_WORDS_PER_MINUTE;
  return Math.max(1, Math.ceil(minutes));
}

export function getReadingTime(body: string | undefined): string {
  if (!body?.trim()) {
    return '1 分钟阅读';
  }

  return `${estimateReadingMinutes(body)} 分钟阅读`;
}
