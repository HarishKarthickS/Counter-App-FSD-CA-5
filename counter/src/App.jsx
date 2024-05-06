import './App.css'
import Counter from './Components/Counter'
import AllUser from './Components/AllUsers'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './Components/AddUser'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Counter/>}></Route>
          <Route path='/adduser' element={<AddUser/>}></Route>
          <Route path='/allusers' element={<AllUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
