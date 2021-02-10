import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { ApaleoClient } from '../services/apaleo-client';

const apaleoClientService = new ApaleoClient();

export const handler: APIGatewayProxyHandler = async (event) => {
  // 1. Get a token
  // 2. Get the reservation from Apaleo
  // 3. Return the reservation
  const reservation = await apaleoClientService.getReservation('XYZ-123');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Your function executed successfully!',
        data: reservation,
      },
      null,
      2,
    ),
  };
};
