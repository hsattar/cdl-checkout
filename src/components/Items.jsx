import SingleItem from "./SingleItem"

export default function Items() {

    const items = [{name: "A", price: 50}, {name: "B", price: 30}, {name: "C", price: 20}, {name: "D", price: 15}]
    
    return (
        <div className="grow">
            <div className="grid grid-cols-2">
                { items.map((item, index) => <SingleItem key={index} item={item} /> ) }
            </div>
        </div>
    )
}