## serverless-typescript-apaleo

A starter kit for a serverless apaleo client gently offer by [limehome-engineering](https://medium.com/limehome-engineering) 🙌 ✌️.

### Serverless setup via NPM

Note: If you don’t already have Node on your machine, you’ll need to install it first. We suggest using the latest LTS version of NodeJS.

Install the [serverless](https://www.serverless.com/framework/docs/getting-started/) CLI:

1. `npm install serverless -g`

### Quickstart

1. Run `npm install`
2. Create an `.env` file based on `.env.example`
3. Run `npm run local`

### Deploy on AWS

1. Read about [serverless & AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/)
2. Run `npm run serverless -- deploy --stage={stage to deploy for}` to deploy on AWS

### Contribution

Feel free to open an issue if you found any error or to create a pull request if want to add additional content.