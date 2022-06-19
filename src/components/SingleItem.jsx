export default function SingleItem({ item }) {
    return (
        <div className="bg-green-400 text-center m-1 p-3 hover:cursor-pointer hover:bg-green-500">Item {item.name}</div>
    )
}