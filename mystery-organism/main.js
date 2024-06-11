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

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let index = Math.floor(Math.random() * (this.dna.length));
      let base = returnRandBase();
      while(this.dna[index] != base){
        this.dna[index] = base;
        return this.dna;
      }
    },
    compareDNA(pAequor) {
      let count = 0;
      for(let i=0; i<this.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]){
          count++;
        }
      }
      let perc = Math.floor(count / this.dna.length * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${perc}% DNA in common.`);
    },
    willLikelySurvive() {
      let count = 0;
      this.dna.forEach((element) => {
        if(element === "C" || element === "G"){
          count++;
        }
      });
      let perc = Math.floor(count / this.dna.length * 100);
      return perc >= 60 ? true : false;
    }
  }
}

// function that creates a determined number of object instances and stores them in an array
const pAequorMultiplier = total => {
  let array = [];
  for(let i = 1; i <= total; i++){
    array.push(pAequorFactory(i, mockUpStrand()));
  }
  return array;
}

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());

const mutatedDNA = pAequor1.mutate();

const researchArray = pAequorMultiplier(30);
console.log(researchArray);














