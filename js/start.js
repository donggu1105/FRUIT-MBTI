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
    mbti = "ISTJ";
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

    // nickName : '<멜론>',
    //     desc: '수박과는 비슷하면서도 달라! 나만의 달콤함으로 승부한다!',
    //     content: ["전화보다는 카톡! 전화는 즉각적으로 대응해야해서 좀 곤란해요!",
    //     "매순간 카톡하긴 힘들어~ 정해진 시간에 카톡할게 나만의 원칙이 있다구요! (많이 관심가는상대면 예외)",
    //     "바빠서 미처 읽씹한 상대한테는 꼭 미안하다고 말해요! 그게 매너라고 생각해요.",
    //     "친구가 한 걱정을 들으면서 겉으론 끄덕끄덕하지만 속으로는 누가누가 좋은놈 나쁜놈인지 계산완료 끄읏~",
    //     "친한 친구들이라면 용건만 간단히 해주세요! (아무 이유 없이 대체 전화를 왜 거는 거야?)"],
    //     goodSynergyList : ['ENFP', 'ENTP', 'ISFP', 'INFP'],
    //     badSynergyList : ['ENTJ', 'INFJ', 'ENTJ', 'ESTP'],
    //     rareRate : 25,
    //     keyWords : ['책임감', '원리원칙', '고지식', '팩폭러']
    // 한줄 설명
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = mbtiInfo[mbti]["desc"];
    // 콘텐트
    const resultContent = document.querySelector('.resultContent');
    resultContent.innerHTML = mbtiInfo[mbti]["content"].join("<br>");
    // 희귀도
    const resultRareRate = document.querySelector('.resultRareRate');
    resultRareRate.innerHTML = mbtiInfo[mbti]["rareRate"];
    // goodSynergyList
    const resultGoodSynergy = document.querySelector('.resultGoodSynergy')
    resultGoodSynergy.innerHTML  = mbtiInfo[mbti]["goodSynergyList"].join("<br>");
    // badSynergyList
    const resultBadSynergy = document.querySelector('.resultBadSynergy')
    resultBadSynergy.innerHTML = mbtiInfo[mbti]["badSynergyList"].join("<br>");
    // keyWords
    const resultKeyWords = document.querySelector('.resultKeyWords')
    resultKeyWords.innerHTML = mbtiInfo[mbti]["keyWords"].join("<br>");

}