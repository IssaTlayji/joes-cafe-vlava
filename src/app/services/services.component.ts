import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data: DataInfo[] = []

  // @Input()  item : string ='issa';
  // @Input()  price : string = 'numb';
  // @Input()  imgSrc : string = 'image.png'


  constructor() { }

  ngOnInit(): void {
  
    fetch('https://issa-json-excel.herokuapp.com/data')
    .then(response => response.json())
    .then(json => 
      json.forEach((r:any) =>{
        let wi = new DataInfo()

        wi.item = r.item 
        wi.price = r.price
        wi.imgSrc = r.img

        this.data.push(wi)
        
      }))
  }
  
  }



class DataInfo {
  imgSrc: string = ''
  item: string = ''
  price: string = ''
  
}
