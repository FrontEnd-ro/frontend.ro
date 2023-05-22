import { CurriculumExamples } from "./examples";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const examples: CurriculumExamples = {
  WetdY3TJsU: {
    template: "static",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: "350px",
      activeFile: "/index.html",
    },
    files: {
      "index.html": `<nav>
  <ul>
    <li>
      <a href="https://FrontEnd.ro/html/containere#why">De ce avem nevoie de aceste elemente?</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#header-main-footer">Header, Main și Footer</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#nav">Nav</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#aside">Aside</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#article">Article</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#div">Div</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#importanta-containerelor">De ce e important ce container folosim?</a>
    </li>
    <li>
      <a href="https://FrontEnd.ro/html/containere#exercitii">Exerciții</a>
    </li>
  </ul>
</nav>`,
    },
  },
};

export { examples };
