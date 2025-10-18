import { createPhone, createColorVariants } from "./utils";

export const xiaomiPhones = [
  createPhone(
    "Xiaomi 15",
    "Xiaomi",
    "2025-03-02",
    [
      ...createColorVariants("Black", "#1A191E", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/xiaomi/15/black.jpg"),
      ...createColorVariants("Green", "#BECCBF", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/xiaomi/15/green.jpg"),
      ...createColorVariants("White", "#DADADC", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/xiaomi/15/white.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi 15 Ultra",
    "Xiaomi",
    "2025-03-02",
    [
      ...createColorVariants("Black", "#1A191E", [
        { storage: "512GB", price: 34999.00 },
      ], "/img/phones/xiaomi/15ultra/black.jpg"),
      ...createColorVariants("Silver", "#F3F3F3", [
        { storage: "512GB", price: 34999.00 },
      ], "/img/phones/xiaomi/15ultra/silver.jpg"),
      ...createColorVariants("White", "#DADADC", [
        { storage: "512GB", price: 34999.00 },
      ], "/img/phones/xiaomi/15ultra/white.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi 15T",
    "Xiaomi",
    "2025-09-24",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "512GB", price: 13999.00 },
      ], "/img/phones/xiaomi/15t/black.jpg"),
      ...createColorVariants("Gray", "#AAA9A6", [
        { storage: "512GB", price: 13999.00 },
      ], "/img/phones/xiaomi/15t/gray.jpg"),
      ...createColorVariants("Pink Gold", "#D0BBB1", [
        { storage: "512GB", price: 13999.00 },
      ], "/img/phones/xiaomi/15t/pink.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi 15T Pro",
    "Xiaomi",
    "2025-09-24",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "512GB", price: 18999.00 },
        { storage: "1TB", price: 20999.00 },
      ], "/img/phones/xiaomi/15tpro/black.jpg"),
      ...createColorVariants("Gray", "#AAA9A6", [
        { storage: "512GB", price: 18999.00 },
        { storage: "1TB", price: 20999.00 },
      ], "/img/phones/xiaomi/15tpro/gray.jpg"),
      ...createColorVariants("Mocha Gold", "#8E807A", [
        { storage: "512GB", price: 18999.00 },
        { storage: "1TB", price: 20999.00 },
      ], "/img/phones/xiaomi/15tpro/mocha.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi Mix Flip",
    "Xiaomi",
    "2024-07-19",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/xiaomi/mixflip/black.jpg"),
      ...createColorVariants("Purple", "#B5ADC2", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/xiaomi/mixflip/purple.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO C71",
    "Xiaomi",
    "2025-04-08",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "64GB", price: 1399.00 },
        { storage: "128GB", price: 1699.00 },
      ], "/img/phones/xiaomi/pococ71/black.jpg"),
      ...createColorVariants("Blue", "#AAC4E2", [
        { storage: "64GB", price: 1399.00 },
        { storage: "128GB", price: 1699.00 },
      ], "/img/phones/xiaomi/pococ71/blue.jpg"),
      ...createColorVariants("Gold", "#BBB39C", [
        { storage: "64GB", price: 1399.00 },
        { storage: "128GB", price: 1699.00 },
      ], "/img/phones/xiaomi/pococ71/gold.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO C85",
    "Xiaomi",
    "2025-09-01",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "128GB", price: 2099.00 },
        { storage: "256GB", price: 2399.00 },
      ], "/img/phones/xiaomi/pococ85/black.jpg"),
      ...createColorVariants("Green", "#ADD0D6", [
        { storage: "128GB", price: 2099.00 },
        { storage: "256GB", price: 2399.00 },
      ], "/img/phones/xiaomi/pococ85/green.jpg"),
      ...createColorVariants("Purple", "#B8C2EF", [
        { storage: "128GB", price: 2099.00 },
        { storage: "256GB", price: 2399.00 },
      ], "/img/phones/xiaomi/pococ85/purple.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO F7",
    "Xiaomi",
    "2025-06-24",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "512GB", price: 7999.00 },
      ], "/img/phones/xiaomi/pocof7/black.jpg"),
      ...createColorVariants("Silver", "#A4A4A6", [
        { storage: "512GB", price: 7999.00 },
      ], "/img/phones/xiaomi/pocof7/silver.jpg"),
      ...createColorVariants("White", "#FFFFFF", [
        { storage: "512GB", price: 7999.00 },
      ], "/img/phones/xiaomi/pocof7/white.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO F7 Pro",
    "Xiaomi",
    "2025-03-27",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "256GB", price: 8999.00 },
        { storage: "512GB", price: 9699.00 },
      ], "/img/phones/xiaomi/pocof7pro/black.jpg"),
      ...createColorVariants("Blue", "#AAC4E2", [
        { storage: "256GB", price: 8999.00 },
        { storage: "512GB", price: 9699.00 },
      ], "/img/phones/xiaomi/pocof7pro/blue.jpg"),
      ...createColorVariants("Silver", "#F3F3F3", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/xiaomi/pocof7pro/silver.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO F7 Ultra",
    "Xiaomi",
    "2025-03-27",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "256GB", price: 11999.00 },
      ], "/img/phones/xiaomi/pocof7ultra/black.jpg"),
      ...createColorVariants("Yellow", "#F1D541", [
        { storage: "256GB", price: 11999.00 },
        { storage: "512GB", price: 13999.00 },
      ], "/img/phones/xiaomi/pocof7ultra/yellow.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO M7",
    "Xiaomi",
    "2025-03-03",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "256GB", price: 2999.00 },
      ], "/img/phones/xiaomi/pocom7/black.jpg"),
      ...createColorVariants("Blue", "#719FAF", [
        { storage: "256GB", price: 2999.00 },
      ], "/img/phones/xiaomi/pocom7/blue.jpg"),
      ...createColorVariants("Silver", "#E6E6E8", [
        { storage: "256GB", price: 2999.00 },
      ], "/img/phones/xiaomi/pocom7/silver.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO M7 Pro",
    "Xiaomi",
    "2024-12-20",
    [
      ...createColorVariants("Black", "#000000", [
        { storage: "256GB", price: 4299.00 },
        { storage: "512GB", price: 4799.00 },
      ], "/img/phones/xiaomi/pocom7pro/black.jpg"),
      ...createColorVariants("Green", "#6C8474", [
        { storage: "256GB", price: 4299.00 },
        { storage: "512GB", price: 4799.00 },
      ], "/img/phones/xiaomi/pocom7pro/green.jpg"),
      ...createColorVariants("Purple", "#9E9EC0", [
        { storage: "256GB", price: 4299.00 },
        { storage: "512GB", price: 4799.00 },
      ], "/img/phones/xiaomi/pocom7pro/purple.jpg"),
      ...createColorVariants("Silver", "#C5C6C8", [
        { storage: "256GB", price: 4299.00 },
        { storage: "512GB", price: 4799.00 },
      ], "/img/phones/xiaomi/pocom7pro/silver.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO X7",
    "Xiaomi",
    "2025-01-09",
    [
      ...createColorVariants("Black", "#0A0A0A", [
        { storage: "256GB", price: 4499.00 },
        { storage: "512GB", price: 5399.00 },
      ], "/img/phones/xiaomi/pocox7/black.jpg"),
      ...createColorVariants("Green", "#C6DCCF", [
        { storage: "256GB", price: 4499.00 },
        { storage: "512GB", price: 5399.00 },
      ], "/img/phones/xiaomi/pocox7/green.jpg"),
      ...createColorVariants("Silver", "#C5C6C8", [
        { storage: "256GB", price: 4499.00 },
        { storage: "512GB", price: 5399.00 },
      ], "/img/phones/xiaomi/pocox7/silver.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi POCO X7 Pro",
    "Xiaomi",
    "2025-01-09",
    [
      ...createColorVariants("Black", "#0A0A0A", [
        { storage: "256GB", price: 5599.00 },
        { storage: "512GB", price: 6599.00 },
      ], "/img/phones/xiaomi/pocox7pro/black.jpg"),
      ...createColorVariants("Green", "#6C8474", [
        { storage: "256GB", price: 5599.00 },
        { storage: "512GB", price: 6599.00 },
      ], "/img/phones/xiaomi/pocox7pro/green.jpg"),
      ...createColorVariants("Yellow", "#D6A008", [
        { storage: "256GB", price: 5599.00 },
        { storage: "512GB", price: 6599.00 },
      ], "/img/phones/xiaomi/pocox7pro/yellow.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI 14C",
    "Xiaomi",
    "2024-08-30",
    [
      ...createColorVariants("Midnight Black", "#000000", [
        { storage: "128GB", price: 2599.00 },
      ], "/img/phones/xiaomi/redmi14c/black.jpg"),
      ...createColorVariants("Sage Green", "#828B64", [
        { storage: "128GB", price: 2599.00 },
      ], "/img/phones/xiaomi/redmi14c/green.jpg"),
      ...createColorVariants("Starry Blue", "#39568E", [
        { storage: "128GB", price: 2599.00 },
      ], "/img/phones/xiaomi/redmi14c/blue.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI 15",
    "Xiaomi",
    "2025-08-01",
    [
      ...createColorVariants("Midnight Black", "#000000", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/xiaomi/redmi15/black.jpg"),
      ...createColorVariants("Sandy Purple", "#A5A2C3", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/xiaomi/redmi15/purple.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI 15C",
    "Xiaomi",
    "2025-08-01",
    [
      ...createColorVariants("Black", "#242A36", [
        { storage: "128GB", price: 2999.00 },
      ], "/img/phones/xiaomi/redmi15c/black.jpg"),
      ...createColorVariants("Mint Green", "#B1CFD3", [
        { storage: "128GB", price: 2999.00 },
      ], "/img/phones/xiaomi/redmi15c/mint.jpg"),
      ...createColorVariants("Moonlight Blue", "#4A83E5", [
        { storage: "128GB", price: 2999.00 },
      ], "/img/phones/xiaomi/redmi15c/blue.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI A5",
    "Xiaomi",
    "2025-03-21",
    [
      ...createColorVariants("Midnight Black", "#000020", [
        { storage: "64GB", price: 1999.00 },
      ], "/img/phones/xiaomi/redmia5/black.jpg"),
      ...createColorVariants("Ocean Blue", "#BCEBF7", [
        { storage: "64GB", price: 1999.00 },
      ], "/img/phones/xiaomi/redmia5/blue.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI Note 14",
    "Xiaomi",
    "2025-01-10",
    [
      ...createColorVariants("Lime Green", "#ABC087", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/xiaomi/redminote14/green.jpg"),
      ...createColorVariants("Midnight Black", "#1C1D21", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/xiaomi/redminote14/black.jpg"),
      ...createColorVariants("Ocean Blue", "#41738C", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/xiaomi/redminote14/blue.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI Note 14 Pro",
    "Xiaomi",
    "2025-01-15",
    [
      ...createColorVariants("Aurora Purple", "#D2D2F4", [
        { storage: "256GB", price: 6999.00 },
      ], "/img/phones/xiaomi/redminote14pro/purple.jpg"),
      ...createColorVariants("Midnight Black", "#1C1D21", [
        { storage: "256GB", price: 6999.00 },
      ], "/img/phones/xiaomi/redminote14pro/black.jpg"),
    ]
  ),

  createPhone(
    "Xiaomi REDMI Note 14 Pro",
    "Xiaomi",
    "2025-01-15",
    [
      ...createColorVariants("Frost Blue", "#8EAAAE", [
        { storage: "256GB", price: 10999.00 },
      ], "/img/phones/xiaomi/redminote14pro+/blue.jpg"),
      ...createColorVariants("Lavender Purple", "#C4C1DE", [
        { storage: "256GB", price: 10999.00 },
      ], "/img/phones/xiaomi/redminote14pro+/purple.jpg"),
      ...createColorVariants("Midnight Black", "#1C1D21", [
        { storage: "256GB", price: 10999.00 },
      ], "/img/phones/xiaomi/redminote14pro+/black.jpg"),
    ]
  ),
];