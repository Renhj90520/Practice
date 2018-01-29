import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.wrapper') wrapper = true;
  width4: number;
  offset4: number;
  offset4ava: number;

  width2: number;
  offset2: number;
  offset2ava: number;
  intros = [{
    title: 'CREATIVE DESIGN AND CONCEPT',
    text: 'Suspendisse potenti. Sed placerat mauris quis arcu vam hendrerit aliquam. Aenean vitae nisl magna. Aliquamini elit sem,' +
      'posuere a vestibulum vitae, hendrerit velaris fe.'
  },
  {
    title: 'FRIENDLY AND INTUITIVE',
    text: 'Suspendisse potenti. Sed placerat mauris quis arcu vam hendrerit aliquam. Aenean vitae nisl magna. Aliquamini elit sem,' +
      ' posuere a vestibulum vitae, hendrerit velaris fe. '
  },
  {
    title: 'SERIOUSLY AWESOME',
    text: 'Suspendisse potenti. Sed placerat mauris quis arcu vam hendrerit aliquam. Aenean vitae nisl magna. Aliquamini elit sem,' +
      ' posuere a vestibulum vitae, hendrerit velaris fe. '
  }];
  works = [{
    title: 'The tree of knowledge',
    type: '- web development -'
  },
  {
    title: 'The tree of knowledge 1',
    type: '- web development -'
  },
  {
    title: 'The tree of knowledge 2',
    type: '- web development -'
  },
  {
    title: 'The tree of knowledge 3',
    type: '- web development -'
  }, {
    title: 'The tree of knowledge 4',
    type: '- web development -'
  }];

  blogs = [
    {
      title: 'Suspendi braus es vicat farus',
      auth: 'Admin',
      type: 'Animation',
      commNum: '28',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum enim ' +
        'magna, in malesuada metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ' +
        'ipsum dolor sit amet, consectetur adipiscing elit. ',
      date: '2012/12/08'
    }, {
      title: 'Suspendi braus es vicat farus 1',
      auth: 'Admin',
      type: 'Animation',
      commNum: '28',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum enim ' +
        'magna, in malesuada metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ' +
        'ipsum dolor sit amet, consectetur adipiscing elit. ',
      date: '2012/12/08'
    }, {
      title: 'Suspendi braus es vicat farus 2',
      auth: 'Admin',
      type: 'Animation',
      commNum: '28',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum enim ' +
        'magna, in malesuada metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ' +
        'ipsum dolor sit amet, consectetur adipiscing elit. ',
      date: '2012/12/08'
    },
  ];
  constructor() { }

  ngOnInit() {
    const count = this.works.length;
    this.width4 = 245 * count;
    this.offset4 = 0;
    this.offset4ava = (count - 4) * 245;

    const count1 = this.blogs.length;
    this.width2 = 490 * count1;
    this.offset2 = 0;
    this.offset2ava = (count1 - 2) * 490;
  }

  scroll4(offset) {

    if (offset === -1) {
      if (Math.abs(this.offset4) < this.offset4ava) {
        this.offset4 -= 245;
      }
    } else {
      if (this.offset4 < 0) {
        this.offset4 += 245;
      }
    }
  }
  scroll2(offset) {
    if (offset === -1) {
      if (Math.abs(this.offset2) < this.offset2ava) {
        this.offset2 -= 490;
      }
    } else {
      if (this.offset2 < 0) {
        this.offset2 += 490;
      }
    }
  }
}
