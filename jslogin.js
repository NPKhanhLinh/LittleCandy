var current = null;
function log(info) {
    console.log(info);
    // alert(info);
}
document.querySelector('#birthday').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#birthday').addEventListener('change', function() {
    document.getElementById("txtcheck").style.visibility = "hidden";
});
document.querySelector('#submit').addEventListener('click', function(e) {
    var birthday = document.getElementById("birthday").value;
    if(birthday=="26091999")
    window.location="indexmess.html";
    if(birthday!=="26091999")
    document.getElementById("txtcheck").style.visibility = "inherit";

    
});
// document.querySelector('#submit').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: -730,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '530 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
  
// });


