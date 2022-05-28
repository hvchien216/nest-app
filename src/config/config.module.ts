import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPTIONS } from './contants';

export interface MyCustomConfigModuleOptions {
  folder: string;
}

@Module({})
export class MyCustomConfigModule {
  static register(options: MyCustomConfigModuleOptions): DynamicModule {
    return {
      module: MyCustomConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
