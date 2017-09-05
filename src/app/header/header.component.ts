import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { RepositoryService } from './../shared/repository.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private repositoryService: RepositoryService) { }

    ngOnInit() {
    }

    onSaveData() {
        this.repositoryService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.repositoryService.getRecipes();
    }

}
