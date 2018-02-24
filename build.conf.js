/**
 *  This file contains all of the user settings for the gulp build process
 */
module.exports = {
    srcJs: ['src/services/*.service.js', 'src/*.module.js'],
    buildFolder: 'dist',
    buildJsFilename: 'mxng-api-service.js',
    banner: '/*!\n' +
        ' * See LICENSE in this repository for license information\n' +
        ' */\n',
    closureStart: '(function(){\n',
    closureEnd: '\n})();'
};