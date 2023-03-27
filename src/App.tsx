import "./App.css"
// import Application from "./components/app/Application"
// import { Skills } from "./components/skills/skills"
// import { Counter } from "./components/counter/counter"
import { AppProviders } from "./providers/AppProviders"
import { MuiMode } from "./components/mui/mui-mode"

function App() {
  // const data = ["HTML", "CSS"]
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={data} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
