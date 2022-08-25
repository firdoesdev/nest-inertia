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

  @Post('/verified')
  postTest() {
    return `User's login is verified`;
  }

  @Get('/login')
  getLogin(@Req() request: any) {
    console.log(this.appService.getLogin());
    //Routing Login page
    return request.Inertia.setStatusCode(200).render({
      component: 'Login',
    });
  }
}
