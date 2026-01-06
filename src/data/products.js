export const productCategories = [
  { id: 'cakes', name: 'Cakes', description: 'Delicious cakes for every occasion' },
  { id: 'cake-jars', name: 'Cake Jars', description: 'Layered cake goodness in a jar' },
  { id: 'cupcakes', name: 'Cupcakes', description: 'Individual sized delights' },
  { id: 'brownies', name: 'Brownies', description: 'Rich, fudgy chocolate treats' },
];

export const products = [
  // Cakes
  {
    id: 1,
    name: 'Chocolate Fudge Cake',
    category: 'cakes',
    price: 299, // Base price (lowest)
    description: 'Rich chocolate cake with creamy fudge frosting',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80',
      'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&q=80',
    ],
    featured: true,
    sizeOptions: [
      { name: 'Bento Size', price: 299 },
      { name: '500gm', price: 549 },
      { name: '1kg', price: 999 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Extra Frosting', price: 50 },
      { name: 'Chocolate Shavings', price: 30 },
      { name: 'Birthday Candles', price: 20 },
      { name: 'Custom Message', price: 0 }
    ],
  },
  {
    id: 2,
    name: 'Vanilla Dream Cake',
    category: 'cakes',
    price: 249,
    description: 'Classic vanilla cake with buttercream',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=80',
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80',
      'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&q=80',
    ],
    featured: true,
    sizeOptions: [
      { name: 'Bento Size', price: 249 },
      { name: '500gm', price: 499 },
      { name: '1kg', price: 899 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Fresh Berries', price: 60 },
      { name: 'Sprinkles', price: 20 },
      { name: 'Birthday Candles', price: 20 },
      { name: 'Custom Message', price: 0 }
    ],
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 329,
    description: 'Velvety red cake with cream cheese frosting',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&q=80',
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80',
      'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&q=80',
    ],
    featured: false,
    sizeOptions: [
      { name: 'Bento Size', price: 329 },
      { name: '500gm', price: 599 },
      { name: '1kg', price: 1099 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Extra Frosting', price: 50 },
      { name: 'White Chocolate Curls', price: 40 },
      { name: 'Birthday Candles', price: 20 },
      { name: 'Custom Message', price: 0 }
    ],
  },
  {
    id: 4,
    name: 'Carrot Cake',
    category: 'cakes',
    price: 299,
    description: 'Moist carrot cake with walnuts and cream cheese',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Bento Size', price: 299 },
      { name: '500gm', price: 549 },
      { name: '1kg', price: 999 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: false,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Extra Walnuts', price: 40 },
      { name: 'Cream Cheese Frosting', price: 50 },
      { name: 'Birthday Candles', price: 20 },
      { name: 'Custom Message', price: 0 }
    ],
  },
  
  // Cake Jars
  {
    id: 5,
    name: 'Red Velvet Cake Jar',
    category: 'cake-jars',
    price: 149,
    description: 'Layers of red velvet cake and cream cheese frosting in a jar',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
      'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&q=80',
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80',
    ],
    featured: true,
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Extra Layer', price: 40 },
      { name: 'Chocolate Chips', price: 30 },
      { name: 'Whipped Cream Topping', price: 20 }
    ],
  },
  {
    id: 6,
    name: 'Chocolate Mousse Jar',
    category: 'cake-jars',
    price: 169,
    description: 'Decadent chocolate mousse with cake layers',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80',
    featured: false,
    dietaryOptions: {
      egg: true,
      eggless: false,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Chocolate Shavings', price: 30 },
      { name: 'Oreo Crumbs', price: 35 },
      { name: 'Whipped Cream', price: 20 }
    ],
  },
  {
    id: 7,
    name: 'Strawberry Shortcake Jar',
    category: 'cake-jars',
    price: 139,
    description: 'Fresh strawberries, vanilla cake, and cream',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=80',
    featured: false,
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Extra Strawberries', price: 40 },
      { name: 'Vanilla Wafers', price: 25 },
      { name: 'Whipped Cream', price: 20 }
    ],
  },
  {
    id: 8,
    name: 'Tiramisu Jar',
    category: 'cake-jars',
    price: 189,
    description: 'Classic Italian tiramisu in a convenient jar',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
    featured: false,
    dietaryOptions: {
      egg: true,
      eggless: false,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Extra Coffee Syrup', price: 25 },
      { name: 'Cocoa Powder', price: 20 },
      { name: 'Chocolate Shavings', price: 30 }
    ],
  },
  
  // Cupcakes
  {
    id: 9,
    name: 'Classic Vanilla Cupcakes',
    category: 'cupcakes',
    price: 299,
    description: 'Fluffy vanilla cupcakes with buttercream',
    image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?w=500&q=80',
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80',
      'https://images.unsplash.com/photo-1519869325930-281384150729?w=500&q=80',
    ],
    featured: true,
    sizeOptions: [
      { name: 'Pack of 4', price: 299 },
      { name: 'Pack of 6', price: 429 },
      { name: 'Pack of 9', price: 599 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Custom Colors', price: 30 },
      { name: 'Sprinkles', price: 20 },
      { name: 'Edible Flowers', price: 50 },
      { name: 'Custom Toppers', price: 40 }
    ],
  },
  {
    id: 10,
    name: 'Chocolate Cupcakes',
    category: 'cupcakes',
    price: 299,
    description: 'Rich chocolate cupcakes with chocolate ganache',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 299 },
      { name: 'Pack of 6', price: 429 },
      { name: 'Pack of 9', price: 599 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Chocolate Chips', price: 30 },
      { name: 'Gold Leaf', price: 80 },
      { name: 'Sprinkles', price: 20 },
      { name: 'Custom Toppers', price: 40 }
    ],
  },
  {
    id: 11,
    name: 'Strawberry Cupcakes',
    category: 'cupcakes',
    price: 329,
    description: 'Fresh strawberry cupcakes with cream cheese frosting',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 329 },
      { name: 'Pack of 6', price: 479 },
      { name: 'Pack of 9', price: 669 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Fresh Strawberries', price: 50 },
      { name: 'Pink Sprinkles', price: 20 },
      { name: 'Edible Flowers', price: 50 },
      { name: 'Custom Toppers', price: 40 }
    ],
  },
  {
    id: 12,
    name: 'Red Velvet Cupcakes',
    category: 'cupcakes',
    price: 349,
    description: 'Signature red velvet with cream cheese frosting',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 349 },
      { name: 'Pack of 6', price: 509 },
      { name: 'Pack of 9', price: 719 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'White Chocolate Curls', price: 40 },
      { name: 'Red Velvet Crumbs', price: 30 },
      { name: 'Sprinkles', price: 20 },
      { name: 'Custom Toppers', price: 40 }
    ],
  },

  // Brownies
  {
    id: 13,
    name: 'Classic Fudge Brownies',
    category: 'brownies',
    price: 249,
    description: 'Rich, fudgy chocolate brownies',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&q=80',
    images: [
      'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=500&q=80',
      'https://images.unsplash.com/photo-1590080874088-eec64895b423?w=500&q=80',
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
    ],
    featured: true,
    sizeOptions: [
      { name: 'Pack of 4', price: 249 },
      { name: 'Pack of 6', price: 359 },
      { name: 'Pack of 9', price: 499 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'Walnuts', price: 40 },
      { name: 'Chocolate Chips', price: 30 },
      { name: 'Caramel Drizzle', price: 35 },
      { name: 'Ice Cream Scoop', price: 50 }
    ],
  },
  {
    id: 14,
    name: 'Nutella Swirl Brownies',
    category: 'brownies',
    price: 299,
    description: 'Fudgy brownies with Nutella swirls',
    image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 299 },
      { name: 'Pack of 6', price: 429 },
      { name: 'Pack of 9', price: 599 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: false,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Extra Nutella', price: 50 },
      { name: 'Hazelnuts', price: 45 },
      { name: 'Chocolate Chips', price: 30 },
      { name: 'Ice Cream Scoop', price: 50 }
    ],
  },
  {
    id: 15,
    name: 'Blondie Brownies',
    category: 'brownies',
    price: 269,
    description: 'Butterscotch blondies with white chocolate chips',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 269 },
      { name: 'Pack of 6', price: 389 },
      { name: 'Pack of 9', price: 539 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: true,
    },
    addOns: [
      { name: 'White Chocolate Chips', price: 35 },
      { name: 'Macadamia Nuts', price: 50 },
      { name: 'Caramel Drizzle', price: 35 },
      { name: 'Ice Cream Scoop', price: 50 }
    ],
  },
  {
    id: 16,
    name: 'Triple Chocolate Brownies',
    category: 'brownies',
    price: 319,
    description: 'Dark, milk, and white chocolate layers',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
    featured: false,
    sizeOptions: [
      { name: 'Pack of 4', price: 319 },
      { name: 'Pack of 6', price: 459 },
      { name: 'Pack of 9', price: 639 }
    ],
    dietaryOptions: {
      egg: true,
      eggless: true,
      gluten: true,
      glutenFree: false,
    },
    addOns: [
      { name: 'Chocolate Ganache', price: 45 },
      { name: 'Mixed Nuts', price: 45 },
      { name: 'Chocolate Shavings', price: 30 },
      { name: 'Ice Cream Scoop', price: 50 }
    ],
  },
];

