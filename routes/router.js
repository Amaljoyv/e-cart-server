//impport express

const express = require("express")

//router()
const router = new express.Router()

//import productControllers
const productControllers = require('../controllers/productController')

//import wishlistController
const wishlistController = require('../controllers/wishlistController')

//import cartController
const cartController = require('../controllers/cartController')

//get-all-products api
//router .http-request(path,callback to define logic to resolve api)
router.get('/products/get-all-products',productControllers.getallproducts)

//route for view single product
router.get('/products/:id',productControllers.viewProduct)

//route for add to wishlist
router.post('/products/add-to-wishlist',wishlistController.addToWishlist)

//route for get all  wishlist
router.get('/wishlist/get-all-items',wishlistController.getAllWishlistItems)

//route for removing a item from wish
router.delete('/wishlist/remove-item/:id',wishlistController.removeWishlistItem)

//route for adding tem to cart
router.post('/products/add-to-cart',cartController.addToCart)

//route for get all cart items
router.get('/cart/get-all-items',cartController.getCartItems)

//route for remob=ve item from cart
router.delete('/cart/item/:id',cartController.removeCartItem)

//route for incrementing cart item quantity
router.get('/cart/increment-item/:id',cartController.incrCartItem)

//route for decrement cart item quantity
router.get('/cart/decrement-item/:id',cartController.decrCartItem)

//route for empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)


//export  router
module.exports = router
