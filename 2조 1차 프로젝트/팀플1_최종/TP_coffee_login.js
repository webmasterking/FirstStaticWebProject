
let inputId = document.querySelector('#loginId'); //로그인 페이지에서 가져온 아이디
let inputPw = document.querySelector('#loginPw'); //로그인 페이지에서 가져온 비밀번호

let userId = localStorage.getItem('inputid'); //회원가입 페이지에서 가져온 아이디
let userPw = localStorage.getItem('inputpassword'); //회원가입 페이지에서 가져온 비밀번호
let username = localStorage.getItem('inputname'); //회원가입 페이지에서 가져온 사용자 이름

//로그인 함수
function loginCheck(inputLoginId,inputLoginPw){

    if(inputId.value == inputLoginId && inputPw.value == inputLoginPw){
        location.href='TP_coffee_main.html';
        localStorage.setItem("logout",false);
    }

    else if(inputId.value == inputLoginId && inputPw.value != inputLoginPw){
        document.getElementById('answer').innerText ='비밀번호가 틀렸습니다';
    }

    else if(inputId.value != inputLoginId && inputPw.value == inputLoginPw){
        document.getElementById('answer').innerText ='아이디가 틀렸습니다';
    }

    else{
        document.getElementById('answer').innerText ='아이디가 존재하지 않습니다';
    }

}