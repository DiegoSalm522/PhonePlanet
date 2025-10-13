import { createPhone, createColorVariants } from './utils';

export const samsungPhones = [
  createPhone(
    "Samsung Galaxy A05",
    "Samsung",
    "2023-10-15",
    [
      ...createColorVariants("Black", "#161824", [
        { storage: "64GB", price: 2584.89 },
      ], "/img/phones/samsung/galaxya05/black.jpg"),
      ...createColorVariants("Green", "#CDDEA8", [
        { storage: "64GB", price: 2498.84 },
      ], "/img/phones/samsung/galaxya05/green.jpg"),
      ...createColorVariants("Silver", "#CED7E5", [
        { storage: "64GB", price: 2247.54 },
      ], "/img/phones/samsung/galaxya05/silver.jpg"),
    ]
  ),
  
  createPhone(
    "Samsung Galaxy A05S",
    "Samsung",
    "2023-10-18",
    [
      ...createColorVariants("Black", "#161824", [
        { storage: "128GB", price: 2559.00 },
      ], "/img/phones/samsung/galaxya05s/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A06",
    "Samsung",
    "2024-08-22",
    [
      ...createColorVariants("Black", "#324156", [
        { storage: "64GB", price: 1798.00 },
        { storage: "128GB", price: 2005.00 },
      ], "/img/phones/samsung/galaxya06/black.jpg"),
      ...createColorVariants("Green", "#B4E6E5", [
        { storage: "64GB", price: 1849.00 },
      ], "/img/phones/samsung/galaxya06/green.jpg"),
      ...createColorVariants("Icy Blue", "#E5EFF9", [
        { storage: "64GB", price: 1749.00 },
        { storage: "128GB", price: 3888.00 },
      ], "/img/phones/samsung/galaxya06/icyblue.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A07",
    "Samsung",
    "2025-08-23",
    [
      ...createColorVariants("Black", "#1F262A", [
        { storage: "64GB", price: 2192.00 },
        { storage: "128GB", price: 2415.00 },
      ], "/img/phones/samsung/galaxya07/black.jpg"),
      ...createColorVariants("Green", "#2F4F4F", [
        { storage: "64GB", price: 2192.00 },
        { storage: "128GB", price: 2418.00 },
      ], "/img/phones/samsung/galaxya07/green.jpg"),
      ...createColorVariants("Violet", "#B8BCE6", [
        { storage: "64GB", price: 2192.00 },
        { storage: "128GB", price: 2418.00 },
      ], "/img/phones/samsung/galaxya07/violet.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A15",
    "Samsung",
    "2023-12-16",
    [
      ...createColorVariants("Black", "#2D3345", [
        { storage: "128GB", price: 3599.00 },
      ], "/img/phones/samsung/galaxya15/black.jpg"),
      ...createColorVariants("Light Blue", "#BEE0F4", [
        { storage: "128GB", price: 3599.00 },
      ], "/img/phones/samsung/galaxya15/lightblue.jpg"),
      ...createColorVariants("Yellow", "#E6EBB3", [
        { storage: "128GB", price: 3599.00 },
      ], "/img/phones/samsung/galaxya15/yellow.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A16",
    "Samsung",
    "2024-10-25",
    [
      ...createColorVariants("Black", "#161824", [
        { storage: "128GB", price: 2735.00 },
        { storage: "256GB", price: 3372.00 },
      ], "/img/phones/samsung/galaxya16/black.jpg"),
      ...createColorVariants("Green", "#C2D5CF", [
        { storage: "128GB", price: 3230.00 },
        { storage: "256GB", price: 3474.69 },
      ], "/img/phones/samsung/galaxya16/green.jpg"),
      ...createColorVariants("Light Gray", "#EDEEEC", [
        { storage: "128GB", price: 3061.05 },
        { storage: "256GB", price: 3450.00 },
      ], "/img/phones/samsung/galaxya16/lightgray.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A17",
    "Samsung",
    "2025-09-18",
    [
      ...createColorVariants("Black", "#212721", [
        { storage: "128GB", price: 4799.00 },
      ], "/img/phones/samsung/galaxya17/black.jpg"),
      ...createColorVariants("Blue", "#AFC7D3", [
        { storage: "128GB", price: 4799.00 },
      ], "/img/phones/samsung/galaxya17/blue.jpg"),
      ...createColorVariants("Gray", "#707071", [
        { storage: "128GB", price: 4799.00 },
      ], "/img/phones/samsung/galaxya17/gray.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A25",
    "Samsung",
    "2023-12-16",
    [
      ...createColorVariants("Black", "#2D3345", [
        { storage: "128GB", price: 3842.32 },
      ], "/img/phones/samsung/galaxya25/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A26",
    "Samsung",
    "2025-03-19",
    [
      ...createColorVariants("Black", "#161824", [
        { storage: "128GB", price: 3999.00 },
        { storage: "256GB", price: 4076.00 },
      ], "/img/phones/samsung/galaxya26/black.jpg"),
      ...createColorVariants("Mint", "#B6DBD1", [
        { storage: "128GB", price: 3597.00 },
      ], "/img/phones/samsung/galaxya26/mint.jpg"),
      ...createColorVariants("White", "#EDEEEC", [
        { storage: "128GB", price: 3999.00 },
      ], "/img/phones/samsung/galaxya26/white.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A34",
    "Samsung",
    "2023-03-24",
    [
      ...createColorVariants("Black", "#202425", [
        { storage: "128GB", price: 4599.00 },
      ], "/img/phones/samsung/galaxya34/black.jpg"),
      ...createColorVariants("Lime", "#DCF1A6", [
        { storage: "128GB", price: 4599.00 },
      ], "/img/phones/samsung/galaxya34/lime.jpg"),
      ...createColorVariants("Silver", "#C0C0C0", [
        { storage: "128GB", price: 4599.00 },
      ], "/img/phones/samsung/galaxya34/silver.jpg"),
      ...createColorVariants("Violet", "#8D8AD1", [
        { storage: "128GB", price: 4599.00 },
      ], "/img/phones/samsung/galaxya34/violet.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A35",
    "Samsung",
    "2024-03-15",
    [
      ...createColorVariants("Black", "#3E424B", [
        { storage: "128GB", price: 5389.00 },
        { storage: "256GB", price: 6199.00 },
      ], "/img/phones/samsung/galaxya35/black.jpg"),
      ...createColorVariants("Icy Blue", "#CBD9E7", [
        { storage: "128GB", price: 5389.00 },
      ], "/img/phones/samsung/galaxya35/icyblue.jpg"),
      ...createColorVariants("Lemon", "#E7E9A5", [
        { storage: "128GB", price: 5389.00 },
      ], "/img/phones/samsung/galaxya35/lemon.jpg"),
      ...createColorVariants("Lilac", "#D4C7D9", [
        { storage: "128GB", price: 5389.00 },
      ], "/img/phones/samsung/galaxya35/lilac.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A36",
    "Samsung",
    "2025-03-10",
    [
      ...createColorVariants("Black", "#404145", [
        { storage: "128GB", price: 4375.00 },
        { storage: "256GB", price: 5488.00 },
      ], "/img/phones/samsung/galaxya36/black.jpg"),
      ...createColorVariants("Lavender", "#C6CCE7", [
        { storage: "128GB", price: 5449.00 },
      ], "/img/phones/samsung/galaxya36/lavender.jpg"),
      ...createColorVariants("Lime", "#DFEFDB", [
        { storage: "128GB", price: 4677.00 },
        { storage: "256GB", price: 5282.89 },
      ], "/img/phones/samsung/galaxya36/lime.jpg"),
      ...createColorVariants("White", "#DAD9DB", [
        { storage: "128GB", price: 5224.73 },
        { storage: "256GB", price: 5729.00 },
      ], "/img/phones/samsung/galaxya36/white.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A54",
    "Samsung",
    "2023-03-24",
    [
      ...createColorVariants("Black", "#202425", [
        { storage: "128GB", price: 4750.38 },
      ], "/img/phones/samsung/galaxya54/black.jpg"),
      ...createColorVariants("Lime", "#DCF1A6", [
        { storage: "128GB", price: 6199.99 },
      ], "/img/phones/samsung/galaxya54/lime.jpg"),
      ...createColorVariants("Violet", "#8D8AD1", [
        { storage: "128GB", price: 9800.00 },
      ], "/img/phones/samsung/galaxya54/violet.jpg"),
      ...createColorVariants("White", "#FFFFFF", [
        { storage: "128GB", price: 7387.10 },
      ], "/img/phones/samsung/galaxya54/white.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A55",
    "Samsung",
    "2024-03-15",
    [
      ...createColorVariants("Black", "#3E424B", [
        { storage: "128GB", price: 5990.00 },
        { storage: "256GB", price: 11750.00 },
      ], "/img/phones/samsung/galaxya55/black.jpg"),
      ...createColorVariants("Icy Blue", "#CBD9E7", [
        { storage: "128GB", price: 9000.00 },
      ], "/img/phones/samsung/galaxya55/icyblue.jpg"),
      ...createColorVariants("Lemon", "#E7E9A5", [
        { storage: "128GB", price: 10810.00 },
      ], "/img/phones/samsung/galaxya55/lemon.jpg"),
      ...createColorVariants("Lilac", "#D4C7D9", [
        { storage: "128GB", price: 10790.00 },
      ], "/img/phones/samsung/galaxya55/lilac.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy A56",
    "Samsung",
    "2025-03-10",
    [
      ...createColorVariants("Graphite", "#555557", [
        { storage: "128GB", price: 5937.98 },
        { storage: "256GB", price: 7599.00 },
      ], "/img/phones/samsung/galaxya56/graphite.jpg"),
      ...createColorVariants("Light Gray", "#CFD1D1", [
        { storage: "128GB", price: 6799.00 },
        { storage: "256GB", price: 7199.00 },
      ], "/img/phones/samsung/galaxya56/lightgray.jpg"),
      ...createColorVariants("Olive", "#AAB4AC", [
        { storage: "128GB", price: 6189.00 },
        { storage: "256GB", price: 7428.14 },
      ], "/img/phones/samsung/galaxya56/olive.jpg"),
      ...createColorVariants("Pink", "#EDDEE5", [
        { storage: "128GB", price: 6797.00 },
        { storage: "256GB", price: 7489.00 },
      ], "/img/phones/samsung/galaxya56/pink.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy M15",
    "Samsung",
    "2024-04-05",
    [
      ...createColorVariants("Dark Blue", "#273A58", [
        { storage: "128GB", price: 2947.54 },
      ], "/img/phones/samsung/galaxym15/darkblue.jpg"),
      ...createColorVariants("Gray", "#8B8E8D", [
        { storage: "128GB", price: 2947.54 },
      ], "/img/phones/samsung/galaxym15/gray.jpg"),
      ...createColorVariants("Light Blue", "#ADCAD2", [
        { storage: "128GB", price: 2947.54 },
      ], "/img/phones/samsung/galaxym15/lightblue.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy M35",
    "Samsung",
    "2024-07-17",
    [
      ...createColorVariants("Dark Blue", "#273A58", [
        { storage: "128GB", price: 5499.00 },
      ], "/img/phones/samsung/galaxym35/darkblue.jpg"),
      ...createColorVariants("Gray", "#8B8E8D", [
        { storage: "128GB", price: 5499.00 },
      ], "/img/phones/samsung/galaxym35/gray.jpg"),
      ...createColorVariants("Light Blue", "#ADCAD2", [
        { storage: "128GB", price: 5499.00 },
      ], "/img/phones/samsung/galaxym35/lightblue.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy M55",
    "Samsung",
    "2024-03-28",
    [
      ...createColorVariants("Black", "#232522", [
        { storage: "128GB", price: 5439.00 },
        { storage: "256GB", price: 7777.00 },
      ], "/img/phones/samsung/galaxym55/black.jpg"),
      ...createColorVariants("Light Green", "#94B7BB", [
        { storage: "128GB", price: 5439.00 },
        { storage: "256GB", price: 7999.00 },
      ], "/img/phones/samsung/galaxym55/green.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S22",
    "Samsung",
    "2022-02-09",
    [
      ...createColorVariants("Green", "#587876", [
        { storage: "128GB", price: 3980.80 },
        { storage: "256GB", price: 5261.21 },
      ], "/img/phones/samsung/galaxys22/green.jpg"),
      ...createColorVariants("Phantom Black", "#24211D", [
        { storage: "128GB", price: 4085.85 },
      ], "/img/phones/samsung/galaxys22/black.jpg"),
      ...createColorVariants("Pink Gold", "#E3D2CF", [
        { storage: "128GB", price: 3855.00 },
        { storage: "256GB", price: 4951.49 },
      ], "/img/phones/samsung/galaxys22/pinkgold.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S22 Ultra",
    "Samsung",
    "2022-02-09",
    [
      ...createColorVariants("Burgundy", "#654D57", [
        { storage: "128GB", price: 7014.63 },
      ], "/img/phones/samsung/galaxys22ultra/burgundy.jpg"),
      ...createColorVariants("Green", "#587876", [
        { storage: "128GB", price: 8444.25 },
      ], "/img/phones/samsung/galaxys22ultra/green.jpg"),
      ...createColorVariants("Phantom Black", "#24211D", [
        { storage: "128GB", price: 6525.41 },
      ], "/img/phones/samsung/galaxys22ultra/black.jpg"),
      ...createColorVariants("Phantom White", "#E9E9E7", [
        { storage: "128GB", price: 7729.29 },
      ], "/img/phones/samsung/galaxys22ultra/white.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S22+",
    "Samsung",
    "2022-02-09",
    [
      ...createColorVariants("Green", "#587876", [
        { storage: "128GB", price: 4931.95 },
      ], "/img/phones/samsung/galaxys22+/green.jpg"),
      ...createColorVariants("Phantom Black", "#24211D", [
        { storage: "128GB", price: 5038.67 },
        { storage: "256GB", price: 5422.73 },
      ], "/img/phones/samsung/galaxys22+/black.jpg"),
      ...createColorVariants("Pink Gold", "#E3D2CF", [
        { storage: "256GB", price: 5612.12 },
      ], "/img/phones/samsung/galaxys22+/pinkgold.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S23",
    "Samsung",
    "2023-02-01",
    [
      ...createColorVariants("Cream", "#F9F3E7", [
        { storage: "128GB", price: 6407.00 },
      ], "/img/phones/samsung/galaxys23/cream.jpg"),
      ...createColorVariants("Green", "#5E635C", [
        { storage: "128GB", price: 6419.76 },
      ], "/img/phones/samsung/galaxys23/green.jpg"),
      ...createColorVariants("Lavender", "#EADEE8", [
        { storage: "128GB", price: 6248.29 },
      ], "/img/phones/samsung/galaxys23/lavender.jpg"),
      ...createColorVariants("Phantom Black", "#232426", [
        { storage: "128GB", price: 6097.00 },
      ], "/img/phones/samsung/galaxys23/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S23 FE",
    "Samsung",
    "2023-10-03",
    [
      ...createColorVariants("Cream", "#F9F3E7", [
        { storage: "128GB", price: 6393.89 },
      ], "/img/phones/samsung/galaxys23fe/cream.jpg"),
      ...createColorVariants("Graphite", "#3E3E3E", [
        { storage: "256GB", price: 7716.10 },
      ], "/img/phones/samsung/galaxys23fe/graphite.jpg"),
      ...createColorVariants("Mint", "#D9E5D1", [
        { storage: "128GB", price: 5574.95 },
        { storage: "256GB", price: 7705.33 },
      ], "/img/phones/samsung/galaxys23fe/mint.jpg"),
      ...createColorVariants("Purple", "#615C7A", [
        { storage: "256GB", price: 6445.00 },
      ], "/img/phones/samsung/galaxys23fe/purple.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S23 Ultra",
    "Samsung",
    "2023-02-01",
    [
      ...createColorVariants("Cream", "#F9F3E7", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/cream.jpg"),
      ...createColorVariants("Graphite", "#6B6C70", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/graphite.jpg"),
      ...createColorVariants("Lavender", "#EADEE8", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/lavender.jpg"),
      ...createColorVariants("Phantom Black", "#232426", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/black.jpg"),
      ...createColorVariants("Red", "#AF4841", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/red.jpg"),
      ...createColorVariants("Sky Blue", "#AFBFD8", [
        { storage: "256GB", price: 12184.52 },
        { storage: "512GB", price: 15013.21 },
      ], "/img/phones/samsung/galaxys23ultra/skyblue.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S23+",
    "Samsung",
    "2023-02-01",
    [
      ...createColorVariants("Cream", "#F9F3E7", [
        { storage: "256GB", price: 7677.00 },
      ], "/img/phones/samsung/galaxys23+/cream.jpg"),
      ...createColorVariants("Lavender", "#EADEE8", [
        { storage: "256GB", price: 7218.46 },
        { storage: "512GB", price: 9057.15 },
      ], "/img/phones/samsung/galaxys23+/lavender.jpg"),
      ...createColorVariants("Lime", "#E3EABE", [
        { storage: "256GB", price: 7403.85 },
      ], "/img/phones/samsung/galaxys23+/lime.jpg"),
      ...createColorVariants("Phantom Black", "#232426", [
        { storage: "256GB", price: 8201.18 },
      ], "/img/phones/samsung/galaxys23+/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S24",
    "Samsung",
    "2024-01-17",
    [
      ...createColorVariants("Amber Yellow", "#F4E9CB", [
        { storage: "128GB", price: 8999.00 },
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/samsung/galaxys24/yellow.jpg"),
      ...createColorVariants("Cobalt Violet", "#615C7A", [
        { storage: "128GB", price: 8999.00 },
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/samsung/galaxys24/violet.jpg"),
      ...createColorVariants("Marble Gray", "#C7C5C6", [
        { storage: "128GB", price: 8999.00 },
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/samsung/galaxys24/gray.jpg"),
      ...createColorVariants("Onyx Black", "#3E3E3E", [
        { storage: "128GB", price: 8999.00 },
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/samsung/galaxys24/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S24 FE",
    "Samsung",
    "2024-09-26",
    [
      ...createColorVariants("Blue", "#D4E2F2", [
        { storage: "128GB", price: 9599.00 },
        { storage: "256GB", price: 9655.77 },
      ], "/img/phones/samsung/galaxys24fe/blue.jpg"),
      ...createColorVariants("Graphite", "#454545", [
        { storage: "128GB", price: 8699.00 },
        { storage: "256GB", price: 11799.00 },
      ], "/img/phones/samsung/galaxys24fe/graphite.jpg"),
      ...createColorVariants("Gray", "#C7C5C6", [
        { storage: "128GB", price: 9569.00 },
        { storage: "256GB", price: 9999.00 },
      ], "/img/phones/samsung/galaxys24fe/gray.jpg"),
      ...createColorVariants("Mint", "#D7ECE3", [
        { storage: "128GB", price: 9569.00 },
        { storage: "256GB", price: 9999.00 },
      ], "/img/phones/samsung/galaxys24fe/mint.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S24 Ultra",
    "Samsung",
    "2024-01-17",
    [
      ...createColorVariants("Black", "#3E3E3E", [
        { storage: "256GB", price: 19999.00 },
      ], "/img/phones/samsung/galaxys24ultra/black.jpg"),
      ...createColorVariants("Gray", "#C7C5C6", [
        { storage: "256GB", price: 19999.00 },
      ], "/img/phones/samsung/galaxys24ultra/gray.jpg"),
      ...createColorVariants("Yellow", "#F4E9CB", [
        { storage: "256GB", price: 19999.00 },
      ], "/img/phones/samsung/galaxys24ultra/yellow.jpg"),
      ...createColorVariants("Violet", "#615C7A", [
        { storage: "256GB", price: 19999.00 },
      ], "/img/phones/samsung/galaxys24ultra/violet.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S24+",
    "Samsung",
    "2024-01-17",
    [
      ...createColorVariants("Amber Yellow", "#F4E9CB", [
        { storage: "512GB", price: 22499.00 },
      ], "/img/phones/samsung/galaxys24+/yellow.jpg"),
      ...createColorVariants("Cobalt Violet", "#615C7A", [
        { storage: "256GB", price: 12999.00 },
        { storage: "512GB", price: 22499.00 },
      ], "/img/phones/samsung/galaxys24+/violet.jpg"),
      ...createColorVariants("Marble Gray", "#C7C5C6", [
        { storage: "256GB", price: 12999.00 },
        { storage: "512GB", price: 22499.00 },
      ], "/img/phones/samsung/galaxys24+/gray.jpg"),
      ...createColorVariants("Onyx Black", "#3E3E3E", [
        { storage: "256GB", price: 12999.00 },
      ], "/img/phones/samsung/galaxys24+/black.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S25",
    "Samsung",
    "2025-01-22",
    [
      ...createColorVariants("Blue Black", "#4E515C", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/blueblack.png"),
      ...createColorVariants("Coralred", "#EE6579", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/coralred.png"),
      ...createColorVariants("Icy Blue", "#C8D4E0", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/icyblue.png"),
      ...createColorVariants("Mint", "#D4E8DC", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/mint.png"),
      ...createColorVariants("Navy", "#3B5B8A", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/navy.png"),
      ...createColorVariants("Pinkgold", "#E9D2C5", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/pinkgold.png"),
      ...createColorVariants("Silver", "#7F7F7F", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/samsung/galaxys25/silver.png"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S25 Edge",
    "Samsung",
    "2025-05-13",
    [
      ...createColorVariants("Icy Blue", "#C8D3DF", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22999.00 },
      ], "/img/phones/samsung/galaxys25edge/icyblue.jpg"),
      ...createColorVariants("Jetblack", "#4A4A4D", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22999.00 },
      ], "/img/phones/samsung/galaxys25edge/jetblack.jpg"),
      ...createColorVariants("Silver", "#C0C0C0", [
        { storage: "128GB", price: 19999.00 },
        { storage: "256GB", price: 22999.00 },
      ], "/img/phones/samsung/galaxys25edge/silver.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S25 FE",
    "Samsung",
    "2025-09-04",
    [
      ...createColorVariants("Icy Blue", "#C8D3DF", [
        { storage: "128GB", price: 15499.00 },
        { storage: "256GB", price: 16999.00 },
      ], "/img/phones/samsung/galaxys25fe/icyblue.png"),
      ...createColorVariants("Jetblack", "#484A4D", [
        { storage: "128GB", price: 15499.00 },
        { storage: "256GB", price: 16999.00 },
      ], "/img/phones/samsung/galaxys25fe/jetblack.png"),
      ...createColorVariants("Navy", "#395C8A", [
        { storage: "128GB", price: 15499.00 },
        { storage: "256GB", price: 16999.00 },
      ], "/img/phones/samsung/galaxys25fe/navy.png"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S25 Ultra",
    "Samsung",
    "2025-01-22",
    [
      ...createColorVariants("Black", "#4A4A4D", [
        { storage: "256GB", price: 27999.00 },
        { storage: "512GB", price: 29999.00 },
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/samsung/galaxys25ultra/black.jpg"),
      ...createColorVariants("Gray", "#B3AB9E", [
        { storage: "256GB", price: 27999.00 },
        { storage: "512GB", price: 29999.00 },
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/samsung/galaxys25ultra/gray.jpg"),
      ...createColorVariants("Silverblue", "#8E9FBC", [
        { storage: "256GB", price: 27999.00 },
        { storage: "512GB", price: 29999.00 },
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/samsung/galaxys25ultra/blue.jpg"),
      ...createColorVariants("Whitesilver", "#D9D9D6", [
        { storage: "256GB", price: 27999.00 },
        { storage: "512GB", price: 29999.00 },
        { storage: "1TB", price: 32999.00 },
      ], "/img/phones/samsung/galaxys25ultra/silver.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy S25+",
    "Samsung",
    "2025-01-22",
    [
      ...createColorVariants("Blue Black", "#4E515C", [
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/blueblack.png"),
      ...createColorVariants("Coralred", "#EE6579", [
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/coralred.png"),
      ...createColorVariants("Icy Blue", "#C8D4E0", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/icyblue.png"),
      ...createColorVariants("Mint", "#D4E8DC", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/mint.png"),
      ...createColorVariants("Navy", "#3B5B8A", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/navy.png"),
      ...createColorVariants("Pinkgold", "#E9D2C5", [
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/pinkgold.png"),
      ...createColorVariants("Silver", "#7F7F7F", [
        { storage: "256GB", price: 25999.00 },
        { storage: "512GB", price: 28999.00 },
      ], "/img/phones/samsung/galaxys25+/silver.png"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Flip 4",
    "Samsung",
    "2022-08-10",
    [
      ...createColorVariants("Blue", "#ABBCD5", [
        { storage: "128GB", price: 6127.61 },
      ], "/img/phones/samsung/galaxyzflip4/blue.jpg"),
      ...createColorVariants("Bora Purple", "#D7D0E4", [
        { storage: "256GB", price: 6299.00 },
      ], "/img/phones/samsung/galaxyzflip4/purple.jpg"),
      ...createColorVariants("Graphite", "#53565A", [
        { storage: "128GB", price: 5787.00 },
        { storage: "256GB", price: 6397.00 },
      ], "/img/phones/samsung/galaxyzflip4/graphite.jpg"),
      ...createColorVariants("Pink Gold", "#DFCAC1", [
        { storage: "256GB", price: 6397.03 },
      ], "/img/phones/samsung/galaxyzflip4/pink.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Flip 5",
    "Samsung",
    "2023-07-26",
    [
      ...createColorVariants("Cream", "#F0EAE0", [
        { storage: "256GB", price: 9947.00 },
      ], "/img/phones/samsung/galaxyzflip5/cream.jpg"),
      ...createColorVariants("Graphite", "#53565A", [
        { storage: "256GB", price: 9897.00 },
      ], "/img/phones/samsung/galaxyzflip5/graphite.jpg"),
      ...createColorVariants("Lavender", "#D4C7D9", [
        { storage: "256GB", price: 9897.00 },
      ], "/img/phones/samsung/galaxyzflip5/lavender.jpg"),
      ...createColorVariants("Mint", "#CAD9D3", [
        { storage: "256GB", price: 9947.00 },
      ], "/img/phones/samsung/galaxyzflip5/mint.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Flip 6",
    "Samsung",
    "2024-07-10",
    [
      ...createColorVariants("Blue", "#CBDCEE", [
        { storage: "256GB", price: 14999.00 },
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/samsung/galaxyzflip6/blue.jpg"),
      ...createColorVariants("Mint", "#C7E5D9", [
        { storage: "256GB", price: 14999.00 },
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/samsung/galaxyzflip6/mint.jpg"),
      ...createColorVariants("Silver", "#7F7F7F", [
        { storage: "256GB", price: 14999.00 },
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/samsung/galaxyzflip6/silver.jpg"),
      ...createColorVariants("Yellow", "#F9E197", [
        { storage: "256GB", price: 14999.00 },
        { storage: "512GB", price: 18999.00 },
      ], "/img/phones/samsung/galaxyzflip6/yellow.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Flip 7",
    "Samsung",
    "2025-07-09",
    [
      ...createColorVariants("Blue Shadow", "#3B5A8A", [
        { storage: "256GB", price: 21799.00 },
        { storage: "512GB", price: 254999.00 },
      ], "/img/phones/samsung/galaxyzflip7/blueshadow.jpg"),
      ...createColorVariants("Coral Red", "#E66C6C", [
        { storage: "256GB", price: 21799.00 },
        { storage: "512GB", price: 254999.00 },
      ], "/img/phones/samsung/galaxyzflip7/coralred.jpg"),
      ...createColorVariants("Jet Black", "#4B4A4D", [
        { storage: "256GB", price: 21599.00 },
        { storage: "512GB", price: 254999.00 },
      ], "/img/phones/samsung/galaxyzflip7/jetblack.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Fold 4",
    "Samsung",
    "2022-08-10",
    [
      ...createColorVariants("Beige", "#D5CDC0", [
        { storage: "1TB", price: 14781.26 },
      ], "/img/phones/samsung/galaxyzfold4/beige.jpg"),
      ...createColorVariants("Burgundy", "#997179", [
        { storage: "256GB", price: 13863.14 },
        { storage: "512GB", price: 13863.14 },
      ], "/img/phones/samsung/galaxyzfold4/burgundy.jpg"),
      ...createColorVariants("Gray Green", "#4D5A62", [
        { storage: "256GB", price: 11108.76 },
        { storage: "512GB", price: 11397.00 },
      ], "/img/phones/samsung/galaxyzfold4/graygreen.jpg"),
      ...createColorVariants("Phantom Black", "#313131", [
        { storage: "256GB", price: 11744.69 },
        { storage: "1TB", price: 14781.26 },
      ], "/img/phones/samsung/galaxyzfold4/black.jpg"),
    ] 
  ),

  createPhone(
    "Samsung Galaxy Z Fold 5",
    "Samsung",
    "2023-07-26",
    [
      ...createColorVariants("Cream", "#F2EEE3", [
        { storage: "256GB", price: 18999.00 },
      ], "/img/phones/samsung/galaxyzfold5/cream.jpg"),
      ...createColorVariants("Icy Blue", "#A9AEC1", [
        { storage: "256GB", price: 14562.97 },
      ], "/img/phones/samsung/galaxyzfold5/icyblue.jpg"),
      ...createColorVariants("Phantom Black", "#0F0E0C", [
        { storage: "256GB", price: 15275.69 },
      ], "/img/phones/samsung/galaxyzfold5/black.jpg"),
    ] 
  ),

  createPhone(
    "Samsung Galaxy Z Fold 6",
    "Samsung",
    "2024-07-10",
    [
      ...createColorVariants("Navy", "#3A4058", [
        { storage: "256GB", price: 33949.00 },
        { storage: "512GB", price: 41199.00 },
      ], "/img/phones/samsung/galaxyzfold6/navy.jpg"),
      ...createColorVariants("Pink", "#EAD6D8", [
        { storage: "256GB", price: 33949.00 },
        { storage: "512GB", price: 41199.00 },
      ], "/img/phones/samsung/galaxyzfold6/pink.jpg"),
      ...createColorVariants("Silver", "#7F7F7F", [
        { storage: "256GB", price: 33949.00 },
        { storage: "512GB", price: 39699.00 },
      ], "/img/phones/samsung/galaxyzfold6/silver.jpg"),
    ]
  ),

  createPhone(
    "Samsung Galaxy Z Fold 7",
    "Samsung",
    "2025-07-25",
    [
      ...createColorVariants("Blue Shadow", "#3B5A8A", [
        { storage: "256GB", price: 38999.00 },
        { storage: "512GB", price: 45999.00 },
        { storage: "1TB", price: 48999.00 },
      ], "/img/phones/samsung/galaxyzfold7/blueshadow.jpg"),
      ...createColorVariants("Jet Black", "#4B4A4D", [
        { storage: "256GB", price: 38999.00 },
        { storage: "512GB", price: 45999.00 },
        { storage: "1TB", price: 48999.00 },
      ], "/img/phones/samsung/galaxyzfold7/jetblack.jpg"),
      ...createColorVariants("Silver Shadow", "#B1B7BA", [
        { storage: "256GB", price: 38999.00 },
        { storage: "512GB", price: 45999.00 },
        { storage: "1TB", price: 48999.00 },
      ], "/img/phones/samsung/galaxyzfold7/silvershadow.jpg"),
    ]
  ),
];