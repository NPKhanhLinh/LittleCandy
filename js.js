!function(){function n(n){console.log(n)}function t(){e.load(),e.play()}var e=document.getElementById("bgmusic");e.addEventListener("loadstart",(function(){n("loadstart")}),!1),e.addEventListener("loadeddata",(function(){n("loadeddata")}),!1),e.addEventListener("loadedmetadata",(function(){n("loadedmetadata")}),!1),e.addEventListener("canplay",(function(){n("canplay")}),!1),e.addEventListener("play",(function(){n("play"),window.removeEventListener("touchstart",t,!1)}),!1),e.addEventListener("playing",(function(){n("playing")}),!1),e.addEventListener("pause",(function(){n("pause")}),!1),window.addEventListener("touchstart",t,!1),window.addEventListener("touchstart",(function(){$("div").on("click",(function(){$(this).addClass("no-hover")}))}),!1),e.src="img/mp3file.mp3"}();var colors1=["#ed3f1c"],colors=["#e3e309"];function frame(){confetti({particleCount:1,angle:60,spread:55,origin:{x:0},colors:colors}),confetti({particleCount:1,angle:120,spread:55,origin:{x:1},colors:colors1}),Date.now()<Date.now()+11&&requestAnimationFrame(frame)}window.onload=frame();