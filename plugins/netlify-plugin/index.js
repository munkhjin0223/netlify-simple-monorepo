require('dotenv').config();

module.exports = {
  onPreBuild: ({ utils, netlifyConfig, build }) => {
    const { FOLDER_NAME } = netlifyConfig.build.environment;

    const { modifiedFiles, deletedFiles, createdFiles } = utils.git;

    const files = [...modifiedFiles, ...deletedFiles, ...createdFiles];

    if (!files.some((file) => file.startsWith(FOLDER_NAME))) {
      return build.cancelBuild('No change');
    }
  },
};
