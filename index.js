/**
 * This module is used to load the base KSS builder class needed by this builder
 * and to define any custom CLI options or extend any base class methods.
 *
 * Note: since this builder wants to extend the KssBuilderBaseTwig class, it
 * must export a KssBuilderBaseTwig sub-class as a module. Otherwise, kss-node
 * will assume the builder wants to use the KssBuilderBaseHandlebars class.
 *
 * This file’s name should follow standard node.js require() conventions. It
 * should either be named index.js or have its name set in the “main” property
 * of the builder’s package.json. See
 * http://nodejs.org/api/modules.html#modules_folders_as_modules
 *
 * @module kss/builder/twig
 */
const path = require('path')

// We want to extend kss-node’s Twig builder so we can add options that
// are used in our templates.
// This module is not resolved because it’s a peerDependency.
const KssBuilderBaseTwig = require('kss/builder/base/twig') // eslint-disable-line import/no-unresolved

/**
 * A kss-node builder that takes input files and builds a style guide using Twig
 * templates.
 */
class KssBuilderTwig extends KssBuilderBaseTwig {
  /**
   * Create a builder object.
   */
  constructor() {
    // First call the constructor of KssBuilderBaseTwig.
    super()

    // Then tell kss which Yargs-like options this builder adds.
    this.addOptionDefinitions({
      title: {
        group: 'Style guide:',
        string: true,
        multiple: false,
        describe: 'Title of the style guide',
        default: 'KSS Style Guide',
      },
      svg: {
        group: 'File locations:',
        string: true,
        path: true,
        describe: 'Location of svg symbols pack to include in template',
      },
    })
  }

  prepareExtend(templateEngine) {
    this.options.extend.push(path.resolve(__dirname, 'extend'))

    return super.prepareExtend(templateEngine)
  }

  normalizeOptions(keys) {
    if (this.options.custom) {
      this.options.custom = Array.from(new Set(this.options.custom.concat([
        'colors',
        'symbols',
      ])))
    }

    return super.normalizeOptions(keys)
  }
}

module.exports = KssBuilderTwig
