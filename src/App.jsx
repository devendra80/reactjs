import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          /* for http://localhost:3000 */
          <Route path='/' element={<ListEmployeeComponent />} />
          /* for http://localhost:3000/employees */
          <Route path='/employees' element={<ListEmployeeComponent />} />
          /* for http://localhost:3000/add-employee */
          <Route path='/add-employee' element={<EmployeeComponent />} />
          /* for http://localhost:3000/edit-employee/1 */
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
          /* for http://localhost:3000/delete-employee/1 */
          <Route path='/delete-employee/:id' element={<ListEmployeeComponent />} />
        </Routes>
         
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
