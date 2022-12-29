import './App.css'
import { AjaxComponent } from './components/AjaxComponent'
import { TestComponent } from './components/TestComponent'
import { FetchComponent } from './components/FetchComponent'

function App() {

  return (
    <div className="App">
       <TestComponent />
       <AjaxComponent />
       <hr />
       <FetchComponent />
    </div>
  )
}

export default App
