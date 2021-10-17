# MailMason

We want to keep things as simple as possible, thus we have deleted much of the original [mailmason](https://github.com/wildbit/mailmason) code and kept only what we're using directly.

You can find the entire code, including docs on GitHub: https://github.com/wildbit/mailmason

## Installation

You'll need to manually install `premailer` and `nokogirl` via Ruby. Have a look at the official [Getting Started guide](https://github.com/wildbit/mailmason/wiki/Getting-Started) for this.

## How To

MailMason gives us advanced development capabilities (via SCSS), thus we're using this to develop and preview our templates. We "deploy" them by pushing to our desired Postmark server.

### config.json

For this project to run it needs a `config.json` file. Have a look at `example_config.json` where you can see a more complete list of options, in case you want to configure it differently.

### secrets.json

Apart from the `config.json` mentioned above, you'll also need to create a `secrets.json` file where we'll add the Postmark API Token.

```json
{
  "postmark": {
    "server_token": "POSTMARK_API_TOKEN"
  }
}
```

This is needed for pushing the templates to the Postmark Server.

## Scripts

`yarn start` -> use this when developing templates. It will start a `watch` task that rebuilds them on every change and it will also open up the browser to the `previews.html` file.

`yarn build` -> builds the templates

`yarn deploy` -> builds & pushes templates to the Postmark Server. This needs the proper API_TOKEN in `secrets.json`

## Layouts and Templates

TODO: DOCUMENT THIS

## Styles

TODO: DOCUMENT THIS

<!-- MailMason has support for SCSS, and everything that comes with it.

At the moment have just one layout which in turn imports all the re-usable mixins. We have 3 main types of mixins:

1. Components (eg: `_call-to-action.scss`) -> where we'll have the styles specific to just one component
that may be reused among multiple templates

2. Generic styles (eg: `_common.scss`, `_typography.scss`) -> where we have default styles applicable to all templates

3. `_utilities.scss` -> a bunch of micro-classes copied from `Tailwind.css`. These are to be used when we want to make small modifications without inline-ing styles ourselves or creating aditional classes. -->
