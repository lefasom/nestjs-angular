import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Indica que este módulo es global, esto permite el uso de variables de entorno
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {

}
