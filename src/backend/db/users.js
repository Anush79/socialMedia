import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "9ee10020533513s",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686991791/tweetopia/_94b128e0-7598-45b2-850b-51e3be41973b_npzhwx.jpg",
    backgroundImage: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686818124/sample.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "11p1001362635su",
    firstName: "Anu",
    lastName: "Jaiswal",
    username: "anushka",
    password: "a1n2u3s4h5k6a7",
    bio: "Someone who knows the value of friendship and loves her peace of mind",
    website: "https://ajaisportfolio.netlify.app",
    profileAvatar:"https://res.cloudinary.com/dt1leq0nd/image/upload/v1688291313/tweetopia/discord_ofxkjh.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847189/tweetopia/15618018448867-IM_Tom_Holland_Spiderman_im0mw0.jpg",
    createdAt: formatDate(),
    following: [
      {
        _id: "09o10001862844l",
        firstName: "Tom",
        lastName: "Holland",
        profileAvatar:
          "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847139/tweetopia/download_pzswom.jpg",
        username: "TomHall44",
      },
      {
        _id: "6v310012535541r",
        firstName: "Ariana",
        lastName: "Grande",
        username: "grandeariana",
        profileAvatar:
          "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686852228/tweetopia/pjimage-1544144070_wpp7fc.jpg",

      },
      {
        _id: "z6y10006633318h",
        firstName: "Virat",
        lastName: "Kohli",
        username: "ViratKohli",
        profileAvatar:
          "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848614/tweetopia/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023_fseb74.jpg",
      },
      {
        _id: "wyh1000557794tc",
        firstName: "Taylor Alison",
        lastName: "Swift",
        password: "AlisonTaylor",
        username: "SwiftTaylor",
        bio: "American singer-songwriter, I do genre-spanning discography, songwriting, and artistic reinventions",
        website: "taylorswift.com",
        profileAvatar:
          "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848190/tweetopia/191125_Taylor_Swift_at_the_2019_American_Music_Awards__cropped_rlydsg.png",
        backgroundImage:
          "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848197/tweetopia/Swift__Taylor__2007_oce2od.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        following: [],
        followers: [],
        bookmarks: [],
      },

    ],
    followers: [{
      _id: "09o10001862844l",
      firstName: "Tom",
      lastName: "Holland",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847139/tweetopia/download_pzswom.jpg",
      username: "TomHall44",
    },
    {
      _id: "z6y10006633318h",
      firstName: "Virat",
      lastName: "Kohli",
      username: "ViratKohli",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848614/tweetopia/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023_fseb74.jpg",
    },
    {
      _id: "6v310012535541r",
      firstName: "Ariana",
      lastName: "Grande",
      username: "grandeariana",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686852228/tweetopia/pjimage-1544144070_wpp7fc.jpg",
    },],
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: "09o10001862844l",
    firstName: "Tom",
    lastName: "Holland",
    password: "TomHall123",
    username: "TomHall44",
    bio: "An amazing Spider Man, no Really :)",
    website: "https://tomHolland.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847139/tweetopia/download_pzswom.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847189/tweetopia/15618018448867-IM_Tom_Holland_Spiderman_im0mw0.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "nm01000290737yz",
    firstName: "Barack",
    lastName: "Obama",
    password: "barackObama",
    username: "barackObama321",
    bio: "44th President of United States",
    website: "https://barack_obama.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686846962/tweetopia/330px-Barack_Obama_tweeting_on_May_24__2012_in_response_to_hashtagged_questions_rviwx6.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847098/tweetopia/Ann_Dunham_with_father_and_children_wumra9.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "vns1000354734el",
    firstName: "Elon",
    lastName: "Musk",
    password: "elonMusk001",
    username: "ElonMusk",
    bio: "Business Magnet and Owner of Twitter",
    website: "https://elonmusk.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847461/tweetopia/Elon_Musk_Royal_Society__crop2_y3bp6k.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1688560402/tweetopia/1500x500_rex4ij.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "uij1000430679g2",
    firstName: "Cristiano ",
    lastName: "Ronaldo",
    password: "Ronaldo123",
    username: "RonaldoCristiano",
    bio: "Portuguese Professional Football Player",
    website: "cristiano.ronaldo.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847955/tweetopia/Cristiano_Ronaldo_2018_ptlddm.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848005/tweetopia/main-qimg-c423778894f61719e6e5344d6e2b3961_tw071o.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "wyh1000557794tc",
    firstName: "Taylor",
    lastName: "Alison Swift",
    password: "AlisonTaylor",
    username: "SwiftTaylor",
    bio: "American singer-songwriter, I do genre-spanning discography, songwriting, and artistic reinventions",
    website: "taylorswift.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848190/tweetopia/191125_Taylor_Swift_at_the_2019_American_Music_Awards__cropped_rlydsg.png",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848197/tweetopia/Swift__Taylor__2007_oce2od.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "z6y10006633318h",
    firstName: "Virat",
    lastName: "Kohli",
    password: "KohliVirat123",
    username: "ViratKohli",
    bio: "Indian international cricketer and the former captain of the Indian national cricket team ",
    website: "viratKohliSharma.in",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848614/tweetopia/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023_fseb74.jpg",
    backgroundImage: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "g2j1000799070u3",
    firstName: "Bill",
    lastName: "Gates",
    password: "GatesBill123",
    username: "Billgates_99",
    bio: "BusinessMan and Philanthropist",
    website: "billandmelindagates.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686849538/tweetopia/download_u5bm2a.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686849578/tweetopia/images_l6jo6n.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "l7z1000816275p0",
    firstName: "BTS",
    lastName: "unOfficial",
    password: "btsArmy123",
    username: "Ipurpleyou",
    bio: " Bangtan Boys, is a South Korean boy band formed in 2010",
    website: "https://ibighit.com/bts/eng/",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686849806/tweetopia/download_n3w0pc.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686849784/tweetopia/BTS_during_a_White_House_press_conference_May_31__2022__cropped_fix7vb.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "oss1000942607yq",
    firstName: "Rajiv",
    lastName: "Hari Om Bhatia",
    password: "Khiladi123",
    username: "AkshayKumar",
    bio: "Padm shri awardee with 30 years of acting in over 100 films",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686850525/tweetopia/download_bhrtek.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686850601/tweetopia/images_gbxcrn.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "sgn100103034214",
    firstName: "Demi",
    lastName: "Lovato",
    password: "LovatoDemi1321",
    username: "DemiLovato",
    bio: " American singer, songwriter, and actress.",
    website: "demi_lovato.com",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686850825/tweetopia/Demi_Lovato_Interview_Feb_2020_cmiqay.png",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686850781/tweetopia/download_kbhgnj.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [{
      _id: "09o10001862844l",
      firstName: "Tom",
      lastName: "Holland",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686847139/tweetopia/download_pzswom.jpg",
      username: "TomHall44",
    },
    {
      _id: "6v310012535541r",
      firstName: "Ariana",
      lastName: "Grande",
      username: "grandeariana",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686852228/tweetopia/pjimage-1544144070_wpp7fc.jpg",

    },
    {
      _id: "z6y10006633318h",
      firstName: "Virat",
      lastName: "Kohli",
      username: "ViratKohli",
      profileAvatar:
        "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686848614/tweetopia/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023_fseb74.jpg",
    },],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "z071001164723m0",
    firstName: "Deepika",
    lastName: "Padukone",
    password: "DeepikaRanveer121",
    username: "deepikaRanveer",
    bio: "Indian actress who works predominantly in Hindi films,one of the highest-paid actresses in India",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686851862/tweetopia/download_eqdrxf.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686851909/tweetopia/deepika-padukone-ranveer-singh_coeoge.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "6v310012535541r",
    firstName: "Ariana",
    lastName: "Grande",
    password: "ariana232Grande",
    username: "grandeariana",
    bio: "Singer, actor, model, BusinessWomen. currently somewhere over the rainbow",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686852228/tweetopia/pjimage-1544144070_wpp7fc.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686852186/tweetopia/Ariana-Grande-ay_d_k8vinv.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
];
/**
 * 













8531001474694zg
ow21001568000d5
kuw1001699237qm
w551001793322dh
8xk10018759346l
2lq1001984369mr
9ee10020533513s
 * 
 */
