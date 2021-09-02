# desumit/ngx-toggle-password

Install this package by using the command `npm i @desumit/ngx-toggle-password`

## Use

`import { NgxTogglePasswordModule } from '@desumit/ngx-toggle-password';`

Add the above line in your app.module.ts file.

Also add on imports array in app.module.ts file like this 

`imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTogglePasswordModule
  ],`
  
 Add styles in angular.json file like this :
 
 `"styles": [
              "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/@desumit/ngx-toggle-password/style.css",
              "src/styles.css"
            ],`
            
That's it. You are ready to use the package.

In your html file you can use this as :

`<input type="password" class="form-control" ngxTogglePassword placeholder="Password">`
