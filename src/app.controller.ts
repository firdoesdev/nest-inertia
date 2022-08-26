import { Controller, Get, Post, Req, Body } from '@nestjs/common';
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
  postLogin() {
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

  @Get('/register')
  getRegister(@Req() request: any) {
    return request.Inertia.setStatusCode(200).render({
      component: 'register',
    });
  }

  @Post('/register')
  postRegister(@Req() request: any, @Body() body: any) {
    console.log(body);
    return request.Inertia.setStatusCode(200).render({
      component: 'register',
    });
  }

  @Post('/home')
  postTest() {
    return 'Hallo';
  }
}
