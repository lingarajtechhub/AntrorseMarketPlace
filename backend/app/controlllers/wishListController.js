const wishlistModel=require("../models/user/userWishListModels")
const mongoose=require("mongoose")

//  GET Wishlist with Product Details
module.exports={
    getWishList: async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const wishlist = await wishlistModel.aggregate([
      {
        $match: { user: mongoose.Types.ObjectId(user_id) },
      },
      {
        $lookup: {
          from: 'products', // Assuming your product collection is named 'products'
          localField: 'items.product',
          foreignField: '_id',
          as: 'itemDetails',
        },
      },
      {
        $project: {
          user: 1,
          items: {
            $map: {
              input: '$items',
              as: 'item',
              in: {
                product: '$$item.product',
                quantity: '$$item.quantity',
                details: {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: '$itemDetails',
                        as: 'detail',
                        cond: { $eq: ['$$detail._id', '$$item.product'] },
                      },
                    },
                    0,
                  ],
                },
              },
            },
          },
          created_at: 1,
        },
      },
    ]);
    if (!wishlist || wishlist.length === 0) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }
    res.json(wishlist[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},
// POST Add Item to Wishlist
creteWishList: async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;
    const wishlist = await wishlistModel.findOne({ user: userId });
    if (!wishlist) {
      // Create a new wishlist if not exists
      const newWishlist = new Wishlist({ user: userId, items: [{ product: productId, quantity }] });
      await newWishlist.save();
      return res.json(newWishlist);
    }
    // Check if the product is already in the wishlist
    const existingItem = wishlist.items.find(item => item.product.toString() === productId);
    if (existingItem) {
      // If exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If not, add a new item to the wishlist
      wishlist.items.push({ product: productId, quantity });
    }
    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

}