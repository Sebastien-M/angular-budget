import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-manager',
  templateUrl: './budget-manager.component.html',
  styleUrls: ['./budget-manager.component.css']
})
export class BudgetManagerComponent implements OnInit {

  depots = [];
  depenses = [];
  montant = 0;
  date;

  constructor() { }

  ngOnInit() {
  }

  ajouterDepense(montant, date) {
    this.depenses.push({ "montant": montant, "date": date, "type": "Dépense" });

    let params = "montant=" + montant + "&date=" + date;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/depenses', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Form sent");
        }
      }
    }
    xhr.send(params);
  }

  ajouterDepot(montant, date) {
    this.depots.push({ "montant": montant, "date": date, "type": "Dépot" });

    let params = "montant=" + montant + "&date=" + date;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/depots', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Form sent");
        }
      }
    }
    xhr.send(params);

  }

  supprimerDepense(item) {
    this.depenses.splice(this.depenses.indexOf(item), 1);
  }

  supprimerDepot(item) {
    this.depots.splice(this.depots.indexOf(item), 1);
  }

  getDepenses() {
    let that=this;
    // console.log(this.depots);
    var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            // console.log(JSON.parse(xhr.response)); 
            that.depenses =JSON.parse(xhr.response);
            console.log(that.depenses);
          }
        }
    
        xhr.open('GET', 'http://localhost:3000/depenses', true);
        xhr.send('');
  }

  getDepots() {
    let that=this;
    // console.log(this.depots);
    var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            // console.log(JSON.parse(xhr.response)); 
            that.depots = (JSON.parse(xhr.response));
            console.log(that.depots);
          }
        }
    
        xhr.open('GET', 'http://localhost:3000/depots', true);
        xhr.send('');
  }
}
