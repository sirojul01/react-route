import React, { createContext, useReducer, useState } from 'react';
import './css/styles.css'
// import TodoApp from './todo/TodoApp';
// import TodoReducer, { initialState } from './todo/TodoReducer';
import { Link, Route, Routes, BrowserRouter as Router, useNavigate, useParams} from 'react-router-dom';
import { Product } from './pages/product/Product';
import { Home } from './pages/home/Home';
import { Customer } from './pages/customer/Customer';
import NotFoundPage from './pages/NotFoundPage';
import ProductList from './pages/product/component/ProductList';

// export const RootContext = createContext()

const App = () => {
  // const [number, setNmber] = useState(0)

  // const [data, dispatch] = useReducer(TodoReducer, initialState);

  // const increment = () => {
  //   setNmber(number + 1)
  // }

  // const decrement = () => {
  //   setNmber(number -1)
  // }

  // const 
  return(
    <>
      <Router >
          <nav className="navbar navbar-expand-lg bg-primary" >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className='nav-link active' aria-current='page'> Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/link" className="nav-link">Link</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><Link className="dropdown-item" to="/customer">Customer</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/link' element={<Page/>}/>
          <Route path='/products' element={<Product/>}>
            <Route path=':id' element={<Product/>}/>
            <Route path='productList' element={<ProductList />}/>
          </Route>
          
          <Route path='/customer' element={<Customer/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </>

  )
}



const Page = () => {
  return <h1>Cok</h1>
}



export default App;