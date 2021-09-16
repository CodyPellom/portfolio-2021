
var aboutSectionID = "aboutSection";
var colorBgNum = 0;
var textColorNum = 0;
var colorBgs = [
    "#33FF8A",
    "#33FFA5",
    "#33FFD5",
    "#33D1FF",
    "#33E2FF",
    "#33A5FF",
    "#335EFF",
    "#5D33FF",
    "#9D33FF",
    "#C933FF"
]

var textColors = [
    "#5D33FF",
    "#33D1FF",
    "#ffffff",
    "#9D33FF",
    "#33FFA5",
]
var skills1 = document.getElementById('skills-square-1');
var skills2 = document.getElementById('skills-square-2');
var skills3 = document.getElementById('skills-square-3');

function changeBG(id) {    
    var div = document.getElementById(id);
    div.style.backgroundColor = colorBgs[colorBgNum];
}

function changeTextColor(id) {
    id.style.color = textColors[colorBgNum]
}

setInterval(function () {
    colorBgNum++
    textColorNum++
    changeBG(aboutSectionID);
    if(colorBgNum === 9) {
        colorBgNum = 0;
    }
}, 3000);

var skillsSec = document.querySelector('#skills-section');
/**This function returns true if element is visiable */

// function isElementVisible(el) {
//     var rect     = el.getBoundingClientRect(),
//         vWidth   = window.innerWidth || document.documentElement.clientWidth,
//         vHeight  = window.innerHeight || document.documentElement.clientHeight,
//         efp      = function (x, y) { return document.elementFromPoint(x, y) };     

//     // Return false if it's not in the viewport
//     if (rect.right < 0 || rect.bottom < 0 
//             || rect.left > vWidth || rect.top > vHeight)
//         return false;

//     // Return true if any of its four corners are visible
//     return (
//           el.contains(efp(rect.left,  rect.top))
//       ||  el.contains(efp(rect.right, rect.top))
//       ||  el.contains(efp(rect.right, rect.bottom))
//       ||  el.contains(efp(rect.left,  rect.bottom))
//     );
// }

// console.log(isElementVisible(skillsSec));

// $(document).ready(function(){
//     $(window).scroll(function(){
//         // if (isElementVisible(skillsSec)) {
//         //     // The element is visible, do something
//         //     skills1.style.color = "red";
//         //     skills2.style.color = "red"
//         //     skills3.style.color = "red"
//         // } else {
//         //     // The element is NOT visible, do something else
//         // }
//     });
// });
/**Scroll to Links */
$(document).ready(function(){
    $("#githubLink").on('click', function(event) {
        event.preventDefault();
        var hash = $("#github-section");
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 0, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
        //   window.location.hash = hash;
        });
      
    });
  });