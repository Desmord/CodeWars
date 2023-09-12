function filter_list(l) {
    return l.filter(l=>typeof l === `number`?true:false)
  }