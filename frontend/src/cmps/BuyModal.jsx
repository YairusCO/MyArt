import { Button } from '@material-ui/core';
import React from 'react'

export function BuyModal({ order, loggedInUser }) {
    function forceDownload(link){
        var url = link.getAttribute("data-href");
        var fileName = link.getAttribute("download");
        link.innerText = "Working...";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function(){
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
            link.innerText="Download Image";
        }
        xhr.send();
    }
    return (

        <div className="modal">
            <h1>Order Details</h1>
            <p>Item: {order.item.title}</p>
            <p>Price: ${order.item.price}</p>
            <Button className="buy-btn" href="#/">Checkout & Download</Button>
        </div>

    )
}


