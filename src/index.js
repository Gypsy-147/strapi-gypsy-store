'use strict';

function stream2buffer(stream) {
  return new Promise((resolve, reject) => {
    const _buf = [];

    stream.on('data', (chunk) => _buf.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(_buf)));
    stream.on('error', (err) => reject(err));
  });
}

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
        /**
     * Temporary workaround for strapi-provider-upload-azure-storage
     */
         strapi.plugins.upload.provider.uploadStream = async (file) => {
          file.buffer = await stream2buffer(file.stream);
    
          return strapi.plugins.upload.provider.upload(file);
        };
  },
};
