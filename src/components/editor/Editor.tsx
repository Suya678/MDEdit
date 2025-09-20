import Editor from "@uiw/react-md-editor";
import { useState, useEffect } from "react";

export default function MarkdownEditor({ visibleDragBar }) {
  const [value, setValue] = useState(defaultMarkdown);
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setColorMode(theme?.includes("dark") ? "dark" : "light");
  }, []);

  return (
    <div data-color-mode={colorMode} className="h-full w-md-editor">
      <Editor
        value={value}
        onChange={setValue}
        height="100%"
        overflow={false}
      />
    </div>
  );
}
const defaultMarkdown = `# Welcome to Marmalade! 🍊

## Basic Text Formatting

You can make text **bold**, *italic*, or ***both***. 
You can also ~~strike through~~ text.

## Lists

### Unordered List
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

### Ordered List
1. First step
2. Second step
   1. Sub-step one
   2. Sub-step two
3. Third step

## Code

Inline code: \`console.log('Hello World!')\`

Code block:
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Links and Images

[Visit our website](https://example.com)

![Alt text for image](https://via.placeholder.com/150)

## Blockquotes

> This is a blockquote
> It can span multiple lines
>> And can be nested

## Tables

| Feature | Support |
|---------|---------|
| Tables  | ✅      |
| Lists   | ✅      |
| Code    | ✅      |

## Task Lists

- [x] Create new document
- [ ] Add content
- [ ] Share with team

`;
