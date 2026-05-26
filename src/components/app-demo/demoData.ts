export type DemoItem = {
  id: string
  image: string
  word: string
  phonetic?: string
  audio?: string
  demoText: string
  context?: string
}

type Variant = "yumwords" | "asia" | "france" | "cheese"

export function getDemoItems(variant: Variant): DemoItem[] {
  if (variant === "cheese") {
    return [
      {
        id: "brie",
        image: "/demo/images/brie.jpg",
        audio: "",
        word: "Brie",
        phonetic: "bree",
        demoText:
          "Brie is a soft, creamy cheese with a mild, buttery flavour. It becomes softer and more runny as it warms, and is often served at room temperature. The rind is edible and adds a slight earthiness.",
        context:
          "Commonly served on cheese boards or as a starter with bread.",
      },
      {
        id: "camembert",
        image: "/demo/images/camembert.jpg",
        audio: "",
        word: "Camembert",
        phonetic: "ka-mom-bair",
        demoText:
          "Camembert is a soft, bloomy-rind cheese with a richer, more earthy flavour than Brie. It softens as it warms, becoming creamy and slightly runny, with a deeper aroma.",
        context:
          "Often served baked, or as part of a cheese board with bread.",
      },
      {
        id: "comte",
        image: "/demo/images/comte.jpg",
        audio: "",
        word: "Comté",
        phonetic: "com-tay",
        demoText:
          "Comté is a firm, aged cheese with a nutty and slightly sweet flavour. It becomes more complex as it matures, developing deeper savoury notes. It slices cleanly and works well both on its own and in cooking.",
        context:
          "Often used in sandwiches, gratins, or eaten as part of a cheese board.",
      },
      {
        id: "reblochon",
        image: "/demo/images/reblochon.jpg",
        audio: "",
        word: "Reblochon",
        phonetic: "reh-blo-shon",
        demoText:
          "Reblochon is a soft, washed-rind cheese with a creamy texture and a savoury, slightly nutty flavour. It has a stronger aroma than it tastes, with a smooth, rich finish.",
        context:
          "Traditionally used in dishes like tartiflette or served warm with potatoes.",
      },
      {
        id: "roquefort",
        image: "/demo/images/roquefort.jpg",
        audio: "",
        word: "Roquefort",
        phonetic: "rock-for",
        demoText:
          "Roquefort is a blue cheese made from sheep’s milk with a strong, salty flavour and creamy texture. The blue veins create a sharp, tangy taste that stands out immediately.",
        context:
          "Typically served in small portions on cheese boards or with salads.",
      },
    ]
  }

  // 👉 France placeholder demo content
  if (variant === "france") {
    return [
      {
        id: "coq-au-vin",
        image: "/demo/images/coq_au_vin.jpg",
        audio: "",
        word: "Coq au Vin",
        phonetic: "cock oh van",
        demoText:
          "Coq au vin is a traditional French dish where chicken is slowly cooked in red wine with onions, mushrooms, and herbs. The sauce becomes rich and savoury as it cooks.",
        context:
          "Often served as a comforting main course in traditional French cooking.",
      },
      {
        id: "croissant",
        image: "/demo/images/croissant.jpg",
        audio: "",
        word: "Croissant",
        phonetic: "kwah-son",
        demoText:
          "A croissant is a buttery, flaky pastry made with layered dough. It is light, crisp on the outside, and soft in the centre.",
        context:
          "Most commonly eaten for breakfast or with coffee.",
      },
    ]
  }

  // 👉 Default: YumWords umbrella + Asia
  return [
    {
      id: "pad-thai",
      image: "/demo/images/pad_thai.jpg",
      audio: "/demo/audio/pad_thai.mp3",
      word: "ผัดไทย",
      phonetic: "pàt tai",
      demoText:
        "Pad Thai is a stir-fried noodle dish made with flat rice noodles, egg, and a lightly sweet-savoury sauce.",
      context:
        "Often ordered as a main dish from street stalls or casual restaurants.",
    },
    {
      id: "green-curry",
      image: "/demo/images/green_curry.jpg",
      audio: "",
      word: "แกงเขียวหวาน",
      phonetic: "gaeng khĭeow wăan",
      demoText:
        "Green curry is a coconut-based curry with fragrant herbs and a gradual heat.",
      context:
        "More commonly ordered at restaurants or food courts than from street carts.",
    },
    {
      id: "look-chin",
      image: "/demo/images/look_chin.jpg",
      audio: "",
      word: "ลูกชิ้น",
      phonetic: "look CHIN",
      demoText:
        "Look chin are grilled meat or fish balls commonly sold from Thai street carts.",
      context:
        "Usually bought as a savoury snack from street vendors.",
    },
  ]
}