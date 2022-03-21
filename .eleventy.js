module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./dev/css");
    eleventyConfig.addWatchTarget("./dev/css");
    eleventyConfig.addPassthroughCopy("./dev/img");

    return {
        dir: {
            input:"dev",
            output:"public",
        },
    };
};