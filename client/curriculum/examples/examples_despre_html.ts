import { CurriculumExamples } from "./examples";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const examples: CurriculumExamples = {
  wVlnHV6Gh7: {
    template: "static",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      activeFile: "/index.html",
    },
    files: {
      "index.html": `<section>
  <h1>FrontEnd v BackEnd</h1>
  <p> S-ar putea să fim subiectivi dar FrontEnd-ul câștigă! </p>
</section>
`,
    },
  },
  xiY1XuQLjh: {
    template: "static",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      activeFile: "/index.html",
    },
    files: {
      "index.html": `<input type="text" placeholder="Nume" />
<img 
  width="150" 
  src="https://d3tycb976jpudc.cloudfront.net/public/logo.png" />
`,
    },
  },
};

export { examples };
