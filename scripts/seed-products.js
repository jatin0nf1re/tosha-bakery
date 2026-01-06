// Script to seed products from local data to Medusa backend
// Run this after setting up Medusa backend

const { products, productCategories } = require('../src/data/products.js');

const MEDUSA_URL = 'http://localhost:9000';
const ADMIN_EMAIL = 'admin@toshabakery.in'; // Replace with your admin email
const ADMIN_PASSWORD = 'your-admin-password'; // Replace with your admin password

let authToken = '';

// Login to get auth token
async function login() {
  const response = await fetch(`${MEDUSA_URL}/admin/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
    }),
  });

  const data = await response.json();
  authToken = data.user.api_token;
  console.log('✓ Logged in successfully');
}

// Create collections
async function createCollections() {
  console.log('\n📁 Creating collections...');
  
  for (const category of productCategories) {
    try {
      const response = await fetch(`${MEDUSA_URL}/admin/collections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          title: category.name,
          handle: category.id,
        }),
      });

      const data = await response.json();
      console.log(`  ✓ Created collection: ${category.name}`);
    } catch (error) {
      console.error(`  ✗ Failed to create ${category.name}:`, error.message);
    }
  }
}

// Get collection ID by handle
async function getCollectionId(handle) {
  const response = await fetch(`${MEDUSA_URL}/admin/collections?handle=${handle}`, {
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  });
  
  const data = await response.json();
  return data.collections[0]?.id;
}

// Create product
async function createProduct(product) {
  try {
    const collectionId = await getCollectionId(product.category);
    
    const response = await fetch(`${MEDUSA_URL}/admin/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        title: product.name,
        description: product.description,
        is_giftcard: false,
        discountable: true,
        images: [product.image],
        thumbnail: product.image,
        handle: product.name.toLowerCase().replace(/\s+/g, '-'),
        status: 'published',
        collection_id: collectionId,
        options: [
          {
            title: 'Egg Option',
            values: ['With Egg', 'Eggless'],
          },
          {
            title: 'Gluten Option',
            values: ['Regular', 'Gluten Free'],
          },
        ],
        variants: [
          {
            title: 'Default',
            prices: [
              {
                currency_code: 'inr',
                amount: Math.round(product.price * 100), // Convert to paise
              },
            ],
            options: [
              { value: 'With Egg' },
              { value: 'Regular' },
            ],
          },
        ],
        metadata: {
          featured: product.featured || false,
          dietaryOptions: product.dietaryOptions || {},
          addOns: product.addOns || [],
        },
      }),
    });

    const data = await response.json();
    console.log(`  ✓ Created product: ${product.name}`);
    return data.product;
  } catch (error) {
    console.error(`  ✗ Failed to create ${product.name}:`, error.message);
  }
}

// Main function
async function seed() {
  console.log('🌱 Starting product seed...\n');
  
  try {
    await login();
    await createCollections();
    
    console.log('\n📦 Creating products...');
    for (const product of products) {
      await createProduct(product);
    }
    
    console.log('\n✅ Seed completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`  - Collections: ${productCategories.length}`);
    console.log(`  - Products: ${products.length}`);
    console.log(`\n🔗 Admin Panel: http://localhost:7001`);
    
  } catch (error) {
    console.error('\n❌ Seed failed:', error.message);
    process.exit(1);
  }
}

// Run seed
seed();

