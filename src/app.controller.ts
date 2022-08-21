import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: any) {
    return request.Inertia.setStatusCode(200).render({
      component: 'index',
      props: {
        name: 'Firdaus',
      },
    });
  }
}
