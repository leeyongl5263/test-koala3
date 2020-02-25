module.exports = function BabelConfigJS(api) {
    api.cache(true);

    const presets = ["@babel/preset-env", "@babel/preset-react"];

    const plugins = [
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        'babel-plugin-styled-components'
    ];

    return {
        sourceType: "unambiguous",
        presets,
        plugins,
    };
};
