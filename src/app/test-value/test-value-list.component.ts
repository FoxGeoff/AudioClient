import { Component, OnInit } from '@angular/core';
//
import { TestValueService } from '../shared/test-value.service';
import { TestValue } from '../interface/test-value';

@Component({
  selector: 'app-test-value-list',
  templateUrl: './test-value-list.component.html',
  styleUrls: ['./test-value-list.component.css']
})
export class TestValueListComponent implements OnInit {
  testValues: TestValue[];

  constructor(private testValueService: TestValueService) { }

  ngOnInit() {
    this.getTestValues();
  }

  getTestValues(): void {
    this.testValueService.getTestValues()
      .subscribe(testValues => this.testValues = testValues);
  }

}
