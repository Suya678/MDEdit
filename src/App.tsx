import MarkdownEditor from "./components/editor/Editor";
import "./App.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-1 min-h-0">
          <MarkdownEditor visibleDragBar={true} />
        </div>
      </main>
    </>
  );
}

export default App;
