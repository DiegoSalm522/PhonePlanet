import { createPhone, createColorVariants } from "./utils";

export const oppoPhones = [
  createPhone(
    "OPPO A38",
    "OPPO",
    "2023-09-04",
    [
      ...createColorVariants("Black", "#0D0D0D", [
        { storage: "128GB", price: 3879.32 },
      ], "/img/phones/oppo/a38/black.jpg"),
    ]
  ),

  createPhone(
    "OPPO A40",
    "OPPO",
    "2024-08-14",
    [
      ...createColorVariants("Brown", "#412E39", [
        { storage: "256GB", price: 3799.00 },
      ], "/img/phones/oppo/a40/brown.jpg"),
      ...createColorVariants("Lilac", "#9587B2", [
        { storage: "256GB", price: 3799.00 },
      ], "/img/phones/oppo/a40/lilac.jpg"),
    ]
  ),
  
  createPhone(
    "OPPO A5",
    "OPPO",
    "2025-05-15",
    [
      ...createColorVariants("Green", "#358174", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/oppo/a5/green.jpg"),
      ...createColorVariants("White", "#D9E2E6", [
        { storage: "256GB", price: 4499.00 },
      ], "/img/phones/oppo/a5/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO A5 Pro",
    "OPPO",
    "2025-04-24",
    [
      ...createColorVariants("Mocha", "#8C8787", [
        { storage: "256GB", price: 6999.00 },
      ], "/img/phones/oppo/a5pro/brown.jpg"),
      ...createColorVariants("Pink", "#E9D3DF", [
        { storage: "256GB", price: 6808.38 },
      ], "/img/phones/oppo/a5pro/pink.jpg"),
      ...createColorVariants("Olive Green", "#B5C096", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/oppo/a5pro/green.jpg"),
      ...createColorVariants("Sky Blue", "#93CCFA", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/oppo/a5pro/blue.jpg"),
    ]
  ),

  createPhone(
    "OPPO A58",
    "OPPO",
    "2023-07-18",
    [
      ...createColorVariants("Black", "#0D0D0D", [
        { storage: "128GB", price: 4997.05 },
      ], "/img/phones/oppo/a58/black.jpg"),
    ]
  ),

  createPhone(
    "OPPO A60",
    "OPPO",
    "2024-04-26",
    [
      ...createColorVariants("Black", "#393939", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/oppo/a60/black.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "256GB", price: 5499.00 },
      ], "/img/phones/oppo/a60/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO A78",
    "OPPO",
    "2023-01-07",
    [
      ...createColorVariants("Black", "#0D0D0D", [
        { storage: "128GB", price: 5699.00 },
      ], "/img/phones/oppo/a78/black.jpg"),
    ]
  ),

  createPhone(
    "OPPO A80",
    "OPPO",
    "2024-08-14",
    [
      ...createColorVariants("Black", "#0D0D0D", [
        { storage: "256GB", price: 6499.00 },
      ], "/img/phones/oppo/a80/black.jpg"),
      ...createColorVariants("Lilac", "#B5B1CD", [
        { storage: "256GB", price: 6499.00 },
      ], "/img/phones/oppo/a80/lilac.jpg"),
    ]
  ),

  createPhone(
    "OPPO Find N3 Flip",
    "OPPO",
    "2023-09-08",
    [
      ...createColorVariants("Gold", "#F4EADB", [
        { storage: "256GB", price: 22230.27 },
      ], "/img/phones/oppo/findn3flip/gold.jpg"),
      ...createColorVariants("Pink", "#EECED3", [
        { storage: "256GB", price: 22215.04 },
      ], "/img/phones/oppo/findn3flip/pink.jpg"),
    ]
  ),

  createPhone(
    "OPPO Find N5",
    "OPPO",
    "2025-02-20",
    [
      ...createColorVariants("Black", "#454648", [
        { storage: "512GB", price: 40499.00 },
      ], "/img/phones/oppo/findn5/black.jpg"),
      ...createColorVariants("White", "#FAFAFA", [
        { storage: "512GB", price: 44999.00 },
      ], "/img/phones/oppo/findn5/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO Find X8 Pro",
    "OPPO",
    "2024-10-30",
    [
      ...createColorVariants("Black", "#414144", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/oppo/findx8pro/black.jpg"),
      ...createColorVariants("White", "#ECEDEB", [
        { storage: "512GB", price: 24999.00 },
      ], "/img/phones/oppo/findx8pro/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno12",
    "OPPO",
    "2024-06-25",
    [
      ...createColorVariants("Black", "#4D464B", [
        { storage: "512GB", price: 8999.00 },
      ], "/img/phones/oppo/reno12/purple.jpg"),
      ...createColorVariants("Mercury Gray", "#BDBDBF", [
        { storage: "512GB", price: 8999.00 },
      ], "/img/phones/oppo/reno12/gray.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno12 F",
    "OPPO",
    "2024-08-08",
    [
      ...createColorVariants("Olive Green", "#54745D", [
        { storage: "256GB", price: 8133.94 },
      ], "/img/phones/oppo/reno12f/green.jpg"),
      ...createColorVariants("Orange", "#E19D7F", [
        { storage: "256GB", price: 6999.00 },
      ], "/img/phones/oppo/reno12f/orange.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno13",
    "OPPO",
    "2025-01-04",
    [
      ...createColorVariants("Luminous Blue", "#2C2E3F", [
        { storage: "512GB", price: 10999.00 },
      ], "/img/phones/oppo/reno13/blue.jpg"),
      ...createColorVariants("White", "#E6E6E8", [
        { storage: "512GB", price: 10999.00 },
      ], "/img/phones/oppo/reno13/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno13 F",
    "OPPO",
    "2025-01-11",
    [
      ...createColorVariants("Gray", "#494B4D", [
        { storage: "256GB", price: 8999.00 },
      ], "/img/phones/oppo/reno13f/gray.jpg"),
      ...createColorVariants("Purple", "#DDD8ED", [
        { storage: "256GB", price: 8624.18 },
      ], "/img/phones/oppo/reno13f/purple.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno13 Pro",
    "OPPO",
    "2025-01-09",
    [
      ...createColorVariants("Gray", "#494B4D", [
        { storage: "512GB", price: 19999.00 },
      ], "/img/phones/oppo/reno13pro/gray.jpg"),
      ...createColorVariants("Purple", "#DDD8ED", [
        { storage: "512GB", price: 19999.00 },
      ], "/img/phones/oppo/reno13pro/purple.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno14",
    "OPPO",
    "2025-05-23",
    [
      ...createColorVariants("Luminous Green", "#2E5042", [
        { storage: "512GB", price: 14999.00 },
      ], "/img/phones/oppo/reno14/green.jpg"),
      ...createColorVariants("Opal White", "#F2F2F3", [
        { storage: "512GB", price: 14999.00 },
      ], "/img/phones/oppo/reno14/white.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno14 F",
    "OPPO",
    "2025-06-25",
    [
      ...createColorVariants("Luminous Green", "#2E5042", [
        { storage: "256GB", price: 9999.00 },
      ], "/img/phones/oppo/reno14f/green.jpg"),
      ...createColorVariants("Opal Blue", "#CDE0EF", [
        { storage: "256GB", price: 9999.00 },
      ], "/img/phones/oppo/reno14f/blue.jpg"),
    ]
  ),

  createPhone(
    "OPPO Reno14 Pro",
    "OPPO",
    "2025-05-23",
    [
      ...createColorVariants("Gray", "#494B4D", [
        { storage: "512GB", price: 12499.00 },
      ], "/img/phones/oppo/reno14pro/gray.jpg"),
      ...createColorVariants("Opal White", "#F2F2F3", [
        { storage: "512GB", price: 12499.00 },
      ], "/img/phones/oppo/reno14pro/white.jpg"),
    ]
  ),
];