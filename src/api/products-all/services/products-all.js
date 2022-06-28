'use strict';

module.exports = {
  productsAll: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany('api::product.product', {
        fields: ['id', 'title', 'price', 'description', 'createdAt'],
        populate: {
          image: {
            fields: ['url']
          },
          custom_field: {
            populate: '*'
          },
        }
      });

      // reducing the data to a simple array
      let entriesReduced;
      if (entries && Array.isArray(entries)) {
        entriesReduced = entries.reduce((acc, item) => {
          acc = acc || [];
        //   console.log(acc);
          acc.push({
            id: item.id,
            img: item.image?.url || '',
            title: item?.title|| '',
            custom_field: item?.custom_field || {},
            price: item?.price || '',
            description: item?.description || '',
            createdAt: item?.createdAt || ''
          });
          return acc;
        }, [])
        // console.log('strapi.services ', strapi.services);
        // console.log('pages-report', strapi.service('api::products-all.products-all'));
        // returning the reduced data
        return entriesReduced;
      }
    } catch (err) {
      return err;
    }
  }
}