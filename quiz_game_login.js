player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player_q").innerHTML="Question Turn:  "+player1_name;
document.getElementById("player_a").innerHTML="Answer Turn:  "+player2_name;
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+"  :  ";
document.getElementById("player2_name").innerHTML=player2_name+"  :  ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
function Send() {
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=parseInt(number1) * parseInt(number2);
q_num="<h4>" + number1 + "X" + number2 + "</h4>";
inputBox="<br>Answer: <input type='text' id='checkBox'>";
checkButton="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
row=q_num + inputBox + checkButton;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}