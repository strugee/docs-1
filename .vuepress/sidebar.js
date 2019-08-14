module.exports = [
  {
    title: 'Installing Pixelfed',
    collapsable: false,
    children: prefix('installing-pixelfed', [
      'prerequisites',
      'installation',
      'postinstall',
      ]),
  },
  {
    title: 'Running Pixelfed',
    collapsable: false,
    children: prefix('running-pixelfed', [
      'administration',
      ]),
  },
  {
    title: 'Technical documentation',
    collapsable: false,
    children: prefix('technical-documentation', [
      'api',
      'env',
      ]),
  },
  {
    title: 'Distro-specific Guides',
    collapsable: true,
    children: prefix('installing-pixelfed/guides', [
      'arch',
    ]),
  },

]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
