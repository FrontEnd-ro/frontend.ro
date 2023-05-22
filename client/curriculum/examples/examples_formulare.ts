import { CurriculumExamples } from "./examples";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const examples: CurriculumExamples = {
  G8stNLOCA3: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '350px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <label>
    <span> Username </span>
    <input type="text" name="username" required>
  </label>
  <label>
    <span> Password </span>
    <input type="password" name="password" require>
  </label>
  <button type="submit"> Login </button>
</form>
`,
      "styles.css": `html,
body {
  margin: 0;
  height: 100%;
}

body {
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  LKrsseYGYg: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '600px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <label>
    <span> Username </span>
    <input type="text" name="username" required />
  </label>
  <label>
    <span> Password </span>
    <input type="password" name="password" required />
  </label>
  <label>
    <span> Profile picture </span>
    <input type="file" name="avatar" required />
  </label>
  <label>
    <span> Birthday </span>
    <input type="date" name="birthday" required />
  </label>
  <label>
    <span> Favorite color </span>
    <input type="color" name="color" required />
  </label>
  <div class="gender">
    <label>
      <span> Male </span>
      <input value="male" type="radio" name="gender" required />
    </label>
    <label>
      <span> Female </span>
      <input value="female" type="radio" name="gender" required />
    </label>
  </div>
  <button type="submit"> Done </button>
</form>`,
      "styles.css": `html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  margin: 2em 0;
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}

/*  */
.gender {
  display: flex;
  
  label {
    margin-right: 1em;
  }
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  am5mPMGCKo: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '350px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <input 
    placeholder="Username" 
    type="text" 
    name="username" 
    required
  >
  <input 
    placeholder="Secret PIN" 
    type="password" 
    name="pin" 
    required 
    inputmode="decimal"
  >
  <input 
    type="email" 
    value="bob@frontend.ro" 
    name="email" 
    required 
    disabled
  >
  <button type="submit"> Login </button>
</form>
`,
      "styles.css": `html,
body {
  margin: 0;
  height: 100%;
}

body {
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  display: block;
  padding: 0.5em;
  font-size: 1em;
  margin-bottom: 0.5em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  eUKMBAmfBl: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '350px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <p> Ce mâncare preferi? </p>
  
  <label>
    <span> American Burger <span>
    <input checked type="radio" value="burger" name="favoriteFood">
  </label>
          
  <label>
    <span> Greek Salad <span>
    <input type="radio" value="salad" name="favoriteFood">
  </label>
      
  <hr>

  <p> Ce băutură preferi? </p>
  
  <label>
    <span> Cafea <span>
    <input checked type="radio" value="coffee" name="favoriteDrink">
  </label>
          
  <label>
    <span> Ceai <span>
    <input type="radio" value="tea" name="favoriteDrink">
  </label>
  <button type="submit"> Next </button>
</form>`,
      "styles.css": `html,
body {
  margin: 0;
  height: 100%;
}

body {
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  fkeSdRMw29: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '350px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <label>
    <span> Nume * </span>
    <input type="text" name="name" required >
  </label>
  <label>
    <span> Comentariu * </span>
    <textarea rows="5" cols="30" name="comment" required></textarea>
  </label>
  <button type="submit"> Adaugă </button>
</form>`,
      "styles.css": `html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  margin: 2em 0;
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  QovE3Y09gJ: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": ` <form>
  <label>
    <span> Country </span>
    <select name="country" required>
      <option value=""> Alege țara</option>
      <option value="ro-RO"> România</option>
      <option value="en-EN"> Anglia</option>
      <option value="en-US"> Statele Unite ale Americii</option>
    </select>
  </label>
  <button type="submit"> Register </button>
</form>`,
      "styles.css": `html,
body {
  margin: 0;
  height: 100%;
}

body {
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input,
select{
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  x3gIfbpgyx: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '400px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<form>
  <p> Input-uri fără label 👇 </p>
  <span> American Burger <span>
  <input checked type="radio" value="burger" name="favoriteFood">
          
  <span> Greek Salad <span>
  <input type="radio" value="salad" name="favoriteFood">
      
  <hr>

  <p> Input-uri cu label 👇 </p>
  
  <label>
    <span> Cafea <span>
    <input checked type="radio" value="coffee" name="favoriteDrink">
  </label>
          
  <label>
    <span> Ceai <span>
    <input type="radio" value="tea" name="favoriteDrink">
  </label>
  <button type="submit"> Next </button>
</form>`,
      "styles.css": `html,
body {
  margin: 0;
  height: 100%;
}

body {
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

input {
  padding: 0.5em;
  font-size: 1em;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
  sYko7ZaE5P: {
    template: "vanilla",
    theme: sandpackDark,
    options: {
      initMode: "lazy",
      editorHeight: '600px',
      activeFile: "/index.html",
      visibleFiles: ["/index.html", "/styles.css"],
    },
    files: {
      "index.html": `<div>
<form>
  <p> Dacă apeși ENTER în aceste inputuri formularul se va trimite 👇 </p>
  <label>
    <span> Username </span>
    <input type="text" name="username" required>
  </label>
  <label>
    <span> Password </span>
    <input type="password" name="password" require>
  </label>
  <button type="submit"> Login </button>
</form>

<hr>


<form>
  <p> Dacă apeși ENTER în aceste inputuri nu o să se întâmple nimic 😬 </p>
  <label>
    <span> Username </span>
    <input type="text" name="username" required>
  </label>
  <label>
    <span> Password </span>
    <input type="password" name="password" require>
  </label>
  <button type="button"> Login </button>
</form>

</div>`,
      "styles.css": `html,
body {
  margin: 0;
  min-height: 100%;
  box-sizing: border-box;
}

body * {
  box-sizing: border-box;
}

body {
  margin: 2em 0;
  color: #fff;
  display: flex;
  background: #282a36;
  align-items: center;
  font-family: sans-serif;
  justify-content: center;
}

form {
  width: 20em;
}

input {
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
}

label {
  display: block;
  margin: 1em 0;
}

label > span {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

button {
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #1b1b15;
}`,
      "index.js": 'import "./styles.css"',
    },
  },
};

export { examples };
