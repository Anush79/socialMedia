
import { formatDate } from "../utils/authUtils";


/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content: "Just discovered a hidden gem of a coffee shop in my neighborhood. The smell of freshly brewed beans is pure bliss! ☕ #CoffeeLover",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "grandeariana",
    createdAt: "2023-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Nothing beats a good book on a rainy day. Escaping into different worlds is the ultimate adventure. 📚 #Bookworm",
    mediaURL:
      "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "deepikaRanveer",
    createdAt: "2023-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "Spontaneous road trips are the best kind of therapy. Windows down, music up, and endless possibilities ahead! 🚗 #Wanderlust",
    mediaURL: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686818135/samples/bike.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "That's mouth watering! Could you make one for my Birthday as well?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "DemiLovato",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "Finally finished that challenging puzzle I've been working on for days. I feel like a genius! 🧩 #PuzzleAddict",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Just had the most delicious homemade pizza. Toppings galore and ooey-gooey cheese. My taste buds are in heaven! 🍕 #Foodie",
    mediaURL:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1687320585/tweetopia/Homemade_pizza_egtrvd.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "anushka",
    createdAt: "2023-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
      "Went for a hike today and stumbled upon a breathtaking waterfall. Mother Nature's beauty never ceases to amaze me. 🌿 #NatureLover",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "2023-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "Started learning a new musical instrument today. It's frustrating, but I'm determined to become a maestro! 🎶 #MusicEnthusiast",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "TomHall44",
    createdAt: "2023-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "Movie night with friends is always a blast. Laughter, popcorn, and a good film—perfect ingredients for a fun evening! 🍿 #MovieMarathon",
    mediaURL: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686818140/samples/imagecon-group.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "barackObama321",
    createdAt: "2023-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Just witnessed a stunning sunset. The sky was painted in hues of orange and pink. Moments like these make life magical. 🌅 #SunsetLover",
    mediaURL:
      "https://res.cloudinary.com/dt1leq0nd/image/upload/v1687487589/tweetopia/tropical-1641925_oq4eqi.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "SwiftTaylor",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "anushka",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeU",
    content: "Tried a new workout routine today, and I can barely move. But hey, no pain, no gain, right? 💪 #FitnessJourney",
    mediaURL: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "SwiftTaylor",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ElonMusk",
    createdAt: "2023-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUyfNt",
    content: "Spent the day exploring new hiking trails and connecting with nature. Feeling refreshed and inspired. 🌳🏞️ #NatureLover",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "SwiftTaylor",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "RonaldoCristiano",
    createdAt: "2023-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "CCmJpDnnQQ",
    content:
      "Life's too short to stress over the small stuff. Take a deep breath and enjoy the journey. #PositiveVibes",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "SwiftTaylor",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Z_TZT_3EAw",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ViratKohli",
    createdAt: "2023-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e-knMEsoLq",
    content: "Remember, your dreams are worth pursuing. Don't let anyone or anything hold you back. #DreamBig",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Billgates_99",
    createdAt: "2023-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "VY14RsXC7G",
    content:
      "It's amazing how a simple act of kindness can brighten someone's day. Let's make kindness the norm. #BeKind",
    mediaURL: "",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "Ipurpleyou",
    createdAt: "2023-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "AkshayKumar",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lbW4dlCpNC",
    content: "Finally finished reading that book I've been hooked on. It's amazing how a good story can transport you to another world! 📚 #Bookworm #EscapeReality",
    mediaURL: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1687488276/istockphoto-914810750-612x612_ivtyjj.jpg",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anushka",
    createdAt: "2023-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "DemiLovato",
    createdAt: "2023-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "R2lAuXvK7V",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "deepikaRanveer",
    createdAt: "2023-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "grandeariana",
    createdAt: "2023-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lF8cnfPAe9",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1686818135/samples/bike.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anushka",
    createdAt: "2023-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "stfTkUi2Nt",
    content:
      "Remember, setbacks are just stepping stones to success. Keep pushing forward and never give up! 💪 #MotivationMonday",
    mediaURL: "https://res.cloudinary.com/dt1leq0nd/image/upload/v1687488477/istockphoto-1129498241-612x612_loej3k.jpg",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anushka",
    createdAt: "2023-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "quiTkUi2Nt",
    content: "Smile often, laugh loudly, and spread happiness wherever you go. The world needs more joy! 😄✨",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "grandeariana",
    createdAt: "2023-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];