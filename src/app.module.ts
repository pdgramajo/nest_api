import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DebtModule } from './debt/debt.module';

@Module({
  imports: [UserModule, DebtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
