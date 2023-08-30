// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const lecture7Div=document.getElementById('Lecture7');
const lecture8Div=document.getElementById('Lecture8');
const lecture9Div=document.getElementById('Lecture9');
const lecture10Div=document.getElementById('Lecture10');
const lecture11Div=document.getElementById('Lecture11');
const lecture12Div=document.getElementById('Lecture12');
const lecture13Div=document.getElementById('Lecture13');
const lecture14iv=document.getElementById('Lecture14');
const lecture15Div=document.getElementById('Lecture15');
const lecture16Div=document.getElementById('Lecture16');

var firstName = 'Satyavrat';
var lastName = 'Jha';
var age, gender, birthMonth;
age=28;
gender='Male';
birthMonth='August';
appDiv.innerHTML = `<h1>JS Starter, <br />learning <br />`
+firstName+` `+lastName+`</h1>`+`<p>`+` `+age+` `+gender+` `+birthMonth+`</p>`;
lecture7Div.innerHTML=`<h2>Leture 7</h2> Two ways to write javascript code: <ul><li>Internal using script tag</li><li>external using script tag with src attribute</li></ul>`
lecture8Div.innerHTML=`<h2>Leture 8</h2> 
<p>In to order to make program understandable, we need to follow set of rules, which is called syntax. In Computer Science, the syntax of a computer language is the set of rules that defines the combinations of symbols that are considered to be a correctly standard document in that language.</p>
<p>So JavaScript Syntax is set of rules how JavaScript programs are constructed. We need to make sure that <em>grammer of code should be valid*</em> which is the main work of syntax parser, or JavaScript Engine. It checks the code character by character and <em> if something is wrong then it throws an error regarding.</em> </p>`
lecture9Div.innerHTML=`<h2>Leture 9</h2> 
<p>
<strong>Variable</strong> is a container for storing data values or information which we can use for multiple times and we can change it dynamically as well. 
</p>
<p>
In order to declare variables, we need to write <strong>var</strong> keyword, it tells the engine to reserve some memory in which to store data later. 
<br />
When we declare variable, JavaScript engine understands that it has to create memory space in which we can store the data.
</p>
<p>
In Programming languages like Java, C# or C++, which is known as strictly-typed language as we need to declare not only variable but also data type. 
<br />
However, JavaScript is weakly-typed or loosely-typed language and we don't need to limit ourself to what type of data the variable can hold. It means that JavaScript engine understands itself what type of data we are storing in the variable. 
</p>
`