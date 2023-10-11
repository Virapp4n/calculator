let a = 4;
let string = `Hello 
world ${a}` ;


function TaggedLiteral(str){
  console.log(str);
}

TaggedLiteral`hello world`;

let text = String.raw`Hello \n '''';;; ; ; ;: world`;

console.log(text)

