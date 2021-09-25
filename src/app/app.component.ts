import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-multi-select';
  allSports: any[] = [];
  selectedSports: any[] = [];
  isDropDownOpen = false;
  duplicatedSports: any[] = [];
  // @HostListener('document:click', ['$event'])
  // closeOpened(event: any) {
  //   if (this.isDropDownOpen && event.target.type != 'search') this.isDropDownOpen = false
  // }

  ngOnInit() {
    this.allSports = [
      { id: 1, title: 'Soccer', selected: false },
      { id: 2, title: 'Cricket', selected: false },
      { id: 3, title: 'Hockey', selected: false },
      { id: 4, title: 'Badminton', selected: false },
      { id: 5, title: 'Tennis', selected: false },
      { id: 6, title: 'Golf', selected: false },
      { id: 7, title: 'Racing', selected: false },
      { id: 8, title: 'Sprint', selected: false },
    ];
    this.duplicatedSports = [...this.allSports]
  }

  showDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen
  }

  addItem(id: any) {
    let index = this.allSports.findIndex(x => x.id == id);
    if (index != -1) {
      this.allSports[index]['selected'] = true;
      this.selectedSports.push(this.allSports[index]['title'])
    }
  }

  removeItem(title: string, itemIndex: number) {
    let index = this.allSports.findIndex(x => x.title == title);
    if (index != -1) {
      this.allSports[index]['selected'] = false;
      this.selectedSports.splice(itemIndex, 1)
    }
  }

  search(evt: any) {
    let sports = [...this.duplicatedSports];
    let val = (evt.target.value).toLowerCase();
    this.isDropDownOpen = true;
    if (!val) this.allSports = [...this.duplicatedSports]
    else {
      let searched = sports.filter(x => x.title.toLowerCase().includes(val));
      if (searched.length > 0) this.allSports = [...searched];
      else {
        this.isDropDownOpen = false;
        this.allSports = [...this.duplicatedSports]
      }
    }
  }
}
