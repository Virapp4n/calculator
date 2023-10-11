function getThe(idname) {
  return document.getElementById(idname).innerHTML;
}

function setThe(idname, val) {
  document.getElementById(idname).innerHTML = val;
}

let aaa = 2;

var a= new Array();
a = [1,2,3];


var b= new Array();
b=[4,5,6,7];

var c= new Array();
c= [8,9];

console.log(a.join('**'));


var priv = '';
var nums = new Array();
var signer = new Array();
let aflag = 0;
let dotflag = 0;
signer.push('0');
let disval = 0.0;


function digitIn(num) {
  dis = getThe('w-80');
  if(num == '.' && dotflag == 0)
  {
    priv = dis + '.';
    dotflag = 1;
    setThe('w-80', priv);
  }
  else if(num == '.' && dotflag == 1)
  {
    priv=dis;
    setThe('w-80', priv);
  }
  else{
    if (dis == '0' && (num == '0' || num == '00')) {
      priv = '';
      setThe('w-80', '0');   
    }
    else {
      priv += num;
      setThe('w-80', priv);
    }
    
  }
  aflag = 1;
}

function operate(sign) {
  setThe('w-20', sign);
  if (aflag == 1) {
    aflag = 2;
    dotflag=0;
    call_disval = pricalc();
    signer.push(sign);
    setThe('w-80', call_disval);
    priv = '';
  }
  else {
    signer.push(sign);
  }
  signer.shift();
}

function pricalc() {
  nums.push(parseFloat(getThe('w-80')));
  if (signer[signer.length - 1] == '+') {
    disval = disval + nums[nums.length - 1];
  }
  else if (signer[signer.length - 1] == '-') {
    disval = disval - nums[nums.length - 1];
  }
  else if (signer[signer.length - 1] == 'x') {
    disval = disval * nums[nums.length - 1];
  }
  else if (signer[signer.length - 1] == '/') {
    disval = disval / nums[nums.length - 1];
  }
  else {
    disval = nums[nums.length - 1];
  }
  return disval;
}

function equalTo() {
  setThe('w-20', '=');
  eqTo = pricalc();
  setThe('w-80', eqTo);
  aflag = 0;
  priv = ''
}

function reseter() {
  setThe('w-80', '0');
  setThe('w-20', '');
  nums = [];
  nums.push(0);
  signer = [];
  signer.push('0');
  disval = 0.0;
  priv = ''
  aflag = 0;
}

function backspacer() {
  if (aflag == 1) {
    disp = getThe('w-80');
    disp = disp.slice(0, -1);
    if (disp == '') {
      disp = '0';
      priv = '';
    }
    else {
      priv = ''
    }
    setThe('w-80', disp);
  }
  else if (aflag == 2) {
    setThe('w-20', '');
  }
}