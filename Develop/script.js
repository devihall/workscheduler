//Display current time
var presentTime = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
$("#currentDay").append(presentTime);


//save and display user input in local storage
$(".btn").on("click",function(event){
    var formInputEl = $(event.target).siblings("input").val()
    var formIdEl = $(event.target).siblings("input").attr("id");
    console.log ($(event.target).siblings("input").val())
    console.log ($(event.target).siblings("input").attr('id'))
localStorage.setItem (formIdEl, formInputEl)
localStorage.getItem (formIdEl, formInputEl)
})


// //comparing current date and time with time blocks
// var timeBlock12 = parseInt($("#block-12").data("time"));
// var timeBlock1 = parseInt($("#block-1").data("time"));
// var timeBlock2 = parseInt($("#block-2").data("time"));
// var timeBlock3 = parseInt($("#block-3").data("time"));
// var timeBlock4 = parseInt($("#block-4").data("time"));
// var timeBlock5 = parseInt($("#block-5").data("time"));


//array of blocks of time
var timeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
console.log (timeArr)

timeArr.forEach(function(hour){
  var timeBlockEl = $("block-" + hour)


  //time tracker function for comparing
  var timeNow = moment().hour();
  
  var colorClassP = 'past';
  var colorClassPr = 'present';
  var colorClassF = 'future';

  if (hour < timeNow){
    colorClassP = 'past'
  } else if (hour === timeNow){
    colorClassPr = 'present'
  } else {
    colorClassF = 'future'
  }
  timeBlockEl.addClass(ColorClass)
})





    
    // console.log(timeNow);






// var timeBlock = $("data-time")
// console.log (timeBlock)







// //parse hours into time
// $(".time-block")

// $(".time-block").each(function(){
//     var timeBlock =parseInt(data-time)
// })
// console.log(data - time);


//     //if statement to check time and add background colors

//     //future
//     if timeNow < timeBlock 
//     $(timeBlock).addClass ("future")


//     //present
//     else if timeNow
// })