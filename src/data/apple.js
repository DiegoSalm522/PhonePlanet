import { createPhone, createColorVariants } from "./utils";

export const applePhones = [
  createPhone(
    "Apple iPhone 12",
    "Apple",
    "2020-10-23",
    [
      ...createColorVariants("Blue", "#023B63", [
        { storage: "64GB", price: 4873.24 },
        { storage: "128GB", price: 5460.79 },
        { storage: "256GB", price: 6008.14 },
      ], "/img/phones/apple/iphone12/blue.jpg"),
      ...createColorVariants("Green", "#D8EFD5", [
        { storage: "64GB", price: 4901.16 },
        { storage: "128GB", price: 5599.00 },
        { storage: "256GB", price: 5729.00 },
      ], "/img/phones/apple/iphone12/green.jpg"),
      ...createColorVariants("Purple", "#B7AFE6", [
        { storage: "64GB", price: 5299.00 },
        { storage: "128GB", price: 5710.01 },
        { storage: "256GB", price: 6718.74 },
      ], "/img/phones/apple/iphone12/purple.jpg"),
      ...createColorVariants("Red", "#D82E2E", [
        { storage: "64GB", price: 5763.61 },
        { storage: "128GB", price: 6622.93 },
        { storage: "256GB", price: 7117.81 },
      ], "/img/phones/apple/iphone12/red.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 12 Mini",
    "Apple",
    "2020-11-13",
    [
      ...createColorVariants("Black", "#212125", [
        { storage: "64GB", price: 3746.00 },
        { storage: "128GB", price: 4205.21 },
        { storage: "256GB", price: 5348.24 },
      ], "/img/phones/apple/iphone12mini/black.jpg"),
      ...createColorVariants("Blue", "#023B63", [
        { storage: "64GB", price: 3799.00 },
        { storage: "128GB", price: 4241.31 },
        { storage: "256GB", price: 5067.97 },
      ], "/img/phones/apple/iphone12mini/blue.jpg"),
      ...createColorVariants("Green", "#D8EFD5", [
        { storage: "64GB", price: 3945.00 },
        { storage: "128GB", price: 4377.51 },
        { storage: "256GB", price: 4950.96 },
      ], "/img/phones/apple/iphone12mini/green.jpg"),
      ...createColorVariants("Purple", "#B7AFE6", [
        { storage: "64GB", price: 4196.00 },
        { storage: "128GB", price: 4415.13 },
        { storage: "256GB", price: 7658.02 },
      ], "/img/phones/apple/iphone12mini/purple.jpg"),
      ...createColorVariants("Red", "#D82E2E", [
        { storage: "64GB", price: 3793.26 },
        { storage: "128GB", price: 4287.51 },
        { storage: "256GB", price: 4847.39 },
      ], "/img/phones/apple/iphone12mini/red.jpg"),
      ...createColorVariants("White", "#F5F5F7", [
        { storage: "64GB", price: 3927.00 },
        { storage: "128GB", price: 4714.68 },
        { storage: "256GB", price: 5148.37 },
      ], "/img/phones/apple/iphone12mini/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 12 Pro",
    "Apple",
    "2020-10-23",
    [
      ...createColorVariants("Blue", "#364C5A", [
        { storage: "128GB", price: 5939.00 },
        { storage: "256GB", price: 6817.40 },
      ], "/img/phones/apple/iphone12pro/blue.jpg"),
      ...createColorVariants("Gold", "#FCEBD3", [
        { storage: "256GB", price: 6643.43 },
        { storage: "512GB", price: 7224.64 },
      ], "/img/phones/apple/iphone12pro/gold.jpg"),
      ...createColorVariants("Graphite", "#52514D", [
        { storage: "128GB", price: 6107.00 },
        { storage: "256GB", price: 6331.00 },
        { storage: "512GB", price: 6881.43 },
      ], "/img/phones/apple/iphone12pro/graphite.jpg"),
      ...createColorVariants("Pacific Blue", "#2D4E5C", [
        { storage: "512GB", price: 6959.00 },
      ], "/img/phones/apple/iphone12pro/pacificblue.jpg"),
      ...createColorVariants("Silver", "#E3E4DF", [
        { storage: "128GB", price: 6189.72 },
        { storage: "256GB", price: 6332.42 },
        { storage: "512GB", price: 6849.00 },
      ], "/img/phones/apple/iphone12pro/silver.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 12 Pro Max",
    "Apple",
    "2020-11-13",
    [
      ...createColorVariants("Blue", "#364C5A", [
        { storage: "128GB", price: 7869.00 },
        { storage: "512GB", price: 9939.00 },
      ], "/img/phones/apple/iphone12promax/blue.jpg"),
      ...createColorVariants("Gold", "#FCEBD3", [
        { storage: "128GB", price: 7939.00 },
      ], "/img/phones/apple/iphone12promax/gold.jpg"),
      ...createColorVariants("Graphite", "#52514D", [
        { storage: "128GB", price: 7939.00 },
        { storage: "256GB", price: 10633.00 },
        { storage: "512GB", price: 11500.00 },
      ], "/img/phones/apple/iphone12promax/graphite.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 13",
    "Apple",
    "2021-09-24",
    [
      ...createColorVariants("Blue", "#276787", [
        { storage: "128GB", price: 6199.00 },
        { storage: "256GB", price: 7598.00 },
        { storage: "512GB", price: 8513.55 },
      ], "/img/phones/apple/iphone13/blue.jpg"),
      ...createColorVariants("Green", "#394C38", [
        { storage: "128GB", price: 6045.00 },
        { storage: "256GB", price: 6799.00 },
      ], "/img/phones/apple/iphone13/green.jpg"),
      ...createColorVariants("Midnight", "#232A31", [
        { storage: "128GB", price: 5968.76 },
        { storage: "256GB", price: 7049.00 },
        { storage: "512GB", price: 8703.15 },
      ], "/img/phones/apple/iphone13/midnight.jpg"),
      ...createColorVariants("Pink", "#FADDD7", [
        { storage: "128GB", price: 7087.66 },
        { storage: "256GB", price: 7409.46 },
        { storage: "512GB", price: 9111.59 },
      ], "/img/phones/apple/iphone13/pink.jpg"),
      ...createColorVariants("Red", "#BF0013", [
        { storage: "128GB", price: 6599.00 },
        { storage: "256GB", price: 6699.00 },
        { storage: "512GB", price: 9233.52 },
      ], "/img/phones/apple/iphone13/red.jpg"),
      ...createColorVariants("Starlight", "#FAF6F2", [
        { storage: "128GB", price: 6219.00 },
        { storage: "256GB", price: 6687.53 },
        { storage: "512GB", price: 8737.09 },
      ], "/img/phones/apple/iphone13/starlight.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 13 Mini",
    "Apple",
    "2021-09-24",
    [
      ...createColorVariants("Blue", "#276787", [
        { storage: "128GB", price: 5299.38 },
        { storage: "256GB", price: 7101.50 },
        { storage: "512GB", price: 8298.79 },
      ], "/img/phones/apple/iphone13mini/blue.jpg"),
      ...createColorVariants("Green", "#394C38", [
        { storage: "128GB", price: 6007.25 },
        { storage: "256GB", price: 8011.53 },
      ], "/img/phones/apple/iphone13mini/green.jpg"),
      ...createColorVariants("Midnight", "#232A31", [
        { storage: "128GB", price: 5641.00 },
        { storage: "256GB", price: 7101.50 },
      ], "/img/phones/apple/iphone13mini/midnight.jpg"),
      ...createColorVariants("Pink", "#FADDD7", [
        { storage: "128GB", price: 6187.92 },
        { storage: "256GB", price: 6499.00 },
      ], "/img/phones/apple/iphone13mini/pink.jpg"),
      ...createColorVariants("Red", "#BF0013", [
        { storage: "128GB", price: 5855.17 },
        { storage: "256GB", price: 6878.19 },
        { storage: "512GB", price: 9706.28 },
      ], "/img/phones/apple/iphone13mini/red.jpg"),
      ...createColorVariants("Starlight", "#FAF6F2", [
        { storage: "128GB", price: 6128.29 },
        { storage: "256GB", price: 8286.21 },
        { storage: "512GB", price: 9758.99 },
      ], "/img/phones/apple/iphone13mini/starlight.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 13 Pro",
    "Apple",
    "2021-09-24",
    [
      ...createColorVariants("Alpine Blue", "#A7C1D9", [
        { storage: "128GB", price: 7993.00 },
        { storage: "256GB", price: 8969.00 },
        { storage: "512GB", price: 9285.00 },
        { storage: "1TB", price: 10054.00 },
      ], "/img/phones/apple/iphone13pro/alpineblue.jpg"),
      ...createColorVariants("Alpine Green", "#576856", [
        { storage: "128GB", price: 7948.00 },
        { storage: "256GB", price: 8812.49 },
        { storage: "512GB", price: 9572.00 },
        { storage: "1TB", price: 9744.30 },
      ], "/img/phones/apple/iphone13pro/alpinegreen.jpg"),
      ...createColorVariants("Gold", "#FAE7CF", [
        { storage: "128GB", price: 8421.65 },
        { storage: "256GB", price: 9417.82 },
        { storage: "512GB", price: 9589.00 },
        { storage: "1TB", price: 9993.33 },
      ], "/img/phones/apple/iphone13pro/gold.jpg"),
      ...createColorVariants("Graphite", "#54524F", [
        { storage: "128GB", price: 7940.12 },
        { storage: "256GB", price: 8598.60 },
        { storage: "512GB", price: 9431.59 },
        { storage: "1TB", price: 10029.00 },
      ], "/img/phones/apple/iphone13pro/graphite.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 13 Pro Max",
    "Apple",
    "2021-09-24",
    [
      ...createColorVariants("Alpine Blue", "#A7C1D9", [
        { storage: "128GB", price: 10942.80 },
        { storage: "256GB", price: 13650.07 },
        { storage: "512GB", price: 15573.53 },
      ], "/img/phones/apple/iphone13promax/alpineblue.jpg"),
      ...createColorVariants("Alpine Green", "#576856", [
        { storage: "128GB", price: 11021.19 },
        { storage: "256GB", price: 12599.00 },
        { storage: "512GB", price: 13097.14 },
      ], "/img/phones/apple/iphone13promax/alpinegreen.jpg"),
      ...createColorVariants("Gold", "#FAE7CF", [
        { storage: "128GB", price: 11012.70 },
        { storage: "256GB", price: 13542.44 },
        { storage: "512GB", price: 14500.00 },
      ], "/img/phones/apple/iphone13promax/gold.jpg"),
      ...createColorVariants("Graphite", "#54524F", [
        { storage: "128GB", price: 9800.00 },
        { storage: "256GB", price: 12530.58 },
        { storage: "512GB", price: 14299.27 },
        { storage: "1TB", price: 15407.14 },
      ], "/img/phones/apple/iphone13promax/graphite.jpg"),
      ...createColorVariants("Silver", "#F1F2ED", [
        { storage: "128GB", price: 10999.00 },
        { storage: "256GB", price: 12130.40 },
      ], "/img/phones/apple/iphone13promax/silver.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 14",
    "Apple",
    "2022-09-16",
    [
      ...createColorVariants("Blue", "#BFCEDE", [
        { storage: "128GB", price: 7408.30 },
        { storage: "256GB", price: 8486.00 },
      ], "/img/phones/apple/iphone14/blue.jpg"),
      ...createColorVariants("Midnight", "#31353B", [
        { storage: "128GB", price: 6955.00 },
        { storage: "256GB", price: 7845.00 },
        { storage: "512GB", price: 8899.00 },
      ], "/img/phones/apple/iphone14/midnight.jpg"),
      ...createColorVariants("Purple", "#E7D6E9", [
        { storage: "128GB", price: 7117.00 },
      ], "/img/phones/apple/iphone14/purple.jpg"),
      ...createColorVariants("Red", "#E11B2B", [
        { storage: "128GB", price: 6923.00 },
        { storage: "512GB", price: 8899.00 },
      ], "/img/phones/apple/iphone14/red.jpg"),
      ...createColorVariants("Starlight", "#F0ECE6", [
        { storage: "128GB", price: 8899.00 },
        { storage: "512GB", price: 11167.25 },
      ], "/img/phones/apple/iphone14/starlight.jpg"),
      ...createColorVariants("Yellow", "#F5E488", [
        { storage: "128GB", price: 7965.30 },
        { storage: "256GB", price: 8106.53 },
        { storage: "512GB", price: 8999.00 },
      ], "/img/phones/apple/iphone14/yellow.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 14 Plus",
    "Apple",
    "2022-10-07",
    [
      ...createColorVariants("Blue", "#BFCEDE", [
        { storage: "128GB", price: 8235.01 },
        { storage: "256GB", price: 8838.16 },
      ], "/img/phones/apple/iphone14plus/blue.jpg"),
      ...createColorVariants("Midnight", "#31353B", [
        { storage: "128GB", price: 8001.30 },
        { storage: "128GB", price: 19578.55 },
      ], "/img/phones/apple/iphone14plus/midnight.jpg"),
      ...createColorVariants("Purple", "#E7D6E9", [
        { storage: "128GB", price: 8565.02 },
      ], "/img/phones/apple/iphone14plus/purple.jpg"),
      ...createColorVariants("Red", "#E11B2B", [
        { storage: "256GB", price: 8837.95 },
      ], "/img/phones/apple/iphone14plus/red.jpg"),
      ...createColorVariants("Starlight", "#F0ECE6", [
        { storage: "512GB", price: 18612.40 },
      ], "/img/phones/apple/iphone14plus/starlight.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 14 Pro",
    "Apple",
    "2022-09-16",
    [
      ...createColorVariants("Dark Purple", "#4B4352", [
        { storage: "128GB", price: 9929.00 },
        { storage: "256GB", price: 10665.93 },
        { storage: "512GB", price: 12474.29 },
      ], "/img/phones/apple/iphone14pro/darkpurple.jpg"),
      ...createColorVariants("Gold", "#F3E5CA", [
        { storage: "128GB", price: 9953.00 },
        { storage: "256GB", price: 10799.00 },
        { storage: "512GB", price: 12521.80 },
      ], "/img/phones/apple/iphone14pro/gold.jpg"),
      ...createColorVariants("Silver", "#EEF0EF", [
        { storage: "128GB", price: 10179.67 },
        { storage: "256GB", price: 10959.00 },
      ], "/img/phones/apple/iphone14pro/silver.jpg"),
      ...createColorVariants("Space Black", "#302F2D", [
        { storage: "128GB", price: 9792.38 },
        { storage: "256GB", price: 10665.63 },
      ], "/img/phones/apple/iphone14pro/spaceblack.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 14 Pro Max",
    "Apple",
    "2022-09-16",
    [
      ...createColorVariants("Dark Purple", "#4B4352", [
        { storage: "128GB", price: 12995.00 },
        { storage: "256GB", price: 16799.00 },
        { storage: "512GB", price: 35149.05 },
      ], "/img/phones/apple/iphone14promax/darkpurple.jpg"),
      ...createColorVariants("Gold", "#F3E5CA", [
        { storage: "128GB", price: 20499.00 },
      ], "/img/phones/apple/iphone14promax/gold.jpg"),
      ...createColorVariants("Space Black", "#302F2D", [
        { storage: "128GB", price: 12885.00 },
        { storage: "256GB", price: 13290.00 },
        { storage: "512GB", price: 33999.00 },
      ], "/img/phones/apple/iphone14promax/spaceblack.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 15",
    "Apple",
    "2023-09-22",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "128GB", price: 9536.54 },
        { storage: "256GB", price: 10879.00 },
        { storage: "512GB", price: 12383.19 },
      ], "/img/phones/apple/iphone15/black.jpg"),
      ...createColorVariants("Blue", "#D5DDE0", [
        { storage: "128GB", price: 9701.00 },
        { storage: "256GB", price: 11211.68 },
        { storage: "512GB", price: 12052.03 },
      ], "/img/phones/apple/iphone15/blue.jpg"),
      ...createColorVariants("Green", "#CFD9C9", [
        { storage: "128GB", price: 9535.71 },
        { storage: "256GB", price: 11208.26 },
      ], "/img/phones/apple/iphone15/green.jpg"),
      ...createColorVariants("Pink", "#EBD0D2", [
        { storage: "128GB", price: 9893.81 },
        { storage: "256GB", price: 11211.06 },
        { storage: "512GB", price: 12953.16 },
      ], "/img/phones/apple/iphone15/pink.jpg"),
      ...createColorVariants("Yellow", "#ECE6C6", [
        { storage: "128GB", price: 9618.83 },
        { storage: "256GB", price: 11156.89 },
      ], "/img/phones/apple/iphone15/yellow.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 15 Plus",
    "Apple",
    "2023-09-22",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "128GB", price: 11029.29 },
        { storage: "256GB", price: 12345.69 },
        { storage: "512GB", price: 13512.68 },
      ], "/img/phones/apple/iphone15plus/black.jpg"),
      ...createColorVariants("Blue", "#D5DDE0", [
        { storage: "128GB", price: 11209.16 },
        { storage: "512GB", price: 12669.26 },
      ], "/img/phones/apple/iphone15plus/blue.jpg"),
      ...createColorVariants("Green", "#CFD9C9", [
        { storage: "128GB", price: 10757.18 },
        { storage: "256GB", price: 12039.53 },
      ], "/img/phones/apple/iphone15plus/green.jpg"),
      ...createColorVariants("Pink", "#EBD0D2", [
        { storage: "256GB", price: 12037.79 },
      ], "/img/phones/apple/iphone15plus/pink.jpg"),
      ...createColorVariants("Yellow", "#ECE6C6", [
        { storage: "128GB", price: 10761.07 },
        { storage: "512GB", price: 12071.66 },
      ], "/img/phones/apple/iphone15plus/yellow.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 15 Pro",
    "Apple",
    "2023-09-22",
    [
      ...createColorVariants("Black Titanium", "#3F4042", [
        { storage: "128GB", price: 12725.00 },
        { storage: "256GB", price: 13876.73 },
        { storage: "512GB", price: 14086.41 },
        { storage: "1TB", price: 15227.16 },
      ], "/img/phones/apple/iphone15pro/blacktitanium.jpg"),
      ...createColorVariants("Blue Titanium", "#3D4555", [
        { storage: "128GB", price: 13043.53 },
        { storage: "256GB", price: 13380.40 },
        { storage: "512GB", price: 13926.23 },
        { storage: "1TB", price: 14800.02 },
      ], "/img/phones/apple/iphone15pro/bluetitanium.jpg"),
      ...createColorVariants("Natural Titanium", "#BAB4A9", [
        { storage: "128GB", price: 13037.49 },
        { storage: "256GB", price: 14416.28 },
        { storage: "512GB", price: 14506.12 },
      ], "/img/phones/apple/iphone15pro/naturaltitanium.jpg"),
      ...createColorVariants("White Titanium", "#F2F1EB", [
        { storage: "128GB", price: 13093.22 },
        { storage: "256GB", price: 13879.00 },
        { storage: "512GB", price: 14639.00 },
        { storage: "1TB", price: 16017.22 },
      ], "/img/phones/apple/iphone15pro/whitetitanium.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 15 Pro Max",
    "Apple",
    "2023-09-22",
    [
      ...createColorVariants("Black Titanium", "#3F4042", [
        { storage: "256GB", price: 14601.16 },
        { storage: "512GB", price: 15393.20 },
        { storage: "1TB", price: 17241.72 },
      ], "/img/phones/apple/iphone15promax/blacktitanium.jpg"),
      ...createColorVariants("Blue Titanium", "#3D4555", [
        { storage: "256GB", price: 15130.32 },
        { storage: "512GB", price: 15385.76 },
        { storage: "1TB", price: 15674.14 },
      ], "/img/phones/apple/iphone15promax/bluetitanium.jpg"),
      ...createColorVariants("Natural Titanium", "#BAB4A9", [
        { storage: "256GB", price: 15070.00 },
        { storage: "512GB", price: 16334.41 },
        { storage: "1TB", price: 16464.66 },
      ], "/img/phones/apple/iphone15promax/naturaltitanium.jpg"),
      ...createColorVariants("White Titanium", "#F2F1EB", [
        { storage: "256GB", price: 15336.08 },
        { storage: "512GB", price: 15755.95 },
        { storage: "1TB", price: 17306.83 },
      ], "/img/phones/apple/iphone15promax/whitetitanium.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 16",
    "Apple",
    "2024-09-20",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "128GB", price: 17499.00 },
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone16/black.jpg"),
      ...createColorVariants("Green", "#B0D4D2", [
        { storage: "128GB", price: 17499.00 },
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone16/green.jpg"),
      ...createColorVariants("Pink", "#F2ADDA", [
        { storage: "128GB", price: 17499.00 },
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone16/pink.jpg"),
      ...createColorVariants("Ultramarine", "#9AADF6", [
        { storage: "128GB", price: 17499.00 },
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone16/ultramarine.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "128GB", price: 17499.00 },
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone16/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 16 Plus",
    "Apple",
    "2024-09-20",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22499.00 },
        { storage: "512GB", price: 27499.00 },
      ], "/img/phones/apple/iphone16plus/black.jpg"),
      ...createColorVariants("Green", "#B0D4D2", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22499.00 },
        { storage: "512GB", price: 27499.00 },
      ], "/img/phones/apple/iphone16plus/green.jpg"),
      ...createColorVariants("Pink", "#F2ADDA", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22499.00 },
        { storage: "512GB", price: 27499.00 },
      ], "/img/phones/apple/iphone16plus/pink.jpg"),
      ...createColorVariants("Ultramarine", "#9AADF6", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22499.00 },
        { storage: "512GB", price: 27499.00 },
      ], "/img/phones/apple/iphone16plus/ultramarine.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22499.00 },
        { storage: "512GB", price: 27499.00 },
      ], "/img/phones/apple/iphone16plus/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 16 Pro",
    "Apple",
    "2024-09-20",
    [
      ...createColorVariants("Black Titanium", "#3C3C3D", [
        { storage: "128GB", price: 23499.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 37999.00 },
      ], "/img/phones/apple/iphone16pro/blacktitanium.jpg"),
      ...createColorVariants("Desert Titanium", "#BFA48F", [
        { storage: "128GB", price: 23499.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 37999.00 },
      ], "/img/phones/apple/iphone16pro/deserttitanium.jpg"),
      ...createColorVariants("Natural Titanium", "#C2BCB2", [
        { storage: "128GB", price: 23499.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 37999.00 },
      ], "/img/phones/apple/iphone16pro/naturaltitanium.jpg"),
      ...createColorVariants("White Titanium", "#F2F1ED", [
        { storage: "128GB", price: 23499.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 37999.00 },
      ], "/img/phones/apple/iphone16pro/whitetitanium.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 16 Pro Max",
    "Apple",
    "2024-09-20",
    [
      ...createColorVariants("Black Titanium", "#3C3C3D", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone16promax/blacktitanium.jpg"),
      ...createColorVariants("Desert Titanium", "#BFA48F", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone16promax/deserttitanium.jpg"),
      ...createColorVariants("Natural Titanium", "#C2BCB2", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone16promax/naturaltitanium.jpg"),
      ...createColorVariants("White Titanium", "#F2F1ED", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone16promax/whitetitanium.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 16e",
    "Apple",
    "2025-02-28",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "512GB", price: 22499.00 },
      ], "/img/phones/apple/iphone16e/black.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "256GB", price: 17499.00 },
      ], "/img/phones/apple/iphone16e/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 17",
    "Apple",
    "2025-09-19",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone17/black.jpg"),
      ...createColorVariants("Lavender", "#DFCEEA", [
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone17/lavender.jpg"),
      ...createColorVariants("Mist Blue", "#96AED1", [
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone17/mistblue.jpg"),
      ...createColorVariants("Sage", "#A9B689", [
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone17/sage.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "256GB", price: 19999.00 },
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/apple/iphone17/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 17 Pro",
    "Apple",
    "2025-09-19",
    [
      ...createColorVariants("Cosmic Orange", "#F77E2D", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone17pro/cosmicorange.jpg"),
      ...createColorVariants("Deep Blue", "#32374A", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone17pro/deepblue.jpg"),
      ...createColorVariants("Silver", "#F5F5F5", [
        { storage: "256GB", price: 28499.00 },
        { storage: "512GB", price: 33499.00 },
        { storage: "1TB", price: 38499.00 },
      ], "/img/phones/apple/iphone17pro/silver.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone 17 Pro Max",
    "Apple",
    "2025-09-19",
    [
      ...createColorVariants("Cosmic Orange", "#F77E2D", [
        { storage: "256GB", price: 30999.00 },
        { storage: "512GB", price: 35999.00 },
        { storage: "1TB", price: 40999.00 },
        { storage: "2TB", price: 50999.00 },
      ], "/img/phones/apple/iphone17promax/cosmicorange.jpg"),
      ...createColorVariants("Deep Blue", "#32374A", [
        { storage: "256GB", price: 30999.00 },
        { storage: "512GB", price: 35999.00 },
        { storage: "1TB", price: 40999.00 },
        { storage: "2TB", price: 50999.00 },
      ], "/img/phones/apple/iphone17promax/deepblue.jpg"),
      ...createColorVariants("Silver", "#F5F5F5", [
        { storage: "256GB", price: 30999.00 },
        { storage: "512GB", price: 35999.00 },
        { storage: "1TB", price: 40999.00 },
        { storage: "2TB", price: 50999.00 },
      ], "/img/phones/apple/iphone17promax/silver.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone Air",
    "Apple",
    "2025-09-19",
    [
      ...createColorVariants("Cloud White", "#FEFEFE", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 35999.00 },
      ], "/img/phones/apple/iphoneair/cloudwhite.jpg"),
      ...createColorVariants("Light Gold", "#FFFAF4", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 35999.00 },
      ], "/img/phones/apple/iphoneair/lightgold.jpg"),
      ...createColorVariants("Sky Blue", "#D3E9F7", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 35999.00 },
      ], "/img/phones/apple/iphoneair/skyblue.jpg"),
      ...createColorVariants("Space Black", "#262631", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 30999.00 },
        { storage: "1TB", price: 35999.00 },
      ], "/img/phones/apple/iphoneair/spaceblack.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone SE 2020",
    "Apple",
    "2020-04-24",
    [
      ...createColorVariants("Black", "#3C4042", [
        { storage: "64GB", price: 2945.31 },
        { storage: "128GB", price: 2991.56 },
        { storage: "256GB", price: 3945.36 },
      ], "/img/phones/apple/iphonese2020/black.jpg"),
      ...createColorVariants("Red", "#BF0013", [
        { storage: "128GB", price: 2835.00 },
      ], "/img/phones/apple/iphonese2020/red.jpg"),
      ...createColorVariants("White", "#F8F9FA", [
        { storage: "128GB", price: 2835.00 },
      ], "/img/phones/apple/iphonese2020/white.jpg"),
    ]
  ),

  createPhone(
    "Apple iPhone SE 2022",
    "Apple",
    "2022-03-18",
    [
      ...createColorVariants("Midnight", "#232A31", [
        { storage: "64GB", price: 3524.92 },
        { storage: "128GB", price: 4856.04 },
        { storage: "256GB", price: 5099.10 },
      ], "/img/phones/apple/iphonese2022/midnight.jpg"),
      ...createColorVariants("Red", "#BF0013", [
        { storage: "256GB", price: 6363.67 },
      ], "/img/phones/apple/iphonese2022/red.jpg"),
    ]
  ),
];