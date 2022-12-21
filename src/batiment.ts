export class Batiment {
    private adresse: string;
    
    constructor(str?: string) {    
        if (str)
        this.adresse = str
        else
        this.adresse = "Nul part"
    }

    /* Methods */

   
    public toString() {
        return "adresse "+this.adresse
    }


    /* Get / Set */
    public getAdresse(): string {
        return this.adresse;
    }

    public setAdresse(value: string) {
        this.adresse = value;
    }

  }