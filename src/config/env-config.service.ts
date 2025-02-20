import { config } from 'dotenv';
config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value as string;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((key) => this.getValue(key, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  //   public getOrigin(){

  //   }

  public getTypeOrmConfig() {
    return {
      host:this.getValue('POSTGRES_HOST') ,
      port:  parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      ssl: Boolean(this.isProduction()),
      synchronize: !Boolean(this.isProduction()),
    };
  }
}

const envConfigService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
  'POSTGRES_SUNCHRONIZE',
  'ALLOW_ORIGINS',
  'MODE',
]);

// console.log("env service: ",envConfigService)

export { envConfigService };
