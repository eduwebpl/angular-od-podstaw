import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project = null
  message = '';
  loading = false

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const project_id = (params.get('project_id'))
      
      this.loading = true
      this.http.get(`/assets/projects/details/${project_id}.json`)
        .subscribe({
          next: (project) => { this.project = project },
          error: (error) => { this.message = 'Unexpected error: ' + (error.statusText); },
          complete: () => { this.loading = false; }
        })
    })
  }

}
