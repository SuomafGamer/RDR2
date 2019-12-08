var collectables = [
    { name: "Flowers", value: 155.50 },
    { name: "Tarot Cups", value: 240.50 },
    { name: "Tarot Swords", value: 286.50 },
    { name: "Tarot Wands", value: 239.00 },
    { name: "Tarot Pentacles", value: 287.00 },
    { name: "Braclets", value: 271.50 },
    { name: "Earrings", value: 364.50 },
    { name: "Necklaces", value: 335.00 },
    { name: "Rings", value: 378.00 },
    { name: "Alcohol", value: 160.50 },
    { name: "Eggs", value: 182.50 },
    { name: "Arrowheads", value: 289.00 },
    { name: "Heirlooms", value: 292.50 },
    { name: "Coins", value: 540.00 },
];

// All spellings are set to match the names searchable for: https://jeanropke.github.io/RDR2CollectorsMap/
var collectableMap = {
    "Flowers": [
        "Texas Bluebonnet",
        "Bitterweed",
        "Agarita",
        "Wild Rhubarb",
        "Cardinal FLower",
        "Creek Plum",
        "Blood Flower",
        "Chocolate Daisy",
        "Wisteria",
    ],

    "Tarot Cups": [
        "Ace of Cups",
        "Two of Cups",
        "Three of Cups",
        "Four of Cups",
        "Five of Cups",
        "Six of Cups",
        "Seven of Cups",
        "Eight of Cups",
        "Nine of Cups",
        "Ten of Cups",
        "Page of Cups",
        "Knight of Cups",
        "Queen of Cups",
        "King of Cups",
    ],
    "Tarot Swords": [
        "Ace of Swords",
        "Two of Swords",
        "Three of Swords",
        "Four of Swords",
        "Five of Swords",
        "Six of Swords",
        "Seven of Swords",
        "Eight of Swords",
        "Nine of Swords",
        "Ten of Swords",
        "Page of Swords",
        "Knight of Swords",
        "Queen of Swords",
        "King of Swords",
    ],
    "Tarot Wands": [
        "Ace of Wands",
        "Two of Wands",
        "Three of Wands",
        "Four of Wands",
        "Five of Wands",
        "Six of Wands",
        "Seven of Wands",
        "Eight of Wands",
        "Nine of Wands",
        "Ten of Wands",
        "Page of Wands",
        "Knight of Wands",
        "Queen of Wands",
        "King of Wands",
    ],
    "Tarot Pentacles": [
        "Ace of Pentacles",
        "Two of Pentacles",
        "Three of Pentacles",
        "Four of Pentacles",
        "Five of Pentacles",
        "Six of Pentacles",
        "Seven of Pentacles",
        "Eight of Pentacles",
        "Nine of Pentacles",
        "Ten of Pentacles",
        "Page of Pentacles",
        "Knight of Pentacles",
        "Queen of Pentacles",
        "King of Pentacles",
    ],
    "Braclets": [
        "Abello Ruby Bangle Bracelet",
        "Ojeda Rose Gold Bangle Bracelet",
        "Helena Sapphire Bracelet",
        "Durant Pearl Bracelet",
        "Infanta Turquoise Bracelet",
        "Elliston Carved Bracelet",
        "Hajnal Garnet Bangle Bracelet",
        "Greco Sapphire Bracelet",
    ],
    "Earrings": [
        "Ursula Citrine Earrings",
        "Royal Victoria Diamond Earrings",
        "Calumet Turquoise Earrings",
        "Orchidee Diamond Earrings",
        "Sterling Tooth Earrings",
        "Harford Garnet Earrings",
        "Duchess Emerald Earrings",
        "Beauchene Ruby Earrings", // Note - no fancy e
        "Endicott Diamond Earrings",
        "Josephine Pearl Earrings",
        "Emmeline Coral Earrings",
    ],
    "Necklaces": [
        "Blakely Miniature Necklace",
        "Richelieu Amethyst Necklace",
        "Pelle Pearl Necklace",
        "Ainsworth Cross Necklace",
        "Braxton Amethyst Necklace",
        "Rou Pearl Necklace",
        "Gosselin White Gold Necklace",
        "Dane Topaz Necklace",
        "Tuamotu Pearl Necklace",
    ],
    "Rings": [
        "Harland Coral Ring",
        "Magnate Turquoise Ring",
        "Pilgrim Moonstone Ring",
        "Bonnard Pearl Ring",
        "Banais Topaz Ring",
        "Beaulieux Diamond Ring",
        "Yates Diamond Ring",
        "Aubrey Onyx Ring",
        "Bosque Emerald Ring",
        "Sackville Diamond Ring",
        "Thorburn Turquoise Ring",
    ],
    "Alcohol": [
        "Tennesee Whiskey", // Note - spelling
        "Irish Whiskey",
        "Scotch Whisky", // Note - no e in whiskey
        "Absinthe",
        "Gran Corazon Madeira",
        "Old Tom Gin",
        "Caribbean Rum",
        "Cognac",
        "London Dry Gin",
    ],
    "Eggs": [
        "Spoonbill Egg",
        "Heron Egg",
        "Loon Egg",
        "Eagle Egg",
        "Vulture Egg",
        "Hawk Egg",
        "Egret Egg",
        "Duck Egg",
        "Goose Egg",
    ],
    "Arrowheads": [
        "Rough Arrowhead",
        "Splintered Arrowhead",
        "Crude Arrowhead",
        "Chipped Arrowhead",
        "Feldspar Arrowhead",
        "Slate Arrowhead",
        "Bone Arrowhead",
        "Raw Arrowhead",
        "Obsidian Arrowhead",
        "Quartz Arrowhead",
        "Flint Arrowhead",
        "Agate Arrowhead",
    ],
    "Heirlooms": [
        "Jade Hairpin",
        "Cherrywood Comb",
        "Ebony Hairbrush",
        "Metal Hairpin",
        "Carved Wooden Hairpin",
        "Boxwood Comb",
        "Goat Hair Brush",
        "Ebony Hairpin",
        "Ivory Hairpin",
        "Rosewood Hairbrush",
        "Tortoiseshell Comb",
        "Ivory Comb",
        "Horse Hair Brush",
        "Boar Bristle Brush",
        "New Guinea Rosewood Hairbrush",
    ],
    "Coins": [
        "1800 Gold Quarter",
        "1798 Draped Bust Silver Dollar",
        "1787 One Cent Token",
        "1794 Silver Dollar",
        "1700 New Yorke Token",
        "1800 Five Dollar Bechtler",
        "1792 Quarter",
        "1800 Gold Dollar",
        "1792 Nickel",
        "1796 Halfpenny",
        "1795 Half Eagle",
        "1797 Gold Eagle",
        "1792 Liberty Quarter",
        "1800 Half Dime",
        "1789 Penny",
    ]
}

