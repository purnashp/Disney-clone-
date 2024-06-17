data = [
    {
        id: 1,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5200/1545200-v-390d8fbf1984'
    },
    {
        id: 2,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6843/1712060616843-v'
    },
    {
        id: 3,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2272/1717762882272-v'
    },
    {
        id: 4,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4642/1714374754642-v'
    },
    {
        id: 5,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1703/1710946781703-v'
    },
    {
        id: 6,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5389/1711189685389-v'
    },
    {
        id: 7,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6836/1626836-v-94cf52682493'
    },
    {
        id: 8,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/227/1715414310227-v'
    },
    {
        id: 9,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1054/1712159451054-v'
    },
    {
        id: 11,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2817/1715519002817-v'
    },
    {
        id: 13,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5233/1718280925233-v'
    },
    {
        id: 14,
        img: 'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2464/1718015922464-v'
    },
]

//!----------------------movie data in search page---------------------

let moviefelid = document.getElementById('moviesearch')


data.map((dataimg)=>{
    moviefelid.innerHTML +=`
      <div id='hello'><img src="${dataimg.img}" alt=""> </div>
    `
})



let moviefelid1 = document.getElementById('moviesearch1')


data.map((dataimg)=>{
    moviefelid1.innerHTML +=`
      <div id='hello'><img src="${dataimg.img}" alt=""> </div>
    `
})


//!----------curosel
//changing images
let image=document.getElementById('img')

let i=1
let n=7
let changeimage=()=>{
  setInterval(()=>{
    image.src=`./images/curosel/img${i}.jpeg`;
    ++i;
    if(i>n){
        i=1
    }
  },2000)
}


//!==========================categories==========================================

let video = [
    {
        id:1,
        vid:'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132'
    },
    {
        id:1,
        vid:'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483'
    },
    {
        id:1,
        vid:'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549'
    },
    {
        id:1,
        vid:'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512'
    },
    {
        id:1,
        vid:'https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208'
    },
   
]


let video1 = document.getElementById('topic1')

video.map((dataimg)=>{
    video1.innerHTML +=`
      <div id='video2'><video src="${dataimg.vid}"  controls autoplay loop alt=""> </video></div>
    `
})

//?===================
let lang =[
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6685/1526685-a-5f5995a53f61`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6682/1526682-a-fd4e220ba563`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6660/1526660-a-afdd1ecfd8ae`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6661/1526661-a-00b818b5bc0e`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6672/1526672-a-eafe6913c6c8`
    },
]

let langu = document.getElementById('topic2')

lang.map((lan)=>{
    langu.innerHTML +=`
      <div id='video2'><img src="${lan.img}" > </div>
    `
})

//?=========================
let chann =[
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5227/1535227-a-93d6f25ed745`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4940/1424940-a-6486777c0aa5`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4939/1424939-a-ed900757fe95`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4939/1424939-a-ed900757fe95`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4937/1424937-a-5279bcd44654`
    },
]

let chann1 = document.getElementById('topic3')

chann.map((lan)=>{
    chann1.innerHTML +=`
      <div id='video2'><img src="${lan.img}" > </div>
    `
})

//?=====================

let gen =  [
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5262/1535262-a-fbabfaf1176e`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5285/1535285-a-88035ca1ae69`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5284/1535284-a-656c6b45a905`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5264/1535264-a-9e7871687c76`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5292/1535292-a-5739f9c84b63`
    },
]

let gen1 = document.getElementById('topic4')

gen.map((lan)=>{
    gen1.innerHTML +=`
      <div id='video2'><img src="${lan.img}" > </div>
    `
})

//?=====================

let sports =  [
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6630/1526630-a-9b9ea791cdaf`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4550/1534550-a-fc4b5ad51967`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6639/1526639-a-741d71091ea7`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6638/1526638-a-db7e5efc1703`
    },
    {
        img:`https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6635/1526635-a-453e30065a30`
    },
]

let sports1 = document.getElementById('topic5')

sports.map((lan)=>{
    sports1.innerHTML +=`
      <div id='video2'><img src="${lan.img}" > </div>
    `
})