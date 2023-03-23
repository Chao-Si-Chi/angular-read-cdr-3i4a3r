import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { HelloComponent } from './hello.component';
import { Service } from './service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  age = 40;
  address = '台中市';

  user = {
    name: 'Angular ', 
    age:40, 
    address: '台中市'
  }

  numArr = [1, 2, 3, 4, 5, 6, 7];

  constructor(){
    this.user.name = 'NGClass';
    
    //numArr陣列每一個值*2
    this.numArr.filter(x => x *= 2);

    //取得numArr陣列中的偶數
    //方法一使用filter效能好
    let newArr = this.numArr.filter(x => x % 2 === 0);
    //方法二同樣寫法效能差
    for(var i = 0; i < this.numArr.length; i++){
      if(this.numArr[i] % 2 === 0){
        //偶數塞入另一陣列
      }
    }
  }
}
/*export class AppComponent implements AfterViewInit {
  name = 'Angular';

  @ViewChild(HelloComponent, { static: true })
  readonly helloComponent?: HelloComponent;

  @ViewChild(HelloComponent, { static: true, read: ElementRef })
  readonly helloElement?: ElementRef;

  @ViewChild(HelloComponent, { static: true, read: Service })
  readonly helloService?: Service;

  @ViewChild(HelloComponent, { static: true, read: ChangeDetectorRef })
  readonly helloCdr?: ChangeDetectorRef;

  ngAfterViewInit() {
    console.log('component ', this.helloComponent);
    console.log('element ', this.helloElement);
    console.log('service ', this.helloService);
    console.log('cdr ', this.helloCdr);
  }
}*/
