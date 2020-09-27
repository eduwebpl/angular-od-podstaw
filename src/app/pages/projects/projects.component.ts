import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // const tag = this.route.snapshot.queryParamMap.get('tag')

    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag')
      this.selectCategory(tag)
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
  category = null
  filtered = []

  recentProjects = [
    {
      "likes": 27,
      "id": 41086,
      "slug": "story-line",
      "title": "Story Line",
      "createdAt": 1596499200,
      "tags": [
        "Culture & Education",
        "Web & Interactive",
        "Animation",
        "Clean",
        "Unusual Navigation",
        "WebGL",
        "Black",
        "Red",
        "White",
        "Transitions",
        "Experimental",
        "Storytelling",
        "Three.js",
        "ReactJS﻿",
        "GLSL",
        "Filters and Effects"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/story-line",
      "skills": {
        "design": 75,
        "html": 82,
        "css": 95,
        "angular": 31,
        "nodejs": 87
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5f17dd87c1fb8965796962.jpg",
        "src": "/projects/images/5f17dd87c1fb8965796962.jpg",
        "filename": "5f17dd87c1fb8965796962.jpg"
      }
    },
    {
      "likes": 39,
      "id": 40852,
      "slug": "theremix-virtual-theremin",
      "title": "THEREMIX - Virtual Theremin",
      "createdAt": 1596240000,
      "tags": [
        "Music & Sound",
        "Web & Interactive",
        "CSS3",
        "Retro",
        "Single page",
        "WebGL",
        "Black",
        "Red",
        "Yellow",
        "Experimental",
        "PixiJS",
        "Gestures / Interaction",
        "Microinteractions"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/theremix-virtual-theremin",
      "skills": {
        "design": 90,
        "html": 58,
        "css": 79,
        "angular": 90,
        "nodejs": false
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5efc5fddb3b49028383897.png",
        "src": "/projects/images/5efc5fddb3b49028383897.png",
        "filename": "5efc5fddb3b49028383897.png"
      }
    },
    {
      "likes": 48,
      "id": 40985,
      "slug": "vredestein-new-horizons",
      "title": "Vredestein New Horizons",
      "createdAt": 1596067200,
      "tags": [
        "Events",
        "Web & Interactive",
        "CSS3",
        "Video",
        "WebGL",
        "Black",
        "Blue",
        "Red",
        "Transitions",
        "Experimental",
        "Sound-Audio",
        "GSAP Animation",
        "Three.js",
        "3D",
        "Firebase",
        "Photo & Video",
        "Nuxt.js"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/vredestein-new-horizons",
      "skills": {
        "design": 64,
        "html": 99,
        "css": 49,
        "angular": 48,
        "nodejs": false
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5f08321fa56bc497680397.png",
        "src": "/projects/images/5f08321fa56bc497680397.png",
        "filename": "5f08321fa56bc497680397.png"
      }
    },
    {
      "likes": 113,
      "id": 40983,
      "slug": "jacob-mckee-colorist",
      "title": "Jacob Mckee — Colorist",
      "createdAt": 1595894400,
      "tags": [
        "Film & TV",
        "Web & Interactive",
        "Graphic design",
        "Portfolio",
        "Video",
        "Black",
        "Silver",
        "White",
        "Experimental",
        "Filters and Effects",
        "Interaction Design",
        "Photo & Video"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/jacob-mckee-colorist",
      "skills": {
        "design": 83,
        "html": 51,
        "css": 55,
        "angular": 92,
        "nodejs": false
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5f07ddbe08e8c362546463.jpg",
        "src": "/projects/images/5f07ddbe08e8c362546463.jpg",
        "filename": "5f07ddbe08e8c362546463.jpg"
      }
    },
    {
      "likes": 71,
      "id": 40855,
      "slug": "thibaut-foussard-2020",
      "title": "Thibaut Foussard - 2020",
      "createdAt": 1595635200,
      "tags": [
        "Web & Interactive",
        "Portfolio",
        "WebGL",
        "Black",
        "Silver",
        "White",
        "Experimental",
        "Three.js",
        "Webpack",
        "Anime.js"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/thibaut-foussard-2020",
      "skills": {
        "design": 69,
        "html": 84,
        "css": 74,
        "angular": 55,
        "nodejs": 34
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5ef781563bb85859570692.jpg",
        "src": "/projects/images/5ef781563bb85859570692.jpg",
        "filename": "5ef781563bb85859570692.jpg"
      }
    },
    {
      "likes": 150,
      "id": 40943,
      "slug": "patrick-heng-portfolio-1",
      "title": "Patrick HENG - Portfolio",
      "createdAt": 1595289600,
      "tags": [
        "Promotional",
        "Web & Interactive",
        "Animation",
        "Horizontal Layout",
        "Infinite Scroll",
        "Portfolio",
        "White",
        "Transitions",
        "Experimental",
        "GSAP Animation",
        "Three.js",
        "Microinteractions",
        "Vue.js"
      ],
      "type": "submission",
      "url": "https://www.awwwards.com/sites/patrick-heng-portfolio-1",
      "skills": {
        "design": 62,
        "html": 67,
        "css": 84,
        "angular": 55,
        "nodejs": 76
      },
      "images": {
        "thumbnail": "/projects/images/thumbnails/5f041a739cf10731203317.jpg",
        "src": "/projects/images/5f041a739cf10731203317.jpg",
        "filename": "5f041a739cf10731203317.jpg"
      }
    },
  ]


}
