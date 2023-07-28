import Vue from './vue.js';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Card from './components/card.vue';

const app = new Vue({
  el: '#app',
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'card-component': Card
  },
  data: {
    name: 'Leo',
    job: 'Software Engineer',
    about: 'I am a passionate software engineer with over 5 years of experience in developing innovative solutions.',
    portfolio: [
      {
        title: 'Project 1',
        image: './assets/images/portfolio1.jpg',
        description: 'This is a description of Project 1.'
      },
      {
        title: 'Project 2',
        image: './assets/images/portfolio2.jpg',
        description: 'This is a description of Project 2.'
      },
      {
        title: 'Project 3',
        image: './assets/images/portfolio3.jpg',
        description: 'This is a description of Project 3.'
      }
    ],
    contact: {
      email: 'leo@example.com',
      phone: '+1234567890',
      address: '123, ABC Street, XYZ City'
    }
  }
});