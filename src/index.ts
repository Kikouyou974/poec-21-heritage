import { Voiture } from './voiture'
import { Camion } from './camion'
import { Article } from './Article'
import { Program } from './Program'

const voiture = new Voiture('A42VB', 1998, 1500)
const camion = new Camion('A42VB', 1995, 1700)

const produitVaisselle = new Article('prdtVaiss', 'produit vaisselle', 8, 100)
const chocolat = new Article('chclt', 'chocolat', 3, 45)
const serviette = new Article('srvt', 'seerviette', 5, 700)

const stock = new Program(produitVaisselle, chocolat, serviette)

console.log(chocolat.toString())

const foundChocolat = stock.findById('chclt')
console.log(foundChocolat.toString())

console.log(voiture, camion)