// ---------------------------------------
// --------------- PRICING ---------------
// ---------------------------------------
var collectablePricingMap = {
    // Flowers
    "Texas Bluebonnet": {
        value: 999
    },
    "Bitterweed": {
        value: 999
    },
    "Agarita": {
        value: 999
    },
    "Wild Rhubarb": {
        value: 999
    },
    "Cardinal FLower": {
        value: 999
    },
    "Creek Plum": {
        value: 999
    },
    "Blood Flower": {
        value: 999
    },
    "Chocolate Daisy": {
        value: 999
    },
    "Wisteria": {
        value: 999
    },

    // Tarot Cups
    "Ace of Cups": {
        value: 999
    },
    "Two of Cups": {
        value: 999
    },
    "Three of Cups": {
        value: 999
    },
    "Four of Cups": {
        value: 999
    },
    "Five of Cups": {
        value: 999
    },
    "Six of Cups": {
        value: 999
    },
    "Seven of Cups": {
        value: 999
    },
    "Eight of Cups": {
        value: 999
    },
    "Nine of Cups": {
        value: 999
    },
    "Ten of Cups": {
        value: 999
    },
    "Page of Cups": {
        value: 999
    },
    "Knight of Cups": {
        value: 999
    },
    "Queen of Cups": {
        value: 999
    },
    "King of Cups": {
        value: 999
    },

    // Tarot Swords
    "Ace of Swords": {
        value: 999
    },
    "Two of Swords": {
        value: 999
    },
    "Three of Swords": {
        value: 999
    },
    "Four of Swords": {
        value: 999
    },
    "Five of Swords": {
        value: 999
    },
    "Six of Swords": {
        value: 999
    },
    "Seven of Swords": {
        value: 999
    },
    "Eight of Swords": {
        value: 999
    },
    "Nine of Swords": {
        value: 999
    },
    "Ten of Swords": {
        value: 999
    },
    "Page of Swords": {
        value: 999
    },
    "Knight of Swords": {
        value: 999
    },
    "Queen of Swords": {
        value: 999
    },
    "King of Swords": {
        value: 999
    },

    // Tarot Wands
    "Ace of Wands": {
        value: 999
    },
    "Two of Wands": {
        value: 999
    },
    "Three of Wands": {
        value: 999
    },
    "Four of Wands": {
        value: 999
    },
    "Five of Wands": {
        value: 999
    },
    "Six of Wands": {
        value: 999
    },
    "Seven of Wands": {
        value: 999
    },
    "Eight of Wands": {
        value: 999
    },
    "Nine of Wands": {
        value: 999
    },
    "Ten of Wands": {
        value: 999
    },
    "Page of Wands": {
        value: 999
    },
    "Knight of Wands": {
        value: 999
    },
    "Queen of Wands": {
        value: 999
    },
    "King of Wands": {
        value: 999
    },

    // Tarot Pentacles
    "Ace of Pentacles": {
        value: 999
    },
    "Two of Pentacles": {
        value: 999
    },
    "Three of Pentacles": {
        value: 999
    },
    "Four of Pentacles": {
        value: 999
    },
    "Five of Pentacles": {
        value: 999
    },
    "Six of Pentacles": {
        value: 999
    },
    "Seven of Pentacles": {
        value: 999
    },
    "Eight of Pentacles": {
        value: 999
    },
    "Nine of Pentacles": {
        value: 999
    },
    "Ten of Pentacles": {
        value: 999
    },
    "Page of Pentacles": {
        value: 999
    },
    "Knight of Pentacles": {
        value: 999
    },
    "Queen of Pentacles": {
        value: 999
    },
    "King of Pentacles": {
        value: 999
    },

    // Braclets
    "Abello Ruby Bangle Bracelet": {
        value: 999
    },
    "Ojeda Rose Gold Bangle Bracelet": {
        value: 999
    },
    "Helena Sapphire Bracelet": {
        value: 999
    },
    "Durant Pearl Bracelet": {
        value: 999
    },
    "Infanta Turquoise Bracelet": {
        value: 999
    },
    "Elliston Carved Bracelet": {
        value: 999
    },
    "Hajnal Garnet Bangle Bracelet": {
        value: 999
    },
    "Greco Sapphire Bracelet": {
        value: 999
    },

    // Earrings
    "Ursula Citrine Earrings": {
        value: 999
    },
    "Royal Victoria Diamond Earrings": {
        value: 999
    },
    "Calumet Turquoise Earrings": {
        value: 999
    },
    "Orchidee Diamond Earrings": {
        value: 999
    },
    "Sterling Tooth Earrings": {
        value: 999
    },
    "Harford Garnet Earrings": {
        value: 999
    },
    "Duchess Emerald Earrings": {
        value: 999
    },
    "Beauchene Ruby Earrings": { // Note - no fancy e
        value: 999
    },
    "Endicott Diamond Earrings": {
        value: 999
    },
    "Josephine Pearl Earrings": {
        value: 999
    },
    "Emmeline Coral Earrings": {
        value: 999
    },

    // Necklaces
    "Blakely Miniature Necklace": {
        value: 999
    },
    "Richelieu Amethyst Necklace": {
        value: 999
    },
    "Pelle Pearl Necklace": {
        value: 999
    },
    "Ainsworth Cross Necklace": {
        value: 999
    },
    "Braxton Amethyst Necklace": {
        value: 999
    },
    "Rou Pearl Necklace": {
        value: 999
    },
    "Gosselin White Gold Necklace": {
        value: 999
    },
    "Dane Topaz Necklace": {
        value: 999
    },
    "Tuamotu Pearl Necklace": {
        value: 999
    },

    // Rings
    "Harland Coral Ring": {
        value: 999
    },
    "Magnate Turquoise Ring": {
        value: 999
    },
    "Pilgrim Moonstone Ring": {
        value: 999
    },
    "Bonnard Pearl Ring": {
        value: 999
    },
    "Banais Topaz Ring": {
        value: 999
    },
    "Beaulieux Diamond Ring": {
        value: 999
    },
    "Yates Diamond Ring": {
        value: 999
    },
    "Aubrey Onyx Ring": {
        value: 999
    },
    "Bosque Emerald Ring": {
        value: 999
    },
    "Sackville Diamond Ring": {
        value: 999
    },
    "Thorburn Turquoise Ring": {
        value: 999
    },

    // Alcohol
    "Tennesee Whiskey": { // Note - spelling
        value: 999
    },
    "Irish Whiskey": {
        value: 999
    },
    "Scotch Whisky": { // Note - no e in whiskey
        value: 999
    },
    "Absinthe": {
        value: 999
    },
    "Gran Corazon Madeira": {
        value: 999
    },
    "Old Tom Gin": {
        value: 999
    },
    "Caribbean Rum": {
        value: 999
    },
    "Cognac": {
        value: 999
    },
    "London Dry Gin": {
        value: 999
    },

    // Eggs
    "Spoonbill Egg": {
        value: 999
    },
    "Heron Egg": {
        value: 999
    },
    "Loon Egg": {
        value: 999
    },
    "Eagle Egg": {
        value: 999
    },
    "Vulture Egg": {
        value: 999
    },
    "Hawk Egg": {
        value: 999
    },
    "Egret Egg": {
        value: 999
    },
    "Duck Egg": {
        value: 999
    },
    "Goose Egg": {
        value: 999
    },

    // Arrowheads
    "Rough Arrowhead": {
        value: 999
    },
    "Splintered Arrowhead": {
        value: 999
    },
    "Crude Arrowhead": {
        value: 999
    },
    "Chipped Arrowhead": {
        value: 999
    },
    "Feldspar Arrowhead": {
        value: 999
    },
    "Slate Arrowhead": {
        value: 999
    },
    "Bone Arrowhead": {
        value: 999
    },
    "Raw Arrowhead": {
        value: 999
    },
    "Obsidian Arrowhead": {
        value: 999
    },
    "Quartz Arrowhead": {
        value: 999
    },
    "Flint Arrowhead": {
        value: 999
    },
    "Agate Arrowhead": {
        value: 999
    },

    // Heirlooms
    "Jade Hairpin": {
        value: 999
    },
    "Cherrywood Comb": {
        value: 999
    },
    "Ebony Hairbrush": {
        value: 999
    },
    "Metal Hairpin": {
        value: 999
    },
    "Carved Wooden Hairpin": {
        value: 999
    },
    "Boxwood Comb": {
        value: 999
    },
    "Goat Hair Brush": {
        value: 999
    },
    "Ebony Hairpin": {
        value: 999
    },
    "Ivory Hairpin": {
        value: 999
    },
    "Rosewood Hairbrush": {
        value: 999
    },
    "Tortoiseshell Comb": {
        value: 999
    },
    "Ivory Comb": {
        value: 999
    },
    "Horse Hair Brush": {
        value: 999
    },
    "Boar Bristle Brush": {
        value: 999
    },
    "New Guinea Rosewood Hairbrush": {
        value: 999
    },

    // Coins
    "1800 Gold Quarter": {
        value: 999
    },
    "1798 Draped Bust Silver Dollar": {
        value: 999
    },
    "1787 One Cent Token": {
        value: 999
    },
    "1794 Silver Dollar": {
        value: 999
    },
    "1700 New Yorke Token": {
        value: 999
    },
    "1800 Five Dollar Bechtler": {
        value: 999
    },
    "1792 Quarter": {
        value: 999
    },
    "1800 Gold Dollar": {
        value: 999
    },
    "1792 Nickel": {
        value: 999
    },
    "1796 Halfpenny": {
        value: 999
    },
    "1795 Half Eagle": {
        value: 999
    },
    "1797 Gold Eagle": {
        value: 999
    },
    "1792 Liberty Quarter": {
        value: 999
    },
    "1800 Half Dime": {
        value: 999
    },
    "1789 Penny": {
        value: 999
    },
}