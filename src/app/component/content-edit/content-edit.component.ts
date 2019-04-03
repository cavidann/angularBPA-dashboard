import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bpa-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {

  id: any;
  editContentForm:FormGroup;
  contents = [
    {id: '1', content: '<div class="card col-100 flex"><div class="img-outer col-33 p-16"><img src="https://scontent-lhr3-1.cdninstagram.com/vp/e30770b64a070007f5b69c3f3768165c/5D28FD14/t51.2885-15/e35/47583787_107088436926779_7914424170254992113_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTk0MjE0MjM5Nzc0MTI1NjI4OA%3D%3D.2" alt=""></div><div class="content col-66 p-16"><h2>header</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?</p></div></div>'},
    {id: '2', content: '<h1>Item 1</h1>'},
    {id: '3', content: '<h1>Item 1</h1>'},
    {id: '4', content: '<h1>Item 1</h1>'},
    {id: '5', content: '<h1>Item 1</h1>'},
    {id: '6', content: '<h1>Item 1</h1>'}
  ];
  contentItem;

  get content() {
    return this.editContentForm.get('content');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] || null;

    this.contentItem = this.getContentById(this.id);

    this.editContentForm = new FormGroup({
      content: new FormControl(this.contentItem.content, Validators.required)
    });
  }

  getContentById(id) {
    return this.contents.find(x => x.id === id);
  }

  editContent(newData) {
    const edited = Object.assign({id: this.id}, newData)
    console.log(edited);    
    this.router.navigate(['/cms']);
  }

}
