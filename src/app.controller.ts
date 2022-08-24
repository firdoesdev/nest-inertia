import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: any) {
    console.log(this.appService.getHello());
    //Routing Index page
    return request.Inertia.setStatusCode(200).render({
      component: 'index',
      props: {
        name: 'Muhammad Firdaus',
      },
    });
  }

  @Post('/home')
  postTest() {
    return 'Hallo';
  }
}
