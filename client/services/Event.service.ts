const LOAD_DURATION = 1000;

interface RegisterToEventPayload {
  name: string,
  email: string,
  tel: string,
  timestamp: number;
}

class EventService {
  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }

  static async registerToEvent(paylooad: RegisterToEventPayload): Promise<any> {
    await EventService.wait(LOAD_DURATION);
    return 200;
  }

  static async addToWaitList(payload: RegisterToEventPayload): Promise<any> {
    await EventService.wait(LOAD_DURATION);
    return 200;
  }
}
export default EventService;
