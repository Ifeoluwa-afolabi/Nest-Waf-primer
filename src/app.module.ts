import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';



@Module({
  imports: [StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
