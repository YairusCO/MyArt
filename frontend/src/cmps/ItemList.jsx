import { ItemPreview } from "./ItemPreview";


export function ItemList({ items, onRemoveItem }) {
    return (
        <div className="item-details">
            {items.map(item => <ItemPreview key={item._id} item={item} onRemoveItem={onRemoveItem} />)}
        </div>
    )
}
