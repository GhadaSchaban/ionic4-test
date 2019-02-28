### Testing Ionic 4

#### Usage

>Assuming We use Debian Linux

- [Install/Update Nodejs Runtime and Node Package Manager](https://nodejs.org/en/download/)
- Install ionic globally (NEEDS SUDO)
```sh
sudo npm install -g ionic
```
- Clone this repo
```sh
clone git@github.com:mutasimissa/ionic4-test.git
```
- cd to project's directory (where package.json is placed)
- Install npm dependecies
```sh
npm install
```
- Test on your computer browser and AppDev app
```sh
ionic serve -c
```

#### Running Tests
TODO

#### Build for Production
##### PWA:

```sh
ionic build --prod
```
Currently We disable service worker from the production build or --prod will fail

##### Andriod:
TODO

#### References
> This project is me learning Ionic4, I used the following resources (Updated):

- [Ionic4 with API calls Tutorial](https://medium.freecodecamp.org/how-to-build-your-first-ionic-4-app-with-api-calls-f6ea747dc17a)
- [Angular router](https://angular.io/guide/router)
- [Angular Observables](https://angular.io/guide/observables)
- [MDN mixed content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
- [Angular Service workers docs](https://angular.io/guide/service-worker-getting-started)
- [Good tutorial on hosting Ionic PWA on firebase](https://www.joshmorony.com/hosting-an-ionic-pwa-with-firebase-hosting/)
- [How PWAs were done in ionic3 DEPRECATED in ionic4 see Stencil Below](https://blog.ionicframework.com/how-to-make-pwas-with-ionic/)
- [Saved Me lot of time understanding the environment changes while building Ionic for prod](https://www.joshmorony.com/production-development-environment-variables-in-ionic-angular/)
- [StencilJS -> If Cordova plugins are the native Mobile Interface of Ionic, then Stencil Components are the webview Interface of Ionic](https://stenciljs.com/)
- [Example Project: Ionic Conference App](https://github.com/ionic-team/ionic-conference-app)
- [Example project: Ionic Insta Music](https://github.com/jgw96/instamusic)
