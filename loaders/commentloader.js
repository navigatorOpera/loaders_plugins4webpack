const loaderUtil = require('loader-utils');
module.exports = function(source, sourceMap, metaData) {
    let pattern = /console\.log\(\n*.*\n*\);?/gm;
    let arr = null,
        result = [];
    while ((arr = pattern.exec(source)) !== null) {
        let startIndex = arr.index;
        let len = arr[0].length;
        result.push({ startIndex, len });
    }
    let split_source = source.split('');
    let indentLen = 0;
    result.map(({ startIndex, len }, index) => {
        if (index === 0) {
            split_source.splice(startIndex, len);
        } else {
            split_source.splice(startIndex - indentLen, len);
        }
        indentLen += len;
    });
    source = split_source.join('');
    return source;
};
