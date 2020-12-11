var carousel = new Vue({
  el: '#testimonialCarousel',
  data: {
    pallinoAttivo: 0,
    testimonialVisible1: 0, //attivo
    testimonialVisible2: 1, //successivo
    testimonialVisible3: 2, //precedente all'attivo o ultimo se attivo = 0
    // dati
    testimonials: [
      // testimonial1
      {
        titolo: "High level of efficiency and scientific teaching methods",
        testo: "I am free to learn at my own pace, follow my own schedule and choose the subject I want lo learn from the syllabus. Great study portal for people like me.",
        foto: "assets/images/testimonial-avata-02.jpg",
        chiSono: "MINA HOLLACE",
        cosaFaccio: "/Freelancer"
      },
      // testimonial2
      {
        titolo: "Professional team of specialists and passionate mentors at reach",
        testo: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
        foto: "assets/images/testimonial-avata-04.jpg",
        chiSono: "MADLEY PONDOR",
        cosaFaccio: "/IT Specialist"
      },
      // testimonial3
      {
        titolo: "I'ts a choice of quality for people with special needs",
        testo: "I'm very strict person so I require everything to be organized and neat. Then, I'll ve alble to make things right and shine. MaxCoach guys just got me.",
        foto: "assets/images/testimonial-avata-03.jpg",
        chiSono: "FLORENCE THEMES",
        cosaFaccio: "/Multimedia Admin"
      }
    ]
  },

  mounted: function () {
  this.$nextTick(function () {
    this.testimonialVisible3 = (this.testimonials.length - 1);
  })},

  methods: {
    scorriSinistra: function(){

    },

    scorriDestra: function(){

    }
  }
})
