// const fs = require('fs');
require('dotenv').config();

module.exports = ({ env }) => ({
  ckeditor: true,
  upload: {
    config: {
      // provider: 'local',
      // providerOptions: {
      //   sizeLimit: 52428800,
      // },
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: process.env.DO_SPACE_ACCESS_KEY,
        secret: process.env.DO_SPACE_SECRET_KEY,
        endpoint: process.env.DO_SPACE_ENDPOINT,
        space: process.env.DO_SPACE_BUCKET,
        directory: process.env.DO_SPACE_DIRECTORY,
        cdn: process.env.DO_SPACE_CDN,
      }
      // provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      // providerOptions: {
      //     serviceAccount: JSON.parse(fs.readFileSync(process.env.GCS_SERVICE_ACCOUNT)),
      //     bucketName: env('GCS_BUCKET_NAME'),
      //     basePath: env('GCS_BASE_PATH'),
      //     baseUrl: env('GCS_BASE_URL'),
      //     publicFiles: true,
      //     uniform: true,
      //     gzip: true,
      // },
      // breakpoints: {
      //   xlarge: 1920,
      //   large: 1080,
      //   medium: 750,
      //   small: 500,
      //   xsmall: 64
      // },
    },
  },
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