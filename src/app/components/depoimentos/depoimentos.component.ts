import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.css']
})

export class DepoimentosComponent implements OnInit{

  testimonials = [
    { text: 'Melhores Serviços do Região', author: 'Isauqe 1', active: true }, // Defina o primeiro slide como ativo
    { text: 'Melhor Gerenciamento', author: 'isaque 2', active: false },
    { text: 'SEO Otimo com resultados perfeitos', author: 'Isaque também 3', active: false },
  ];

  currentIndex = 0;

  ngOnInit() {
    this.showSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.showSlide(this.currentIndex);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    this.testimonials.forEach((testimonial, i) => {
      testimonial.active = i === index;
    });
  }
}

