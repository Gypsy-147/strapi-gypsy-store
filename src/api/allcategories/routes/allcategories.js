module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/allcategories',
     handler: 'allcategories.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
