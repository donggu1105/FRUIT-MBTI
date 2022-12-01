const body = document.querySelector('body');
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const roadingPage = document.getElementById("roadingPage");
const result = document.querySelector("#result");
const allResult = document.getElementById("allResult");
const kakao_ad = document.getElementById("kakao_ad");
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
            body.className += "qnaBody blueBg";

        }, 450)
        let qIdx = 0;

        goNext(qIdx);

    }, 450);
}

function addAnswer(text, qIdx, idx) {
    var a = document.querySelectorAll(".answerBox .box");
    var answer = document.createElement("button");
    answer.classList.add('answerList');
    answer.classList.add("my-3");
    answer.classList.add("py-3");
    answer.classList.add("mx-auto");
    answer.classList.add("fadeIn");
    a[qIdx].appendChild(answer);
    answer.innerHTML = (Number(idx) + 1)+". "+text;

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
            roadingPage.style.display = "none";
            body.className += "blueBg";
            document.querySelector("#header .title a").innerHTML += " 결과";
            result.style.display = "block";

        }, 450)
    }, 450);

    setResult();

}

function goNext(qIdx) {
    
    if (qIdx  === endPoint) {

        // 로딩페이지
        body.className = "";
        document.querySelector("#header .page").remove();
        qna.style.display = "none"
        roadingPage.style.display = "block";

        goResult();
        return;

    }

    // 제목 페이지
    var page = document.querySelector("#header .page");
    page.innerHTML = `(${qIdx + 1}/${endPoint})`;

    var q = document.querySelector('.qBox .box');
    q.innerHTML = "Q. "+qnaList[qIdx].q;

    var a = document.querySelector('.answerBox');
    var aBox = document.createElement("div");
    aBox.classList.add('box');
    a.appendChild(aBox);

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
    // 이미지
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + mbti + '.png';
    resultImg.src = imgURL;
    resultImg.alt = mbti;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    body.style.overflowY = 'auto';

    // 한줄 설명
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = mbtiInfo[mbti]["desc"]+"<b>"+mbtiInfo[mbti]["nickName"]+"</b>";
    resultDesc.style.color = mbtiInfo[mbti]["color"];
    // keyWords
    /*const resultKeyWords = document.querySelector('.resultKeyWords')
    for (let i = 0; i < mbtiInfo[mbti]["keyWords"].length; i++) {
        resultKeyWords.innerHTML += "#" + mbtiInfo[mbti]["keyWords"][i] + " ";
    }
    // resultKeyWords.innerHTML =  mbtiInfo[mbti]["keyWords"].join(" ");*/
    // 콘텐트
    const resultContent = document.querySelector('.resultContent');
    var resultConList = document.createElement('ul');
    resultContent.appendChild(resultConList);
    resultConList.innerHTML = "<li>"+mbtiInfo[mbti]["content"].join("</li><li>")+"</li>";

    const resultGoodSynergy = document.querySelector('.resultGoodSynergy')
    resultGoodSynergy.innerHTML = "<h3 class='borderDeco'>나랑 가장 잘 맞는 과일은?</h3>"
    let goodFruits = '<ul class="goodList">';
    
    for (let i = 0; i < 2; i++) { // mbtiInfo[mbti]["goodSynergyList"].length 수정

        let goodFruitMbti = mbtiInfo[mbti]["goodSynergyList"][i];
        let goodFruitImg = 'img/image-' + goodFruitMbti + '.png';

        goodFruits += `<li class="good">
                        <div class="imgArea"><img src="${goodFruitImg}"></div>
                        <div class="name" style="color:${mbtiInfo[goodFruitMbti].color};">${mbtiInfo[goodFruitMbti].desc}<b>${mbtiInfo[goodFruitMbti].nickName}</b><div>
                       </li>`;
    }
    goodFruits += "</ul>";
    resultGoodSynergy.innerHTML  += goodFruits;
    // badSynergyList
    /*const resultBadSynergy = document.querySelector('.resultBadSynergy')
    resultBadSynergy.innerHTML = "<h3>나랑 잘 맞지않는 과일은 ?</h3>"
    let badFruits = new Array();
    for (let i = 0; i < mbtiInfo[mbti]["badSynergyList"].length; i++) {
        let badFruitMbti = mbtiInfo[mbti]["badSynergyList"][i];
        let badFruit = mbtiInfo[badFruitMbti].nickName;
        badFruits.push(badFruit);
    }
    resultBadSynergy.innerHTML += badFruits.join(", ");*/
    // 희귀도
    // const resultRareRate = document.querySelector('.resultRareRate');
    // resultRareRate.innerHTML = mbtiInfo[mbti]["rareRate"];
    // goodSynergyList

}
// 모든 결과표 보기
function setAllResult(){
    goTop();
    result.style.display = "none";
    allResult.style.display = "block";
    kakao_ad.style.display = "none";
    document.querySelector("#header .title a").innerHTML = "모든 결과유형 보기";

    const allResultInner = document.querySelector("#allResult .inner");
    var allResultList = "";

    // 결과표 유형 리스트
    for(let mbti in mbtiInfo) {
        var keyWords = mbtiInfo[mbti]['keyWords'];
        
        allResultList += 
            `<div class="fruit" id="fruit_${mbti}">
                <h3 class="borderDeco" style="color:${mbtiInfo[mbti]['color']}">${mbtiInfo[mbti]['desc']}<b>${mbtiInfo[mbti]['nickName']}</b></h3>
                <div class="imgArea">
                    <img src="/img/image-${mbti}.png" alt="${mbti}">
                </div>
                <ul class="tag">`;
        // 키워드
        for( let word of keyWords){
            allResultList += "<li>#"+word+"</li>";
        }
        
        allResultList +="</ul></div>";
    }
    
    // 출력
    allResultInner.innerHTML = allResultList;

}

// 모든 결과 => 결과표로 돌아가기
function returnResult(){
    goTop();
    result.style.display = "block";
    allResult.style.display = "none";
    kakao_ad.style.display = "block";
    document.querySelector("#header .title a").innerHTML = "단톡방 과일 TEST 결과";
}

// 스크롤바 상단으로 리셋
window.onbeforeunload = function () {
    goTop();
}
// 스크롤바 상단
function goTop(){
    window.scrollTo(0, 0);
    body.scrollTo(0, 0);
}
// 테스트 다시 하기
function setBack() {
    location.reload();
}