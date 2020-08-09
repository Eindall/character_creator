import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/modals/confirm/confirm.component';

@Component({
  selector: 'app-sheet-details',
  templateUrl: './sheet-details.component.html',
  styleUrls: ['./sheet-details.component.scss']
})
export class NhSheetDetailsComponent implements OnInit {

  id: string;
  characterForm: FormGroup;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCharacter(this.route.snapshot.params['id']);
    this.characterForm = this.fb.group({
      game: 'naheulbeuk',
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
  }

  getCharacter(id): void {
    this.api.getCharacterById(id).subscribe(data => {
      this.id = data._id;
      this.characterForm.setValue({
        game: 'naheulbeuk',
        name: data.name ? data.name : null,
        gender: data.gender ? data.gender : null,
        lvl: data.lvl ? data.lvl : null,
        race: data.race ? data.race : null,
        class: data.class ? data.class : null,
        attributes: data.attributes ? data.attributes  : null,
        skills: [],
        spells: [],
        equipment: [],
        description: data.description ? data.description : null
      });
      if (data.skills) {
        data.skills.forEach((skill) => {
          const skills = this.characterForm.get('skills') as FormArray;
          skills.push(this.setSkill(skill));
        });
      }
      if (data.spells) {
        data.spells.forEach((spell) => {
          const spells = this.characterForm.get('spells') as FormArray;
          spells.push(this.setSpell(spell));
        });
      }
      if (data.equipment) {
        data.equipment.forEach((equip) => {
          const equipment = this.characterForm.get('equipment') as FormArray;
          equipment.push(this.setEquipment(equip));
        });
      }
    });
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

  setSkill(skill): FormGroup {
    return this.fb.group({
      name: [skill.name, Validators.required],
      desc: [skill.desc, Validators.required],
      usage: skill.usage ? skill.usage : '',
      catch_up: skill.catch_up ? skill.catch_up : '',
      requirements: skill.requirements ? skill.requirements : '',
      roleplay: skill.roleplay ? skill.roleplay : ''
    });
  }

  deleteSkill(index: number): void {
    const skills = this.characterForm.get('skills') as FormArray;
    skills.removeAt(index);
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

  setSpell(spell): FormGroup {
    return this.fb.group({
      name: [spell.name, Validators.required],
      desc: [spell.desc, Validators.required],
      casting_time: spell.casting_time ? spell.casting_time : '',
      cost: spell.cost ? spell.cost : '',
      test: spell.test ? spell.test : '',
      range: spell.range ? spell.range : '',
      word: spell.word ? spell.word : ''
    });
  }

  deleteSpell(index: number): void {
    const spells = this.characterForm.get('spells') as FormArray;
    spells.removeAt(index);
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

  setEquipment(equip): FormGroup {
    return this.fb.group({
      name: [equip.name, Validators.required],
      type: [equip.type, Validators.required],
      stats: equip.stats ? equip.stats : '',
      quantity: equip.quantity ? equip.quantity : ''
    })
  }

  deleteEquipment(index: number): void {
    const equipment = this.characterForm.get('equipment') as FormArray;
    equipment.removeAt(index);
  }

  updateCharacter(): void {
    this.api.updateCharacter(this.id, this.characterForm.value).subscribe(res => {
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
    });
  }

  deleteConfirmation(): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this character ?'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) this.deleteCharacter();
    });
  }

  deleteCharacter(): void {
    this.api.deleteCharacter(this.id).subscribe(res => {
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err);
    });
  }

}
