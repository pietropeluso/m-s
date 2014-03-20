'use strict';

/**
 * Get awesome things
 */
exports.feed = function(req, res) {
  res.json([
    {
      Category: 'Women',
      SubCategory: 'Clothing',
      Item: 'Party wear - Front Leather Panelled Ponte Treggings', 
      Price: parseFloat(159.00)
    },
    {
      Category: 'Beauty',
      SubCategory: 'Skincare',
      Item: 'Aptiva - Wine Elixir Night Cream', 
      Price: parseFloat(79.00)
    },
    {
      Category: 'Men',
      SubCategory: 'Suits & Tailoring',
      Item: 'Sartorial – Slim Fit Luxury Pure Cotton Rib Striped Shirt', 
      Price: parseFloat(39.50)
    },
    {
      Category: 'Kids',
      SubCategory: 'Toys & Games', 
      Item: 'Boys Stuff - Top Secret', 
      Price: parseFloat(5.00)
    },
    {
      Category: 'Food & Wine',
      SubCategory: 'Wines, Beers & Spirit',
      Item: 'Exclusive to Order - Arriero Carmenere (case of 6)',
      Price: parseFloat(53.94)
    },
    {
      Category: 'Flowers & Gifts',
      SubCategory: 'Flowers & Hampers',
      Item: 'New Baby - Dog Comfort Toy', 
      Price: parseFloat(6.00)
    },
    {
      Category: 'Home',
      SubCategory: 'Kitchen & Dining Room',
      Item: 'Bakeware - Aprons & Oven Gloves: Silicon Double Oven Mittens',
      Price: parseFloat(19.50)
    }
  ]);

  // var items = [];
  // data.forEach(function (item) {
  //   items.push({
  //     Category: item.Category,
  //     SubCategory: item.SubCategory,
  //     Item: item.Item,
  //     Price: parseFloat(item.Price)
  //   });
  // });
  // res.json({items: items});
  
};
