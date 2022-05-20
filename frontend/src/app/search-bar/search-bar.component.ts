import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiDokipokService } from '../api-dokipok.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() emitSearch: EventEmitter<string> = new EventEmitter();

  name: string | undefined

  constructor(private data: ApiDokipokService) { }

  ngOnInit(): void {
  }

  search(value: string){
      this.emitSearch.emit(value);
  }

}
