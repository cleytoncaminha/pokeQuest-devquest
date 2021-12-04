import { AppRoutes } from './routes'
import { createGlobalStyle } from 'styled-components'

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  
  }
  body{
   background-color: #1D63AB
}
`

export default App;
