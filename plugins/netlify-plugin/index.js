require('dotenv').config();

module.exports = {
  onPreBuild: ({ utils, constants }) => {
    console.log('Hello world from onPreBuild event!');

    console.log(process.env.SITE_ID, ' ----- ', constants.SITE_ID);

    if (process.env.SITE_ID === constants.SITE_ID) {
      return utils.build.cancelBuild('Cancel message');
    }
  },
};
