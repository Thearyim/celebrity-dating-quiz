$(document).ready(function(){
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var music = $("select#music").val();

    if (age < 21){
      alert("You are not old enough to do this quiz!!!!!");
    } else {
        if (gender === 'male' && music === 'pop') {
          $("#male-pop").show();
          $("#mainpage").hide();
        } else if (gender === 'male' && music === 'rnb') {
          $("#male-rnb").show();
          $("#mainpage").hide();
        } else if (gender === 'male' && music === 'classical') {
          $("#male-classical").show();
          $("#mainpage").hide();
        } else if (gender === 'female' && music === 'pop') {
          $("#female-pop").show();
          $("#mainpage").hide();
        } else if(gender === 'female' && music === 'rnb') {
          $("#female-rnb").show();
          $("#mainpage").hide();
        } else if (gender === 'female' && music === 'classical') {
          $("#female-classical").show();
          $("#mainpage").hide();
        } else {
          alert("You dont have any soulmate, sorry.");
        }
      }
    event.preventDefault();
  });

  $(".goback").click(function(){
    $("#mainpage").show();

  });
});
