import React from 'react'
import bg from '../../../Assets/Images/card-img.png';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Page() {
return (
<div class="media  container">
  <img class="align-self-start mr-3 w-25" src={bg} alt="Generic placeholder image"/>
  <div class="media-body">
    <h5 class="mt-0">Top-aligned media</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  </div>
</div>
    )
}

export default Page
