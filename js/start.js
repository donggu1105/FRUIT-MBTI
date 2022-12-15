const body = document.querySelector('body');
const header = document.getElementById('header');
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
            kakao_ad.classList.add('topAd');
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
            kakao_ad.style.display = "block";
            header.style.display = "block";
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
        qna.style.display = "none";
        kakao_ad.style.display = "none";
        header.style.display = "none";
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
    // console.log(select)
    // console.log(mbti)
    return mbti;

}

function setResult() {

    let mbti = calResult();
    // 이미지
    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + mbti + '.png';
    kakao_ad.classList.remove('topAd');
    resultImg.src = imgURL;
    resultImg.alt = mbti;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    body.style.overflowY = 'auto';

    // 한줄 설명
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = mbtiInfo[mbti]["desc"]+"<b>"+mbtiInfo[mbti]["nickName"]+"</b>";
    resultDesc.style.color = mbtiInfo[mbti]["color"];

    // 콘텐트
    const resultContent = document.querySelector('.resultContent');
    var resultConList = document.createElement('ul');
    resultContent.appendChild(resultConList);
    resultConList.innerHTML = "<li>"+mbtiInfo[mbti]["content"].join("</li><li>")+"</li>";
   
    // goodSynergyList
    const resultGoodSynergy = document.querySelector('.resultGoodSynergy')
    resultGoodSynergy.innerHTML = "<h3 class='borderDeco'>나랑 가장 <br class='mo'/><b>잘 맞는</b> 과일은?</h3>"

    let goodFruitMbti = mbtiInfo[mbti]["goodSynergyList"][0];
    let goodFruitImg = 'img/image-' + goodFruitMbti + '.png';
    let goodFruitTxt = `${mbtiInfo[goodFruitMbti].desc}${mbtiInfo[goodFruitMbti].nickName}`;
    
    let fruitNameClass = "sort";
    if(goodFruitTxt.length > 15) fruitNameClass = "";

    let goodFruit = `<div class="imgArea"><img src="${goodFruitImg}" alt="${goodFruitMbti}"></div>
                    <div class="name ${fruitNameClass}" style="color:${mbtiInfo[goodFruitMbti].color};">${mbtiInfo[goodFruitMbti].desc}<b>${mbtiInfo[goodFruitMbti].nickName}</b></div>`;
    resultGoodSynergy.innerHTML  += goodFruit;

    // badSynergyList
    const resultBadSynergy = document.querySelector('.resultBadSynergy')
    resultBadSynergy.innerHTML = "<h3 class='borderDeco'>나랑 가장 <br class='mo'/><b>안 맞는</b> 과일은?</h3>";

    let badFruitMbti = mbtiInfo[mbti]["badSynergyList"][0];
    let badFruitImg = 'img/image-' + badFruitMbti + '.png';
    
    let badFruitTxt = `${mbtiInfo[badFruitMbti].desc}${mbtiInfo[badFruitMbti].nickName}`;
    if(badFruitTxt.length > 15) fruitNameClass = "";
    else fruitNameClass = "sort";

    let badFruit = `<div class="imgArea"><img src="${badFruitImg}" alt="${badFruitMbti}"></div>
                    <div class="name ${fruitNameClass}" style="color:${mbtiInfo[badFruitMbti].color};">${mbtiInfo[badFruitMbti].desc}<b>${mbtiInfo[badFruitMbti].nickName}</b></div>`;
    resultBadSynergy.innerHTML += badFruit;

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
    document.querySelector("#header .title a").innerHTML = "단톡방 과일 테스트 결과";
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

function goIndex() {
    location.href = "https://fruitmbti.com"

}
