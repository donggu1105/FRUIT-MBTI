const qnaList = [
  {
    q: '1년동안 소식이 없던 단톡방에 메시지가 하나 올라 왔을 때 나의 반응은? ',
    a: [
      { answer: '(뭐지... 이방 죽은 거 아니였어?) 누가 답장할 때 까지 기다린다.', type: ['INFP', 'ISFP', 'INFJ', 'ISFJ'] },
      { answer: '뭐야 오랜만이네 하면서 바로 답장을 보낸다. ', type: ['ENFP', 'ESFP', 'ENTP', 'ESTP'] },
      { answer: '진동벨만 울리는 핸드폰만 확인 후 일단 내 할일 한다. ', type: ['INTJ', 'INFJ', 'ISTJ', 'ISFJ' ] }
    ]
  },
  {
    q: '친구들과 모일 약속 장소를 정하고 있다. 나의 반응은?',
    a: [
      { answer: '어디든지 별로 안 중요하니까 가자는 데로 간다. ', type: ['ESTP', 'ISTP', 'ENTP', 'INTP', 'ENFP', 'INFP', 'ESFP', 'ISFP'] },
      { answer: '약속 장소를 여러 개 보내고 일정을 정한다. ', type: ['ESTJ', 'ISTJ', 'ENTJ', 'INTJ', 'ENFJ', 'INFJ', 'ESFJ', 'ISFJ'] },
    ]
  },
  {
    q: '단톡방에서 친구들끼리 엽사 배틀이 붙었다. 나의 행동은?',
    a: [
      { answer: 'ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 웃기만 한다.', type: ['INFP', 'INFJ', 'INTJ'] },
      { answer: '읽어보고 애들 또 이러네 하고 답을 안 한다.', type: ['INTP', 'ISTJ']},
      { answer: '질 수 없지. 더 웃긴 엽사를 찍기 위해 카메라를 킨다.', type: ['ENFP', 'ESTP', 'ENTP', 'ENTJ'] }
    ]
  },
  {
    q: '친한 친구 단톡방에서 OO이 가 오늘 일때문에  힘들어서 퇴사를 한다고 했다.  뭐라고 답장할까?',
    a: [
      { answer: '그게 현실이야 임마 ㅋㅋ 술이나 먹자', type: ['ESTJ', 'ENTJ', 'ESFP', 'ISTJ', 'INTP', 'ISTP', 'ENTP'] },
      { answer: '많이 힘들어? T.T하면서 공감해준다.', type: ['ENFJ', 'ESFJ', 'ISFJ', 'ENFP', 'ISFP', 'INFP']},
      { answer: '힘이든 구체적인 이유를 물어보고 조언을 말해준다. ', type: ['INTJ', 'INFJ', 'ENFJ'] },
    ]
  },
  {
    q: '단톡방에서 친구들과 이야기하는 중 한 친구가 은근히 계속 나를 무시하는 말투다. 나의 반응은? ',
    a: [
      { answer: '개인 톡으로 따로 무시하는 이유를 물어본다.', type: ['ENFJ' ,'ISFJ', 'INFJ' ,'ESTP', 'ENTJ'] },
      { answer: '(니까짓 게 뭔데 나를 무시해?) 단톡방에서 직접적으로 물어본다.', type: ['ENTP', 'INTP', 'ISTJ', 'ESFJ','ISFP','ESTJ']},
      { answer: '뭐지? 기분나쁘네... 혼자서 생각한다.', type: ['ENFP', 'INTP', 'ISTP','INFP','INTJ'] },
    ]
  },

  {
    q: '단톡방에 친구가 민감한 사회문제를 공유했다. 뭐라고 반응할까? ',
    a: [
      { answer: '친구들 의견에 맞장구만 치고, 솔직한 내 의견은 말하지 않는다.', type: ['ISFJ', 'INFJ', 'INTP', 'ISFP'] },
      { answer: '(민감한 주제는 ㄴㄴ) 주제를 바꾸거나 단호하게 이야기하지 말자고 한다.', type: ['ENFJ', 'ESFP', 'ENTJ', 'ISTJ'] },
      { answer: '의견이 있으면 말하고 없으면 조용히 있는다.', type: ['INFP', 'ENFP', 'INTJ', 'ISTP', 'ESFJ'] },
      { answer: '물만난 고기처럼 대화를 즐긴다.', type: ['ESTP', 'ENTP', 'ESTJ'] }
    ]
  },
  {
    q: '단톡방에서 한 친구가 나갔을 때 나의 반응은?',
    a: [
      { answer: '나간 친구에게 갠톡으로 무슨 일이 있냐고 물어본다. ', type: ['ESFJ', 'ENFJ', 'INTJ', 'ENTJ'] },
      { answer: '아무 말 안 한다.', type: ['INTP', 'ISTP', 'ISFP', 'ISFJ', 'ISTJ' ] },
      { answer: '친구가 나갈만한 이유가 있었나 생각해본다.', type: ['INFP', 'ENFP', 'ENTP', 'INTJ', 'INFJ'] },
      { answer: '바로 다시 초대한다.', type: ['ESTP', 'ESFP', 'ESTJ'] }
    ]
  },
  {
    q: '단톡방 카톡이 많이 쌓여있는 걸 확인했을 때 내 반응은?',
    a: [
      { answer: '내용을 다 확인한다.', type: ['INFJ', 'INTJ', 'ESTJ', 'ENTJ' , 'ISTJ' ] },
      { answer: '내가 태그 된 것만 본다.', type: ['ESFP', 'ISTJ', 'ENTP'] },
      { answer: '답장 하기 귀찮으니 일단 미뤄둔다.', type: ['ISTP', 'ISFP', 'ENFP', 'INTP', 'ENFJ' ] },
      { answer: '이전 메시지는 안 읽고 뒷 북 (맞장구) 친다.', type: ['INFP', 'ESFJ', 'ISFJ'] }
    ]
  },
  {
    q: '단톡방에서 친구가 재미있는 영상이나 짤방을 공유했을 때 내 반응은?',
    a: [
      { answer: '나중에 보고 답하려다가 까먹는다.', type: ['ISFP', 'INTP', 'ISTP' ] },
      { answer: '다 확인하고 리액션을 해준다.', type: ['ENFP', 'INFP', 'ENFJ', 'ENTJ', 'ESFJ'] },
      { answer: '나도 웃긴 짤방으로 대답한다.', type:  [ 'ENFP', 'ENTP', 'ESFP', 'ENTJ', 'ESFJ' ] },
      { answer: '(이건 뭐지?) 그 짤방 뜻인지 물어본다.', type:  [ 'INTJ', 'INFJ', 'INTP' ] }
    ]
  },
  {
    q: '단톡방에서 친구가 밸런스 게임 문제를 냈을 때 내 반응은? (ex. 똥맛 된장 먹기 vs. 된장같은 똥 먹기)',
    a: [
      { answer: '말도 안되는 소리하고있네 답할 가치가없다. ', type: ['ISFP', 'ISTP', 'ISFJ', 'ISTJ'] },
      { answer: '상상을 해보고 떠오르는 대로 답을 해준다. ', type: ['ENFP', 'ENTP', 'ENFJ', 'ENTJ', 'INFP' ] },
      { answer: '뭐가 더 맛있냐고 물어본다.', type: [ 'INTP', 'INTJ', 'INTJ' ] }
    ]
  },
  {
    q: '누군가가 뜬금없는 이야기를 해서 갑분싸가 되었다. 내 반응은?',
    a: [
      { answer: '이유가 무엇이든, 답장을 씹는다.', type: ['ENFP','ENFJ','INFJ','INFP'] },
      { answer: '민망하지않게 호응해준다.', type: ['ESFP', 'ESFJ', 'ISFP', 'ISFJ'] },
      { answer: '다른이야기로 얼른 화제를 돌린다.', type: ['ENTP','ENTJ','INTP','INTJ'] },
      { answer: '진심으로 궁금해서 왜 그런 이야기를 하는지 묻는다. ', type: ['ISTJ','ISTP','ESTP','ESTJ'] },
    ]
  },
  {
    q: '협동 해야하는 조별과제 톡방에서의 행동은?',
    a: [
      { answer: '눈치 챙기기 1등. 눈치 보며 할 일을 충실히 한다.', type: ['INFP', 'ISFJ', 'ENFJ', 'ISFP'] },
      { answer: '조별과제도 중요하지만, 일단 친목 다져다져~', type: ['ENFP', 'ENTP', 'ESFP', 'ESFJ'] },
      { answer: '묵언수행이 과제. 일단 각자 할 일에 충실히 하자', type: ['INTJ', 'INFJ', 'ISTP', 'ISTJ'] },
      { answer: '똑바로 일 안하면 ppt에 너 이름이 없을 거야', type: ['ESTP', 'INTP', 'ENTJ', 'ESTJ'] }
    ]
  }
]

