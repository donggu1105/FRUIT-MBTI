const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result")
const endPoint = 12;
const select = {
    "ISTJ": 0,
    "ISTP": 0,
    "ESTP": 0,
    "ESTJ": 0,
    "ISFJ": 0,
    "ISFP": 0,
    "ESFP": 0,
    "ESFJ": 0,
    "INFJ": 0,
    "INFP": 0,
    "ENFP": 0,
    "ENFJ": 0,
    "INTJ": 0,
    "INTP": 0,
    "ENTP": 0,
    "ENTJ": 0
}



function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {

        qna.style.WebkitAnimation = "fadeIn 0.2s";
        qna.style.animation = "fadeIn 0.2s";
        setTimeout(() => {
            main.style.display = "none"
            qna.style.display = "block";

        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}

function addAnswer(text, qIdx, idx) {
    var a = document.querySelector(".answerBox");
    var answer = document.createElement("button");
    answer.classList.add('answerList');
    answer.classList.add("my-3");
    answer.classList.add("py-3");
    answer.classList.add("mx-auto");
    answer.classList.add("fadeIn");
    a.appendChild(answer);
    answer.innerHTML = text;

    // answer.innerHTML = "<img src='/img/answer_box.png'/>"


    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');

        for(let i = 0; i < children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for (let i = 0; i < target.length; i++) {
                select[target[i]] += 1;
            }
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    }, false);

}



function goResult() {

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {

        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none"
            result.style.display = "block";

        }, 450)
    }, 450);

    setResult();

}

function goNext(qIdx) {

    if (qIdx  === endPoint) {
        goResult();
        return;

    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    // 버튼 만들기
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx + 1) + '%';
}

function calResult() {


    var keys = Object.keys(select);
    var mbti = keys[0];
    var max = select[keys[0]];
    var i;

    for (i = 1; i < keys.length; i++) {
        var value = select[keys[i]];
        if (value > max) {
            max = value;
            mbti = keys[i];
        }
    }
    console.log(select)
    console.log(mbti)
    return mbti;

}

function setResult() {

    let mbti = calResult();
    // 이름
    const resultName = document.querySelector(".resultname");
    resultName.innerHTML = mbtiInfo[mbti]["nickName"];
    // 이미지
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + mbti + '.png';
    resultImg.src = imgURL;
    resultImg.alt = mbti;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    // 한줄 설명
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = mbtiInfo[mbti]["desc"];

    // 콘텐트
    const resultContent = document.querySelector('.resultContent');
    resultContent.innerHTML = mbtiInfo[mbti]["content"];

    // 희귀도
    const resultRareRate = document.querySelector('.resultRareRate');
    resultRareRate.innerHTML = mbtiInfo[mbti]["rareRate"];

    // goodSynergyList
    const resultGoodSynergy = document.querySelector('.resultGoodSynergy')
    let goodSynergyList = mbtiInfo[mbti]["goodSynergyList"];
    for (let i = 0; i < goodSynergyList.length; i++) {
        resultGoodSynergy.innerHTML += goodSynergyList[i] + "<br>"
    }

    // badSynergyList
    const resultBadSynergy = document.querySelector('.resultBadSynergy')
    let badSynergyList = mbtiInfo[mbti]["badSynergyList"];
    for (let i = 0; i < badSynergyList.length; i++) {
        resultBadSynergy.innerHTML += badSynergyList[i] + "<br>"
    }

    // keyWords


    mbtiInfo[mbti]["keyWords"];

}