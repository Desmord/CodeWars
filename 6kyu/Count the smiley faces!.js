const countSmileys = (arr) => arr.join(``).length < 2 ? 0 :
    Array.from(arr.join(``).matchAll(/([;:]{1}[-~]?[)D]{1})/gim)).length
