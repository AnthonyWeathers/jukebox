# Jukebox
First small project utilizing React so started with a simple idea, but used ChatGPT to help me setup the html for the React Player component. Initially used the Create React App installation to get me started on the setup, but dumbed it down and removed the extra parts that were not relevant to the idea.

## Technologies used:
* Javascript (React)
* HTML, CSS

## Instructions on how to run a cloned repo
If a user wishes to try this app out on their own device, then there is some requirements needed to run this as I did, or equivalents:
* Programs used (may use equivalents if similar):
    * Visual Studio Code
    * Git

* Steps to install:
    * clone repo: git clone {insert github repo link of project}
    * at the root of the directory (where you'd see the public, src, and other files), open terminal (I used a Git Bash terminal) and run npm install (as it would auto install all packages inside the package.json)

* To Setup and Run App:
    * Assuming you did the installation steps one section above, all you'd need to do is, on the terminal you have open, run "npm start" then the program would start up the webpage and open it on your browser, letting you get to use it. 
    * In the App.js, there's a songs variable, so you can modify the list and change them with your own preferred songs via their url (I used YouTube urls), you'd need to change the title of the respective song to match the song's name that you're adding so you can find it on the actual app. You can also add or remove songs and the app will still work as intended but using less than 3 will result in a song filling in multiple rows but no errors.