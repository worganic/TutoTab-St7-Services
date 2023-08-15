# WorganicTabV1 / v7 : Service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Development server json

Run `json-server --watch db.json` for a dev server. Navigate to `http://localhost:3000/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get clone 
> https://github.com/worganic/TutoTab-St7-create.git
> npm install
> cd .\worganic-tab-v1\
> ng serve

## Project :
v7 : Mise en place du service.

    - Création de l'interface users :
        \src\app\shared\interface\users.ts
    - Création du service
        ~ ng g s services/users
    - Récupération du service dans la page users
    - Création du components user :
        ~ ng g c component/users --skip-import
    - On modifi le component au format standalone.
        \src\app\component\users\users.component.ts
    - Ajout au routing :
        \src\main.ts
    - Ajout dans le menu :
        \src\app\app.component.html
    - Récvupération du service dans le component users.component.ts
       \src\app\component\users\users.component.ts
    - Affichage des données sur la page html avec un ngFor
        \src\app\component\users\users.component.html
    
## Infos plus :
   
## Update

## Historique :
Avant -> v6 - Création d'un jsonServer pour les datas test :
Après -> v8 : Mise en place du cache.

## Ressource :
    - Services :
    https://angular.io/tutorial/tour-of-heroes/toh-pt4

## Abouts
created by Johann Loreau
create at 2023/07/29
Le project évolura suivant les remarques et conseils des visiteurs.