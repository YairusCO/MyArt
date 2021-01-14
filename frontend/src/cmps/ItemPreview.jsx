
export function ItemPreview({ item }) {
  
    return (
        <div>
        
       <ul>
           <li>{item.title}</li>
           <li>{item.description}</li>
           <li>{item.price}</li>
           <li>{item.seller.fullname}</li>
           <img src={item.imgUrl} alt="" />
       </ul>
        </div>
       
    )
}