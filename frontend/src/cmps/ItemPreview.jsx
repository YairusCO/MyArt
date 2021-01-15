import '../assets/imgs/01.jpg';
import '../assets/imgs/02.jpg';
import '../assets/imgs/03.jpg';
import  '../assets/imgs/04.jpg';
import x from '../assets/imgs/01.jpg'
export function ItemPreview({ item }) {
    return (
        <div>
       <ul className="clean-list">
           <li>{item.title}</li>
           <img src={x} alt="" />
           <li>{item.description}</li>
           <li>{item.price}</li>
           <li>{item.seller.fullname}</li>
       </ul>
        </div>
    )
}