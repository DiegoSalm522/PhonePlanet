import { createPhone, createColorVariants } from "./utils";

export const ztePhones = [
  createPhone(
    "ZTE Axon 50 Lite",
    "ZTE",
    "2023-09-01",
    [
      ...createColorVariants("Black", "#070915", [
        { storage: "256GB", price: 2693.63 },
      ], "/img/phones/zte/axon50lite/black.jpg"),
      ...createColorVariants("Green", "#ABBA8F", [
        { storage: "256GB", price: 2693.63 },
      ], "/img/phones/zte/axon50lite/green.jpg"),
      ...createColorVariants("Lilac", "#AFAFD5", [
        { storage: "256GB", price: 2693.63 },
      ], "/img/phones/zte/axon50lite/lilac.jpg"),
    ]
  ),
  
  createPhone(
    "ZTE Axon 70",
    "ZTE",
    "2025-03-06",
    [
      ...createColorVariants("Gold", "#DAC4B5", [
        { storage: "256GB", price: 2749.33 },
      ], "/img/phones/zte/axon70/gold.jpg"),
      ...createColorVariants("Gray", "#A2ACB5", [
        { storage: "256GB", price: 2558.90 },
      ], "/img/phones/zte/axon70/gray.jpg"),
      ...createColorVariants("Green", "#D2E9D5", [
        { storage: "256GB", price: 2699.00 },
      ], "/img/phones/zte/axon70/green.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A34",
    "ZTE",
    "2024-04-24",
    [
      ...createColorVariants("Gray", "#383D41", [
        { storage: "64GB", price: 2241.06 },
      ], "/img/phones/zte/bladea34/gray.jpg"),
      ...createColorVariants("Green", "#266C6A", [
        { storage: "64GB", price: 2408.62 },
      ], "/img/phones/zte/bladea34/green.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A35",
    "ZTE",
    "2024-10-01",
    [
      ...createColorVariants("Black", "#1B1F28", [
        { storage: "64GB", price: 1599.00 },
      ], "/img/phones/zte/bladea35/black.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A35e",
    "ZTE",
    "2025-01-20",
    [
      ...createColorVariants("Blue", "#99CACF", [
        { storage: "64GB", price: 1499.00 },
      ], "/img/phones/zte/bladea35e/blue.jpg"),
      ...createColorVariants("Gray", "#747273", [
        { storage: "64GB", price: 1231.12 },
      ], "/img/phones/zte/bladea35e/gray.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A51",
    "ZTE",
    "2021-05-08",
    [
      ...createColorVariants("Blue", "#1D6BB9", [
        { storage: "64GB", price: 1899.00 },
      ], "/img/phones/zte/bladea51/blue.jpg"),
      ...createColorVariants("Gray", "#40404A", [
        { storage: "64GB", price: 1899.00 },
      ], "/img/phones/zte/bladea51/gray.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A55",
    "ZTE",
    "2024-07-01",
    [
      ...createColorVariants("Blue", "#B7DFE7", [
        { storage: "128GB", price: 2099.00 },
      ], "/img/phones/zte/bladea55/blue.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade A56",
    "ZTE",
    "2025-07-01",
    [
      ...createColorVariants("Gold", "#FCF7D9", [
        { storage: "128GB", price: 1849.00 },
      ], "/img/phones/zte/bladea56/gold.jpg"),
      ...createColorVariants("Gray", "#A9A9A9", [
        { storage: "128GB", price: 1849.00 },
      ], "/img/phones/zte/bladea56/gray.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade V40 Pro",
    "ZTE",
    "2022-07-08",
    [
      ...createColorVariants("Green", "#263532", [
        { storage: "128GB", price: 2124.81 },
      ], "/img/phones/zte/bladev40pro/green.jpg"),
      ...createColorVariants("Blue", "#D8ECF7", [
        { storage: "128GB", price: 2124.81 },
      ], "/img/phones/zte/bladev40pro/white.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade V40 Smart",
    "ZTE",
    "2022-02-28",
    [
      ...createColorVariants("Black", "#1E1F21", [
        { storage: "64GB", price: 2725.80 },
      ], "/img/phones/zte/bladev40smart/black.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade V60 Smart",
    "ZTE",
    "2024-09-30",
    [
      ...createColorVariants("Black", "#262A33", [
        { storage: "128GB", price: 2299.00 },
      ], "/img/phones/zte/bladev60smart/black.jpg"),
      ...createColorVariants("White", "#F9F9F9", [
        { storage: "128GB", price: 2299.00 },
      ], "/img/phones/zte/bladev60smart/white.jpg"),
    ]
  ),

  createPhone(
    "ZTE Blade V70 Max",
    "ZTE",
    "2025-06-01",
    [
      ...createColorVariants("Gray", "#8F939F", [
        { storage: "256GB", price: 2287.85 },
      ], "/img/phones/zte/bladev70max/gray.jpg"),
      ...createColorVariants("Green", "#D4F5E2", [
        { storage: "256GB", price: 2222.32 },
      ], "/img/phones/zte/bladev70max/green.jpg"),
    ]
  ),
];