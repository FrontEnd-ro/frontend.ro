import HttpService from '../Http.service';

interface RegisterToEventPayload {
  name: string;
  tel: string;
  email: string;
}

interface SeatsInfo {
  id: string;
  free: number;
  total: number;
}

class EventService {
  static async getSeatsInfo(id: string): Promise<SeatsInfo> {
    const resp = await HttpService.get(`${process.env.ENDPOINT}/events/${id}/seats`);
    const jsonResp = await resp.json();

    return jsonResp;
  }

  static async register(id, payload: RegisterToEventPayload): Promise<void> {
    await HttpService.post(`${process.env.ENDPOINT}/events/${id}/register`, payload);
  }

  static async addToWaitlist(id, payload: RegisterToEventPayload): Promise<void> {
    await HttpService.post(`${process.env.ENDPOINT}/events/${id}/waitlist`, payload);
  }
}
export default EventService;
