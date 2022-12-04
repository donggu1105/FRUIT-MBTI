const url = "https://fruitmbti.com/";
const shareTitle = "단톡방 과일 TEST";

// 공유하기 주소 
function shareUrl() {
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = resultImg.firstElementChild.alt;

    return resultAlt;
}

// 카카오톡 공유하기
function shareKt() {
    var resultAlt = shareUrl();
    const shareURL = url + "page/result-" + resultAlt + '.html';
    const shareDesc = mbtiInfo[resultAlt].desc + mbtiInfo[resultAlt].nickName;
    const shareImage = url + "img/image-" + resultAlt + ".png";
    

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDesc,
            imageUrl:
                shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },
        buttons: [
            {
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ],
    });
}

// 페이스북 공유하기
function shareFb() {
    var resultAlt = shareUrl();
    const shareURL = url + "page/result-" + resultAlt + '.html';

    window.open(`http://www.facebook.com/sharer/sharer.php?u=${shareURL}`);
}

// 트위터로 공유하기
function shareTw() {
    var resultAlt = shareUrl();
    const shareURL = url + "page/result-" + resultAlt + '.html';

    window.open(`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareURL}`);
}

// 카카오스토리로 공유하기
function shareKs() {
    var resultAlt = shareUrl();
    const shareURL = url + "page/result-" + resultAlt + '.html';
    Kakao.Story.share({
        url: shareURL,
        text: shareTitle
    });
}