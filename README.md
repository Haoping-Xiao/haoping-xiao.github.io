# Agent Notes

个人博客，记录 AI Agent 领域的学习心得与探索思考。

🌐 在线访问：[https://haoping-xiao.github.io](https://haoping-xiao.github.io)

## 本地开发

```bash
npm install
npm run dev
```

## 撰写文章

在 `src/content/blog/` 目录下创建 `.md` 或 `.mdx` 文件：

```mdx
---
title: "文章标题"
description: "文章摘要"
pubDate: 2025-06-17
techDomain: ["Agent Infra"]
product: ["Vercel Connect"]
---

正文内容...
```

## 技术栈

- [Astro](https://astro.build) — 静态站点生成
- [Tailwind CSS](https://tailwindcss.com) — 样式
- [MDX](https://mdxjs.com) — 富文本文章
- GitHub Pages — 部署

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。
