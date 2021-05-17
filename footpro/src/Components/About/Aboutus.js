import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg from '../../Assets/Images/card-img.png';
const Aboutus=()=>{
    return(
        <div>
        <img src={bg} class="img-fluid w-100" alt="Responsive image"/>
            <div class="container text-justify mt-5">
               <h2>What is This ?</h2>
               <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
               <h2>Footcare</h2>
               <p>Our products give immediate results upon wearing and the change is noticeable immediately. Our Insoles are resilient and offer Pump effect ( Bounce effect), achieving proper blood circulation in the lower limbs. Proper blood flow helps to avoid calcification and gangrene and thereby reduces the chances of amputation in diabetics. Our Insoles also act an effective Preventive mechanism against the onset of Neuropathy in Diabetics where there is full / partial loss of sensation in the foot.</p>
               <h2>Footcare</h2>
               <p>Our Footwear and Insoles also act as a preventive method to avoid further complications in future. Even in health conscious individuals , our insoles offer the best support with proper cushioning , providing the best in comfort for your legs and foot.
                   It is also seen that regular usage improves the overall vitality and energy of people. With Improved mobility and pain relief, the person feels charged up and enthusiastic to take on the world!</p>
            </div>
        </div>
    )
}
export default Aboutus;