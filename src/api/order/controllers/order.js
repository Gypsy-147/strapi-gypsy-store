'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async create(ctx) {
        strapi.log.debug('body order api', ctx.request.body)
        // some logic here
        // const {
        //     eventName,
        //     customFields,
        //     shippingAddress,
        //   } = ctx.request.body;
        // strapi.log.debug('eventName', eventName)
        // strapi.log.debug('customFields', customFields)
        // strapi.log.debug('shippingAddress', shippingAddress)
        try {
            // Create the order
           const entity = await strapi.service('api::order.order').create({ status: eventName, name: customFields.name, address: shippingAddress.fullAddress })
           const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
           return this.transformResponse(sanitizedEntity);
          } catch (err) {
            // return 500 error
            ctx.response.status = 500;
            return { error: { message: 'There was a problem creating the order'}};
          }
        // some more logic
      }
  }));
