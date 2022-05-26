player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() 
{
    number_1 = document.getElementById("Number_1").value;
    number_2 = document.getElementById("Number_2").value;

    question_word = number_1 + " X " + number_2
    input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check()
{
    answer = number_1*number_2;
    
    if(answer==word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}