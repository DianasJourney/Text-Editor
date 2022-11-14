## Text Editor

### Overview
Another text editor but with a twist! Text Editor is exactly what it sounds like, another editor but with this application you can edit while being connected to the internet or even offline with no internet! You can also install this application to your local machine. This application uses a registered service worker using workbox!

### Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [UserStory](#userstory)
- [AcceptanceCriteria](#acceptancecriteria)
- [Questions](#questions)
- [License](#license)


## Installation
Simply click the install button or use the editor on the webpage.

## Usage

Link to application:
https://text-editor-hero.herokuapp.com/



![demo](https://user-images.githubusercontent.com/109758045/201790941-ac32c3ed-1342-46c6-ade5-c96a6deb1f30.png)



## UserStory
---
- AS A developer
- I WANT to create notes or code snippets with or without an internet connection
- SO THAT I can reliably retrieve them for later use
---

## AcceptanceCriteria
```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Questions?
### Feel free to contact me
- Github: https://github.com/DianasJourney
- Email: diana.vu@hotmail.com

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

https://choosealicense.com/licenses/mit/