import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[]=["jhon mathew", 'E354',"jm@abc.net"];
  info2:string[]=["rob wilson", 'E678',"rb@abc.net"];
  info3:string[]=["rose adams", 'E987',"ra@abc.net"];

  getInfo1():string[]{
    return this.info1;
  }

  getInfo2():string[]{
    return this.info2;
  }

  getInfo3():string[]{
    return this.info3;
  }


  constructor() { }
}
