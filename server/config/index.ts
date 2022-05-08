import appConfig from './config';

interface AppConfig {
  AUTH: {
    secret: string;
    rounds: number;
    algorithm: string;
  },
  APP: {
    port: number;
    language: "ro" | "en";
    endpoint: string;
    app_url: string;
    default_port: number;
    env: 'development' | 'production';
  },
  DB: {
    connect: string;
    dump_dir: string;
  },
  CDN: {
    static: string;
    user_generated: string;
  },
  PASS_RESET_CODE: {
    length: number;
    offset: number;
    expiration: number;
  },
  AWS: {
    s3: string;
    bucket: string;
    region: string;
  },
  EMAIL: {
    token: string;
  },
  GITHUB: {
    id: string;
    secret: string;
  }
}


const typedAppConfig: AppConfig = appConfig;

export default typedAppConfig;
