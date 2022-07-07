'use strict';

module.exports = {
  allCategories: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::category.category', {
        fields: ['id', 'name', 'createdAt'],
        populate: {
          products: {
            fields: ['title', 'description', 'price'],
            populate: {
              image: {
                fields: ['url']
              },
              custom_field: {
                populate: '*'
              }
            }
          },
        }
      });

      // reducing the data to a simple array
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
          let setCategories = []
        //   setCategories = item.categories.map(item => {
        //     return item.name
        //   })
          // setCategories.push(item.categories.name)
          acc.push({
            id: item.id,
            // image: item.image.url || '',
            name: item.title || '',
            products: item.products
            // categories: setCategories,
            // inventoryManagementMethod:  "Variant",
            // variants: [
            //   {
            //     stock: 10,
            //     allowOutOfStockPurchases:  true
            //   }
            // ],
            // price: item?.price || '',
          });
          return acc;
        }, [])
        return entriesReduced;
      }
    } catch (err) {
      return err;
    }
  }
}