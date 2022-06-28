'use strict';

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async find(ctx) {
    // todo
  },

  async create(ctx) {
    // todo
    console.log('controll body',ctx.request.body);
    const {
      content,
    } = ctx.request.body;
        try {
      // console.log('controll body',ctx.request.body);
      ctx.request.body.data = {...ctx.request.body,
        order_detail: {...ctx.request.body},
        status: ctx.request.body.eventName,
        name: content.billingAddress.fullName,
        address: content.shippingAddress.fullAddress,
        publishedAt: new Date(),
      }
      const response = await super.create(ctx);
      // const response = await super.create({ data: { publishedAt: new Date(), status: ctx.request.body.eventName, name: content.billingAddress.fullName, address: content.shippingAddress.fullAddress }})
      console.log('controll response',response);
      return response;
    } catch (err) {
      console.log(err);
      // return 500 error
      ctx.response.status = 500;
      return  { error: { message: 'There was a problem creating the order'}};
      // ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  },

  async update(ctx) {
    // todo
  },
}));