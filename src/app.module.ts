import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { MyCustomConfigModule } from './config/config.module';
import { OrdersModule } from './orders/orders.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UploadModule } from './upload/upload.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MyCustomConfigModule.register({ folder: './config' }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    ProductModule,
    ConfigModule,
    OrdersModule,
    UploadModule,
  ],
})
export class AppModule {}
