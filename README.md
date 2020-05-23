# Random Password Generator
## Description
This project uses several different functions within a JavaScript file to produce a randomly generated password based off of criteria
provided by the user. Once the generate password button is clicked the user is prompted to enter a password length between 8 and 128 characters. The user is then run through a series of confirm's to select whether or not they want to include uppercase letters, lowercase letters, numbers or special characters in their password.
## Process 
I was given an HTML and CSS starter file to work with. I began by creating the prompts and confirms that pop up once you click the generate password button. Then I created the if statements that will alert and stop the function if the password criteria is not met. Next, I created the functions that would randomly generate characters for the password. For these functions I used `String.fromCharCode` along with `Math.random` to randomly choose between the chosen character field (lowercase, uppercase, numbers, symbols). I then placed these functions into an Object to link them to their corresponding variables within the generate password function. In order to filter out the functions that were not needed I created an array with the `filter()` method. Lastly is the `for loop` to run the character functions through until the desired password length is met and the `getElementById` method that passes the final password into the password text area. 
## Link to the deployed application
https://demi0504.github.io/password-generator/
![image](https://user-images.githubusercontent.com/59584773/82737253-62661800-9cf5-11ea-8fb5-efa8e169d3e9.png)
