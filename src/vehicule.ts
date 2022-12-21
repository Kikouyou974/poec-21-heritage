export abstract class Vehicule {
  private matricule: string
  private annee: number
  private prix: number

  constructor(matricule: string, annee: number, prix: number) {
    this.matricule = matricule
    this.annee = annee
    this.prix = prix
  }

  public getMatricule() {
    return this.matricule
  }

  public setMatricule(matricule: string) {
    this.matricule = matricule
  }

  public getAnnee() {
    return this.annee
  }

  public setAnnee(annee: number) {
    this.annee = annee
  }

  public getPrix() {
    return this.prix
  }

  public setPrix(prix: number) {
    this.prix = prix
  }

  abstract accelerer(): void

  abstract demarrer(): void

  public toString() {
    return `Le véhicule de matricule ${this.matricule} datant de ${this.annee} coûte actuellement ${this.prix}`
  }
}