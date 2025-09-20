import { useEffect, useState } from "react";
import { SwatchBook } from "lucide-react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">
        <SwatchBook />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm overflow-y-auto max-h-50"
      >
        <ThemeList />
      </ul>
    </div>
  );

  function ThemeList() {
    const daisyuiThemes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
      "caramellatte",
      "abyss",
      "silk",
    ];

    return (
      <ul>
        {daisyuiThemes.map((theme) => (
          <li key={theme}>
            <a onClick={() => setTheme(theme)}>{theme}</a>
          </li>
        ))}
      </ul>
    );
  }
};

export default ThemeChanger;
