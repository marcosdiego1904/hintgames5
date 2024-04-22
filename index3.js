let yes = document.querySelector("#yes");
let no = document.querySelector("#no")
function firstQuiz(test,answer,test2,answer2){
  $(".leave").hide();
    $(".input").hide();
    $(".inputs2").hide();
    $(".hintexts").text(test[0].text);
    $(".hintn").text(test[0].hint)
    var currentHintIndex = 1; 
    currentHintIndex
    $(".next").click(function() {
      if (currentHintIndex < test.length) {
        $(".hintexts").text(test[currentHintIndex].text);
        $(".hintn").text(test[currentHintIndex].hint); 
        currentHintIndex++; 
      } else {
       
        $(".hintexts").text("No more hints available.");
      }
    });
    let submitBut = document.querySelector(".subBut");
    submitBut.addEventListener("click",function(){
        let AnswerValue = $(".inputAnswer").val();
        let validation = AnswerValue.toLowerCase();
        console.log(validation)
        $(".inputAnswer").val("")
        if(validation == answer){
            $(".showans2").addClass("showans")
            $(".dec").text("Nice Job!")
            $("#goback").hide();
            $(".input").show();
            $(".enter").text(`That's correct!`)
            $(".enter2").text(`The answer is ${answer}`)
            $(".submain").hide();
            $(".showans2").hide();
            yes.addEventListener("click",function(){
              $(".input").hide();
              $("#goback").show();
              $(".submain").show();
              $(".showans2").show();
                secondquiz(test2,answer2);
            })
            no.addEventListener("click",function(){
              $(".input").hide();
              $(".leave").show();
              $("#goback").show();
            })  
            }
        else{
            $(".showans2").addClass("showans")
            $(".dec").text("Wrong Answer")
        }
    })
    $(".submain").css("visibility","visible");
    
  }
function secondquiz(test,answer){
  $(".inputs").hide();
  $(".inputs2").show();
  $(".hintexts").text(test[0].text);
  $(".hintn").text(test[0].hint)
  var currentHintIndex2 = 1; 
  currentHintIndex2
  $(".next2").click(function() {
    if (currentHintIndex2 < test.length) {
      $(".hintexts").text(test[currentHintIndex2].text);
      $(".hintn").text(test[currentHintIndex2].hint); 
      currentHintIndex2++; 
    } else {
     
      $(".hintexts").text("No more hints available.");
    }
  });
  let submitBut = document.querySelector(".subBut2");
  submitBut.addEventListener("click",function(){
      let AnswerValue = $(".inputAnswer2").val();
      let validation = AnswerValue.toLowerCase();
      console.log(validation)
      $(".inputAnswer2").val("")
      if(validation == answer){
        $(".showans2").addClass("showans")
        $(".dec").text("Nice Job!")
        $(".input").show();
        $(".enter").text(`That's correct!`)
        $(".enter2").text(`The answer is ${answer}`)
        $(".submain").hide();
        $(".showans2").hide();
          $(".leave").show();
          $(".input2").hide();
          
           
          /*let prompt1 = prompt("do you want to continue?");
          if(prompt1 == "yes"){
            $(".submain").hide();
            $(".showans2").hide();
            firstQuiz(peter,"peter");
            
          }*/
      }else{
          $(".showans2").addClass("showans")
          $(".dec").text("Wrong Answer")
      }
  })
  $(".submain").css("visibility","visible");
}



$(document).ready(function() {
  firstQuiz(paul,"paul",david,"david");
   $("#easy").click(function(){
    
    $(".levelbut").hide();
 
   })
   $("#medium").click(function(){
    firstQuiz(peter,"peter",john,"john");
    $(".levelbut").hide();
   })
   $("#hard").click(function(){
    firstQuiz(paul,"paul",david,"david");
    $(".levelbut").hide();
   })

  /* $(".t1").click(function(){
    firstQuiz(peter,"peter");
    $(".levelbut").hide();
   })*/
    //
  });