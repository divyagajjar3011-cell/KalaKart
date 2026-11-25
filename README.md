# KalaKart Frontend

Premium static frontend for **KalaKart — Online Marketplace for Local Artisans**.

## Current milestone
- Home page
- Product marketplace page
- Product details page
- Responsive dark/gold design
- Bootstrap 5 + Bootstrap Icons
- Vanilla JavaScript
- Search/category filtering
- Wishlist interaction
- Cart counter using localStorage
- Product data centralized in `js/products.js`

## Product categories included
Resin Art, Candle Art, Crochet, Glass Décor, Home Décor, Dress & Shirt, T-Shirts, Men's Kurta, Chaniya Choli, Customized.

## Easy product editing
Open `js/products.js`. Each product has:
- name
- artisan
- category
- price
- rating
- image

Replace these values later without searching through multiple HTML pages.

## Run
Open the project in VS Code and use Live Server on `index.html`.

## Milestone 3 — Cart & Checkout
- `customer/cart.html` — real demo cart using localStorage
- `customer/checkout.html` — responsive demo checkout with address validation and COD/test payment
- `js/cart.js` — centralized cart data/functions
- Product cards now save the actual product, not only a counter

Cart is demo-only and does not connect to a real payment gateway or backend yet.

## Milestone 4 — Authentication
Added customer login/register, artisan registration, forgot/reset password demo flows and starter customer/artisan dashboard routes. Authentication currently uses localStorage as a frontend demo and is ready to connect to Spring Boot REST APIs later.


## Product editing — easy mode
All customer-facing demo product data is centralized in `js/products.js`.
To change a product, edit only: name, artisan, category, price, rating and image path there.
The Home page, Products page, Product Details and Wishlist read from this same data.

### Product images
Put your real product photos inside `assets/images/` and change only the `image:` path in `js/products.js`. Example: `assets/images/products/resin-tray.jpg`.

### Recommended image names
Use simple lowercase names without spaces, for example:
- `resin-tray.jpg`
- `soy-candle.jpg`
- `crochet-bouquet.jpg`
- `glass-decor.jpg`
- `chaniya-choli.jpg`
- `handwork-kurta.jpg`

## Product Images
Product images are centralized in `js/products.js`. Local placeholder artwork is stored in `assets/images/products/`. Replace any placeholder with your own JPG/PNG/WebP and update only that product's `image:` path. A fallback image prevents broken-image icons if a file is missing.
