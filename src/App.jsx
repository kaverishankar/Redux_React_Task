import './App.css'
import store from './store/store.js'
import { Provider } from "react-redux"
import Products from './Product/Product.jsx'

function App() {

  return (
    <Provider store={store}>
      <Products />
    </Provider>
  )
}

export default App
