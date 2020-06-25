require('dotenv').config();

module.exports = {
  onPreBuild: (args) => {
    console.log('-------args----------: ', JSON.stringify(args));

    const { utils } = args;
    const { FOLDER_NAME } = args.netlifyConfig.build.environment;

    console.log('FOLDER_NAME', FOLDER_NAME);

    const { modifiedFiles, deletedFiles, createdFiles } = utils.git;

    const files = [...modifiedFiles, deletedFiles, createdFiles];

    console.log('files', files);

    if (!files.startsWith(FOLDER_NAME)) {
      return utils.build.cancelBuild('Cancel message');
    }
  },
};
