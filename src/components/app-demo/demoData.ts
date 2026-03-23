export type DemoItem = {
  id: string
  image: string
  word: string
  phonetic?: string
  demoText: string
  context?: string
}

type Variant = "lime" | "cheese"

export function getDemoItems(variant: Variant): DemoItem[] {
  if (variant === "cheese") {
    return [
      {
        id: "brie",
        image: "/demo/images/brie.jpg",
        word: "Brie",
        phonetic: "gaeng khĭeow wăan",
        demoText:
          "Brie is a soft, creamy cheese with a mild, buttery flavour. It becomes softer and more runny as it warms, and is often served at room temperature. The rind is edible and adds a slight earthiness.",
        context:
          "Commonly served on cheese boards or as a starter with bread.",
      },
      {
        id: "camembert",
        image: "/demo/images/camembert.jpg",
        word: "Camembert",
        phonetic: "gaeng khĭeow wăan",
        demoText:
          "Camembert is a soft, bloomy-rind cheese with a richer, more earthy flavour than Brie. It softens as it warms, becoming creamy and slightly runny, with a deeper aroma.",
        context:
          "Often served baked, or as part of a cheese board with bread.",
      },
      {
        id: "comte",
        image: "/demo/images/comte.jpg",
        word: "Comté",
        phonetic: "gaeng khĭeow wăan",
        demoText:
          "Comté is a firm, aged cheese with a nutty and slightly sweet flavour. It becomes more complex as it matures, developing deeper savoury notes. It slices cleanly and works well both on its own and in cooking.",
        context:
          "Often used in sandwiches, gratins, or eaten as part of a cheese board.",
      },
      {
        id: "reblochon",
        image: "/demo/images/reblochon.jpg",
        word: "Reblochon",
        phonetic: "gaeng khĭeow wăan",
        demoText:
          "Reblochon is a soft, washed-rind cheese with a creamy texture and a savoury, slightly nutty flavour. It has a stronger aroma than it tastes, with a smooth, rich finish.",
        context:
          "Traditionally used in dishes like tartiflette or served warm with potatoes.",
      },
      {
        id: "roquefort",
        image: "/demo/images/roquefort.jpg",
        word: "Roquefort",
        phonetic: "gaeng khĭeow wăan",
        demoText:
          "Roquefort is a blue cheese made from sheep’s milk with a strong, salty flavour and creamy texture. The blue veins create a sharp, tangy taste that stands out immediately.",
        context:
          "Typically served in small portions on cheese boards or with salads.",
      },
    ]
  }

  // Default: YumWords (Thai)
  return [
    {
      id: "pad-thai",
      image: "/demo/images/pad_thai.jpg",
      word: "ผัดไทย",
      phonetic: "pàt tai",
      demoText:
        "Pad Thai is a stir-fried noodle dish made with flat rice noodles, egg, and a lightly sweet-savoury sauce. It usually arrives dry rather than soupy, topped with peanuts and lime, and adjusted to taste at the table. The flavour is balanced rather than fiery, which makes it a safe, filling choice if you’re unsure what to order.",
      context:
        "Often ordered as a main dish from street stalls or casual restaurants.",
    },
    {
      id: "green-curry",
      image: "/demo/images/green_curry.jpg",
      word: "แกงเขียวหวาน",
      phonetic: "gaeng khĭeow wăan",
      demoText:
        "Green curry is a coconut-based curry with a fragrant, aromatic sauce and fresh herbs. It often looks greener than expected, with heat that builds gradually rather than hitting all at once. It’s usually spooned over rice and eaten as part of a shared meal.",
      context:
        "More commonly ordered at restaurants or food courts than from street carts.",
    },
    {
      id: "look-chin",
      image: "/demo/images/look_chin.jpg",
      word: "ลูกชิ้น",
      phonetic: "look CHIN",
      demoText:
        "Look chin are small meat or fish balls sold hot from street carts, usually on skewers. They have a springy texture, and most of the flavour comes from the dipping sauce rather than the balls themselves. They’re easy to recognise and quick to eat while browsing street food.",
      context:
        "Usually bought as a savoury snack from street vendors.",
    },
    {
      id: "thai-iced-tea",
      image: "/demo/images/thai_iced_tea.jpg",
      word: "ชาเย็น",
      phonetic: "chaa YEN",
      demoText:
        "Thai iced tea is a strong brewed tea mixed with milk and served over a lot of ice. It’s thicker, sweeter, and more dessert-like than regular iced tea, with a strong tea aroma underneath. It’s often ordered to cool down alongside spicy or salty food.",
      context:
        "Commonly sold at drink stalls, food courts, and casual cafés.",
    },
    {
      id: "mango",
      image: "/demo/images/mango.jpg",
      word: "มะม่วงน้ำดอกไม้",
      phonetic: "ma-MUANG nam dok MAI",
      demoText:
        "Nam dok mai mango is a large yellow mango with very soft flesh and almost no fibre. It’s usually peeled and sliced, eaten fresh on its own or shared, and feels smooth and easy to eat rather than chewy.",
      context:
        "Most often seen at fruit markets and street fruit stalls, especially in mango season.",
    },
  ]
}