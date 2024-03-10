// 제품 리스트
const ITEM_LIST = [

    // exo //
  [

    {item_no: 1, src: '1.jpg', artist: 'EXO', title: 'HOSOGRAM PHOTO CARD SET - DONT FIGHT THE FEELING' , price: '₩8,000'}, 
    {item_no: 2, src: '2.jpg', artist: 'EXO', title: '#AIRPODS CASE - DONT FIGHT THE FEELING' , price: '₩15,000'}, 
    {item_no: 3, src: '3.jpg', artist: 'EXO', title: 'T-SHIRT - DONT FIGHT THE FEELING' , price: '₩45,000'}, 
    {item_no: 4, src: '4.jpg', artist: 'EXO', title: 'Signature Pendent Necklace' , price: '₩35,000'}, 
    {item_no: 5, src: '5.jpg', artist: 'EXO', title: '#ARTIST CASE - DONT FIGHT THE FEELING' , price: '₩25,000'}, 
    {item_no: 6, src: '6.jpg', artist: 'EXO', title: 'OFFICIAL FANLIGHT VER3.0' , price: '₩36,000'}, 
    {item_no: 7, src: '7.jpg', artist: 'EXO', title: 'FANLIGHT ACCESSORT' , price: '₩9,000'}, 
    {item_no: 8, src: '8.jpg', artist: 'EXO', title: 'SPECIAL Album - DONT FIGHT THE FEELING' , price: '일시품절'}, 
    {item_no: 9, src: '9.jpg', artist: 'EXO', title: 'SPECIAL Album - DONT FIGHT THE FEELING' , price: '일시품절'}, 
    {item_no: 10, src: '10.jpg', artist: 'EXO', title: 'CHEER UP ARTIST CASE' , price: '₩25,000'}, 
    {item_no: 11, src: '11.jpg', artist: 'BAEKHYUN', title: 'The 3rd mini Album - Bambi(Photo Book ver)' , price: '₩20,200'}, 
    {item_no: 12, src: '12.jpg', artist: '[&STORE 단독특전]EXO', title: 'SEASON GREETINGS 2021' , price: '₩38,000'}, 
    {item_no: 13, src: '13.jpg', artist: 'EXO', title: 'ARTIST SIGNATURE RING' , price: '₩39,000'}, 
    {item_no: 14, src: '14.jpg', artist: 'EXO', title: 'PHOTO PENDANT NECKLACE - OBSESSION' , price: '₩18,000'}, 
    {item_no: 15, src: '15.jpg', artist: 'BAEKHYUN', title: '4XS PHOTO SET - Bambi' , price: '₩3,000'}, 
    {item_no: 16, src: '16.jpg', artist: 'EXO', title: 'CHEER UP ROLL MASKING TAPE' , price: '₩9,000'}, 
    {item_no: 17, src: '17.jpg', artist: 'BAEKHYUN', title: 'The 3rd Mini Album - Bambi' , price: '₩13,600'},
    {item_no: 18, src: '18.jpg', artist: 'CHANYEOL', title: 'OST ALBUM - THE BOX' , price: '₩27,900'}, 
    {item_no: 19, src: '19.jpg', artist: 'EXO-SC', title: 'A4 POP-UP CARD - 10억뷰' , price: '₩10,000'},
    {item_no: 20, src: '20.jpg', artist: 'EXO', title: 'DIY PIN - OBSESSION' , price: '₩7,900'}, 
    {item_no: 21, src: '21.jpg', artist: 'EXO', title: 'DECO POCKET' , price: '₩18,000'}, 
    {item_no: 22, src: '22.jpg', artist: 'EXO', title: 'ARTIST CASE - KAI' , price: '₩25,000'}, 
    {item_no: 23, src: '23.jpg', artist: 'EXO', title: 'NUMBER PLATE KEY RING' , price: '₩12,000'}, 
    {item_no: 24, src: '24.jpg', artist: 'EXO', title: 'ECOBAG' , price: '₩35,000'}, 
    {item_no: 25, src: '25.jpg', artist: 'BAEKHYUN', title: 'ARTIST CASE - BAMBI' , price: '₩25,000'}, 
    {item_no: 26, src: '26.jpg', artist: 'XIUMIN', title: 'PHOTO STORE BOOK - ON : XIUWEET TIME' , price: '₩35,000'}, 
    {item_no: 27, src: '27.jpg', artist: 'EXO', title: 'HOLOGRAM PHOTO CARD SET - DONT FIGHT THE FEELING' , price: '₩8,000'}, 
    {item_no: 28, src: '28.jpg', artist: 'EXO-SC', title: '1st MINI ALBUM - WHAT A LIFE' , price: '₩18,300'}, 
    {item_no: 29, src: '29.jpg', artist: 'EXO', title: 'PHOTO PROHESTION KEYRING' , price: '₩15,000'}, 
    {item_no: 30, src: '30.jpg', artist: 'EXO', title: 'BINDER INDEX - OBSESSION' , price: '₩6,500'}, 
    {item_no: 31, src: '31.jpg', artist: 'EXO', title: 'SEASON GREETINGS 2020 POSTER' , price: '₩12,000'}, 
    {item_no: 32, src: '32.jpg', artist: 'EXO', title: 'BACKPACK' , price: '₩89,000'}, 
    {item_no: 33, src: '33.jpg', artist: 'EXO-SC', title: 'RANDOM KEYTING - 10억뷰' , price: '₩6,500'}, 
    {item_no: 34, src: '34.jpg', artist: 'EXO-SC', title: '4X5 PHOTO SET - 10억뷰' , price: '₩3,000'}, 
    {item_no: 35, src: '35.jpg', artist: 'EXO-SC', title: 'AIRPODS PRO CASE + KEYRING - 10억뷰' , price: '₩15,000'}, 
    {item_no: 36, src: '36.jpg', artist: 'BAEKHYUN', title: 'A4 PHOTO - Delight' , price: '₩11,000'},
    {item_no: 37, src: '37.jpg', artist: 'BAEKHYUN', title: 'ARTIST CASE - Delight' , price: '₩25,000'}, 
    {item_no: 38, src: '38.jpg', artist: 'BAEKHYUN', title: 'A4 POP-UP CARD - Delight' , price: '₩10,000'},
    {item_no: 39, src: '39.jpg', artist: 'BAEKHYUN', title: 'POUCH' , price: '₩29,000'},
    {item_no: 40, src: '40.jpg', artist: 'EXO-SC', title: 'ARTIST CASE - 10억뷰' , price: '₩25,000'},
    {item_no: 41, src: '41.jpg', artist: 'BAEKHYUN', title: 'The 2nd Mini Album - Delight' , price: '₩16,400'},
    {item_no: 42, src: '42.jpg', artist: 'SUHO', title: 'ARTIST CASE - 자화상' , price: '₩25,000'},
  ],

  
  
]

const cate_no = get_url_info("cate_no");
const item_no = get_url_info("item_no");

// const img_url = ['ice_cream', 'cake', 'drink', 'coffee', 'desert']


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