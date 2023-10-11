// let n = parseInt(prompt("Enter the number"));
let n = 153;

console.log("p for palindrome\na for armstrong");

// let choice = prompt("Enter the Choice");
let choice = 'a'

let num = n;
let sum = 0;
let temp;

switch (choice) {
  case "p":
    palindrome();
    break;
  case "a":
    if(armstrong(n)==num)
    {
      console.log("It is Armstrong");
    }
    else
    {
      console.log("It's not Armstrong")
    }
    break;
  default:
    console.log("aaeennnnnnn!!!!! Wrong Choice");
}

function palindrome() {
  while (n != 0) {
    temp = parseInt(n % 10);
    sum = sum * 10 + temp;
    n = parseInt(n / 10);
  }
  if (num == sum) {
    console.log("Yes it's palindrome");
  }
  else {
    console.log("no it's not palindrome");
  }

}

function armstrong(n){
  while(n != 0)
  {
    temp=parseInt(n%10);
    sum=sum + temp*temp*temp;
    n = parseInt(n/10);
  }
  return sum;
}