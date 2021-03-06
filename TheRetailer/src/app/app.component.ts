import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  carouselItems = [
    { src: 'assets/images/banner-width1.png' },
    { src: 'assets/images/banner-width2.png' },
    { src: 'assets/images/banner-width3.png' },
    { src: 'assets/images/banner-width4.png' },
    { src: 'assets/images/banner-width5.png' },
    { src: 'assets/images/banner-width1.png' },
  ];
  featureItems = [
    { src: 'assets/images/prodimg.png', name: 'ACCESSORIES', feature: 'Beanie Hat', prevprice: '22.00', price: '23.60' },
    { src: 'assets/images/prodimg.png', name: 'ACCESSORIES', feature: 'Beanie Hat', prevprice: '22.00', price: '23.60' },
    { src: 'assets/images/prodimg.png', name: 'ACCESSORIES', feature: 'Beanie Hat', prevprice: '22.00', price: '23.60' },
    { src: 'assets/images/prodimg.png', name: 'ACCESSORIES', feature: 'Beanie Hat', prevprice: '22.00', price: '23.60' },
  ];
  members = [{
    src: 'assets/images/portrait.png',
    name: 'Joshua Wilkinson',
    position: 'Managing Director',
    intro: 'Gentrify stumptown shoreditchchill wave, pop-up tofu DIY cardigan jean shorts blog wayfarers before bushwick high life Austin. '
  }, {
    src: 'assets/images/portrait.png',
    name: 'Joshua Wilkinson',
    position: 'Managing Director',
    intro: 'Gentrify stumptown shoreditchchill wave, pop-up tofu DIY cardigan jean shorts blog wayfarers before bushwick high life Austin. '
  }, {
    src: 'assets/images/portrait.png',
    name: 'Joshua Wilkinson',
    position: 'Managing Director',
    intro: 'Gentrify stumptown shoreditchchill wave, pop-up tofu DIY cardigan jean shorts blog wayfarers before bushwick high life Austin. '
  }, {
    src: 'assets/images/portrait.png',
    name: 'Joshua Wilkinson',
    position: 'Managing Director',
    intro: 'Gentrify stumptown shoreditchchill wave, pop-up tofu DIY cardigan jean shorts blog wayfarers before bushwick high life Austin. '
  }];

  testimonials = [{
    src: 'assets/images/example_4.jpg',
    name: 'Terry\'s CL',
    company: 'Microsoft',
    text: 'Odd future photo booth flannel ethnic pug, occupy keffiyeh synth blue bottle tofu tonx iphone. ' +
      'Blue bottle 90\'s vice trust fund gastropub.Austin mlkshk carles selvage fixie ennui.' +
      'Irony plaid deep v vegan carles small batch thundercats aesthetic.Semiotics lo-fi meh dreamcatcher, vice truffaut 90\'s retro.'
  }, {
    src: 'assets/images/example_4.jpg',
    name: 'Terry\'s CL',
    company: 'Microsoft',
    text: 'Odd future photo booth flannel ethnic pug, occupy keffiyeh synth blue bottle tofu tonx iphone. ' +
      'Blue bottle 90\'s vice trust fund gastropub.Austin mlkshk carles selvage fixie ennui.' +
      'Irony plaid deep v vegan carles small batch thundercats aesthetic.Semiotics lo-fi meh dreamcatcher, vice truffaut 90\'s retro.'
  }];

  blogs = [{
    src: 'assets/images/blog.png',
    title: 'Welcome to the David Walker Portrait Collection',
    comm: '6 comments',
    synopsis: 'Gluten-free quinoa selfies carles, kogi gentrify retro marfa viral. ' +
      'Aesthetic before they sold out put a bird on it sriracha typewriter. Skateboard viral irony tonx ...'
  }, {
    src: 'assets/images/blog.png',
    title: 'Welcome to the David Walker Portrait Collection',
    comm: '6 comments',
    synopsis: 'Gluten-free quinoa selfies carles, kogi gentrify retro marfa viral. ' +
      'Aesthetic before they sold out put a bird on it sriracha typewriter. Skateboard viral irony tonx ...'
  }];

  themes = [{
    icon: 'fa-eye',
    name: 'Post-ironic sweater',
    synopsis: 'Vinyl carles 3 wolf moon put a bird on it post ironic authentic ' +
      'single-origin coffee quinoa chillwave. Irony fingerstache thundercats. '
  }, {
    icon: 'fa-eye',
    name: 'Post-ironic sweater',
    synopsis: 'Vinyl carles 3 wolf moon put a bird on it post ironic authentic ' +
      'single-origin coffee quinoa chillwave. Irony fingerstache thundercats. '
  }, {
    icon: 'fa-eye',
    name: 'Post-ironic sweater',
    synopsis: 'Vinyl carles 3 wolf moon put a bird on it post ironic authentic ' +
      'single-origin coffee quinoa chillwave. Irony fingerstache thundercats. '
  }, {
    icon: 'fa-eye',
    name: 'Post-ironic sweater',
    synopsis: 'Vinyl carles 3 wolf moon put a bird on it post ironic authentic ' +
      'single-origin coffee quinoa chillwave. Irony fingerstache thundercats. '
  }];
  brand = {
    main: 'Free shipping on all orders over $75',
    second: '*FREE OVER $125 for international orders',
    signText: 'DELIVERED TO YOUR DOOR,IN 4 DAYS'
  };
  shortbrand = {
    main: 'LATEST PRODUCTS',
    second: 'NEW ARRIVALS'
  };

  qas = [{
    question: 'Can t-shirts be directly purchased at the Retailer store?',
    answer: 'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.' +
      ' The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem. This hoodie by Superdry has been styled with plimsolls. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.    ' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a ' +
      'front pouch pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.It comes in a regular fit.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.    It comes in a regular fit.' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.This hoodie by ' +
      'Superdry has been constructed in cotton sweat fabric.It comes in a regular fit. '
  }, {
    question: 'Can t-shirts be directly purchased at the Retailer store?',
    answer: 'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.' +
      ' The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem. This hoodie by Superdry has been styled with plimsolls. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.    ' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a ' +
      'front pouch pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.It comes in a regular fit.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.    It comes in a regular fit.' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.This hoodie by ' +
      'Superdry has been constructed in cotton sweat fabric.It comes in a regular fit. '
  }, {
    question: 'Can t-shirts be directly purchased at the Retailer store?',
    answer: 'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.' +
      ' The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem. This hoodie by Superdry has been styled with plimsolls. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit. ' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric. It comes in a regular fit.    ' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a ' +
      'front pouch pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.It comes in a regular fit.' +
      'This hoodie by Superdry has been constructed in cotton sweat fabric.    It comes in a regular fit.' +
      'The details include: a hooded neck with custom fit drawcords, branding to the chest, a front pouch ' +
      'pocket and rib knit cuffs and hem.This hoodie by Superdry has been styled with plimsolls.This hoodie by ' +
      'Superdry has been constructed in cotton sweat fabric.It comes in a regular fit. '
  }];
}
