

$(".btn").on("click",function(event){
    var formInputEl = $(event.target).siblings("input").val()
    var formIdEl = $(event.target).siblings("input").attr("id");
    console.log ($(event.target).siblings("input").val())
    console.log ($(event.target).siblings("input").attr('id'))
localStorage.setItem (formIdEl, formInputEl)
})