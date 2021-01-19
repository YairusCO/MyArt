import { ItemPreview } from "./ItemPreview";

export function ItemList({ items, onRemoveItem , onBuy}) {
    return (
        <div className="item-details">
            {items.map(item => <ItemPreview key={item._id} item={item} onBuy={onBuy} onRemoveItem={onRemoveItem} />)}
        </div>
    )
}
