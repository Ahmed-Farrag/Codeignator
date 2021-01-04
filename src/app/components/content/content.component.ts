import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

text =`The children of today are gearing up to become adult citizens of tomorrow. The growth is parallel to the future of our country, reflected through quality of the present education system. A school must stimulate curiosity in the young, impressionable minds and equip them with tools to be better human beings.`
  constructor() { }

  ngOnInit() {
  }

}
