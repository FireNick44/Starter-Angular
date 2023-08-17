
## xyz.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter';
}
```

### creation

create:
```
ng generate component xyz
```
short form:
```
ng g c xyz
```
with parameters:
```
ng generate component xyz  --standalone --inline-template --skip-tests
```

### @Component

| Property      | Description                                                                                      | Required |
|---------------|--------------------------------------------------------------------------------------------------|:--------:|
| `selector`    | Custom HTML element selector for the component.<br/> ```<body><app-root>...</app-root></body>``` |   Yes    |
| `templateUrl` | Path to an external HTML template file.                                                          |    No    |
| `template`    | Inline template string for the view.                                                             |    No    |
| `styleUrls`   | Array of paths to external stylesheets.                                                          |    No    |
| `styles`      | Inline styles for the view.                                                                      |    No    |
| `imports`     | Importing Components                                                                             |          |
| `animations`  | Array of animation definitions.                                                                  |    No    |

<br/>

#### Example 1:

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
```

#### Example 2:

```js
@Component({
  selector: 'app-my-inline-component',
  template: `
    <div>
      <p>This is my inline HTML.</p>
    </div>
  `,
  styles: [`
    p {
      color: blue;
      font-size: 18px;
    }
  `]
})
```

### export class

#### Example 1:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-example',
  template: `
    <div>
      <h2>{{ message }}</h2>
      <h3>Names List</h3>
      <ul>
        <li *ngFor="let name of names">{{ name }}</li>
      </ul>
    </div>
  `
})
export class DataComponent {
  message: string = 'XYZ Title';
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
}

```

#### Example 2:

```js
import { Component, Input } from '@angular/core';

/*...*/

export class ChildComponent {
  @Input() inputData: string;
}

```

```html
<app-child [inputData]="parentData"></app-child>
```

#### Example 3:

```js
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*...*/

export class ApiComponent implements OnInit {
  responseData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      this.responseData = data; //JSON response
    });
  }
}
```
