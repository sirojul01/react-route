import { useParams } from "react-router-dom"

export const Product = () => {
    let params = useParams()
    return(
    <>
      <h1>Product dengan id: {params.id}</h1>
    </>) 
  }