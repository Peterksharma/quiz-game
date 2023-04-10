## Create the HTML structure:
Create a container for the quiz.
Add a title and description.
Add a start button.
Add a container for questions, which will be populated dynamically.
Add a container for the results, including a form for initials and a submit button.

## Create CSS styles:
Style the quiz container, title, description, buttons, and question container.
Add responsive design styles for different screen sizes.


## Create JavaScript functionality:
Create an array of objects containing questions, choices, and the correct answer.
Add an event listener for the start button to start the quiz.
Create a function to start the timer and display the first question.
Create a function to render questions and choices.
Add event listeners for each choice and determine if the answer is correct or incorrect.
If the answer is incorrect, subtract time from the timer.
Move on to the next question until all questions are answered or the timer reaches 0.
When the game is over, show the results container with a form for initials and a submit button.
Create a function to save the score and initials to local storage.
Add an event listener for the submit button to save the score and initials.


## Quiz Questions
<!-- What are the different data types present in javascript?
Explain Hoisting in javascript.
Why do we use the word “debugger” in javascript?
Difference between “ == “ and “ === “ operators.
Difference between var and let keyword in javascript.
Explain Implicit Type Coercion in javascript.
Is javascript a statically typed or a dynamically typed language?
What is NaN property in JavaScript?Explain passed by value and passed by reference.
What is an Immediately Invoked Function in JavaScript?
What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
Explain Higher Order Functions in javascript.
Explain “this” keyword.
What do you mean by Self Invoking Functions?
Explain call(), apply() and, bind() methods.
What is the difference between exec () and test () methods in javascript?
What is currying in JavaScript?
What are some advantages of using External JavaScript?
Explain Scope and Scope Chain in javascript.
Explain Closures in JavaScript.
Mention some advantages of javascript.
What are object prototypes?
What are callbacks?
What are the types of errors in javascript?
What is memoization?
What is recursion in a programming language?
What is the use of a constructor function in javascript?
What is DOM?
Which method is used to retrieve a character from a certain index?
What do you mean by BOM?
What is the distinction between client-side and server-side JavaScript?
What are arrow functions?
What do mean by prototype design pattern?
Differences between declaring variables using var, let and const.
What is the rest parameter and spread operator?
In JavaScript, how many different methods can you make an object?
What is the use of promises in javascript?
What are classes in javascript?
What are generator functions?
Explain WeakSet in javascript.
Why do we use callbacks?
Explain WeakMap in javascript.
What is Object Destructuring?
Difference between prototypal and classical inheritance
What is a Temporal Dead Zone?
What do you mean by JavaScript Design Patterns?
Is JavaScript a pass-by-reference or pass-by-value language?
Difference between Async/Await and Generators usage to achieve the same functionality.
What are the primitive data types in JavaScript?
What is the role of deferred scripts in JavaScript?
What has to be done in order to put Lexical Scoping into practice?
What is the purpose of the following JavaScript code?
Guess the outputs of the following codes:
Write a function that performs binary search on a sorted array.
Implement a function that returns an updated array with r right rotations on an array of integers a .
Write the code for dynamically inserting new components.
Write the code given If two strings are anagrams of one another, then return true.
Write the code to find the vowels
In JavaScript, how do you turn an Object into an Array []? -->

1. What are the different data types present in javascript?
2. Explain Hoisting in javascript.
3. Why do we use the word “debugger” in javascript?
4. Difference between “ == “ and “ === “ operators.
5. Difference between var and let keyword in javascript.
6. Explain Implicit Type Coercion in javascript.
7. Is javascript a statically typed or a dynamically typed language?
8. What is NaN property in JavaScript?
9. Explain passed by value and passed by reference.
10. What is an Immediately Invoked Function in JavaScript?
11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?
12. Explain Higher Order Functions in javascript.
13. Explain “this” keyword.
14. What do you mean by Self Invoking Functions?
15. Explain call(), apply() and, bind() methods.
16. What is the difference between exec () and test () methods in javascript?
17. What is currying in JavaScript?
18. What are some advantages of using External JavaScript?
19. Explain Scope and Scope Chain in javascript.
20. Explain Closures in JavaScript.
21. Mention some advantages of javascript.
22. What are object prototypes?
23. What are callbacks?
24. What are the types of errors in javascript?
25. What is memoization?
26. What is recursion in a programming language?
27. What is the use of a constructor function in javascript?
28. What is DOM?
29. Which method is used to retrieve a character from a certain index?
30. What do you mean by BOM?
31. What is the distinction between client-side and server-side JavaScript?
32. What are arrow functions?
33. What do mean by prototype design pattern?
34. Differences between declaring variables using var, let and const.
35. What is the rest parameter and spread operator?
36. In JavaScript, how many different methods can you make an object?
37. What is the use of promises in javascript?
38. What are classes in javascript?
39. What are generator functions?
40. Explain WeakSet in javascript.
41. Why do we use callbacks?
42. Explain WeakMap in javascript.
43. What is Object Destructuring?
44. Difference between prototypal and classical inheritance
45. What is a Temporal Dead Zone?
46. What do you mean by JavaScript Design Patterns?
47. Is JavaScript a pass-by-reference or pass-by-value language?
48. Difference between Async/Await and Generators usage to achieve the same functionality.
49. What are the primitive data types in JavaScript?
50. What is the role of deferred scripts in JavaScript?
51. What has to be done in order to put Lexical Scoping into practice?
52. What is the purpose of the following JavaScript code?
53. Guess the outputs of the following codes:
58. Write a function that performs binary search on a sorted array.
59. Implement a function that returns an updated array with r right rotations on an array of integers a .
60. Write the code for dynamically inserting new components.
61. Write the code given If two strings are anagrams of one another, then return true.
62. Write the code to find the vowels
63. In JavaScript, how do you turn an Object into an Array []?


## Credit

https://www.youtube.com/watch?v=riDzcEQbX6k&list=PLya1J2hePgsPfp-mQwsIt8Z5v-vQtjuPW&index=19&t=61s&ab_channel=WebDevSimplified