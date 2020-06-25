require('dotenv').config();

module.exports = {
  onPreBuild: (args) => {
    console.log('-------args----------: ', JSON.stringify(args));

    const { utils, constants } = args;

    console.log(constants.MY_SITE_NAME, ' ----- ', constants.SITE_NAME);

    if (constants.MY_SITE_NAME === constants.SITE_NAME) {
      return utils.build.cancelBuild('Cancel message');
    }
  },
};
