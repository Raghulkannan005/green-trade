

## 🖥️ 2. CLIENT (React + Tailwind)

* [ ] Create React app (`Vite` recommended)
* [ ] Install Tailwind CSS
* [ ] Install `axios`, `react-router-dom`, `react-toastify`
* [ ] Folder structure:

  ```
  client/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── hooks/
  │   ├── services/
  │   ├── context/
  │   └── App.jsx, main.jsx
  ```
---

## 🧑‍🌾 4. AUTH MODULE (Farmer + Buyer Roles)

* [ ] Register & Login (JWT + cookies)
* [X] Password hashing (bcrypt)
* [ ] Middleware: `auth`, `roleCheck`
* [ ] Auth Context in React (store user)
* [ ] Logout, token expiry, refresh handling (optional)

---

## 📦 5. PRODUCT MODULE (for Farmers/Artisans)

* [ ] Add product (image, title, price, description, category, available stock)
* [ ] Get all products (public)
* [ ] Get by category
* [ ] Get by seller
* [ ] Edit/delete product (protected)

---

## 🛍️ 6. BUYER FEATURES

* [ ] View all products
* [ ] Filter by category, price range, search
* [ ] View seller contact info
* [ ] Bookmark products (wishlist)

---

## 🧑‍🌾 7. SELLER FEATURES

* [ ] Dashboard with own products
* [ ] Add/edit/delete product
* [ ] View orders (if order system is implemented later)

---

## 📫 8. CONTACT FLOW (Buyers ↔ Sellers)

* [ ] Contact info on product card (WhatsApp / phone / email)
* [ ] Optional: integrate basic chat or inquiry form (store messages in DB)

---

## 📤 9. PRODUCT REVIEWS (Optional Phase 2)

* [ ] Add review & rating per product
* [ ] Edit/delete own review
* [ ] Avg rating calc on product

---

## 📍 10. LOCATION & DISCOVERY

* [ ] Add seller’s location (district, pin, state)
* [ ] Filter products by location (pin/state)
* [ ] Optional: Google Maps API integration

---

## ⚙️ 11. ADMIN DASHBOARD (Optional Phase 2)

* [ ] View all users and products
* [ ] Verify/approve sellers manually
* [ ] Ban/unban users
* [ ] Dashboard stats (products count, users count, etc.)

---

## 💰 12. PAYMENTS (Optional)

* [ ] Integrate Razorpay
* [ ] Order schema: buyerId, sellerId, productId, txnId, status
* [ ] Seller dashboard: see orders & fulfill status

---

## 🧪 13. TESTING

* [ ] Postman collection for all APIs
* [ ] Basic frontend testing (unit + integration)

---

## 🚀 14. DEPLOYMENT

* [ ] Deploy backend on **Render** / **Railway** / **VPS**
* [ ] Deploy frontend on **Vercel**
* [ ] MongoDB Atlas for DB
* [ ] Add custom domain (`greentrade.raghulkannan.me`)

---

## 🛡️ 15. PRODUCTION HARDENING

* [ ] Rate limiting
* [ ] Input validation (Zod / express-validator)
* [ ] HTTPS, CORS config, secure cookies
* [ ] Error boundary in frontend
* [ ] Environment config (dev/prod separation)

---

## 📈 16. FUTURE SCOPE

* [ ] Delivery Partner App (role-based)
* [ ] Wallet system
* [ ] Inventory alerts for sellers
* [ ] PWA/mobile version with Expo

---

Want the database schema + sample folder structure next?
