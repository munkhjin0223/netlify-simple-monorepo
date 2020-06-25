require('dotenv').config();

module.exports = {
  onPreBuild: ({ utils, netlifyConfig }) => {
    const { build, git } = utils;
    const { FOLDER_NAME } = netlifyConfig.build.environment;

    const { modifiedFiles, deletedFiles, createdFiles } = git;

    const files = [...modifiedFiles, ...deletedFiles, ...createdFiles];

    console.log('files: ', files);
    console.log('FOLDER_NAME: ', FOLDER_NAME);

    if (!files.some((file) => file.startsWith(FOLDER_NAME))) {
      return build.cancelBuild('No change');
    }
  },
};
