import { useEffect, useState } from "react"
import Items from "./components/Items"
import Pricing from "./components/Pricing"

export default function App() {

  const [itemsinBasket, setItemsInBasket] = useState([])

  useEffect(() => {
    console.log(itemsinBasket)
  }, [itemsinBasket])

  return (
    <div className="flex">
      <Items setItemsInBasket={setItemsInBasket} />
      <Pricing itemsinBasket={itemsinBasket} />
    </div>
  )
}