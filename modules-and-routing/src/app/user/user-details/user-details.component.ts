// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { User } from 'src/app/types/user';

// @Component({
//   selector: 'app-user-details',
//   templateUrl: './user-details.component.html',
//   styleUrls: ['./user-details.component.css'],
// })
// export class UserDetailsComponent implements OnInit {
//   user: User;
//   constructor(private activeRout: ActivatedRoute) {
//     console.log(this.activeRout.snapshot.data['user']);
//     this.activeRout.params.subscribe((v) => console.log(v));
//   }

//   ngOnInit(): void {
//     this.user = this.activeRout.snapshot.data['user'];
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user?: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user']; // Можете да достъпите данните директно от route.data
  }
}
