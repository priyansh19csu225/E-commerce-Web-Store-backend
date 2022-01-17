const express = require("express");
const router = express.Router();
const checkauth = require("../../utils/middlewares/auth1");
// const { orders } = require("../../controllers/order");
const { create , findCart , cartdel , deletefromcart} = require("../../controllers/cart");
const { CARTADD, CARTVIEW , CARTDELETE , CARTPRODUCTDELETE} = require("../../utils/config").ROUTES.CART;
router.post(CARTADD, create);
router.delete(CARTDELETE, cartdel);
router.post(CARTPRODUCTDELETE , deletefromcart);
router.get(CARTVIEW,  checkauth ,findCart);
// router.get(DETAILS + "/:orderid", orders);
module.exports = router;