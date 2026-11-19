/**
 * Centralized content file for Lumine's Birthday Website.
 *
 * Vinay: You can edit any messages, captions, letter text, or recipient/sender names right here!
 * Everything here updates across the entire website automatically.
 */

export const birthdayContent = {
  // Names
  recipient: "Lumine",
  sender: "VINAY",

  // Section 01: Hero / Opening
  hero: {
    annotation: "A little something for you...",
    heading: "Joyeux Anniversaire, Lumine!",
    subheading: "A little corner of the internet, made just for you.",
    attribution: "With love, VINAY",
    cta: "Open your little gift",
    ribbonText: "Happy Birthday ✨ Bonne Fête",
  },

  // Section 02: Birthday Cake
  cake: {
    heading: "Make a little wish.",
    subheading: "Some wishes are meant to be kept.",
    instruction: "Blow out each candle with a gentle click...",
    wishGranted: "Your wish is officially on its way. ♡",
    promise: "You can ask me one thing, and i will do it. It can be anything!",
    relightButton: "Light the candles again 🕯️",
    cakeImage: "/images/cake.jpg",
  },

  // Section 03: Pinterest Scrapbook Board
  pinterest: {
    heading: "A few things that remind me of you.",
    annotation: "A little collection of your kind of things.",
    instruction: "Click on any photo to turn it over and read its note ✦",
    pins: [
      {
        id: "pin-1",
        image: "/images/tairazuma-1.jpg",
        alt: "Suzuki and Tani from You and I Are Polar Opposites",
        title: "Tairazuma & Polar Opposites",
        caption: "Some things are just too cute not to save.",
        note: "A playful nod to You and I Are Polar Opposites. That lovely, funny, and warm dynamic that always brings an instant smile.",
        tag: "#polar-opposites",
        rotation: "-rotate-2",
        tapePosition: "top-center",
        tapeColor: "blush",
      },
      {
        id: "pin-2",
        image: "/images/tairazuma-2.jpg",
        alt: "Taira and Azuma lying in clover with cute doodles",
        title: "Taira & Azuma in the Clover",
        caption: "Your taste in fictional couples deserves its own appreciation board.",
        note: "Surrounded by four-leaf clovers, soft greens, and serene company. Peaceful, cozy, and unmistakably your aesthetic.",
        tag: "#favourite-comforts",
        rotation: "rotate-3",
        tapePosition: "top-right",
        tapeColor: "matcha",
      },
      {
        id: "pin-3",
        image: "/images/fashion.jpg",
        alt: "Soft pastel coquette knit sweater with lace bonnet and ribbon",
        title: "Knit & Ribbon Aesthetic",
        caption: "Your style, your rules. Never lose that little creative spark.",
        note: "The combination of soft knits, delicate lace bonnets, and dainty ribbons. Cozy elegance with genuine personality.",
        tag: "#style-inspiration",
        rotation: "-rotate-1",
        tapePosition: "top-left",
        tapeColor: "butter",
      },
      {
        id: "pin-4",
        image: "/images/art-piece.jpg",
        alt: "Hand-drawn illustration of Yamada and Nishi",
        title: "Handmade Artwork",
        caption: "There's something special about the things people create with their own hands.",
        note: "Whether drawing, curating, or creating something uniquely your own, your artistic eye always shines through.",
        tag: "#creative-heart",
        rotation: "rotate-2",
        tapePosition: "top-center",
        tapeColor: "babyblue",
      },
    ],
  },

  // Section 04: Little Art Studio
  studio: {
    heading: "Your tiny art studio.",
    subheading: "Make something silly, cute, or completely chaotic.",
    instruction: "Pick a brush or stamp and draw directly on your sketchbook sheet:",
    downloadFilename: "lumines-little-masterpiece.png",
    downloadSuccess: "Saved to your device! A true masterpiece. 🎨",
  },

  // Section 05: Mascot Corner
  mascots: {
    heading: "Your little companions.",
    subheading: "They're quietly cheering you on today.",
    cat: {
      name: "Mochi the Cat",
      image: "/images/cute-cat.png",
      fallbackImage: "/images/cute-cat.jpg",
      messages: [
        "You're pawsitively wonderful!",
        "Keep making beautiful things.",
        "Tu es adorable !",
        "Passe une très belle journée !",
        "You're doing amazing, little human.",
        "Today is all about you! ✨",
        "Sending you warm purrs and good energy!",
      ],
    },
    snake: {
      name: "Bonnet the Snake",
      image: "/images/cute-snake.png",
      fallbackImage: "/images/cute-snake.jpg",
      messages: [
        "Sending you a little birthday sssssmile!",
        "Stay wonderfully yourself.",
        "Sssssuch a special day!",
        "I put on my finest bunny bonnet for your birthday!",
        "Joyeux anniversaire, Lumine !",
        "Don't forget to take a breather and eat cake! 🍰",
      ],
    },
  },

  // Section 06: Hidden Creepy-Cute World
  creepyCute: {
    sweetLabel: "Sweet Mode 🎀",
    creepyLabel: "Creepy-Cute Mode 👀",
    heading: "A Little Secret Aesthetic Corner",
    subheading: "A cozy Yamikawaii touch — sweet, pastel, with just a pinch of quirky edge.",
    image: "/images/creepy-cute.jpg",
    caption: "For the days when pastel meets a little playful mischief.",
    quote: "Cute doesn't always have to be ordinary.",
  },

  // Section 07: Birthday Letter
  letter: {
    annotation: "One last little thing...",
    title: "A letter for you.",
    openButton: "Open your letter ♡",
    closeButton: "Fold letter back",
    envelopeSeal: "Seal of Care",

    // EDIT YOUR PERSONAL BIRTHDAY MESSAGE HERE:
    message: `HAPPPY BIRTHDAYY 🥳🎉💖💖!!! Have a wonderful day and year ahead. You are really the best! Even though at times I was busy and replied late, you always waited patiently without getting offended, thankyou sooooooo much ❤️❤️. Keep Smiling and Take care.`,

    signOff: "With love, VINAY ♡",
    handwrittenFooter: "Made with a little extra care, just for you.",
  },

  // Section 08: Footer
  footer: {
    mainText: "Made for Lumine, with love.",
    subText: "© A little birthday corner by VINAY",
    tagline: "Designed with care, scrapbook tape, and lots of smiles.",
  },

  // Navigation Items
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Cake", href: "#cake" },
    { label: "Little Board", href: "#board" },
    { label: "Art Studio", href: "#studio" },
    { label: "Companions", href: "#mascots" },
    { label: "Letter", href: "#letter" },
  ],
};
