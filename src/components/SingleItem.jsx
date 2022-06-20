import { useDispatch } from "react-redux"
import { addItemToBasketAction } from "../redux/actions"

export default function SingleItem({ item }) {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addItemToBasketAction(item))
    }
    
    return (
        <div className="bg-yellow-400 text-center m-1 p-3 hover:cursor-pointer hover:bg-yellow-500" onClick={handleClick}>Item {item.name}</div>
    )
}