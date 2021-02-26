const LOAD_DURATION = 1000;

interface UserDetails {
  name: string,
  email: string,
  tel: string,
  dateAndHour: string[],
}

class EventService {
  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }

  static async registerToEvent(userDetails: UserDetails): Promise<any> {
    await EventService.wait(LOAD_DURATION);
    return 201;
  }

  static async addToWaitList(userDetails: UserDetails, message): Promise<any> {
    await EventService.wait(LOAD_DURATION);
    console.log(message);
    return 200;
  }
}
export default EventService;
