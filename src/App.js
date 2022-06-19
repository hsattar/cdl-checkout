import { useState } from "react"
import Items from "./components/Items"
import Pricing from "./components/Pricing"

export default function App() {

  const [itemsinBasket, setItemsInBasket] = useState([])

  return (
    <div className="flex">
      <Items />
      <Pricing itemsinBasket={itemsinBasket} />
    </div>
  )
}