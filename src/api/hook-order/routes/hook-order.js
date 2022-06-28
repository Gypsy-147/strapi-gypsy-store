module.exports = {
  routes: [
    {
      method: "POST",
      path: "/hook-order",
      handler: "hook-order.create",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
