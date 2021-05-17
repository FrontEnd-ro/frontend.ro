const LOAD_DURATION = 1000;

interface ResourceInfo {
  id: string;
  title: string;
  description: string;
  url: string;
  type: string;
  cover?: string;
}

class ResourceService {
  static wait(mili) {
    return new Promise((resolve) => setTimeout(resolve, mili));
  }

  static async addResource(info: ResourceInfo): Promise<any> {
    await ResourceService.wait(LOAD_DURATION);
    console.log(info);
    return 201;
  }
}
export default ResourceService;
