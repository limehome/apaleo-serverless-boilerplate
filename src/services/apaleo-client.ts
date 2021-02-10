import {
  ApaleoBookingAPI,
  ReservationModel,
} from '../generated/apaleo/booking/client';
import { ApaleoOauth } from './apaleo-oauth';

export class ApaleoClient {
  private baseUrl = 'https://api.apaleo.com';

  constructor(private apaleoOAuthService: ApaleoOauth = new ApaleoOauth()) {}

  async getReservation(id: string): Promise<ReservationModel> {
    const client: ApaleoBookingAPI = new ApaleoBookingAPI(
      this.apaleoOAuthService,
      this.baseUrl,
    );
    try {
      const reservation = await client.bookingReservationsByIdGet(id);
      return reservation;
    } catch (error) {
      console.log(error);
    }
  }
}
