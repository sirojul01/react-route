import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    let id = '001';
    return(
      <>
        <h1>Hello</h1>
        <button onClick={()=> navigate(`/products/${id}`)} className="btn btn-dark">Product</button>
      </>
    )
  }