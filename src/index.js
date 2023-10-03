import { counterCharFromNames } from './services/helpers.js';

counterCharFromNames('location', 'l').then((result) => console.log(result));
counterCharFromNames('character', 'c').then((result) => console.log(result));
counterCharFromNames('episode', 'e').then((result) => console.log(result));
