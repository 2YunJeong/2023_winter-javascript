let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    '바위' : {
        '바위' : 'draw',
        '가위' : 'win',
        '보' : 'lose'
    },
    '가위' : {
        '바위' : 'lose',
        '가위' : 'draw',
        '보' : 'win'
    },
    '보' : {
        '바위' : 'win',
        '가위' : 'lose',
        '보' : 'draw'
    }

}

function checker(input){
    var choices = ["바위", "보", "가위"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` 컴퓨터 : <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` 유저 : <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #000000";
            result_ref.innerHTML = "승리했습니다";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #000000";
            result_ref.innerHTML = "패배했습니다";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #000000";
            result_ref.innerHTML = "비겼습니다.";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}

