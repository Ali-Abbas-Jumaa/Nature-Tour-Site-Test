//start
var $ = (s) =>  document.querySelector(s);
$(".open").addEventListener("click", () =>{
     $(".nav-list").classList.add("active"); 
});

$(".close").addEventListener("click", () =>{
    $(".nav-list").classList.remove("active"); 
});
