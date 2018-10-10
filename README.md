# AudioClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# AudioClient is the client for the project AudioSever

## Check: Add Simulated data server

* https://angular.io/tutorial/toh-pt6#simulate-a-data-server
*how-to setup an memory-server for Angular 6.0*
* Run: ```npm install angular-in-memory-web-api --save```
* Add: Enable Http services: **Add to src/app/app.module.ts (In-memory Web API imports):** 
```
import { HttpClientModule} from '@angular/common/http' ;
```
* Add:
 ```
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
```
* Add (Order Counts):
```
HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
```
* Add: InMemoryDataService (shared/InMemoryDataSevice.ts)
```
ng g service shared/InMemoryData --dry-run
```
* Add: Interface Quiz
```
ng g interface interface/quiz --dry-run
```
* Dispay the data Add:
```
ng g c quiz/quiz-list --flat --dry-run
```
* Add routes to app-routing.module
* Test Run: " quiz-list works! "