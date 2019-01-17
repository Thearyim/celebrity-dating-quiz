$(document).ready(function(){
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var music = $("select#music").val();

    if (age < 21){
      alert("You are not old enough to do this quiz!!!!!");
    } else {
        if (gender === 'male' && music === 'pop') {
          $("p#result").after('<img src="img/male-pop.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else if (gender === 'male' && music === 'rnb') {
          $("p#result").after('<img src="img/male-rnb.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else if (gender === 'male' && music === 'classical') {
          $("p#result").after('<img src="img/male-classical.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else if (gender === 'female' && music === 'pop') {
          $("p#result").after('<img src="img/female-pop.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else if(gender === 'female' && music === 'rnb') {
          $("p#result").after('<img src="img/female-rnb.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else if (gender === 'female' && music === 'classical') {
          $("p#result").after('<img src="img/female-classical.jpeg"/> <br/>')
          $("#output").show();
          $("#mainpage").hide();
        } else {
          alert("You have no soulmate, sorry.");
        }
      }
    event.preventDefault();
  });

  $(".goback").click(function(){
    $("#mainpage").show();
    //$("#output").hide();
    location.reload();
  });
});
