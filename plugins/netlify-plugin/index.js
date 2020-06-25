require('dotenv').config();

module.exports = {
  onPreBuild: (args) => {
    console.log('-------args----------: ', JSON.stringify(args));

    const { utils, constants } = args;

    console.log(process.env.SITE_ID, ' ----- ', constants.SITE_ID);

    if (process.env.SITE_ID === constants.SITE_ID) {
      return utils.build.cancelBuild('Cancel message');
    }
  },
};
