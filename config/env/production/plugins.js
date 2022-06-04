const fs = require('fs');
require('dotenv').config();

module.exports = ({ env }) => ({
  upload: {
    config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            serviceAccount: JSON.parse(fs.readFileSync(process.env.GCS_SERVICE_ACCOUNT)),
            bucketName: env('GCS_BUCKET_NAME'),
            basePath: env('GCS_BASE_PATH'),
            baseUrl: env('GCS_BASE_URL'),
            publicFiles: true,
            uniform: true,
            gzip: true,
        },
    },
  },  
  //
  graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 100,
        apolloServer: {
          tracing: false,
          },
        },
      }, 
    });