import React from 'react';
import bg from '../../../Assets/Images/Wallpaper1.jpg';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function ToeSeparator() {

function ForeFoot() {
    return (
        <div class="row">
        <div class="col-sm-4 justify-content-center">
        <img class="w-100 rounded mt-2" src={bg}/>
        </div>
        <div class="col-sm-8  mt-2 mb-5">           
             <p>
             The forefoot includes that area of the foot also known as the ball-of- the-foot.
              The forefoot is a unique area of the foot that creates the final terminus of the foot 
              and ground at the toe-off stage of gait. The forefoot sustains a significant amount
              of load during gait and is therefore susceptible to a number of unique problems.   
              <br/><br/>
             </p>
             <h4>Symptoms  </h4>
             <p>The symptoms of forefoot pain vary with each individual forefoot problem. 
                The causes and contributing factors of forefoot pain are many and include
                 excessive time spent on the feet, poorly fitting shoes and trauma. The treatment of forefoot
                  pain is specific to each individual condition.  Forefoot pain that does not respond 
                  to a reasonable period of conservative care should be evaluated by your podiatrist or orthopedist.
                   Wearing FootPro Insoles and Footwear helps to
                 reduce the pressure on the forefoot area and greatly relieve the pain in forefoot area.
                 </p>  
        </div>
        </div>
    );
  }


 

  return (
      <div className="container">
      <h1 class="mt-5 text-center">BUNION &OVERLAPPING TOES</h1>
        <h2>LATERAL / MEDIAL WEDGE</h2>
      <p>
      A hallux valgus deformity, commonly called a bunion, is when there is medial deviation of t
      he first metatarsal and lateral deviation of the great toe (hallux). The condition can lead 
      to painful motion of the joint. 
      <br/><br/><br/><br/>
Hallux valgus is the commonest forefoot deformity, with an estimated prevalence of around 30%.
 It causes symptoms on the medial edge of the foot, the sole, and the small toes. Non-operative 
 treatment may alleviate symptoms but does not correct the deformity of the big toe. 
</p>

      <h1>FORE FOOT PAIN</h1>
        <ForeFoot/>


      </div>
  );
}