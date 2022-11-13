import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    regionSelected: any;
    regionSelectionList: any[];
    filterValues = [
        {
            "itemId": 1,
            "code": "NAS01",
            "treeType": 1,
            "name": "North America",
            "parentId": 1,
            "prismId": 0
        }, {
            "itemId": 67505,
            "code": "1B",
            "treeType": 2,
            "name": "1B:  CU2 (North and Far West)",
            "parentId": 1,
            "prismId": 1240802
        },
        {
            "itemId": 67504,
            "code": "1C",
            "treeType": 2,
            "name": "1C:  CU1 (Western Cornbelt)",
            "parentId": 1,
            "prismId": 1240804
        },
        {
            "itemId": 67506,
            "code": "1K",
            "treeType": 2,
            "name": "1K:  CU3 (Eastern Cornbelt)",
            "parentId": 1,
            "prismId": 1321218
        },
        {
            "itemId": 67503,
            "code": "1U",
            "treeType": 2,
            "name": "1U:  CU4 (Southern)",
            "parentId": 1,
            "prismId": 1240803
        },
        {
            "itemId": 65143,
            "code": "5A",
            "treeType": 2,
            "name": "5A:  CU5 (Canada)",
            "parentId": 1,
            "prismId": 1583015
        }];

    constructor() {
        this.getValuesFromService();
        this.regionSelectionList = this.filterValues.map(lst => ({itemId: lst.itemId, name: lst.name}));
        this.regionSelected = this.regionSelectionList[this.regionSelectionList.findIndex(lst => lst.itemId == 1)];
    }

    setRegion() {
        console.log("Clicked");
        this.regionSelected = this.regionSelectionList[this.regionSelectionList.findIndex(lst => lst.itemId == 67505)];
    }

    getValuesFromService() {
        this.filterValues = [
            {
                "itemId": 1,
                "code": "NAS01",
                "treeType": 1,
                "name": "North America",
                "parentId": 1,
                "prismId": 0
            }, {
                "itemId": 67505,
                "code": "1B",
                "treeType": 2,
                "name": "1B:  CU2 (North and Far West)",
                "parentId": 1,
                "prismId": 1240802
            },
            {
                "itemId": 67504,
                "code": "1C",
                "treeType": 2,
                "name": "1C:  CU1 (Western Cornbelt)",
                "parentId": 1,
                "prismId": 1240804
            },
            {
                "itemId": 67506,
                "code": "1K",
                "treeType": 2,
                "name": "1K:  CU3 (Eastern Cornbelt)",
                "parentId": 1,
                "prismId": 1321218
            },
            {
                "itemId": 67503,
                "code": "1U",
                "treeType": 2,
                "name": "1U:  CU4 (Southern)",
                "parentId": 1,
                "prismId": 1240803
            },
            {
                "itemId": 65143,
                "code": "5A",
                "treeType": 2,
                "name": "5A:  CU5 (Canada)",
                "parentId": 1,
                "prismId": 1583015
            }];
    }
}
