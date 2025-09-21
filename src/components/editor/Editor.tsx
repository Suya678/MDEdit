import Editor from "@uiw/react-md-editor";
import { useState, useEffect } from "react";
import { defaultMarkdown } from "../../constants/defaultMarkdown";

export default function MarkdownEditor() {
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
