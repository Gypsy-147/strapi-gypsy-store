module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/products-all',
     handler: 'products-all.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
