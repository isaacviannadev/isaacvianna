import { CodePreview } from '@/components/CodePreview';
import shiki from 'shiki';

export const metadata = {
  title: 'Dev Setup',
};

const markdown = `
# Dev Setup

- MacBook Pro 14" M2 Pro (15Gb Memory)
- 2x LG 27" Display - M27ha
- Logitech MX Master 3 Mouse
- Logitech MX Keys Keyboard
- Logitech MX Mechanical Keyboard
- Xiaomi Display Light - MI-BHR4838GL 
- Air Pods Pro - 2nd Gen (White) to Meetings

`.trim();

export default async function DevSetup() {
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon',
  });

  const code = highlighter.codeToHtml(markdown, { lang: 'md' });

  return <CodePreview code={code} />;
}
