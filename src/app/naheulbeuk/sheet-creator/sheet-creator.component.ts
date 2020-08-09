import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet-creator',
  templateUrl: './sheet-creator.component.html',
  styleUrls: ['./sheet-creator.component.scss']
})
export class NhSheetCreatorComponent implements OnInit {

  characterForm = this.fb.group({
    game: ['naheulbeuk'],
    name: ['', Validators.required],
    gender: [''],
    lvl: [''],
    race: ['', Validators.required],
    class: [''],
    attributes: this.fb.group({
      courage: ['',Validators.required],
      intelligence: ['', Validators.required],
      charisma: ['', Validators.required],
      dexterity: ['', Validators.required],
      strengh: ['', Validators.required],
      ev: ['', Validators.required],
      ea: [''],
      destin: ['', Validators.required],
      attack: ['', Validators.required],
      parade: ['', Validators.required],
      magic_res: ['', Validators.required]
    }),
    skills: this.fb.array([]),
    spells: this.fb.array([]),
    equipment: this.fb.array([]),
    description: this.fb.group({
      eyes: [''],
      hair: [''],
      weight: [''],
      height: [''],
      age: [''],
      short_description: ['']
    })
  });

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createSkill(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      usage: '',
      catch_up: '',
      requirements: '',
      roleplay: ''
    });
  }

  addSkill(): void {
    const skills = this.characterForm.get('skills') as FormArray;
    skills.push(this.createSkill());
  }

  createSpell(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      casting_time: '',
      cost: '',
      test: '',
      range: '',
      word: ''
    });
  }

  addSpell(): void {
    const spells = this.characterForm.get('spells') as FormArray;
    spells.push(this.createSpell());
  }

  createEquipment(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      stats: '',
      quantity: ''
    })
  }

  addEquipment(): void {
    const equip = this.characterForm.get('equipment') as FormArray;
    equip.push(this.createEquipment());
  }

  onSubmit(): void {
    this.api.uploadCharacter(this.characterForm.value).subscribe(res => {
      const id = res['_id'];
      this.router.navigate(['/naheulbeuk/details', id]);
    }, (err) => {
      console.log(err);
    })
  }

}
