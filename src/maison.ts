import { Batiment } from "./batiment";

export class Maison extends Batiment{
    private nbPieces: number;
   
    
    
    constructor(ad: string, nbPièces : number)
    {
        super(ad)
        this.nbPieces = nbPièces
    }
    

    /* Methods */

    public toString() {
        return super.toString()+"nbPieces "+this.getNbPieces
    }


    /* Get / Set */
    public getNbPieces(): number {
        return this.nbPieces;
    }
    public setNbPieces(value: number) {
        this.nbPieces = value;
    }

  }