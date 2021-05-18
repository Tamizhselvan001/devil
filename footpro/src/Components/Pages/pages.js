import React from 'react';
import bg from '../../Assets/Images/Wallpaper1.jpg';

const Services=()=> {
return (
<div class="row container-fluid mt-3">
  <div class="col-sm-4 justify-content-center">
  <img class="w-100 rounded mt-2" src={bg}/>
  </div>
  <div class="col-sm-8  mt-2 mb-5">
      <h1>What is a paragraph? </h1>
    Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme.<br/>
    Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly.<br/>
    Imagine how much harder reading and writing would be if everything was just one long block of text.<br/>
    Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression, and they also help readers process those thoughts effortlessly.<br/>
    Imagine how much harder reading and writing would be if everything was just one long block of text.<br/>
    There’s a lot of flexibility when it comes to writing paragraphs, but if there’s one steadfast rule, it’s this: Paragraphs should relate to one main topic or point.<br/>
    The paragraph itself often contains multiple points spanning several sentences, but they should all revolve around one core theme. Just as sentences build upon each other to communicate the paragraph’s core theme, paragraphs work together to communicate the core theme of the writing as a whole. 
  </div>
</div>
);
}


export default Services;