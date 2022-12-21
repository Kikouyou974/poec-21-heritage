import { Vehicule } from './vehicule'

export class Camion extends Vehicule {
  constructor(matricule: string, annee: number, prix: number) {
    super(matricule, annee, prix)
  }

  accelerer() {
    console.log('Pouet pouet')
  }
  demarrer() {
    console.log('VROOOOOOM')
  }
}