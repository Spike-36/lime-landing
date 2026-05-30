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
  // 👉 Cheese
  if (variant === "cheese") {
    return [
      {
        id: "epoisses",
        image: "/demo/images/epoisses.jpg",
        audio: "/demo/audio/epoisses.mp3",
        word: "Époisses",
        phonetic: "ay-pwahs",
        demoText:
          "Époisses is a soft washed-rind cheese with a rich, creamy texture and a strong aroma. Despite its bold smell, the flavour is smooth, savoury, and deeply buttery.",
        context:
          "Traditionally eaten with bread or served as part of a French cheese board.",
      },
      {
        id: "camembert",
        image: "/demo/images/camembert.jpg",
        audio: "/demo/audio/camembert.mp3",
        word: "Camembert",
        phonetic: "ka-mom-bair",
        demoText:
          "Camembert is a soft, bloomy-rind cheese with a creamy texture and earthy flavour. It softens as it warms and develops a richer aroma.",
        context:
          "Often served baked, or enjoyed with bread and cider in Normandy.",
      },
      {
        id: "comte",
        image: "/demo/images/comte.jpg",
        audio: "/demo/audio/comte.mp3",
        word: "Comté",
        phonetic: "com-tay",
        demoText:
          "Comté is a firm mountain cheese with a nutty, slightly sweet flavour that becomes deeper and more savoury with age.",
        context:
          "Frequently eaten on cheese boards, in sandwiches, or melted into gratins.",
      },
      {
        id: "reblochon",
        image: "/demo/images/reblochon.jpg",
        audio: "/demo/audio/reblochon.mp3",
        word: "Reblochon",
        phonetic: "reh-blo-shon",
        demoText:
          "Reblochon is a soft washed-rind cheese with a creamy texture and gentle nutty flavour. It melts smoothly and has a rich finish.",
        context:
          "Traditionally used in Alpine dishes like tartiflette.",
      },
      {
        id: "roquefort",
        image: "/demo/images/roquefort.jpg",
        audio: "/demo/audio/roquefort.mp3",
        word: "Roquefort",
        phonetic: "rock-for",
        demoText:
          "Roquefort is a sheep’s milk blue cheese with a salty, tangy flavour and creamy texture marked by distinctive blue veins.",
        context:
          "Often served in small portions with bread, walnuts, or salad.",
      },
    ]
  }

  // 👉 France
  if (variant === "france") {
    return [
      {
        id: "bouillabaisse",
        image: "/demo/images/bouillabaisse.jpg",
        audio: "/demo/audio/bouillabaisse.mp3",
        word: "Bouillabaisse",
        phonetic: "boo-ya-bess",
        demoText:
          "Bouillabaisse is a traditional fish stew from Marseille made with several kinds of fish, shellfish, tomatoes, saffron, and herbs.",
        context:
          "Traditionally served with toasted bread and rouille sauce along the Mediterranean coast.",
      },
      {
        id: "salade-nicoise",
        image: "/demo/images/salade_nicoise.jpg",
        audio: "/demo/audio/salade_nicoise.mp3",
        word: "Salade Niçoise",
        phonetic: "sa-lad nee-swahz",
        demoText:
          "Salade Niçoise is a composed salad made with tomatoes, olives, tuna, anchovies, eggs, and fresh vegetables.",
        context:
          "Commonly eaten as a light lunch in the south of France.",
      },
      {
        id: "boeuf-bourguignon",
        image: "/demo/images/boeuf_bourguignon.jpg",
        audio: "/demo/audio/boeuf_bourguignon.mp3",
        word: "Bœuf Bourguignon",
        phonetic: "buff boor-gin-yon",
        demoText:
          "Bœuf bourguignon is a slow-cooked beef stew prepared with red wine, onions, mushrooms, and herbs.",
        context:
          "Traditionally served as a rich and comforting main course.",
      },
      {
        id: "ratatouille",
        image: "/demo/images/ratatouille.jpg",
        audio: "/demo/audio/ratatouille.mp3",
        word: "Ratatouille",
        phonetic: "rat-a-too-ee",
        demoText:
          "Ratatouille is a vegetable dish made with tomatoes, aubergines, courgettes, peppers, onions, and olive oil.",
        context:
          "Often served in Provence as a side dish or light meal.",
      },
      {
        id: "tarte-tatin",
        image: "/demo/images/tarte_tatin.jpg",
        audio: "/demo/audio/tarte_tatin.mp3",
        word: "Tarte Tatin",
        phonetic: "tart ta-tan",
        demoText:
          "Tarte Tatin is an upside-down caramelised apple tart with a buttery pastry base.",
        context:
          "Usually served warm as a traditional French dessert.",
      },
    ]
  }

  // 👉 Asia + YumWords default
  return [
    {
      id: "pad-thai",
      image: "/demo/images/pad_thai.jpg",
      audio: "/demo/audio/pad_thai.mp3",
      word: "ผัดไทย",
      phonetic: "pàt tai",
      demoText:
        "Pad Thai is a stir-fried noodle dish made with rice noodles, egg, tamarind sauce, and fresh herbs.",
      context:
        "Often ordered from busy street stalls and casual restaurants.",
    },
    {
      id: "green-curry",
      image: "/demo/images/green_curry.jpg",
      audio: "/demo/audio/green_curry.mp3",
      word: "แกงเขียวหวาน",
      phonetic: "gaeng keow wan",
      demoText:
        "Green curry is a coconut-based curry with green chillies, herbs, and a gentle lingering heat.",
      context:
        "Commonly eaten with jasmine rice in restaurants and food courts.",
    },
    {
      id: "mango-sticky-rice",
      image: "/demo/images/mango.jpg",
      audio: "/demo/audio/mango_sticky_rice.mp3",
      word: "ข้าวเหนียวมะม่วง",
      phonetic: "khao neow ma-muang",
      demoText:
        "Mango sticky rice combines sweet mango with coconut sticky rice and a light coconut cream topping.",
      context:
        "Often eaten as a dessert during mango season in Thailand.",
    },
    {
      id: "sugarcane-juice",
      image: "/demo/images/sugarcane_juice.jpg",
      audio: "/demo/audio/sugarcane_juice.mp3",
      word: "น้ำอ้อย",
      phonetic: "nam oi",
      demoText:
        "Sugarcane juice is a freshly pressed drink with a naturally sweet and refreshing flavour.",
      context:
        "Usually sold from street carts in hot weather.",
    },
    {
      id: "som-tam",
      image: "/demo/images/som_tam.jpg",
      audio: "/demo/audio/som_tam.mp3",
      word: "ส้มตำ",
      phonetic: "som tam",
      demoText:
        "Som tam is a spicy green papaya salad with lime, chilli, fish sauce, and crushed peanuts.",
      context:
        "Frequently eaten as a shared dish alongside grilled meats and sticky rice.",
    },
  ]
}