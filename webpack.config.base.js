

const path = require('path');
module.exports =  {
    mode: 'development',
    entry: path.resolve('./', 'index.js'),
    output: {
        filename: '[name]_build.js',
    },
    module:{
        noParse: /jquery|lodash/,
        rules: [
            {
                test: /.js/,
                use:[
                    {
                        loader: './loaders/dislodgecomment',
                        options: {
                            // ignore: //
                            test: 'test'
                        }
                    }
                ]
            }
        ]
    },
    watch: true,
    watchOptions:{
        aggregateTimeout: 300,
        poll: 1000
    }
}