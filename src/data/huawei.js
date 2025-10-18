import { createPhone, createColorVariants } from "./utils";

export const huaweiPhones = [
  createPhone(
    "HUAWEI Mate X6",
    "HUAWEI",
    "2024-11-26",
    [
      ...createColorVariants("Black", "#1A1B1D", [
        { storage: "512GB", price: 45999.00 },
      ], "/img/phones/huawei/matex6/black.jpg"),
      ...createColorVariants("Nebula Gray", "#A7AAB3", [
        { storage: "512GB", price: 45999.00 },
      ], "/img/phones/huawei/matex6/gray.jpg"),
      ...createColorVariants("Nebula Red", "#631111", [
        { storage: "512GB", price: 45999.00 },
      ], "/img/phones/huawei/matex6/red.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI Mate XT Ultimate Design",
    "HUAWEI",
    "2024-09-20",
    [
      ...createColorVariants("Black", "#3B3B3B", [
        { storage: "1TB", price: 69999.00 },
      ], "/img/phones/huawei/matext/black.jpg"),
      ...createColorVariants("Red", "#722D2D", [
        { storage: "1TB", price: 69999.00 },
      ], "/img/phones/huawei/matext/red.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI nova 13",
    "HUAWEI",
    "2024-10-25",
    [
      ...createColorVariants("Black", "#1A1B1D", [
        { storage: "256GB", price: 13999.00 },
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13/black.jpg"),
      ...createColorVariants("Green", "#ABB7A0", [
        { storage: "256GB", price: 13999.00 },
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13/green.jpg"),
      ...createColorVariants("White", "#E8E8E8", [
        { storage: "256GB", price: 13999.00 },
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI nova 13i",
    "HUAWEI",
    "2025-01-10",
    [
      ...createColorVariants("Blue", "#C4D8EB", [
        { storage: "256GB", price: 5999.00 },
      ], "/img/phones/huawei/nova13i/blue.jpg"),
      ...createColorVariants("White", "#F3F3F3", [
        { storage: "256GB", price: 5999.00 },
      ], "/img/phones/huawei/nova13i/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI nova 13 Pro",
    "HUAWEI",
    "2024-10-25",
    [
      ...createColorVariants("Black", "#1A1B1D", [
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13pro/black.jpg"),
      ...createColorVariants("Green", "#ABB7A0", [
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13pro/green.jpg"),
      ...createColorVariants("White", "#E8E8E8", [
        { storage: "512GB", price: 16999.00 },
      ], "/img/phones/huawei/nova13pro/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI P60 Pro",
    "HUAWEI",
    "2023-03-23",
    [
      ...createColorVariants("Black", "#343537", [
        { storage: "256GB", price: 14740.65 },
      ], "/img/phones/huawei/p60pro/black.jpg"),
      ...createColorVariants("White", "#F2F0F3", [
        { storage: "512GB", price: 16951.85 },
      ], "/img/phones/huawei/p60pro/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI Pura 70",
    "HUAWEI",
    "2024-04-18",
    [
      ...createColorVariants("Black", "#2A2A2A", [
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/huawei/pura70/black.jpg"),
      ...createColorVariants("White", "#EBE8EB", [
        { storage: "256GB", price: 13999.00 },
      ], "/img/phones/huawei/pura70/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI Pura 70 Pro",
    "HUAWEI",
    "2024-04-18",
    [
      ...createColorVariants("Black", "#2A2A2A", [
        { storage: "512GB", price: 15999.00 },
      ], "/img/phones/huawei/pura70pro/black.jpg"),
      ...createColorVariants("White", "#EBE8EB", [
        { storage: "512GB", price: 15999.00 },
      ], "/img/phones/huawei/pura70pro/white.jpg"),
    ]
  ),
  
  createPhone(
    "HUAWEI Pura 70 Ultra",
    "HUAWEI",
    "2024-04-18",
    [
      ...createColorVariants("Black", "#2A2A2A", [
        { storage: "512GB", price: 16999.00 },
        { storage: "1TB", price: 18999.00 },
      ], "/img/phones/huawei/pura70ultra/black.jpg"),
      ...createColorVariants("Brown", "#6F4533", [
        { storage: "512GB", price: 16999.00 },
        { storage: "1TB", price: 18999.00 },
      ], "/img/phones/huawei/pura70ultra/brown.jpg"),
      ...createColorVariants("Green", "#A2B59C", [
        { storage: "512GB", price: 16999.00 },
        { storage: "1TB", price: 18999.00 },
      ], "/img/phones/huawei/pura70ultra/green.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI Pura 80",
    "HUAWEI",
    "2025-06-11",
    [
      ...createColorVariants("Black", "#3F3F3F", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/huawei/pura80/black.jpg"),
      ...createColorVariants("Gold", "#841E38", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/huawei/pura80/gold.jpg"),
      ...createColorVariants("White", "#F2F2F2", [
        { storage: "256GB", price: 21499.00 },
      ], "/img/phones/huawei/pura80/white.jpg"),
    ]
  ),

  createPhone(
    "HUAWEI Pura 80 Pro",
    "HUAWEI",
    "2025-06-11",
    [
      ...createColorVariants("Black", "#3F3F3F", [
        { storage: "512GB", price: 29999.00 },
      ], "/img/phones/huawei/pura80pro/black.jpg"),
      ...createColorVariants("Red", "#841E38", [
        { storage: "512GB", price: 29999.00 },
      ], "/img/phones/huawei/pura80pro/red.jpg"),
      ...createColorVariants("White", "#F2F2F2", [
        { storage: "512GB", price: 29999.00 },
      ], "/img/phones/huawei/pura80pro/white.jpg"),
    ]
  ),
  
  createPhone(
    "HUAWEI Pura 80 Ultra",
    "HUAWEI",
    "2025-06-11",
    [
      ...createColorVariants("Black", "#3F3F3F", [
        { storage: "512GB", price: 39999.00 },
      ], "/img/phones/huawei/pura80ultra/black.jpg"),
      ...createColorVariants("Gold", "#841E38", [
        { storage: "512GB", price: 39999.00 },
      ], "/img/phones/huawei/pura80ultra/gold.jpg"),
    ]
  ),
];