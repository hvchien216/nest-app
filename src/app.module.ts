import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { MyCustomConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MyCustomConfigModule.register({ folder: './config' }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ProductModule,
    ConfigModule,
  ],
})
export class AppModule {}
