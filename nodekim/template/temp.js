const template = (header, section, footer) => {
  // header = <!DOCTYPE> ~ <body> start
  // footer = <script> ~ <body>&<html> end
    return `
    ${header}
    ${section}
    ${footer}
    <script src="/contents.js"></script>
    `
}

module.exports = template;