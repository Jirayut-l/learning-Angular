import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { reservedNameValidator } from '@shared/directives/reserved-name';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  heroDetails = new FormGroup({
    name: new FormControl('', reservedNameValidator()),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl('', Validators.required),
      eyes: new FormControl(''),
      hair: new FormControl(''),
    }),
    powers: new FormArray([]),
    lessons: new FormArray([]),
  });

  get powers(): FormArray {
    return this.heroDetails.controls['powers'] as FormArray;
  }

  get lessons(): FormArray {
    return this.heroDetails.controls['lessons'] as FormArray;
  }

  public addPower(): void {
    this.powers.push(new FormControl('', Validators.required));
  }

  public addLesson(): void {
    const lessonForm = new FormGroup({
      title: new FormControl('', Validators.required),
      level: new FormControl('beginner', Validators.required),
    });
    this.lessons.push(lessonForm);
  }

  public addHero(): void {
    this.heroDetails.setValue({
      name: 'Maleward',
      realName: 'Agavens Jenmar',
      biometricData: {
        age: 30,
        eyes: '#006400',
        hair: '#8b4513',
      },
      powers: [],
      lessons: [],
    });
  }

  public addBio(): void {
    this.heroDetails.patchValue({
      biometricData: {
        age: 35,
        hair: '#ff0000',
      },
    });
  }
}
