import '../assets/imgs/01.jpg';
import '../assets/imgs/02.jpg';
import '../assets/imgs/03.jpg';
import  '../assets/imgs/04.jpg';
import '../assets/imgs/05.jpg';
import x from '../assets/imgs/01.jpg';
import Button from '@material-ui/core/Button';
export function ItemPreview({ item ,  onRemoveItem}) {
    return (

        <div>
       <ul className="clean-list">
           <li>{item.title}</li>
           <img src={x} alt="" />
           <li>{item.description}</li>
           <li>{item.price}</li>
           <li>{item.seller.fullname}</li>
       </ul>
       <Button onClick={() => { onRemoveItem(item._id) }}>Delete</Button>
        </div>
    )
}