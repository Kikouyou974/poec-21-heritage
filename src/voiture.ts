import { Vehicule } from './vehicule'

export class Voiture extends Vehicule {
  constructor(matricule: string, annee: number, prix: number) {
    super(matricule, annee, prix)
  }

  accelerer() {
    console.log('Brrrrrrrrrrrr')
  }
  demarrer() {
    console.log('Vroum vroum')
  }
}