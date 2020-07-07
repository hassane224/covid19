import { Component, OnInit } from '@angular/core';
import { ThedataService } from '../thedata.service';
@Component({
  selector: 'app-pays',
  template: `<div>
              <!--
               navbar
               -->
                <div class="nav pl-4 pt-4 pb-4"><h3  class="titre"> Simple Covid 19 Tracker</h3></div>
                <!--cors-->
              <div class="container mt-5">
                  <div class="ml-3 mb-5">
                      <div class="input-group mb-3">
                            <input style="height:38px" list="pays" class="border bg-dark border border-primary rounded" type="search" #saisie>
                            <div class="input-group-append">
                              <button class=" btn btn-primary  btn-outline-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" (click)="handleInput(saisie.value)">
                                <i class="fa fa-search" fa-2x aria-hidden="true"></i>
                              </button>
                            </div> 
                      </div> 
                      <!--datalist donnees boucle-->
                      <datalist id="pays">
                        <span *ngFor='let list of donnees'>
                          <option value="{{list.country}}">
                        </span>
                      </datalist>
                      <!--colaps zone-->
                      <div class="collapse" id="collapseExample">
                          <hr style="height:4px;border-width:0;color:gray;background-color:green">
                              <div class="card text-light">
                                  <div class="bg-dark text-light pl-2">
                                      {{state}} 
                                  </div>
                                  <div class="card-body">
                                    <p class="card-title text-light">Total : {{total}}</p>
                                    <p class="card-text text-success">Gueries : {{gueries}} </p>
                                    <p class="card-text text-light">Sous-Traitement : {{hospit}} </p>
                                    <p class="card-text text-danger">Décédés :{{morts}} </p>
                                  </div>
                              </div>
                          <hr style="height:4px;border-width:0;color:gray;background-color:green">
                      </div>
                  </div>
                  <!--total pays-->
                  <div *ngFor='let pays of donnees' class="card d-inline-block border-0 rounded m-3">
                    <div class="card text-light">
                        <div class="bg-dark text-light pl-2">
                            {{pays.country}} 
                        </div>
                        <div class="card-body">
                          <p class="card-title">Total : {{pays.cases}}</p>
                          <p class="card-text text-success">Gueries : {{pays.recovered}} </p>
                          <p class="card-text">Sous-Traitement : {{pays.active}} </p>
                          <p class="card-text text-danger">Décédés : {{pays.deaths}} </p>
                        </div>
                    </div>
                  </div>
            </div>  
            <div class="footer pl-4 pb-4">
            <div class="text-center">
              <h5  class="titre"> Simple Covid 19 Tracker</h5>
                hassanesow224@gmail.com 
                Access Code School Dakar/2020
              </div>
            </div> 
       </div>`,
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  public donnees: any;
  newdata = 'a voir';
  state = '';
  morts = '';
  total = '';
  gueries = '';
  hospit = '';
  constructor(private thedata: ThedataService) { }
  ngOnInit(): void {
    this.thedata.getData().subscribe(
      data => {
        this.donnees = data;
      }
    )
  }

  handleInput(entre) {
    for (let i = 0; i < this.donnees.length; i++) {
      if (this.donnees[i].country == entre) {
        this.state = this.donnees[i].country;
        this.gueries = this.donnees[i].recovered;
        this.hospit = this.donnees[i].active;
        this.total = this.donnees[i].cases;
        this.morts = this.donnees[i].deaths;
      }
    }
  };

}
