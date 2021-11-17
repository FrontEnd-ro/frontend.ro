![frontend.ro social banner](https://frontend.ro/main-seo-image.jpg)

## FrontEnd.ro's open-source codebase and curriculum

[FrontEnd.ro](https://FrontEnd.ro) is an **open-source** & **community driven** initiative to teach FrontEnd development. Read more on the [website](https://FrontEnd.ro) and please share the news ^^^

<br />
<hr />

## Install & Run 

1. Install all the dependencies by running `yarn` in the root folder.
2. Create a `.env` file in root and add the following content

```
PORT=3300

# App environment
APP_ENV=development

# Aws
CLOUDFRONT_PUBLIC=https://d3tycb976jpudc.cloudfront.net

ENDPOINT=https://frontend-ro-dev.herokuapp.com/api
```

3. Run `yarn dev`. This will run the FrontEnd locally and connect you to the development server.
4. If you want to do server-side work you're gonna need to run the server and MongoDB on your local machine as well.  For this to happen you're gonna need to add the following variables inside `.env`:

```
# App environment
APP_ENV=development

# Auth
SALT_ROUNDS=
TOKEN_ALGORITHM=
TOKEN_SECRET=
DB_CONNECT=

# Aws
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET=
CLOUDFRONT_UPLOAD=

# Postmark
EMAIL_TOKEN=

ENDPOINT=https://frontend-ro-dev.herokuapp.com/api
```

Then run the local server using `yarn dev:local`. Get in touch with us for more details.

## Database Dump, Restore and Backup

To reduce costs we're currently doing manual dumps and backup of our MongoDB database.
## Dump & Restore

We're using the [MongoDB Database Tools](https://docs.mongodb.com/database-tools/), specifically [mongodump](https://docs.mongodb.com/database-tools/mongodump) and [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/).

We have 2 NPM scripts

```
yarn mongodump
yarn mongorestore
```

that we use for dump/restore. We "hook" into the same `.env` file to get the `DB_CONNECT` string and the `MONGODB_DUMP_DIR`.

> Both of them assume that MongoDB Tools is already installed. Have a look here for [instructions depending on your OS](https://docs.mongodb.com/database-tools/installation/installation/).

## Backup

For backup we're storing the dumps on AWS S3 by using the [AWS Cli v2](https://docs.aws.amazon.com/cli/).

We have an NPM script that reads from `.env` and calls a specific **cli command**.

```
yarn upload-mongodump-s3
```

> This doesn't work unless you're authenticated into AWS Cli with a pair Access key ID / Secret access key that has Write permission to our S3 bucket.


## Monaco Editor

NextJS is incompatible with the default way of loading monaco-editor (via Webpack and `monaco-editor-webpack-plugin`). It fails when monaco tries to load it's CSS from node_modules: https://nextjs.org/docs/messages/css-npm.

All solutions to this meant adding very custom code to our Webpack Config, which we worry it might break in the future or negatively interact with other packages. 

Thus, the solution we went for is to load `monaco-editor` from a CDN (cloudfront) with the `<script>` tag. We feel this "old-school" way is less error-prone than custom modifications to the webpack config. And, to get minimize manual work we created the `monacoEditorCDN.yml` GitHub action which will upload the files on every push (if they are not there).

## License

This project has a dual-licence split between the source code of the UI components used and the curriculum content.

The source code of the UI components is licensed under [MIT](https://github.com/FrontEnd-ro/frontend.ro/blob/master/LICENSE).

The curriculum belongs to our contributors and is licensed under [Attribution-ShareAlike 4.0 International](https://github.com/FrontEnd-ro/frontend.ro/blob/master/frontend-ssr/curriculum/LICENSE.md). You're free to use it if you're teaching these topics as long as you provide attribution to the writer/owner.

### Contributors

This project wouldn't be possible without our awesome contributors. Thank you >:D<

<table>
    <tr>
        <td align="center">
            <a href="https://iampava.com"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/iampava_2.jpg" width="120px;" alt="Alexandru Păvăloi"/><br /><sub><b>Alexandru Păvăloi</b></sub></a></td>
        <td align="center">
            <a href="https://github.com/andreeatoma"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/andreeatoma.jpg" width="120px;" alt="Diana Toma"/><br /><sub><b>Diana Toma</b></sub></a></td>
        <td align="center">
            <a href="https://github.com/catalinpopusoi">
                <img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/catalinpopusoi.jpg" width="120px;" alt="Cătălin Popușoi"/><br /><sub><b>Cătălin Popușoi</b></sub></a></td>
        <td align="center">
            <a href="https://github.com/MarianGeorgeMorosac">
                <img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/georgemarianmorosac.jpg" width="120px;" alt="Marian George Morosac"/><br /><sub><b>Marian Morosac</b></sub></a></td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/SirCQQ"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/cristiangatu.jpg" width="120px;" alt="Cristian Gațu"/><br /><sub><b>Cristian Gațu</b></sub></a></td>
        <td align="center">
            <a href="https://github.com/juppsy"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/juppsy.jpg" width="120px;" alt="Sebastian Latkolic"/><br /><sub><b>Sebastian Latkolic</b></sub></a></td>
        <td align="center">
            <a href="https://github.com/nmaties/"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/nmaties.jpg" width="120px;" alt="Nicolae Maties"/><br /><sub><b>Nicolae Matieș</b></sub></a></td>
        <td align="center">
            <a href="https://www.linkedin.com/in/danielhutanu22/"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/danielhutanu.jpg" width="120px;" alt="Ira Melnic"/><br /><sub><b>Daniel Huțanu</b></sub></a></td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/swarup4741"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/swarup4741.jpg" width="120px;" alt="Swarup Kumar Das"/><br /><sub><b>Swarup Kumar Das</b></sub></a></td>
        <td align="center">
            <a href="https://www.facebook.com/melnic.ira/"><img src="https://raw.githubusercontent.com/FrontEnd-ro/frontend.ro/master/client/public/images/contributors/iramelnic.jpg" width="120px;" alt="Ira Melnic"/><br /><sub><b>Ira Melnic</b></sub></a></td>
    </tr></table>

<br />

If you wanna **lend a helping hand**, get in touch with us and let's build this together!

<hr />

[Twitter](https://twitter.com/FrontEndRo) | [Facebook](https://facebook.com/FrontEndRo)