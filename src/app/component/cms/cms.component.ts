import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'bpa-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {

  contents = [
    {id: '1', content: '<div class="card col-100 flex"><div class="img-outer col-33 p-16"><img src="https://scontent-lhr3-1.cdninstagram.com/vp/e30770b64a070007f5b69c3f3768165c/5D28FD14/t51.2885-15/e35/47583787_107088436926779_7914424170254992113_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=7&ig_cache_key=MTk0MjE0MjM5Nzc0MTI1NjI4OA%3D%3D.2" alt=""></div><div class="content col-66 p-16"><h2>header</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, labore?</p></div></div>'},
    {id: '2', content: '<h1>Item 1</h1>'},
    {id: '3', content: '<h1>Item 1</h1>'},
    {id: '4', content: '<h1>Item 1</h1>'},
    {id: '5', content: '<h1>Item 1</h1>'},
    {id: '6', content: '<h1>Item 1</h1>'}
  ];

  addContentForm: FormGroup;

  displayedColumns: string[] = ['content', 'actions'];
  dataSource = new MatTableDataSource<any>(this.contents);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  get content() {
    return this.addContentForm.get('content');
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.addContentForm = new FormGroup({
      content: new FormControl(null, Validators.required)
    });
  }

  addContent(newData) {
    this.contents.push(newData);
    this.dataSource = new MatTableDataSource<any>(this.contents);
    this.dataSource.paginator = this.paginator;
    
    this.addContentForm.reset()
    
    console.log(newData);
    
  }

  delete(element) {
    let index = this.contents.indexOf(element);
    this.contents.splice(index, 1);
    this.dataSource = new MatTableDataSource<any>(this.contents);
    this.dataSource.paginator = this.paginator;

    console.log(this.contents);

  }

  edit(id) {
    this.router.navigate(['/content-edit', id]);
  }

}
