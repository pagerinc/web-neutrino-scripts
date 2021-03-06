const merge = require('deepmerge');
const { IgnorePlugin } = require('webpack');

module.exports = (neutrino, opts = {}) => {
  const options = merge({ pager: { removeMomentLocale: true } }, opts);

  if (options.pager.removeMomentLocale) {
    neutrino.config
      .plugin('pagerMomentLocale')
      .use(IgnorePlugin)
      .init(Plugin => new Plugin(/^\.\/locale$/, /moment$/));
  }
};
