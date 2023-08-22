# ComponentArticlesAppLab

# Angular Components Lab - Articles

This repository contains an Angular application that demonstrates the creation of articles with descriptions and images. It consists of several components and models to manage and display article data.

## Getting Started

Follow these steps to set up and run the Angular app locally:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run the following commands:

```bash
npm install     # Install project dependencies
ng serve --open # Build and start the app, opens in your default browser
```

Instructions

1. Create Angular App

Generate a new Angular app using the following command:

```bash
ng new articles-app
```

Change the title of your site to "Article Site" in src/app/app.component.ts:

    title = 'Article Site';

Replace the HTML content in src/app/app.component.html with the following:

    <div style="text-align:center">
    <h1>
        Welcome to {{title}}!
    </h1>
    </div>

Modify the header CSS in src/app/app.component.css:

    @import url('https://fonts.googleapis.com/css?family=Raleway');
    h1 {
    margin: -10px -8px;
    padding: 15px 10px 15px 10px;
    background: #616192;
    color: white;
    font-family: 'Raleway', sans-serif;
    }

Start the app with the command:

    ng serve --open

2. Create Article Model

Create an article model class to hold the information. Inside the src/app/models folder, create a file named article.model.ts:

    export class Article {
    title: string;
    description: string;
    author: string;
    imageUrl: string;
    }

3. Create Article Data

Generate a seed file to hold dummy data that will be displayed later. Inside the src/app/data folder, create a file named seed.ts:

    const data = [
    {
    title: 'Article 1',
    description: 'LongDesc 1 ...', // Long description here
    author: 'Author 1',
    imageUrl: '...'
    },
    // Add more articles
    ];

    export { data };

Create a service to provide this data. Inside the src/app/data folder, create a file named data.service.ts:

    import { Injectable } from '@angular/core';
    import { Article } from '../models/article.model';
    import { data } from './seed';

    @Injectable({
    providedIn: 'root'
    })
    export class DataService {
    getData(): Article[] {
    return data.map(item => ({ ...item }));
    }
    }

4. Create Article Component

Generate an article component using the command:

    ng generate component article

Replace the contents of src/app/article/article.component.css with the provided CSS.

Create the HTML markup in src/app/article/article.component.html as provided.

Implement the logic inside src/app/article/article.component.ts as described.

5. Create Articles Component

Generate an articles component using the command:

    ng generate component articles

Replace the contents of src/app/articles/articles.component.css with the provided CSS.

Implement the logic inside src/app/articles/articles.component.ts as described.

Create the HTML markup in src/app/articles/articles.component.html as provided. 6. Test the Application

After completing all the steps and implementing the necessary logic, you can run your Angular app and test its functionality. It should display a list of articles with descriptions and images. You can show/hide descriptions and images using the provided buttons.

Have fun experimenting and exploring Angular components!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