const mbtiInfo = {
  "ISTJ": {
      nickName : '멜론',
      color : '#60C96F', 
      desc: '달콤함으로 승부할거지롱 ',
      content: ["전화보다는 카톡! 전화는 즉각적으로 대응해야 해서 좀 곤란해요!",
                "매 순간 카톡 하긴 힘들어~ 정해진 시간에 카톡 할게 나만의 원칙이 있다고요! (많이 관심 가는 상대면 예외)",
                "바빠서 미처 읽씹한 상대한테는 꼭 미안하다고 말해요! 그게 매너라고 생각해요. ",
                "친구가 한 걱정을 들으면서 겉으론 끄덕끄덕하지만 속으로는 누가누가 좋은 놈 나쁜 놈인지 계산 완료! 끝이에요~",
                "친한 친구들이라면 용건만 간단히 해주세요! (아무 이유 없이 대체 전화를 왜 거는 거야?)"],
      goodSynergyList : ['ENFP', 'ENTP', 'ISFP', 'INFP'],
      badSynergyList : ['ENTJ', 'INFJ', 'ENTJ', 'ESTP'],
      rareRate : 25,
      keyWords : ['책임감', '원리원칙', '젠틀맨', '부드러움', '안정적']
    },

  "ISTP": {
    nickName : '키위',
    color : '#73915A',
    desc: '껍질속에 숨기고 있는 다재다능 끼쟁이 ',
    content: ["단톡방 알림은 당연히 꺼야 해요.(중요한 공지 관련 된 건 뺴고) ",
              "ㅇㅋ, 왜?, 어, ㅋㅋㅋ, 그래, 몰라, ? , ㅇㅇ, 떙큐 등을 자주 써요.",
              "친한 친구라면 딱히 할 말 없으면 가끔 읽씹 할 때가 있어요.",
              "입에 발린 말은 절대 노노. 쓸데없는 권위의식이나 허례허식은 싫어요.",
              "상대방이 카톡을 안읽씹 하는 것보단 읽씹이 나아요. 그래도 읽씹은 내 카톡을 확인했다는 뜻이잖아요."],
    goodSynergyList : ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ'],
    badSynergyList : ['ENFP', 'INFP', 'ISFP', 'ISTJ'],
    rareRate : 9,
    keyWords : ['용건만간단히', '단답', '다재다능', '안읽씹보단읽씹', '무관심']
  },

  "ESTP": {
    nickName : '코코넛',
    color : '#896464',
    desc: '나서기 좋아하는 엄청난 활동가 ',
    content: ["자신에 대한 믿음이 강한 편이에요. 그리고 긍정적인 태도와 에너지는 주변 사람들을 끌어모으는 매력이에요!",
              "사회적 거리 두기 최약 형. 사람들이랑 있는 게 제일 좋아요. 그래서 그런지 사람 파악 잘하고 눈치가 참 빨라요.",
              "재미있는 건 주변에 항상 잘 전파해요. 하지만 본인은 1시간 만에 질려서 이미 안하고 있어요.",
              "귀여운 말투, 애교 그런 거 없어요. 음슴체가 좋아요! 안 친한 사람이라면 상대방한테 맞춰줘요.",
              "친한 사람이라면, 카톡은 많이 안 하지만 자주 만나는 편이에요."],
    goodSynergyList : ['INFJ', 'INTJ', 'ENFJ', 'ENTJ'],
    badSynergyList : ['INFP', 'ENFP', 'ESTJ', 'ENTP'],
    rareRate : 6,
    keyWords : ['활동가', '리더', '음슴체', '친화력', '추진력']
  },

  "ESTJ": {
    nickName : '수박',
    color : '#2C8059',
    desc: '많은 사람들을 아우르는 ',
    content: ["주변 사람들을 잘 이끌어서 최상의 결과물로 잘 이끌어내는 당신은 전형적인 리더에 맞춤형 인재에요.",
              "외로움은 별로 타지 않아요. 남에게 관심보다는 나한테 집중하는 게 좋아요.",
              "내 사람에게는 헌신적이고 책임감 있는 스타일이에요. 이성친구로 둔다면 데이트 계획은 걱정 없어요.",
              "토론과 논쟁을 좋아해서 조금만 진지하게 이야기해도 주변 사람들이 ‘너... 화났어?’라고 말하기도 해요. 하지만 사실은 논리적인 이야기를 좋아할 뿐이에요.",
              "성격이 직설적이라서 본인 아랫사람이나 주변 사람들에게 쓴소리를 잘해요.(모르는 사람이라면 알바야?)"],
    goodSynergyList : ['INFP', 'ISFP', 'INTP', 'ENTP'],
    badSynergyList : ['INFJ', 'ENFJ', 'ESTP', 'ENTJ'],
    rareRate : 15,
    keyWords : ['헌신적', '젊은꼰대', '자기관리', '솔루션충', '엄격한 관리자']
  },

  "ISFJ": {
    nickName : '귤',
    color : '#FF8E3C',
    desc: '단톡방? 아니 그냥 내방에서 까먹자 ',
    content: ["내향적이면서 외향적인 성격이 묻어나요! 나서는 성격은 아니에요 하지만 관심받는 것은 오히려 좋아해요.",
              "활성화 단톡방은 주로 소수! 여러 사람 많이 만나기보다는 찐으로 친한 인맥을 만들어요! 소수의 단톡방을 선호해요.",
              "연락이 안될 때 주로 자고있어요!",
              "사적인 선톡은 놉! 만약 선톡이 왔다면 엄청난 용기를 칭찬해 줘요.",
              "평소에도 단톡방에서도 말을 조심스럽게 해요 다른 사람들의 시선이나 생각을 한 번 더 생각해서 말을 조심스럽게 표현해요"],
    goodSynergyList : ['ENTP', 'ENFP', 'INTP', 'ISTP'],
    badSynergyList : ['ENTJ', 'INTJ', 'ISFP', 'INFJ'],
    rareRate : 8,
    keyWords : ['칭찬꾼', '단톡방 비타민', '배려', '숨은관종', '쿠크다스']
  },

  "ISFP": {
    nickName : '딸기',
    color : '#FE7077',
    desc: '톡이 많이와서 정신이 알딸딸 ',
    content: ["타인의 대한 공감이나 이해가 많아요! ",
              "단톡방에서 거의 존재감을 드러내지 않아요! 사람이 많은 단톡방에서는 연락이 거의 안돼요.",
              "싸움이나 분쟁은 싫어하고 조화롭게 지내려고 노력해요.",
              "톡 방에서 자신의 생각이나 의견을 내는 것을 어려워해요 때문에 많은 사람들은 답답하다고 생각할 수 있어요.",
              "연락이 안 되는 이유는 대부분 보내야지~ 하고 까먹고 못 보내요! 혹은 자기만의 시간이 방해되면 답장을 잘 하지 않아요."],
    goodSynergyList : ['ENTJ', 'ESTJ', 'INTJ', 'ISTJ'],
    badSynergyList : ['ENTP', 'INTP', 'ISFJ', 'ISTP'],
    rareRate : 7,
    keyWords : ["프로공감러", "온화함", "귀찮음", "은근고집", "겸손"]
  },

  "ESFP": {
    nickName : '체리',
    color : '#F46F9A',
    desc: '세상은 놀거 투성이! 정신들 체리라.. ',
    content: ["단톡방 인싸는 바로 나 ! 자기가 겪는 모든 일들은 톡으로 전달해요. 재밌는 짤 이나 웃긴 얘기도 톡 방으로 바로 전달해요.",
              "상대가 좋아하는 것을 잘 캐치해요. 톡 방에서 적재적소에 사람들의 기분들도 잘 캐치해서 친구들에게 꼭 필요한 유형이에요.",
              "나는야 이모티콘 부자. 따로 친구가 선물해 주지 않아도 제가 좋아하는 건 다 갖고 있어요.  이모티콘으로만 대화하는 것도 재미있어요.",
              "안읽씹보다는 읽씹이 기분 나빠요. 안읽씹은 사정이 있겠다고 생각할 수 있는데 읽씹은 서운하잖아요.",
              "카톡이 많이 쌓여있으면 읽기가 귀찮아요.  그래도 지난 카톡 방을 보며 추억 팔이를 하고 싶어서 카톡방을 정리하지는 않아요."],
    goodSynergyList : ['INTJ', 'INFJ', 'ENTJ', 'ENFJ'],
    badSynergyList : ['INTP', 'ENTP', 'ENFP', 'ESFJ'],
    rareRate : 5,
    keyWords : ['프로짤방러', '카톡방 댕댕이', '이모티콘 부자', '팔랑귀']
  },


  "ESFJ": {
    nickName : '바나나',
    color : '#FFCB13',
    desc: '친절한 나한테 ',
    content: ["사람에 대한 정이 많아서 선톡을 잘하고, 의미 없는 대화에도 잘 맞춰줘요.",
              "바빠서 못 본 게 아니면 최대한 빨리 답장해요!",
              "관계를 잘 유지하는 걸 중요하게 생각해요. 어느 날 단톡 방을 만들어 은근히 모임을 주도하죠.",
              "매너가 좋지만 가까운 사람에게는 때때로 오지랖퍼~ 문제해결 능력이 좋아요.",
              "단톡방친구의 생일을 기억하고 먼저 축하해 줘요! 선물도 잘 챙겨주죠.",
              "눈치가 빠르고 맞추는 걸 잘해서 각 단톡방에서 자신이 할 수 있는 역할을 연기해요."
    ],
    goodSynergyList : ['ISTP', 'INTP', 'ESTP', 'ESFP'],
    badSynergyList : ['ISTJ', 'ESTJ', 'ISFJ', 'ENTJ'],
    rareRate : 5,
    keyWords : ['사랑꾼', '좋은게좋은거야', '동글동글', '친절매너', '오지라퍼']
  },


  "INFJ": {
    nickName : '파인애플',
    color : '#F4AD57',
    desc: '철벽이지만 알고 보면 겉바 속촉 ',
    content: ["생각이 복잡하고 타인의 기분을 금방 읽어내서 남들보다 에너지가 금방 바닥이 나요. 카톡을 하면 빨리 끝내고 에너지를 충전하고 싶어요.",
              "좋아하는 사람들 카톡이나 일 처리 카톡은 칼 답이지만 대부분은 알림을 꺼두고 여유가 생길 때만 봐요.",
              "분위기를 맞추는 걸 중요하게 생각해서 너무 딱딱하고 진지하면 이모티콘과 물결을 붙여요.",
              "단톡방의 오은영 선생님!  친구가 힘든 일이 있을 때 경청하고 지지해 주는 단단함도 있어요.",
              "이성적이지만 공감 능력이 좋아서, 답장을 하기 애매하다고 생각이 들더라도  ‘그럴 수 있지’ 또는 ‘그렇구나’ 등의 반응으로 답장을 해요."],
    goodSynergyList : ['ESTP', 'ESFP', 'ISTP', 'INTP'],
    badSynergyList : ['ESTJ', 'ESTJ', 'INFP', 'ISFJ'],
    rareRate : 2,
    keyWords : ["단톡방오은영", "약자를 돕자", "타인 기분에 예민", "청개구리", "겉바속촉"]
  },

  "INFP": {
    nickName : '포도',
    color : '#6C5CC5',
    desc: '생각이 알알이 많은 ',
    content: ["내 감정이 네게 전해지길..! 문자만으로는 카톡이 딱딱하게 느껴져서 ㅋㅋ,ㅠㅠ 또는 이모티콘을 사용함으로써 감정을 가득 실어내려고 애써요.",
              "답장을 빨리 하려고 노력하지만  에너지 소모가 커서 답장하는것을 미루고는 해요. 하지만 미루더라도 뒤늦게 답장은 꼭 합니다. ",
              "공적인 톡방에서는 먼저 말을 잘 안해요. 다만 누군가의 선톡에 아무도 답장이 없을경우에는 답장을 하는 경우가 많아요.",
              "톡방 대화에 낄지 말지 고민이 되거나 바쁜상황일때는 답장을 하지 못하더라도 톡방에 숫자1을 없애면서 나중에 읽어야겠다라고 생각해요",
              "친한친구들끼리 모인 단톡방에서 먼저 용건을 이야기 할 상황에는 단톡방에 속한 가장친한 친구한테 먼저 개인톡으로 의견을 물어봐요."],
    goodSynergyList : ['ESTJ', 'ENTJ', 'INTJ', 'ISTJ'],
    badSynergyList : ['ESTP', 'ISTP', 'INFJ', 'ISFP'],
    rareRate : 3,
    keyWords : ["상상력풍부", "감성충만", "과몰입", "가끔무력감", "프로고민러"]
  },

    "ENFP": {
        nickName : '사과',
        color : '#FF3F3F',
        desc: '사람이 과하게 좋은 ',
        content: ["와다다다! 손이 보이지 않아요. 답장할때 짧게 끊어서 폭풍으로 작성해요. ",
                    "흥미있는 주제는 뇌를 더 즐겁게 만들어요. 생각은 계속 확장되서 누구보다 열정적으로 카톡해요.",
                    "나는야 상상 카톡러! 카톡 알림이 뜨면 미리 읽고 혼자 마음속으로 답장하고 답장하는걸 까먹어버려요.",
                    "대화의 판은 내가 깔아둘게! 재미있는 거나 가고 싶은 곳이 생기면 먼저 이야깃거리를 꺼내고, 가끔은 분위기를 띄운 후 사라져요.",
                    "열정이 넘치지만 항상 그런 것만은 아닙니다. 공적인 톡 방에서는 대화를 많이 하는 편은 아니에요."],
        goodSynergyList : ['ISTJ', 'ESFJ', 'ESTJ'],
        badSynergyList : ['ISTP', 'ESTJ', 'ISFJ', 'ENTJ'],
        rareRate : 4,
        keyWords : ["불타는 열정", "감성충만", "사람너무좋아", "적극적", "폭풍답장"]
    },

    "ENFJ": {
        nickName : '복숭아',
        color : '#FF89B2',
        desc: '부드러움과 단단함을 가진 지도자 ',
        content: ["카톡을 한가득 쌓아놓지만, 그것은 다른사람이 싫어서는 아닌 바쁜 일정 때문이에요!",
                    "이모티콘을 빈번하게 사용함으로써 대화에 생기를 불어 넣기도 하고 대화할때도 상대방의 기분이 상하지않도록 노력을 많이 해요.",
                    "일상생활이 바쁜경우가 많아서 답장의 속도가  빠르지는 않지만, 배려심이 깊어서 답장은 꼭 하려고 해요.",
                    "장문보다는 짧게 카톡을 여러개 보내는 편 이지만 문장에 정성이 가득해요.",
                    "상대방이 고민거리가 있을경우 해결방법을 제안하기도 하며 해결해주려고 노력해요."],
        goodSynergyList : ['ISTP', 'INTP', 'ESTP', 'ESFP'],
        badSynergyList : ['ISTJ', 'ESTJ', 'ISFJ', 'ENTJ'],
        rareRate : 5,
        keyWords : ["프로문제해결러", "적극적", "의리", "얘기잘들어줌", "지도자"]
    },

    "INTJ": {
        nickName : '아보카도',
        color : '#83BE50',
        desc: '요리계의 일등공신! 전략가 ',
        content: ["자신만의 공간이나 시간이 필요해서 혼자 집중하는 시간이 중요하기 때문에 단톡 알람이 떠있는 걸 별로 좋아하지 않아요.",
                    "자기 사람에 대한 바운더리가 좁아서 좋아하는 사람이 있는 단톡에서는 빨리 답을 하고, 답장을 하기 애매한 경우 읽고 답을 안 해요.",
                    "문제 해결에 탁월해 단톡방의 현실적인 조언가! 알고 보면 이상주의적 기질이 많아서 자신이 갖고 있는 고민은 오래 생각을 해요.",
                    "일을 빙 둘러 하거나 답답하게 하면 짜증 나요. 효율적으로 빨리 끝내고 싶기 때문에 조별 과제를 할 때는 단톡방에서 의견을 제시하는 편이에요.",
                    "이모티콘으로 감정을 전달하기보다는 내용 전달에 집중! 이모티콘에 크케 관심이 없어요. 무료 이모티콘을 사용하거나 가끔 자기 취향의 것을 구매해 친한 단톡방에서 사용해요."],
        goodSynergyList : ['ESFP', 'ESTP', 'ISFP', 'INFP'],
        badSynergyList : ['ESFJ', 'ISFJ', 'ESTJ', 'INTP'],
        rareRate : 4,
        keyWords : ["개인적", "효율끝판왕", "분석적", "가치관뚜렷", "현실적 조언가"]
    },

    "INTP": {
        nickName : '레몬',
        color : '#FFC700',
        desc: '사색 의 세계에 빠지고 싶은 시큼한 ',
        content: ["게으른 사색가! 머릿속의 생각을 모두 말로 전달하기엔 그 양이 너무 방대해서, 마음속으로 간결하게 다듬기 귀찮아서 말을 안 해요.",
                    "빨리 대화를 마치고 싶어요, 그럴 때는 대화가 더 이상 이어지지 않게 이모티콘으로 마무리하는 게 최고죠!",
                    "같이 일하는 사람이 논리도 없이 의견을 제시하면 화가 나요. 효율이 떨어지니까요. 조별 과제를 할 때는 단톡방에서 정말 해야 할 말만 직설적으로 의견을 제시합니다.",
                    "단톡방에서 싸움이 났거나 논란이 되는 이야기를 나누고 있으면, 여러 관점에 납득하면서 중립적인 자세를 취해요.",
                    "혼자 있으면서 에너지를 충전해요. 답장이 늦는 건 미리 보기로 보고 답장하는 걸 깜빡했거나, 알림을 모두 껐기 때문이죠."],
        goodSynergyList : ['ESFJ', 'ENFJ', 'ISFJ', 'INFJ'],
        badSynergyList : ['ESFP', 'ISFP', 'ESTP', 'INFP'],
        rareRate : 3,
        keyWords : ["중립적", "게으른사색가", "모든게알고싶음", "반항적", "솔직함"]
    },

    "ENTP": {
        nickName : '용과',
        color : '#EC6C70',
        desc: '용과함께라면 ',
        content: ["재밌는 톡 방에서는 장난이 엄청 많아져요. 손가락 하나만으로 좋아하는 친구들을 놀릴 수 있는 최고의 장소죠!",
                    "자기애가 강해서 잘난척하는 이모티콘을 쓰거나 상대를 약 올리기 위한 이모티콘을 많이 보유하고 있어요.",
                    "확실하게 의견을 제시하고 친화력이 좋아요! 특유의 재치와 카리스마로 단톡방 사람들을 이끄는 리더십의 소유자!",
                    "단톡방에서 논란이 되는 이야기를 나누고 있으면 그에 대한 생각과 자신의 가치관을 분명하게 드러내죠.",
                    "외향적이지만 개인적인 성향이라 혼자 있는 시간도 잘 즐겨요. 생각할 시간이 필요할 때는 단톡방의 모든 알림을 꺼놓거나 나가있다가 초대해달라고 해요."],
        goodSynergyList : ['ISFJ', 'ISTJ', 'ENTP', 'ESTJ'],
        badSynergyList : ['ISFP', 'ESFP', 'ENTJ', 'ESTP'],
        rareRate : 2,
        keyWords : ["모험심",
                    "자기애강함",
                    "말이 청산유수",
                    "외강내유", "프로분조장"]
    },

    "ENTJ": {
        nickName : '배',
        color : '#CB8D36',
        desc: '야심 차게 타고 갈 ',
        content: [  "정확하지 않은 정보를 단톡방에 가져오면 팩트 체크를 확실하게 해서 짚어줘요. ",
                    "제대로 일을 안 하면 열 받아요. 총대를 매더라도 절대 대신해주지 않고 조별 단독방을 통솔해요.",
                    "센스를 겸비해서 스몰토크도 잘하고 관계가 넓어요. 이모티콘도 사람에 따라 적절하게 사용하죠.",
                    "차갑지만 전략을 제시하는 조언가!  단톡방에서 감정적인 공감 보다는 직설적으로 조언해주고  타인의 성장을 도모해요. ",
                    "힘들거나 번아웃이 와도 자신의 감정을 알아채기 어려워서 혼자 고민해요. 단톡방에서 술을 마시고 싶다고 하면 말없이 같이 만나 즐겨주세요. ",
                    "일 관련 제외 톡 방은 알림을 꺼두는 걸 선호해요. 혹시 답장이 늦는다면 일을 하고 있거나 어떻게 답을 해야 할지 애매할 뿐이에요."],
        goodSynergyList : ['ISFP', 'INFP', 'ESFP', 'ESTP'],
        badSynergyList : ['ISFJ', 'ESFJ', 'ENTJ', 'ESTJ'],
        rareRate : 2,
        keyWords : ["야심가",
            "통솔력",
            "팩트체크", "꼰대에게저항적",
            "알짝딱깔센"]
    }

}
