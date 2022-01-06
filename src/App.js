// hooks-state
import { render } from 'react-dom';
import SearchParams from './SearchParams';


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />


    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById("root"));

render(<App />, document.getElementById("root"));