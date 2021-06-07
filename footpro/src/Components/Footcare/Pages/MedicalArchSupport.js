import React from 'react';
import '../mystyle.css'
import bg from '../../../Assets/Images/Wallpaper1.jpg';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function MedicalArchSupport() {

function AnklePain() {
    return (
        <div class="row Pages-font-size">
        <div class="col-sm-4 justify-content-center">
        <img class="w-100 rounded mt-2" src={bg}/>
        </div>
        <div class="col-sm-8  mt-2 mb-5">
           
             <p>
             Ankle pain refers to any type of pain or discomfort in your ankles. 
             This pain could be caused by an injury, like a sprain, or by a medical condition,
 such as arthritis.<br/>
An ankle sprain is one of the most common causes of
 ankle pain-making up 85 percent of all ankle injuries. 
A sprain occurs when your ligaments (the tissues that connect bones) tear or get overstretched. 
             </p>
             <h4>Causes of Ankle Pain </h4>
             <p>For immediate at-home treatment of ankle pain, the RICE method is recommended. This includes:</p>
             <ol>
                <li>Rest — Avoid putting weight on your ankle. Try to move as little as possible
                    for the first few days. 
                   Use crutches or a cane if you have to walk or move.</li>
                <li>Ice — Begin by putting a bag of ice on your ankle for at least 20 minutes at a time.
                    Do this three to five times a day for three days after the injury. 
                    This helps reduce swelling and numb pain. 
                   Give yourself about 90 minutes between icing sessions.</li>
                <li>Compression — Wrap your injured ankle with an elastic bandage, like an ACE bandage. 
                   Do not wrap it so tightly that your ankle becomes numb or that your toes turn blue. </li>
                <li>Elevation — Whenever possible, keep your ankle raised above heart level 
                   on a stack of pillows or other type of support structure. </li>
            </ol>
            <p>
            Once your pain subsides, gently exercise your ankle by rotating it in circles. Rotate both directions, and stop if it begins to hurt. 
            You can also use your hands to gently flex the ankle up and down. 
            These exercises will return your range of motion and help exercise your ankle,
             lowering your risk of re-injury. 
<br/>
If your ankle pain is a result of arthritis, you will not be able to heal or eliminate the pain.
 However, there are ways you can manage it. It may help to:
            </p>

         <ol>
            <li>Use topical pain relievers or Non Steroidal anti-inflammatory drugs after consulting a doctor</li>
            <li>Stay physically active and follow a fitness program focusing on moderate exercise</li>
            <li>Practice healthy eating habits</li>
            <li>Stretch to maintain a good range of motion in your joints</li>
            <li>Keep your body weight within a healthy range, which will lessen stress on the joints</li>
         </ol>   

        </div>
        </div>
    );
  }


 

  return (
      <div className="container Pages-font-size">
      <h1 class="mt-5 text-center">BUNION & OVERLAPPING TOES</h1><br/>
        <h2>MEDIAL ARCH SUPPORT</h2> 
      <p>
      A hallux valgus deformity, commonly called a bunion, is when there is medial deviation of t
      he first metatarsal and lateral deviation of the great toe (hallux). The condition can lead 
      to painful motion of the joint. 
      <br/> 
Hallux valgus is the commonest forefoot deformity, with an estimated prevalence of around 30%.
 It causes symptoms on the medial edge of the foot, the sole, and the small toes. Non-operative 
 treatment may alleviate symptoms but does not correct the deformity of the big toe. 
</p> 

      <h1>ANKLE PAIN </h1>
        <AnklePain/>


      </div>
  );
}