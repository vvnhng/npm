const PackageUrlCmd = require('../package-url-cmd.js')

class Bugs extends PackageUrlCmd {
  static description = 'Report bugs for a package in a web browser'
  static name = 'bugs'

  getUrl(spec, mani) {
  if (mani.bugs) {
    if (typeof mani.bugs === 'string') {
      return mani.bugs;
    }

    if (typeof mani.bugs === 'object') {
      if (mani.bugs.url) {
        return mani.bugs.url;
      } else if (mani.bugs.email) {
        return `mailto:${mani.bugs.email}`;
      }
    }
  }

  const info = this.hostedFromMani(mani);

  if (info && typeof info.bugs === 'function') {
    return info.bugs();
  }
  return `https://www.npmjs.com/package/${mani.name}`;
}
}

module.exports = Bugs
