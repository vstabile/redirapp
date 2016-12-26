# REDIRAPP

"Serverless" application to redirect visitors to mobile app stores based on their OS using AWS Lambda and API Gateway

## Setup

Install [Claudia.js](https://claudiajs.com) as a global NPM utility:

```shell
npm install claudia -g
```

Install npm dependencies:

```shell
npm install
```

Insert your store links in the `config.js` file.

## Deploy

Just use the command:

```shell
claudia create --region us-east-1 --api-module redirapp
```

You will get a result similar to:

```json
{
  "lambda": {
    "role": "test-executor",
    "name": "test",
    "region": "us-east-1"
  },
  "api": {
    "id": "8x7uh8ho5k",
    "module": "app",
    "url": "https://8x7uh8ho5k.execute-api.us-east-1.amazonaws.com/latest"
  }
}
```

Your app link will be the value with the key `url`. Done!

## License

MIT
