import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'apaleo-node-serverless-boilerplate',
  frameworkVersion: '>=2',
  useDotenv: true,
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      external: ['@azure/abort-controller'],
    },
  },
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    lambdaHashingVersion: '20201221',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    reservations: {
      handler: 'src/functions/reservations.handler',
      events: [
        {
          http: {
            method: 'get',
            path: 'reservations',
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
