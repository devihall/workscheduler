
//save and display user input in local storage
$(".btn").on("click",function(event){
    var formInputEl = $(event.target).siblings("input").val()
    var formIdEl = $(event.target).siblings("input").attr("id");
    console.log ($(event.target).siblings("input").val())
    console.log ($(event.target).siblings("input").attr('id'))
localStorage.setItem (formIdEl, formInputEl)
localStorage.getItem (formIdEl, formInputEl)
})


//Display current time
var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$("#currentDay").append(now);
