const url = "https://donggu.ml/";
// const url = "https://fruitmbti.com"; 이거 배포할떄 바꿔야함


function setShare() {
    var resultImg = document.querySelector("#resultImg")
    var resultAlt = resultImg.firstElementChild.alt;

    const shareTitle = "단톡방 과일 테스트"
    const shareDesc = mbtiInfo[resultAlt].desc;
    const shareImage = url + "img/image-" + resultAlt + ".png";
    const shareURL = url + "page/result-" + resultAlt + '.html';

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
    })
}
