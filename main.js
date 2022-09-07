// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate(){
      const rand = Math.floor(Math.random() * this.dna.length);
      const base = this.dna.filter(base =>  (this.dna[rand] !== base))
      this.dna[rand] =  base[Math.floor(Math.random() * base.length)];
      return this.dna;
    },
    compareDNA(anotherDNA){
      const ex1 = this.dna;
      const ex2 = anotherDNA;
      let count = 0;
      for (let i=0; i < ex1.length; i++){
        for (let j=0; j < ex2.length; j++){
          if (ex1[i] === ex2[j] && i === j){
            count++;
          }
        }
      }
      count = (count/ex1.length) * 100;
      console.log(`ex1 = ${this.dna}`);
      console.log(`ex2 = ${anotherDNA}`);
      console.log(`specimen #${this.specimenNum} and specimen #${anotherDNA.specimenNum} have ${count}% DNA in common.`);
    },
    willLikelySurvive(){
      const CG = this.dna.filter(base => (base === 'C' || base === 'G'));
      const count = (CG.length / this.dna.length) * 100
      if (count >= 60){
        return true
      } 
      return false;
    }
  }
}


const pAequorSurv = [];

let idCounter = 1;
while (pAequorSurv.length <= 30){
  let newpAequor = pAequorFactory(idCounter, mockUpStrand());
  if (newpAequor.willLikelySurvive()){
    pAequorSurv.push(newpAequor);
  }
  idCounter++;
}

console.log(pAequorSurv);



