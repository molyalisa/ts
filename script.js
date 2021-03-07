const message = document.getElementById("message");
const randomPhrasesAndPictures = document.getElementById("PhrasesAndPictures")
const images = document.getElementsByTagName("img");
const phrase = document.getElementsByTagName("phrase");

let messageWords = [] 
let theMostFrequentWord; 
let numberOfWordsInTheMessage = 0; 

function findMostFrequent(arr) {
  let compare = "";
  let mostFreq = ""; 
  arr.reduce((acc, val) =>{
    if(val in acc){               
       acc[val]++;               
    }else{
       acc[val] = 1;      
    }
    if(acc[val] > compare){  
       compare = acc[val];   
       mostFreq = val;      
    }
    return acc;
  }, {})
console.log(`The most frequent word of the message is "${theMostFrequentWord}"`) 

function numberOfElementsInTheArray() {
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
        for (var j=i; j<arr1.length; j++)
        {
            if (arr1[i] == arr1[j])
            m++;
            if (mf<m)
            {
            mf=m; 
            item = arr1[i];
            }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`) 
 

function randomPhrasesAndPictures() 
{
   var PhrasesAndPicturesArray= [
   { 
     phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey", 
     src: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE",
     width: "400",
     height: "280"
   }, 
   { 
     phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore", 
     src: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg",
     width: "400",
     height: "280"
   }, 
   {
     phrase: "You are a wizard, Harry (c) Hagrid", 
     src: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg",
     width: "400",
     height: "280"
   }
  ]
    var arrayLength = PhrasesAndPicturesArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new PhrasesAndPicturesArray ();
        newArray[i].phrase = phrasesArray[i].text;
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }
    function getRandomNum(min, max) 
    {
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
} 
  var newImage = getRandomNum(0, newArray.length - 1);
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++){
     images[0].parentNode.removeChild(images[0]);
  document.body.appendChild(newImage);
}
