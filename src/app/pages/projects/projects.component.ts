import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  message = ''
  category = null
  filtered = []
  loading = false

  recentProjects: any = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag')
      this.selectCategory(tag)
    })

    this.loading = true
    this.http.get('http://localhost:4200/assets/projects/projects.json')
      .subscribe({
        next: (projects) => {
          this.recentProjects = (projects)
          const tag = this.route.snapshot.queryParamMap.get('tag')
          this.selectCategory(tag)
        },
        error: (error) => { 
          this.message = 'Unexpected error: ' + (error.statusText); 
        },
        complete: () => {
          this.loading = false
        }
      })
  }

  categories = [
    { id: 'Web', label: 'Web & Interactive' },
    { id: 'Animation', label: 'Animation' },
    { id: 'Culture', label: 'Culture & Education' },
  ]

  navigateToCat(cat_id) {
    this.router.navigate(['/projects'], {
      queryParams: { tag: cat_id }
    })
  }

  selectCategory(cat_id) {
    this.category = this.categories.find(c => c.id == cat_id);
    if (this.category) {
      this.filtered = this.recentProjects.filter(
        p => p.tags.includes(this.category.label)
      )
    } else {
      this.filtered = this.recentProjects
    }
  }

}
