// 제품 리스트
const ITEM_LIST = [

      // 아이스크림 //
    [

      {item_no: 1, src: '1.png', title: '오레오 쿠키 앤 크림치즈', tag: '#크림치즈아이스크림' , desc: '부드러운 크림치즈 아이스크림에 오레오 쿠키와 크림치즈 크런치가 쏘옥~'}, 
      {item_no: 2, src: '2.png', title: '블랙 소르베', tag: '#레몬라임소르베' , desc: '반전 매력이 가득! 까만 아이스크림에 상큼한 맛이 가득!'}, 
      {item_no: 3, src: '3.png', title: '아빠는 딸바봉', tag: '#딸기아이스크림' , desc: '두 가지 딸기 아이스크림가 바닐라향 아이스크림에 봉봉 프레첼이 쏘옥~!'}, 
      {item_no: 4, src: '4.png', title: '트리플 치즈 러브', tag: '#치즈케이크' , desc: '뉴욕 치즈케이크, 카라멜 치즈케이크, 까망베르 치즈 세가지 치즈 아이스크림의 조화!'}, 
      {item_no: 5, src: '5.png', title: '러브미', tag: '#스트로베리' , desc: '딸기, 블루베리, 바닐라향 아이스크림에 롤리팝 캔디가 쏘옥~'}, 
      {item_no: 6, src: '6.png', title: '메이플 월넛', tag: '#메이플 월넛' , desc: '고소하고 향긋한 호두 아이스크림에 호두가 듬뿍 들어있는 제품'}, 
      {item_no: 7, src: '7.png', title: '봉쥬르, 마카롱', tag: '#초콜릿 #크림치즈' , desc: '부드러운 크림치즈 아이스크림과 마카롱, 초콜릿의 달콤한 만남!'}, 
      {item_no: 8, src: '8.png', title: '레인보우 샤베트', tag: '#파인애플 #오렌지' , desc: '상큼한 파인애플, 오렌지, 라즈베리 샤베트'}, 
      {item_no: 9, src: '9.png', title: '슈팅스타', tag: '#팝핑캔디 #체리시럽' , desc: '톡톡 터지는 팝핑 캔디와 스프링클 캔디, 상큼한 체리 시럽이 들어있는 제품'}, 
      {item_no: 10, src: '10.png', title: '초코나무숲', tag: '#그린티 #초콜릿' , desc: '2014년 아이스크림 콘테스트 1위 선정작!'}, 
      {item_no: 11, src: '11.png', title: '아몬드 봉봉', tag: '#아몬트 #초콜릿' , desc: '입안 가득 즐거운 초콜릿, 아몬드로 더욱 달콤하게!'}, 
      {item_no: 12, src: '12.png', title: '엄마는 외계인', tag: '#초콜릿 #초코볼' , desc: '밀크 초콜릿, 다크 초콜릿, 화이트 무스 세 가지 아이스크림에 달콤 바삭한 초코볼이 더해진 아이스크림'}, 
      {item_no: 13, src: '13.png', title: '피스타치오 아몬드', tag: '#피스타치오 #아몬드' , desc: '피스타치오향과 아몬드가 만나 고소함이 두배!'}, 
      {item_no: 14, src: '14.png', title: '민트 초콜릿 칩', tag: '#민트 #초콜릿칩' , desc: '쿨한 그녀들의 선택! 상쾌한 민트향에 초코칩까지!'}, 
      {item_no: 15, src: '15.png', title: '바람과 함께 사라지다', tag: '#블루베리 #딸기' , desc: '블루베리와 딸기로 상큼함을 더한 치즈케이크 한 조각'}, 
      {item_no: 16, src: '16.png', title: '사랑에 빠진 딸기', tag: '#사빠딸' , desc: '크런치 초콜릿, 치즈 케이크, 스트로베리가 듬뿍 들어있는 아이스크림'}, 
      {item_no: 17, src: '17.png', title: '베리베리 스트로베리', tag: '#베리베리' , desc: '새콤상큼 딸기 과육이 듬뿍!'},
      {item_no: 18, src: '18.png', title: '오레오 쿠키 앤 크림', tag: '#오레오 #쿠키' , desc: '부드러운 바닐라향 아이스크림에, 달콤하고 진한 오레오 쿠키가 듬뿍!'}, 
      {item_no: 19, src: '19.png', title: '아이스 홈런볼', tag: '#아이스홈런볼' , desc: '초콜릿 아이스크림과 바닐라 아이스크림 속에 초코코팅 홈런볼과 피넛이 쏙쏙!'}, 

      
    ],

      // 아이스크림 케이크 //
    [
      {item_no: 1, src: '1.png', title: '해피데이 카카오프렌즈', tag: '#카카오프렌즈 #뉴욕치즈케이크' , desc: '9가지 플레이버로 구성되어 나눠먹기 편리한 아이스크림케이크'}, 
      {item_no: 2, src: '2.png', title: '겨울왕국 엘사 프린세스', tag: '#쿠키앤크림 #슈팅스타' , desc: '겨울왕국 엘사 피규어와 눈꽃 모양데코로 화려함을 더 한 케이크'}, 
      {item_no: 3, src: '3.png', title: '뽑아먹는 미니언즈', tag: '#엄마는 외계인 #베리베리스트로베리' , desc: '귀여운 미니언즈 친구들 사이의 피규어를 뽑으면 달콤한 초코볼이 나타나는 케이크'}, 
      {item_no: 4, src: '4.png', title: '리얼 27 큐브', tag: '#큐브 #아몬드봉봉' , desc: '큐브 형태로 9가지 BEST 플레이버를 모두 즐길 수 있는 제품'}, 
      {item_no: 5, src: '5.png', title: '나눠먹는 와츄원', tag: '#슈팅스타 #뉴욕치즈케이크' , desc: '다양한 9가지맛 아이스크림을 트레이로 편리하게 나눠먹고, 취식 후 보관까지 쉬운 케이크'}, 
      {item_no: 6, src: '6.png', title: '핑크 구름 솜사탕', tag: '#핑크구름케이크' , desc: '핑크 구름 위 달콤한 6가지 맛 아이스크림과 하트 모양의 바이트를 가득 올린 러블리한 케이크'}, 
      {item_no: 7, src: '7.png', title: '마음을 드려요', tag: '#아몬드봉봉 #쿠키앤크림' , desc: '케이크를 가득 채운 꽃과 레터링 초콜릿으로 감사한 마음을 전할 수 있는 케이크'}, 
      {item_no: 8, src: '8.png', title: '다정한 초코베어', tag: '#다정한초코베어' , desc: '귀여운 곰돌이 모양을 그대로 형상화한 초콜릿 아이스크림과 6가지 색상의 초코볼을 가득 올려 비쥬얼 끝판왕 케이크'}, 
      {item_no: 9, src: '9.png', title: '시크릿 잔망 루피', tag: '#엄마는 외계인 #스트로베리' , desc: '인기만점 잔망루피 캐릭터의 얼굴 모양을 그대로 만들어 모자로 활용할 수 있는 실용적인 제품!'}, 
      {item_no: 10, src: '10.png', title: '해피 버스데이 케이크', tag: '#해피버스데이케이크' , desc: '화려한 색상의 크림 아이싱과 스프링클을 적용하여 더욱 특별한 생일 파티를 만들어 주는 케이크'}, 
      {item_no: 11, src: '11.png', title: '시크릿 라이언', tag: '#슈팅스타' , desc: '귀여운 라이언 캐릭터 얼굴 모형 속에 달콤한 비밀이 숨어있는 케이크'}, 
      {item_no: 12, src: '12.png', title: '시크릿 어피치', tag: '#베리베리스트로베리' , desc: '수줍음 가득한 어치피 얼굴 모형을 모자로 활용할 수 있는 10가지 맛 케이크'}, 
      {item_no: 13, src: '13.png', title: '내 친구 뽀로로', tag: '#초콜릿 #쿠키앤크림' , desc: '뽀로로 캐릭터의 얼굴을 그대로 형상화한 제품과 랜덤 디자인 받침대 적용으로 매력을 더한 케이크'}, 
      {item_no: 14, src: '14.png', title: '톡톡 스마일 케이크', tag: '#초콜릿 #스트로베리' , desc: '환한 미소를 짓게 만드는 쨍한 노란 색상의 배스킨라빈스 스마일 미니 케이크'}, 
      {item_no: 15, src: '15.png', title: '내 친구 잔망 루피', tag: '#초콜릿 #아몬드봉봉' , desc: '잔망 루피의 얼굴이 입체 돔 케이크로 등장! 잔망루피 캐릭터 랜덤 밑판까지 더욱 재미있는 케이크'}, 
      {item_no: 16, src: '16.png', title: '바로먹는 와츄원', tag: '#엄마는 외계인 #뉴욕치즈케이크' , desc: '달콤한 아이스크림 구름 위에서 즐거운 시간을 보내는 카카오프렌즈 친구들을 Bar로 즐길 수 있는 케이크'}, 
      {item_no: 17, src: '17.png', title: '아이스 홈런볼 케이크', tag: '#아이스홈런볼케이크' , desc: '풍성하게 쌓인 홈런볼 위 초코 시럽으로 완성된 초콜릿 폭포 비주얼 케이크!'},
      {item_no: 18, src: '18.png', title: '퍼즐 와츄원', tag: '#퍼즐와츄원 #체리' , desc: '퍼즐 모양의 아이스크림 조각을 골라먹는 재미가 있는 케이크'}, 
      {item_no: 19, src: '19.png', title: '퐁당 허니버터 아몬드', tag: '#퐁당허니버터아몬드케이크' , desc: '아이스 허니버터 아몬드를 포함, 다양한 맛의 플레이버를 조합하여 꿀 속에 퐁당 빠진 위베어베어스 친구들을 만날 수 있는 제품'}, 

    ],

    ///음료///
    [
      {item_no: 1, src: '1.png', title: '와츄원 쉐이크', tag: '#쉐이크' , desc: '내가 원하는 아이스크림으로 만드는 나만의 쉐이크!'}, 
      {item_no: 2, src: '2.png', title: '레몬라임 블라스트', tag: '#블렌디드 #레몬라임' , desc: '레몬과 라임 맛이 어우러져 상큼함과 청량함이 가득한 시원한 레몬라임 블렌디드'}, 
      {item_no: 3, src: '3.png', title: '밀크 쉐이크', tag: '#밀크 #쉐이크' , desc: '바닐라 아이스크림과 우유를 블렌드한 진하고 부드러운 밀크 쉐이크'}, 
      {item_no: 4, src: '4.png', title: '복숭아 아이스티', tag: '#아이스티 #복숭아' , desc: '스리랑카산 홍차를 우려 만든 깔끔하고 시원한 아이스티'}, 
      {item_no: 5, src: '5.png', title: '샤인머스캣 말랑 블라스트', tag: '#샤인머스켓 #청포도' , desc: '고급스러운 샤인 머스켓 청포도의 풍미와 화이트펄의 식감이 조화롭게 어울리는 시원한 블라스트 음료'}, 
      {item_no: 6, src: '6.png', title: '설향 딸기 블라스트', tag: '#설향딸기' , desc: '논산 설향 딸기로 만들어 더욱 신선하고 상큼한 딸기의 풍미와 청량함을 느낄 수 있는 스트로베리 블라스트'}, 
      {item_no: 7, src: '7.png', title: '아몬드 봉봉 블라스트', tag: '#아몬드봉봉블라스트' , desc: '고소하고 부드러운 바닐라 풍미에 식감이 일품인 초콜릿 코팅 아몬드가 토핑된 블라스트'}, 
      {item_no: 8, src: '8.png', title: '엄마는 외계인 블라스트', tag: '#엄마는외계인' , desc: '배스킨라빈스의 대표 아이스크림 엄마는 외계인 아이스크림으로 만든 BR의 시그니처 블라스트 '}, 
      {item_no: 9, src: '9.png', title: '오레오 쉐이크', tag: '#오레오쿠키크럼블' , desc: '오레오 쿠키 크럼블과 아이스크림을 블렌드하여 풍부한 맛이 느껴지는 쉐이크'}, 
      {item_no: 10, src: '10.png', title: '카푸치노 블라스트 모카', tag: '#카푸치노 #모카' , desc: '달콤한 초코시럽이 첨가되어 더욱 깊고 풍부한 맛이 특징'}, 
      {item_no: 11, src: '11.png', title: '카푸치노 블라스트 오리지널', tag: '#카푸치노 #블라스트' , desc: '달콤한 바닐라 아이스크림과 커피원액이 들어간 배스킨라빈스 대표음료'}, 
      {item_no: 12, src: '12.png', title: '허니레몬 티', tag: '#허니레몬향' , desc: '달콤하고 상큼한 허니레몬 청을 넣어 만든 따뜻한 허니레몬 티'}, 
      {item_no: 13, src: '13.png', title: '스위스미스 핫 초코', tag: '#스위스미스핫초코' , desc: '부드럽고, 달콤한 스위스미스 핫초코'}, 
      {item_no: 14, src: '14.png', title: '딸기 연유 라떼', tag: '#딸기 #연유' , desc: '달콤한 연유와 딸기과육이 들어있는 딸기라떼에 베리베리 스트로베리 아이스크림을 토핑한 부드러운 라떼'}, 
      {item_no: 15, src: '15.png', title: '카푸치노 블라스트 리얼샷', tag: '#카푸치노 #블라스트' , desc: '부드럽고, 달콤한 바닐라 블라스트와 커피샷이 마블링되어 풍부한 맛과 트렌디한 비쥬얼의 카푸치노 블라스트'}, 
      {item_no: 16, src: '16.png', title: '허니버터 아몬드 블라스트', tag: '#허니버터아몬드블라스트' , desc: '허니버터 아몬드 IC와 우유를 블렌드 한 음료 위에 허니버터 아몬드 크런치를 듬뿍 올린 단짠단짠한 맛의 블라스트'}, 
      {item_no: 17, src: '17.png', title: '홈런볼 블라스트', tag: '#홈런볼블라스트' , desc: '초콜릿 파우더와 우유를 블렌드한 음료 위에 홈런볼을 듬뿍 올린 블라스트'},
    ],

    /// 커피 ///
    [
      {item_no: 1, src: '1.png', title: '아이스 바닐라빈 라떼 ', tag: '#바닐라빈 #라떼' , desc: '크리미한 벨벳밀크에 바닐라빈이 더해진 풍부하고 달콤한 라떼'}, 
      {item_no: 2, src: '2.png', title: '바닐라빈 라떼', tag: '#바닐라빈 #라떼' , desc: '크리미한 벨벳밀크에 바닐라빈이 더해진 풍부하고 달콤한 라떼'}, 
      {item_no: 3, src: '3.png', title: '아메리카노', tag: '#카페브리즈' , desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 따뜻한 아메리카노'}, 
      {item_no: 4, src: '4.png', title: '아이스 아메리카노', tag: '#카페브리즈' , desc: '카페브리즈 커피를 가장 부드럽게 즐길 수 있는 아이스 아메리카노'}, 
      {item_no: 5, src: '5.png', title: '아메리카노(L)', tag: '#아메리카노' , desc: '카페브리즈 커피의 매력을 부드럽게 즐길 수 있는 아메리카노'}, 
      {item_no: 6, src: '6.png', title: '아이스 아메리카노(L)', tag: '#아메리카노' , desc: '카페브리즈 커피의 매력을 부드럽게 즐길 수 있는 아메리카노'}, 
      {item_no: 7, src: '7.png', title: '연유라떼', tag: '#우유 #연유' , desc: '우유와 연유를 함께 스티밍하여 거품까지 부드러운 달콤함'}, 
      {item_no: 8, src: '8.png', title: '에스프레소 아포가토', tag: '#에스프레소 #아포가토' , desc: '진한 에스프레소와 바닐라 아이스크림으 달콤 쌉쌀한 조화'}, 
      {item_no: 9, src: '9.png', title: '연유 크러쉬 라떼', tag: '#연유크러쉬' , desc: '연유를 넣은 달콤한 화이트 크러쉬에 에스프레소 샷을 더한 커피'}, 
      {item_no: 10, src: '10.png', title: '아이스 연유 라떼', tag: '#연유 #우유' , desc: '달달한 연유가 듬뿍 들어간 진~한 달콤함'}, 
      {item_no: 11, src: '11.png', title: '카페 라떼', tag: '#라떼 #카페브리즈' , desc: '진한 에스프레소에 스팀밀크가 조화롭게 어우러져 우유 자체의 단맛이 돋보이는 카페라떼'}, 
      {item_no: 12, src: '12.png', title: '아이스 카페 라떼', tag: '#라떼 #카페브리즈' , desc: '풍부하고 강렬한 에스프레소에 차가운 우유를 더해 더욱 고소한 아이스 카페라떼'}, 
      {item_no: 13, src: '13.png', title: '아이스 카라멜 마끼야또', tag: '#카라멜 #마끼야또' , desc: '카라멜의 풍부한 향과 진한 달콤함을 느낄 수 있는 아이스 카라멜 마끼야또'}, 
      {item_no: 14, src: '14.png', title: '카라멜 마끼야또', tag: '#카라멜 #마끼야또' , desc: '카라멜의 풍부한 향과 진한 달콤함을 느낄 수 있는 카라멜 마끼야또'}, 
      {item_no: 15, src: '15.png', title: '아이스 카페 모카', tag: '#모카 #카페브리즈' , desc: '진하고 풍부한 초콜릿 소스와 에스프레소가 조화를 이루는 달콤한 아이스 카페 모카'}, 
      {item_no: 16, src: '16.png', title: '카페 모카', tag: '#모카 #카페브리즈' , desc: '진하고 풍부한 초콜릿 소스와 에스프레소가 조화를 이루는 달콤한 카페 모카'}, 
    ],

    /// 디저트 ///
    [
        {item_no: 1, src: '1.png', title: '아이스 민트 초코파이 ', tag: '#아이스민트초코파이' , desc: '촉촉한 파이 사이에 초콜릿 칩이 가득한 민트 아이스크림을 샌드하고 달콤한 초콜릿으로 코팅한 민트 초코파이'}, 
        {item_no: 2, src: '2.png', title: '라이언 에그볼', tag: '#라이언에그볼 #초콜릿' , desc: '귀여운 라이언 속에 라이언 키링과 달콤한 아이스크림으로 두번 즐기는 라이언 에그볼'}, 
        {item_no: 3, src: '3.png', title: '아빵우유', tag: '#아빵우유' , desc: '부드러운 시트 사이에 진한 풍미의 우유 아이스크림이 듬뿍!'}, 
        {item_no: 4, src: '4.png', title: '아이스 마카롱 체리쥬빌레', tag: '#아이스마카롱' , desc: '달콤한 체리쥬빌레 아이스크림과 즐기는 아이스 마카롱'}, 
        {item_no: 5, src: '5.png', title: '아이스 마카롱 쿠키앤크림', tag: '#아이스마카롱' , desc: '부드러운 마카롱 사이로 전해지는 달콤한 아이스크림 향연!'}, 
        {item_no: 6, src: '6.png', title: '아이스 모찌 스트로베리', tag: '#아이스모찌' , desc: '쫀득한 찹쌀떡 속에 숨겨져 있는 베리베리스트로베리 아이스크림의 절표한 조화'}, 
        {item_no: 7, src: '7.png', title: '아이스 모찌 그린티', tag: '아이스모찌 #그린티' , desc: '쫀득한 찹쌀떡 속에 숨겨져 있는 그린티 아이스크림과 팥 시럽의 절묘한 조화'}, 
        {item_no: 8, src: '8.png', title: '아이스 모찌 초코바닐라', tag: '#초코바닐라 #아이스모찌' , desc: '쫀뜩한 찹쌀떡 속에 숨겨져 있는 달콤한 초코바닐라'}, 
        {item_no: 9, src: '9.png', title: '아이스 모찌 콩고물', tag: '#콩고물 #아이스모찌' , desc: '쫀뜩한 찹쌀떡 속에 숨겨져 있는 콩고물 아이스크림의 절묘한 조화'}, 
        {item_no: 10, src: '10.png', title: '아이스 모찌 크림치즈', tag: '#아이스모찌 #크림치즈' , desc: '쫀독한 찹쌀떡 속에 끼리 크림치즈 아이스크림이 가득~'}, 
        {item_no: 11, src: '11.png', title: '미니 아이스 모찌', tag: '#아이스모찌 #스트로베리' , desc: '쫀득한 찹쌀 떡 속에 스트로베리, 그린티, 망고 아이스크림을 미니 사이즈로 즐길 수 있는 디저트'}, 
        {item_no: 12, src: '12.png', title: '아이스크림 스틱바 민트쿠앤크', tag: '#아이스크림스틱바 #민트쿠앤크' , desc: '한 가지 아이스크림 스틱바로 한 번에 두 가지 인기 플레이버를 맛 볼 수 있는 제품'}, 
        {item_no: 13, src: '13.png', title: '아이스크림 스틱바 초코 그린티', tag: '#아이스크림스틱바 #초코그린티' , desc: '한 가지 아이스크림 스틱바로 한 번에 두 가지 인기 플레이버를 맛 볼 수 있는 제품'}, 
        {item_no: 14, src: '14.png', title: '아이스크림 롤-바닐라', tag: '#아이스크림롤 #바닐라' , desc: '바삭한 웨이퍼롤 속에 부드러운 바닐라 아이스크림이 가득한 디저트'}, 
        {item_no: 15, src: '15.png', title: '아이스크림 롤-초콜릿', tag: '#아이스크림롤 #초콜릿' , desc: '바삭한 웨이퍼롤 속에 달콤한 초콜릿 아이스크림이 가득한 디저트'}, 
        {item_no: 16, src: '16.png', title: '아이스 바나나 모나카', tag: '#아이스바나나모나카' , desc: '바나나 모양의 바삭한 모나카 사이에 달콤한 바나나 아이스크림이 듬뿍!'}, 
        {item_no: 17, src: '17.png', title: '아이스 호떡(모찌)', tag: '#아이스호떡' , desc: '호떡모양의 쫀득한 찹쌀떡 속에 달콤한 호떡 아이스크림과 고소한 견과류가 들어간 디저트'}, 
        {item_no: 18, src: '18.png', title: '아이스 모찌 바나나킥', tag: '#아이스모찌바나나킥' , desc: '쫀득한 찹쌀떡 속에 달콤한 바나나킥 아이스크림과 바나나 리본이 어우러진 아이스 모찌'}, 
        {item_no: 19, src: '19.png', title: '아이스 바나나 모나카 세트', tag: '#아이스바나나모나카' , desc: '바나나 모양의 바삭하고 달콤한 아이스 모나카 4개가 들어있는 귀여운 미니언즈 디자인의 바나나 모나카 세트'}, 
        {item_no: 20, src: '20.png', title: '홈런볼 사이에 끼인 초코', tag: '#홈런볼사이에끼인초코' , desc: '바삭한 쿠키슈 속에 달콤한 커스터드 크림을 넣고 초콜릿 아이스크림을 샌드한 홈런볼 컨셉의 슈 디저트'}, 
    ],
    
]

const cate_no = get_url_info("cate_no");
const item_no = get_url_info("item_no");

const img_url = ['ice_cream', 'cake', 'drink', 'coffee', 'desert']


// file:///D:/portfolio/flat_table/product.html?cat=1&item_no=3 
function get_url_info(key) {
    let url = location.href; // 336.theCommar_product.html?cate_no=1
    url = url.split("?"); // [336.theCommar_product.html, cate_no=1]
                             // [336.theCommar_product.html, cate_no=1&item_no=3]
 
    if(url.length > 1) { //length가 1개면 메인페이지, 2개부터는 다른 페이지
        url = url[1].split("&") // [cate_no=1, item_no=3]
        for(let i=0; i<url.length; i++) {
            let tmp_url=url[i].split("="); // [cate_no, 6]    [item_no, tmp]

            if(tmp_url[0] == key) {
                return tmp_url[1];
            } 
        }
    }
}