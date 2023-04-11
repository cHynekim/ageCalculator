let bd = document.getElementById('birthday');
let ageResult = document.getElementById('age');
let btnSubmit = document.getElementById('btn');

let today = new Date();
//Date 객체 생성, param 아무것도 넣지 않으면 오늘 날짜를 return.


function toINAge(){
    let birthDate = new Date(bd.value);
    let std = today.getMonth() - birthDate.getMonth();
    console.log(std);
    let age;

    if(std > 0){
        age = today.getFullYear() - birthDate.getFullYear();
    }
    else if(std == 0){
        if(today.getDate() < birthDate.getDate()){
            age = today.getFullYear() - birthDate.getFullYear() -1;
        }
        else{
            age = today.getFullYear() - birthDate.getFullYear();
        }
    }
    else{
        age = today.getFullYear() - birthDate.getFullYear() -1;
    }

    ageResult.innerText = `${age} 살 입니다.`;

    return age;
}

btnSubmit.addEventListener('click', toINAge);
