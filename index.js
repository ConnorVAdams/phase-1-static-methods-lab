class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(str) {
    const lowerWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'the', 'from'];
    const words = str.split(' ');
    
    const titleWords = []
    words.map((word, index) => {
    debugger
      if (index === 0) {
        titleWords.push(this.capitalize(word))
      } else if (lowerWords.includes(word.toLowerCase())) {
        titleWords.push(word)
      } else {
        titleWords.push(this.capitalize(word))
      }
    })

    return titleWords.join(' ')
  }
}
