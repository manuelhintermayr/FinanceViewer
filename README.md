# FinanceViewer

## Installation

- Adapt the configuration-file in config/configuration.php
- Remove web.config OR .htaccess file
- Install vue `npm i -g vue`
- Install vue-cli `npm install -g @vue/cli`
- Install nuxt `npm i -g nuxt`

## Update

- If you want to make some changes with the nuxt frontEnd, please build the project in the `nuxt-finance-viewer`-folder and insert the build project into the php files.
- Make changes to the front end in the `nuxt-finance-viewer`-folder (you need NodeJS for this)
- Run for the first time `npm install` inside the `nuxt-finance-viewer`-folder
- Start the frontEnd with `npm run dev` inside the `nuxt-finance-viewer`-folder
- Since PHP Sessions don't work site crossed you have to set the PHP Server url in the `nuxt.config.js`-file.
- For development set the `$inDev`-variable in `config/configuration.php` to `true`. (IMPORTANT: not leave that flag turned on in development)
- Inside `config/configuration.php` you can change `$devUsername` and `$devYear` to your prefered values.
  When `$inDev` is turned on, those two variables are used for the data from the database from the `dashboard` page. (please check your database configuration in `config/configuartion.php`. If you want a sample for a correct set up database see `config/financeviewer.sql`)

- Build the frontEnd with `npm run build` inside the `nuxt-finance-viewer`-folder:
  - The build content will appear in the `nuxt-finance-viewer\dist`-folder. Copy the content of the index.html-files in the correct php files:
    - `nuxt-finance-viewer\dist\index.html` into `index.php`
    - `nuxt-finance-viewer\dist\admin\index.html` into `admin\index.php`
    - `nuxt-finance-viewer\dist\dashboard\index.html` into `Dashboard\index.php`
  - Always insert autogenerated code between:
    - `//START INSERT GENERATED CODE HERE`
    - `//END INSERT GENERATED CODE HERE`
