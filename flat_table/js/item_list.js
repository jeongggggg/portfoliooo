// 제품 리스트
const ITEM_LIST = [

      // BEST //
    [

      {item_no: 1, src: '1.jpg', title: '스포티 워치', o_price: 70000, s_price: 50000, desc: '스포티한 디자인으로 활동성을 보여주는 워치.'}, 
      {item_no: 2, src: '2.jpg', title: '전자 면도기', o_price: 69500, s_price: 39500, desc: '저소음으로 깔끔하게 밀리는 전자 면도기.'}, 
      {item_no: 3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰.'}, 
      {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
      {item_no: 5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 59500, s_price: 39500, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
      {item_no:6, src: '6.jpg', title:'애플워치', o_price:209500, s_price:159500, desc:' 깔끔하고 모던한 스마트 워치.'},
      {item_no:7, src: '7.jpg', title:'Air Circulator', o_price:70000, s_price:50000, desc:'실내에서도 답답함 없이 쾌적한 공기.'},
      {item_no:8, src: '8.jpg', title:'심플한 샤워기 헤드', o_price:39500, s_price:29500, desc:'질리지 않는 자동 살균 샤워기 헤드.'},
      {item_no:9, src: '9.jpg', title:'샤오미 헬로우 스마트밴드', o_price:99500, s_price:49500, desc:'심플하고 가벼운 스마트워치.'},
      {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
      {item_no:11, src: '11.jpg', title:'블루투스 헤드셋', o_price:79500, s_price:69500, desc:'화이트 색상의 깔끔한 블루투스 헤드셋.'},
      {item_no:12, src: '12.jpg', title:'휴대용 전기포트', o_price:70000, s_price:50000, desc:'어디든지 가져가기 편한 휴대용 전기포트.'},
      {item_no:13, src: '13.jpg', title:'깔끔한 블루투스 헤드폰', o_price:59500, s_price:39500, desc:'어디에나 어울리는 디자인'},
      {item_no:14, src: '14.jpg', title:'전기포트', o_price:70000, s_price:50000, desc:'빠른 시간안에 끌어오르는 전기포트.'},
      {item_no:33, src: '33.jpg', title:'무선 블루투스 스테레오 스피커', o_price:70000, s_price:50000, desc:'웅장한 사운드를 그대로 담아내는 블루투스 스피커.'},
      {item_no:16, src: '16.jpg', title:'스포츠 방수 시계', o_price:59500, s_price:39500, desc:'100% 방수가 되는 편리한 스포츠 시계.'},
      {item_no:17, src: '17.jpg', title:'바비온 엑스퍼트', o_price:70000, s_price:50000, desc:'깔끔하게 밀리고 안전한 이발기'},
      {item_no:18, src: '18.jpg', title:'스마트 공기청정기', o_price:119500, s_price:89500, desc:' 미세먼지 많은 날 깨끗한 공기.'},
      {item_no:19, src: '19.jpg', title:'스마트 만보기', o_price:70000, s_price:50000, desc:'걸음 수를 스마트하게 계산해주는 만보기.'},
      {item_no:20, src: '20.jpg', title:'블루투스 마우스', o_price:59500, s_price:39500, desc:'선없이 깔끔한 광역 블루투스 마우스.'},
    ],

      // NEW //
    [
        {item_no: 21, src: '21.jpg', title: '원형 가습기',  o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기.'}, 
        {item_no: 22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no: 23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no: 24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no: 25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
         
    ],

    ///WOMEN///
    [
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},

    ],

    /// MEN ///
    [
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
    ],

    /// LIFE ///
    [
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
    ],

    /// ACC ///
    [
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},

    ],

    /// KITCHEN ////
    [
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
    ],

    ///SALE///
    [
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
    ],

    ///SEASON OFF///
    [
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},

    ],

     ///EVENT///
    [
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},

    ],

      // LOOKBOOK //
    [

    {item_no: 1, src: '1.jpg', title: '스포티 워치', o_price: 70000, s_price: 50000, desc: '스포티한 디자인으로 활동성을 보여주는 워치.'}, 
    {item_no: 2, src: '2.jpg', title: '전자 면도기', o_price: 69500, s_price: 39500, desc: '저소음으로 깔끔하게 밀리는 전자 면도기.'}, 
    {item_no: 3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰.'}, 
    {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
    {item_no: 5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 59500, s_price: 39500, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
    {item_no:6, src: '6.jpg', title:'애플워치 3시리즈', o_price:209500, s_price:159500, desc:' 껄끔하고 모던한 스마트 워치.'},
    {item_no:7, src: '7.jpg', title:'Air Circulator', o_price:70000, s_price:50000, desc:'실내에서도 답답함 없이 쾌적한 공기.'},
    {item_no:8, src: '8.jpg', title:'심플한 샤워기 헤드', o_price:39500, s_price:29500, desc:'질리지 않는 자동 살균 샤워기 헤드.'},
    {item_no:9, src: '9.jpg', title:'샤오미 헬로우 스마트밴드', o_price:99500, s_price:49500, desc:'심플하고 가벼운 스마트워치.'},
    {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
    {item_no:11, src: '11.jpg', title:'블루투스 헤드셋', o_price:79500, s_price:69500, desc:' 화이트 색상의 깔끔한 블루투스 헤드셋.'},
    {item_no:12, src: '12.jpg', title:'휴대용 전기포트', o_price:70000, s_price:50000, desc:'어디든지 가져가기 편한 휴대용 전기포트.'},
    {item_no:13, src: '13.jpg', title:'깔끔한 블루투스 헤드폰', o_price:59500, s_price:39500, desc:'어디에나 어울리는 디자인'},
    {item_no:14, src: '14.jpg', title:'전기포트', o_price:70000, s_price:50000, desc:'빠른 시간안에 끌어오르는 전기포트.'},
    {item_no:33, src: '33.jpg', title:'무선 블루투스 스테레오 스피커', o_price:70000, s_price:50000, desc:'웅장한 사운드를 그대로 담아내는 블루투스 스피커.'},
    {item_no:16, src: '16.jpg', title:'스포츠 방수 시계', o_price:59500, s_price:39500, desc:'100% 방수가 되는 편리한 스포츠 시계.'},
    {item_no:17, src: '17.jpg', title:'바비온 엑스퍼트', o_price:70000, s_price:50000, desc:'깔끔하게 밀리고 안전한 이발기'},
    {item_no:18, src: '18.jpg', title:'스마트 공기청정기', o_price:119500, s_price:89500, desc:' 미세먼지 많은 날 깨끗한 공기.'},
    {item_no:19, src: '19.jpg', title:'스마트 만보기', o_price:70000, s_price:50000, desc:'걸음 수를 스마트하게 계산해주는 만보기.'},
    {item_no:20, src: '20.jpg', title:'블루투스 마우스', o_price:59500, s_price:39500, desc:'선없이 깔끔한 광역 블루투스 마우스.'},
    ],

     ///BRAND///
    [
        {item_no:33, src: '33.jpg', title:'스테레오 블루투스 스피커', o_price:70000, s_price:50000, desc:'최고의 음질 스피커.'},
         {item_no: 4, src: '4.jpg', title: '블루투스 이어폰', o_price: 30500, s_price: 12000, desc: '잡음 없이 깔끔한 사운드의 블루투스 이어폰.'}, 
        {item_no:22, src: '22.jpg', title: '체어 바퀴', o_price: 20000, s_price: 70000, desc: '리필용 체어바퀴.'}, 
        {item_no:23, src: '23.jpg', title: '삼성 전기포트', o_price: 30000, s_price: 20000, desc: '삼성 a/s가 가능한 전기포트.'}, 
        {item_no:31, src: '31.jpg', title:'실내용 공기청정기', o_price:70000, s_price:50000, desc:'실내에서 사용하기 좋은 공기청정기.'},
        {item_no:29, src: '29.jpg', title:'스테레오 블루투스 헤드셋', o_price:70000, s_price:50000, desc:'화이트 색상의 깔끔한 블루투스 헤드셋'},
        {item_no:24, src: '24.jpg', title: '엘지 전기포트', o_price: 40000, s_price: 40000, desc: '엘지 a/s가 가능한 전기포트.'}, 
        {item_no:3, src: '3.jpg', title: '유선 이어폰', o_price: 30000, s_price: 20000, desc: '심플한 유선 이어폰'}, 
        {item_no:25, src: '25.jpg', title: '양념통', o_price: 50000, s_price: 50000, desc: '실용성과 디자인을 잡은 양념통.'}, 
        {item_no:21, src: '21.jpg', title: '원형 가습기', o_price: 90000, s_price: 50000, desc: '건조함을 잡아주는 가습기'}, 
        {item_no:26, src: '26.jpg', title:'토스터기', o_price:70000, s_price:50000, desc:'빠르게 구워지는 토스터기.'},
        {item_no:28, src: '28.jpg', title:'캠핑용 전기포트', o_price:70000, s_price:50000, desc:'캠핑에 적합한 전기포트.'},
        {item_no:10, src: '10.jpg', title:'유선 이어폰', o_price:30000, s_price:20000, desc:'줄꼬임없이 편하게 사용 가능한 유선 이어폰.'},
        {item_no:32, src: '32.jpg', title:'사무용 공기청정기', o_price:70000, s_price:50000, desc:'사무실에서 사용하기 좋은 공기청정기.'},
        {item_no:34, src: '34.jpg', title:'모카포트 ', o_price:70000, s_price:50000, desc:'깊은 맛을 내는 모카포트.'},
        {item_no:1, src: '1.jpg', title:'스포티 워치', o_price:70000, s_price:50000, desc:'스포티한 디자인으로 활동성을 보여주는 워치'},
        {item_no:2, src: '2.jpg', title: '전자 면도기', o_price: 20000, s_price: 70000, desc: '저소음으로 깔끔하게 밀리는 전자 면도기'}, 
        {item_no:5, src: '5.jpg', title: '샤오미 솔라 LS05 스마트워치', o_price: 50000, s_price: 50000, desc: '다양한 기능이 탑재된 샤오미의 신상 스마트워치.'}, 
        {item_no:6, src: '6.jpg', title:'애플워치', o_price:70000, s_price:50000, desc:'깔끔하고 모던한 스마트 워치.'},
        {item_no:27, src: '27.jpg', title:'전기 면도기', o_price:70000, s_price:50000, desc:'편리한 충전식 전기 면도기.'},

    ],
    
]

// url 에서 현재 넘어온 cate_no 로 페이지 제목이랑 이미지 띄우기

// const menu_array = ['best','new','outer','top','bottom','acc','bag_shoes'];
const page_title = ['BEST','NEW','WOMEN','MEN','LIFE','ACC','KITCHEN' ,'SALE','SEASON OFF','EVENT','LOOKBOOK', 'BRAND'];

// let add = location.href

// let cate_no = add.split("cate_no=")[1]

// console.log(cate_no)
// let cate_no = add2.split("=")[1] 

// console.log(cate_no)

// 아이템 넘버 잘라서 i 값에 넣어주기

// let item = location.href
// let item2 = item.split("?")[1]
// let item_no = add.split("item_no=")[1]

const cate_no = get_url_info("cate_no");
const item_no = get_url_info("item_no");


// product.html?cat=1&item_no=3 
function get_url_info(key) {
    let url = location.href; // product.html?cat=1&item_no=3 
    url = url.split("?"); // [product.html  ,  cat=1 ]
                             // [336.theCommar_product.html, cate_no=1&item_no=3]
 
    if(url.length > 1) { //length가 1개면 메인페이지, 2개부터는 다른 페이지
        url = url[1].split("&") // [cat=1]
        for(let i=0; i<url.length; i++) {
            let tmp_url=url[i].split("="); // [cat  , 1]

            if(tmp_url[0] == key) {
                return tmp_url[1];
            } 
        }
    }
}

// 숫자 3자리마다 콤마찍기
function add_comma(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}