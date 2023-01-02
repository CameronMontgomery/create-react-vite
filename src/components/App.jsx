import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import esLintLogo from "../assets/eslint.svg";
import prettierLogo from "../assets/prettier.svg";
import plusSign from "../assets/plus-sign-white-tb.svg";

const App = () => {
  return (
    <>
      <div className="container center">
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <img src={plusSign} className="plus" alt="Plus sign" />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" id="vite" alt="Vite logo" />
        </a>
        <img src={plusSign} className="plus" alt="Plus sign" />
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src={esLintLogo} className="logo" alt="EsLint Logo" />
        </a>
        <img src={plusSign} className="plus" alt="Plus sign" />
        <a href="https://prettier.io/" target="_blank" rel="noreferrer">
          <img
            src={prettierLogo}
            className="logo"
            id="prettier"
            alt="Prettier Logo"
          />
        </a>
      </div>
      <div className="container center">
        <sub>
          Icons by{" "}
          <a href="http://icons8.com" target="_blank" rel="noreferrer">
            Icons8
          </a>
        </sub>
      </div>
      <div className="container col item-center">
        <h1>Creation Awaits...</h1>
        <p>
          Click on above images for more information about the individual tools.
        </p>
        <p>
          If you encounter any bugs or errors please file an issue on GitHub.
        </p>
      </div>
    </>
  );
};

export default App;
