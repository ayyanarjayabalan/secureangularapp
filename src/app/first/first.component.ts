import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentCanDeactivate } from '../component-can-deactivate';
import { Observer, Observable, Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
@UntilDestroy()
export class FirstComponent implements OnInit, ComponentCanDeactivate {

  canDeactivate(): boolean {
    return !this.isDirty;
  }

  isDirty = false;

  subs: Subscription[] = [];

  observer = (obsr: Observer<number>) => {
    let i = 0;
    setInterval(() => {
      obsr.next(i++);
    }, 1000);
  }

  constructor() { }

  ngOnInit(): void {

    const obs = new Observable<number>(this.observer)

    const s1 = obs.
    pipe(untilDestroyed(this))
    .subscribe((data) => {
      console.log(data);
    });

    this.subs.push(s1);

  }

  // ngOnDestroy(): void {
  //   this.subs.forEach((sub) => {
  //     sub.unsubscribe();
  //   })
  // }


}
