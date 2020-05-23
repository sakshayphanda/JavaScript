/**
 * Comment the output of the below code

 * By: @thejavascriptguy (Like, Follow and Share)
*/

const person = {
    name: 'thejavascriptguy',
    intro: function() {
      return `Hi my insta id is "${this.name}"`;
    }
  };
  
  console.log(person.intro());
  
  /*
    Output - Hi my insta id is "thejavascriptguy"
   */
  