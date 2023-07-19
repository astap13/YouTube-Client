import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { addPersonalCard } from 'src/app/redux/actions/personal.actions';
import { AppState } from 'src/app/redux/state/app.state';

import { CardValidators } from './admin-page.validator';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  adminForm: FormGroup | undefined;

  ngOnInit() {
    this.adminForm = new FormGroup({
      title: new FormControl('', [Validators.required, CardValidators.title]),
      description: new FormControl('', [CardValidators.description]),
      linkImage: new FormControl('', [Validators.required, CardValidators.coverImage]),
      linkVideo: new FormControl('', [Validators.required, CardValidators.videoLink]),
      date: new FormControl('', [Validators.required, CardValidators.creationDate]),
    });
  }

  submit() {
    const payload = this.adminForm?.value;
    this.store.dispatch(addPersonalCard({ payload }));
    this.personalCards$.subscribe((personalCards) => {
      console.log(payload);
      console.log(personalCards);
    });
  }

  get personalCards$() {
    return this.store.pipe(select((state) => state.personalCards));
  }
}
