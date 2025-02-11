# lumusitech Company libraries (monorepo)

This monorepo was initialized using the following command:

```bash
ng new lumusitech-workspace --no-create-application
```

---

Each library was generated using the following command within the workspace:

```bash
cd lumusitech-workspace
ng generate library library-name
```

---

Build, test, and lint the project with CLI commands:

```bash
ng build library-name --configuration development
ng test library-name
ng lint library-name
```

---

Remember run `ng build ngx-lumusitech-side-menu --configuration development` for refresh changes in development.

---

Publish: Use the Angular CLI and the npm package manager to build and publish your library as an npm package.
You should always build libraries for distribution using the production configuration. This ensures that generated output uses the appropriate optimizations and the correct package format for npm.

```bash
ng build library-name
cd dist/library-name
pnpm publish
```

for more info visit this [link](https://angular.dev/tools/libraries/creating-libraries).

---

## Workspace content

1. Side menu library

   This library was created to facilitate the reuse of a side menu as an Angular component.

2. This application serves as a testbed for our side menu library before its publication on npm.
   Remember that in order to import a library from this monorepo into the tested application that tests them, you must ensure that in each library, what is to be shared is exported externally. This is done in the library-name/src/public-api.ts file.

3. Other library...

4. Other library...

---

## Tips

1. Error linting after install eslint for angular with `ng add angular-eslint`

   ```bash
   ng lint ngx-lumusitech-side-menu
   Error: Could not find the '@angular-eslint/builder:lint' builder's node package.
   ```

   Solution:

   ```bash
   pnpm add -D @angular-eslint/builder
   ```

   If error persists after run `ng add angular-eslint` with the next output:

   ```bash
   ng lint ngx-lumusitech-side-menu

   Linting "ngx-lumusitech-side-menu"...

   An unhandled exception occurred: Cannot find module '@eslint/js'

   Require stack:

   - /Users/lucianofigueroa/dev/frontend/angular/fherrera/pro/lumusitech-workspace/eslint.config.js

   - /Users/lucianofigueroa/dev/frontend/angular/fherrera/pro/lumusitech-workspace/projects/ngx-lumusitech-side-menu/eslint.config.js

   See "/private/var/folders/g3/hmgkb255537_gz6jv329z7k40000gn/T/ng-XASENy/angular-errors.log" for further details.
   ```

   Solution:

   ```bash
   pnpm add -D @eslint/js
   ```
