import { createPhone, createColorVariants } from "./utils";

export const motorolaPhones = [
  createPhone(
    "Motorola Edge 50",
    "Motorola",
    "2024-08-08",
    [
      ...createColorVariants("Charcoal Gray", "#666D72", [
        { storage: "512GB", price: 6449.00 },
      ], "/img/phones/motorola/edge50/gray.jpg"),
      ...createColorVariants("Jasper Green", "#335959", [
        { storage: "512GB", price: 7999.20},
      ], "/img/phones/motorola/edge50/green.jpg"),
      ...createColorVariants("Peach Fuzz", "#FFBE98", [
        { storage: "512GB", price: 7999.20 },
      ], "/img/phones/motorola/edge50/peach.jpg"),
    ]
  ),

  createPhone(
    "Motorola Edge 50 Fusion",
    "Motorola",
    "2024-05-15",
    [
      ...createColorVariants("Arctic Blue", "#CEE4EF", [
        { storage: "256GB", price: 4974.71 },
      ], "/img/phones/motorola/edge50fusion/blue.jpg"),
      ...createColorVariants("Blue Green", "#216274", [
        { storage: "256GB", price: 5219.00 },
      ], "/img/phones/motorola/edge50fusion/bluegreen.jpg"),
      ...createColorVariants("Pink", "#D52F71", [
        { storage: "256GB", price: 4198.96 },
      ], "/img/phones/motorola/edge50fusion/pink.jpg"),
    ]
  ),

  createPhone(
    "Motorola Edge 50 Neo",
    "Motorola",
    "2024-08-29",
    [
      ...createColorVariants("Blue", "#003B75", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/edge50neo/blue.jpg"),
      ...createColorVariants("Gray", "#606B87", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/edge50neo/gray.jpg"),
      ...createColorVariants("Latte", "#D3AC85", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/edge50neo/latte.jpg"),
      ...createColorVariants("Mocha Mousse", "#98725D", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/edge50neo/mocha.jpg"),
      ...createColorVariants("Red", "#CD2D15", [
        { storage: "256GB", price: 4497.00 },
      ], "/img/phones/motorola/edge50neo/red.jpg"),
    ]
  ),

  createPhone(
    "Motorola Edge 50 Pro",
    "Motorola",
    "2024-04-08",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "512GB", price: 10999.00 },
      ], "/img/phones/motorola/edge50pro/black.jpg"),
      ...createColorVariants("Lavender", "#7C84AA", [
        { storage: "512GB", price: 8599.00},
      ], "/img/phones/motorola/edge50pro/lavender.jpg"),
    ]
  ),

  createPhone(
    "Motorola Edge 60",
    "Motorola",
    "2025-04-24",
    [
      ...createColorVariants("Blue", "#1D3051", [
        { storage: "512GB", price: 11999.00 },
      ], "/img/phones/motorola/edge60/blue.jpg"),
      ...createColorVariants("Shamrock Green", "#77A670", [
        { storage: "512GB", price: 11999.00 },
      ], "/img/phones/motorola/edge60/green.jpg"),
    ]
  ),

  createPhone(
    "Motorola Edge 60 Fusion",
    "Motorola",
    "2025-04-09",
    [
      ...createColorVariants("Blue", "#3A414A", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/motorola/edge60fusion/blue.jpg"),
      ...createColorVariants("Mocha Mousse", "#9B7561", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/motorola/edge60fusion/mocha.jpg"),
      ...createColorVariants("Pink", "#C78E95", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/motorola/edge60fusion/pink.jpg"),
      ...createColorVariants("Turquoise Green", "#78BBBE", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/motorola/edge60fusion/green.jpg"),
      
    ]
  ),

  createPhone(
    "Motorola Edge 60 Pro",
    "Motorola",
    "2025-04-24",
    [
      ...createColorVariants("Brown", "#776A5F", [
        { storage: "512GB", price: 14999.00 },
      ], "/img/phones/motorola/edge60pro/brown.jpg"),
      ...createColorVariants("Cobalt Blue", "#3E55AB", [
        { storage: "512GB", price: 14999.00 },
      ], "/img/phones/motorola/edge60pro/blue.jpg"),
      ...createColorVariants("Gray", "#899087", [
        { storage: "512GB", price: 14999.00 },
      ], "/img/phones/motorola/edge60pro/gray.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto E14",
    "Motorola",
    "2024-07-18",
    [
      ...createColorVariants("Gray", "#485265", [
        { storage: "64GB", price: 1645.00 },
      ], "/img/phones/motorola/motoe14/gray.jpg"),
      ...createColorVariants("Green", "#C9D9B3", [
        { storage: "64GB", price: 1645.00 },
      ], "/img/phones/motorola/motoe14/green.jpg"),
      ...createColorVariants("Lavender", "#CAB4D3", [
        { storage: "64GB", price: 1645.00 },
      ], "/img/phones/motorola/motoe14/lavender.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto E15",
    "Motorola",
    "2025-01-22",
    [
      ...createColorVariants("Cantera Blue", "#758B98", [
        { storage: "64GB", price: 1695.00 },
      ], "/img/phones/motorola/motoe15/blue.jpg"),
      ...createColorVariants("Purple", "#55567B", [
        { storage: "64GB", price: 1699.00 },
      ], "/img/phones/motorola/motoe15/purple.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G04",
    "Motorola",
    "2024-02-07",
    [
      ...createColorVariants("Black", "#242A32", [
        { storage: "128GB", price: 1739.13 },
      ], "/img/phones/motorola/motog04/black.jpg"),
      ...createColorVariants("Blue", "#0280B2", [
        { storage: "128GB", price: 1899.00 },
      ], "/img/phones/motorola/motog04/blue.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G04S",
    "Motorola",
    "2024-05-30",
    [
      ...createColorVariants("Black", "#242A32", [
        { storage: "128GB", price: 1999.00 },
        { storage: "256GB", price: 2699.00 },
      ], "/img/phones/motorola/motog04s/black.jpg"),
      ...createColorVariants("Blue", "#0280B2", [
        { storage: "256GB", price: 2699.00 },
      ], "/img/phones/motorola/motog04s/blue.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G05",
    "Motorola",
    "2025-01-07",
    [
      ...createColorVariants("Green", "#32575C", [
        { storage: "128GB", price: 1907.00 },
      ], "/img/phones/motorola/motog05/green.jpg"),
      ...createColorVariants("Red", "#993242", [
        { storage: "128GB", price: 1926.96 },
      ], "/img/phones/motorola/motog05/red.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G15",
    "Motorola",
    "2025-02-12",
    [
      ...createColorVariants("Blue", "#333D6A", [
        { storage: "512GB", price: 4499.00 },
      ], "/img/phones/motorola/motog15/blue.jpg"),
      ...createColorVariants("Gray", "#485265", [
        { storage: "128GB", price: 2090.00 },
        { storage: "256GB", price: 2330.00 },
      ], "/img/phones/motorola/motog15/gray.jpg"),
      ...createColorVariants("Green", "#76774D", [
        { storage: "128GB", price: 2090.00 },
        { storage: "256GB", price: 2330.00 },
      ], "/img/phones/motorola/motog15/green.jpg"),
      ...createColorVariants("Orange", "#E39942", [
        { storage: "128GB", price: 2090.00 },
        { storage: "256GB", price: 2330.00 },
      ], "/img/phones/motorola/motog15/orange.jpg"),
      ...createColorVariants("Sky Blue", "#CEE7EF", [
        { storage: "512GB", price: 4499.00 },
      ], "/img/phones/motorola/motog15/skyblue.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G24",
    "Motorola",
    "2024-02-06",
    [
      ...createColorVariants("Blue", "#819DB5", [
        { storage: "128GB", price: 2589.00 },
      ], "/img/phones/motorola/motog24/blue.jpg"),
      ...createColorVariants("Gray", "#6C7E82", [
        { storage: "128GB", price: 2259.00 },
      ], "/img/phones/motorola/motog24/gray.jpg"),
      ...createColorVariants("Green", "#C3D7C2", [
        { storage: "128GB", price: 2299.00 },
      ], "/img/phones/motorola/motog24/green.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G34",
    "Motorola",
    "2024-01-09",
    [
      ...createColorVariants("Black", "#313438", [
        { storage: "128GB", price: 2390.00 },
      ], "/img/phones/motorola/motog34/black.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G35",
    "Motorola",
    "2024-09-25",
    [
      ...createColorVariants("Blue", "#292D4A", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/motorola/motog35/blue.jpg"),
      ...createColorVariants("Green", "#12835E", [
        { storage: "128GB", price: 3299.00 },
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/motorola/motog35/green.jpg"),
      ...createColorVariants("Orange", "#FE5A6B", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/motorola/motog35/orange.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G54",
    "Motorola",
    "2023-09-05",
    [
      ...createColorVariants("Black", "#252A2D", [
        { storage: "256GB", price: 3317.00 },
      ], "/img/phones/motorola/motog54/black.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G55",
    "Motorola",
    "2024-09-06",
    [
      ...createColorVariants("Black", "#202928", [
        { storage: "256GB", price: 3199.00 },
      ], "/img/phones/motorola/motog55/black.jpg"),
      ...createColorVariants("Green", "#92A390", [
        { storage: "256GB", price: 3220.00 },
      ], "/img/phones/motorola/motog55/green.jpg"),
      ...createColorVariants("Pink", "#C564A1", [
        { storage: "256GB", price: 3239.00 },
      ], "/img/phones/motorola/motog55/pink.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G56",
    "Motorola",
    "2025-05-29",
    [
      ...createColorVariants("Black", "#494A4D", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/motog56/black.jpg"),
      ...createColorVariants("Cobalt Blue", "#3E55AB", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/motog56/blue.jpg"),
      ...createColorVariants("Gray", "#98ADAE", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/motog56/gray.jpg"),
      ...createColorVariants("Green", "#5D7050", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/motorola/motog56/green.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G75",
    "Motorola",
    "2024-10-28",
    [
      ...createColorVariants("Aqua Blue", "#4D6C9E", [
        { storage: "256GB", price: 4099.00 },
      ], "/img/phones/motorola/motog75/blue.jpg"),
      ...createColorVariants("Charcoal Grey", "#151619", [
        { storage: "256GB", price: 3258.00 },
      ], "/img/phones/motorola/motog75/gray.jpg"),
      ...createColorVariants("Succulent Green", "#A3B1AF", [
        { storage: "256GB", price: 3490.00},
      ], "/img/phones/motorola/motog75/green.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G84",
    "Motorola",
    "2023-09-08",
    [
      ...createColorVariants("Blue", "#BFC9CF", [
        { storage: "256GB", price: 4743.71 },
      ], "/img/phones/motorola/motog84/blue.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G85",
    "Motorola",
    "2024-07-10",
    [
      ...createColorVariants("Blue", "#5872BD", [
        { storage: "256GB", price: 4118.00 },
      ], "/img/phones/motorola/motog85/blue.jpg"),
      ...createColorVariants("Gray", "#4B555A", [
        { storage: "256GB", price: 4159.00 },
      ], "/img/phones/motorola/motog85/gray.jpg"),
      ...createColorVariants("Lime Green", "#C5B637", [
        { storage: "256GB", price: 4164.00 },
      ], "/img/phones/motorola/motog85/green.jpg"),
      ...createColorVariants("Pink", "#B91343", [
        { storage: "256GB", price: 4145.00 },
      ], "/img/phones/motorola/motog85/pink.jpg"),
    ]
  ),

  createPhone(
    "Motorola Moto G86",
    "Motorola",
    "2025-05-29",
    [
      ...createColorVariants("Blue", "#3F4450", [
        { storage: "256GB", price: 5839.00 },
      ], "/img/phones/motorola/motog86/blue.jpg"),
      ...createColorVariants("Cherry", "#BB525B", [
        { storage: "256GB", price: 5729.00 },
      ], "/img/phones/motorola/motog86/cherry.jpg"),
      ...createColorVariants("Green", "#82853A", [
        { storage: "256GB", price: 5729.00 },
      ], "/img/phones/motorola/motog86/green.jpg"),
      ...createColorVariants("Lilac", "#A5A8C4", [
        { storage: "256GB", price: 4869.00 },
      ], "/img/phones/motorola/motog86/lilac.jpg"),
    ]
  ),

  createPhone(
    "Motorola Razr 50",
    "Motorola",
    "2024-06-25",
    [
      ...createColorVariants("Beige", "#C4BEB3", [
        { storage: "512GB", price: 11999.00 },
      ], "/img/phones/motorola/razr50/beige.jpg"),
      ...createColorVariants("Orange", "#D07158", [
        { storage: "512GB", price: 11999.00 },
      ], "/img/phones/motorola/razr50/orange.jpg"),
    ]
  ),

  createPhone(
    "Motorola Razr 50 Ultra",
    "Motorola",
    "2024-06-25",
    [
      ...createColorVariants("Midnight Blue", "#5F687C", [
        { storage: "512GB", price: 12499.00 },
      ], "/img/phones/motorola/razr50ultra/blue.jpg"),
      ...createColorVariants("Mocha Mousse", "#977063", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/motorola/razr50ultra/mocha.jpg"),
      ...createColorVariants("Peach Fuzz", "#FFBE98", [
        { storage: "512GB", price: 17848.57 },
      ], "/img/phones/motorola/razr50ultra/peach.jpg"),
      ...createColorVariants("Pink", "#D74B85", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/motorola/razr50ultra/pink.jpg"),
    ]
  ),

  createPhone(
    "Motorola Razr 60",
    "Motorola",
    "2025-04-25",
    [
      ...createColorVariants("Ocean Blue", "#30475E", [
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/motorola/razr60/blue.jpg"),
      ...createColorVariants("Spring Green", "#70D4A5", [
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/motorola/razr60/green.jpg"),
      ...createColorVariants("White", "#EDEDF9", [
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/motorola/razr60/white.jpg"),
    ]
  ),

  createPhone(
    "Motorola Razr 60 Ultra",
    "Motorola",
    "2025-04-25",
    [
      ...createColorVariants("Brown", "#8D7C70", [
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/motorola/razr60ultra/brown.jpg"),
      ...createColorVariants("Green Alcantara", "#3B4443", [
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/motorola/razr60ultra/green.jpg"),
      ...createColorVariants("Red", "#993242", [
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/motorola/razr60ultra/red.jpg"),
    ]
  ),
];