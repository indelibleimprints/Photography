// Add or remove entries here whenever pieces are made on stream.
const STREAM_ITEMS = [
  {
    id: 0,
    name: "Grey Mother of Pearl & Lavender Pearl Drops",
    price: 45.00,
    image: "/images/stream/IMG_1437.jpeg",
    description: "Square grey and white mother of pearl set atop a single lavender freshwater pearl, finished with silver leverback ear wires. Each piece carries its own natural shimmer and color variation, so no two are ever quite alike. Made live on stream."
  },
  {
    id: 39,
    name: "S1",
    price: 20.00,
    image: "/images/stream/S1.jpeg",
    description: "Cobalt blue sea glass nugget with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 40,
    name: "S2",
    price: 35.00,
    image: "/images/stream/S2.jpeg",
    description: "Graduated iridescent AB crystal beads in a cascading dangle, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 41,
    name: "S3",
    price: 35.00,
    image: "/images/stream/S3.jpeg",
    description: "Graduated iridescent crystal beads in soft yellow, green, and blue tones, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 42,
    name: "S4",
    price: 20.00,
    image: "/images/stream/S4.jpeg",
    description: "Turquoise cabochon studs set on a frosted square backing, with silver leverback ear wires. Made live on stream."
  },
  {
    id: 43,
    name: "S5",
    price: 20.00,
    image: "/images/stream/S5.jpeg",
    description: "Pale lavender sea glass nugget with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 44,
    name: "S6",
    price: 20.00,
    image: "/images/stream/S6.jpeg",
    description: "Turquoise sea glass nugget with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 45,
    name: "S7",
    price: 20.00,
    image: "/images/stream/S7.jpeg",
    description: "Periwinkle sea glass nugget with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 46,
    name: "Cobalt Heart Drops",
    price: 25.00,
    image: "/images/stream/Sold1.jpeg",
    description: "Cobalt blue sea glass teardrops with a delicate wire heart link and iridescent AB crystal accent, on silver leverback ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 47,
    name: "Midnight Crystal Cascade",
    price: 30.00,
    image: "/images/stream/Sold2.jpeg",
    description: "Large faceted deep blue crystal beads with an iridescent AB crystal accent cluster, on silver leverback ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 48,
    name: "Iridescent Pearl Bars",
    price: 55.00,
    image: "/images/stream/Sold3.jpeg",
    description: "Elongated iridescent mother of pearl beads with a white pearl accent, on silver leverback ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 49,
    name: "Ivory Shell Cluster",
    price: 55.00,
    image: "/images/stream/Sold4.jpeg",
    description: "Freeform ivory mother of pearl nuggets with an iridescent AB crystal accent cluster, on silver leverback ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 56,
    name: "S15",
    price: 20.00,
    image: "/images/stream/S15.jpeg",
    description: "Chartreuse glass nugget beads with dangling metal fringe and pearl accents, on clip-on ear wires. Made live on stream."
  },
  {
    id: 57,
    name: "S16",
    price: 20.00,
    image: "/images/stream/S16.jpeg",
    description: "Olive green rectangular stone beads with a faceted crystal and silver bead accent, on clip-on ear wires. Made live on stream."
  },
  {
    id: 58,
    name: "S17",
    price: 20.00,
    image: "/images/stream/S17.jpeg",
    description: "Color-shifting AB glass teardrops that shift hue with the light, paired with clear crystal cluster accents, on clip-on ear wires. Made live on stream."
  },
  {
    id: 59,
    name: "Turquoise Crystal Cluster",
    price: 20.00,
    image: "/images/stream/Sold5.jpeg",
    description: "Clear crystal clusters with a turquoise faceted bead accent, on clip-on ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 60,
    name: "S18",
    price: 20.00,
    image: "/images/stream/S18.jpeg",
    description: "Aqua frosted sea glass nuggets with a freshwater pearl and silver leaf cap, on clip-on ear wires. Made live on stream."
  },
  {
    id: 61,
    name: "S19",
    price: 20.00,
    image: "/images/stream/S19.jpeg",
    description: "Cobalt blue rondelle beads set between ornate filigree silver caps, on clip-on ear wires. Made live on stream."
  },
  {
    id: 62,
    name: "Iridescent Fluted Drops",
    price: 20.00,
    image: "/images/stream/Sold6.jpeg",
    description: "Fluted glass beads with a color-shifting iridescent finish, set in gold filigree caps, on clip-on ear wires. Made live on stream.",
    sold: true
  },
  {
    id: 63,
    name: "S20",
    price: 25.00,
    image: "/images/stream/S20.jpeg",
    description: "Elongated marbled lampwork glass beads in blue-grey and cream with a rust accent swirl, on ornate silver clip-on ear wires. Made live on stream."
  },
  {
    id: 64,
    name: "S21",
    price: 25.00,
    image: "/images/stream/S21.jpeg",
    description: "Crackled batik-pattern oval beads in brown and cream, with a pearl accent, on clip-on ear wires. Made live on stream."
  },
  {
    id: 65,
    name: "S22",
    price: 25.00,
    image: "/images/stream/S22.jpeg",
    description: "Large baroque champagne mother of pearl nuggets with a pearl accent, on silver clip-on ear wires. Made live on stream."
  },
  {
    id: 66,
    name: "S23",
    price: 25.00,
    image: "/images/stream/S23.jpeg",
    description: "Turquoise resin discs with a silver palm tree charm, on silver ear wires. Made live on stream."
  },
  {
    id: 67,
    name: "S24",
    price: 25.00,
    image: "/images/stream/S24.jpeg",
    description: "Carved mauve flower cutouts paired with white howlite flower clusters, on clip-on ear wires. Made live on stream."
  },
  {
    id: 68,
    name: "S25",
    price: 25.00,
    image: "/images/stream/S25.jpeg",
    description: "Emerald-cut color-shifting AB crystal pendants with a round crystal accent, in gold-tone settings, on clip-on ear wires. Made live on stream."
  },
  {
    id: 69,
    name: "S26",
    price: 25.00,
    image: "/images/stream/S26.jpeg",
    description: "Royal blue fabric flower tassels in gold filigree caps, on clip-on ear wires. Made live on stream."
  },
  {
    id: 70,
    name: "S8",
    price: 20.00,
    image: "/images/stream/S8.jpeg",
    description: "Frosted green sea glass nuggets with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 71,
    name: "S9",
    price: 20.00,
    image: "/images/stream/S9.jpeg",
    description: "Glossy green nuggets with an iridescent AB crystal accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 72,
    name: "S10",
    price: 20.00,
    image: "/images/stream/S10.jpeg",
    description: "Cobalt blue beads paired with a mint sea glass nugget in a silver leaf cap, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 73,
    name: "S11",
    price: 20.00,
    image: "/images/stream/S11.jpeg",
    description: "Graduated red and cream marbled ceramic beads, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 74,
    name: "S12",
    price: 20.00,
    image: "/images/stream/S12.jpeg",
    description: "Terracotta clay disc drops with a textured silver bead accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 75,
    name: "S13",
    price: 20.00,
    image: "/images/stream/S13.jpeg",
    description: "Terracotta clay teardrops with a striped blue paper bead accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 76,
    name: "S14",
    price: 20.00,
    image: "/images/stream/S14.jpeg",
    description: "Sage green clay teardrops with a speckled stone and textured silver bead accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 77,
    name: "S27",
    price: 35.00,
    image: "/images/stream/S27.jpeg",
    description: "Pale mint tagua nut hoops with a cobalt blue sea glass chip and mint cat's eye bead dangling inside. Made live on stream."
  },
  {
    id: 78,
    name: "S28",
    price: 35.00,
    image: "/images/stream/S28.jpeg",
    description: "Cream tagua nut bead with a brown crackle pattern, paired with a pale blue frosted glass accent. Made live on stream."
  },
  {
    id: 79,
    name: "S29",
    price: 25.00,
    image: "/images/stream/S29.jpeg",
    description: "Cream cylindrical beads with a color-shifting purple/pink AB crystal accent. Made live on stream."
  },
  {
    id: 80,
    name: "S30",
    price: 30.00,
    image: "/images/stream/S30.jpeg",
    description: "Frosted white cylindrical glass beads, a simple minimalist drop. Made live on stream."
  },
  {
    id: 81,
    name: "S31",
    price: 35.00,
    image: "/images/stream/S31.jpeg",
    description: "Peach tagua nut hoops with a cornflower blue matte bead and a textured silver accent bead. Made live on stream."
  },
  {
    id: 82,
    name: "S32",
    price: 35.00,
    image: "/images/stream/S32.jpeg",
    description: "Peach tagua nut hoops with rectangular mother-of-pearl-style beads and gold-tone hardware. Made live on stream."
  },
  {
    id: 83,
    name: "S33",
    price: 40.00,
    image: "/images/stream/S33.jpeg",
    description: "Color-shifting AB crystal accent with a dark plum freshwater pearl, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 84,
    name: "S34",
    price: 40.00,
    image: "/images/stream/S34.jpeg",
    description: "Freshwater pearl drops in a dove grey and soft lavender pairing, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 85,
    name: "S35",
    price: 35.00,
    image: "/images/stream/S35.jpeg",
    description: "Golden tagua nut hoops with a lava rock bead and gold-tone cat's eye accent. Made live on stream."
  },
  {
    id: 86,
    name: "S36",
    price: 25.00,
    image: "/images/stream/S36.jpeg",
    description: "Teal lampwork glass beads with a black accent bead, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 87,
    name: "S37",
    price: 30.00,
    image: "/images/stream/S37.jpeg",
    description: "Bold red stone coin beads with a fire agate accent, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 88,
    name: "S38",
    price: 35.00,
    image: "/images/stream/S38.jpeg",
    description: "Magenta glass heart pendants with clear AB crystal accents, on silver leverback ear wires. Made live on stream."
  },
  {
    id: 89,
    name: "S39",
    price: 35.00,
    image: "/images/stream/S39.jpeg",
    description: "Green tagua nut slices with mother-of-pearl round accents, on gold-tone leverback ear wires. Made live on stream."
  },
  {
    id: 90,
    name: "S40",
    price: 25.00,
    image: "/images/stream/S40.jpeg",
    description: "Mother-of-pearl shell discs with turquoise-tone rondelle accents, on copper-tone leverback ear wires. Made live on stream."
  }
];
