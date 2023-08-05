const countAnimals = (animals,count) => count.map( animal =>
    animals.match(animal) ? animals.match(new RegExp(animal,`ig`)).length : 0 )