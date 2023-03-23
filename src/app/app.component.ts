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
export class AppComponent implements AfterViewInit {
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
}
