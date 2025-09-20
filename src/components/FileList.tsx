import { useEffect, useState } from "react";
import type { File } from "../types/FileType";

const temp = [
  {
    name: "report.md",
    content:
      "# Project Report\n\nThis is the final report for the project. It includes all findings.",
    lastModified: "2025-09-20T19:18:17.941Z",
  },
  {
    name: "notes.txt",
    content:
      "Meeting notes for the Q3 planning session. We discussed budget, timeline, and deliverables.",
    lastModified: "2025-09-20T19:18:17.941Z",
  },
  {
    name: "image.jpg",
    content:
      "This is a placeholder for the image content, which would be a base64 string in a real application.",
    lastModified: "2025-09-20T19:18:17.941Z",
  },
];
export default function FileList() {
  localStorage.setItem("files", JSON.stringify(temp));
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
      try {
        const parsedFiles = JSON.parse(storedFiles);
        setFiles(parsedFiles);
      } catch (e) {
        console.error("Failed to parse files from local storage", e);
      }
    }
  }, []);
  return (
    <ul className="menu">
      {files.map((file) => (
        <li key={file.name}>
          <a>{file.name}</a>
        </li>
      ))}
    </ul>
  );
}
