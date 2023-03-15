import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilename(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


function getEnvFilename() {
  return `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ``}`;
}
