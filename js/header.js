var header = new Vue({
  el: '#header',
  data: {
    // flags
    tendinaAttiva: false,
    // dati
    logo: "assets/images/dark-logo.png",
    navItems: [
      {
        name: "home",
        links: [
          {
            href: "#",
            testo: "Link_1"
          },
          {
            href: "#",
            testo: "Link_2"
          },
          {
            href: "#",
            testo: "Link_3"
          },
          {
            href: "#",
            testo: "Link_4"
          },
          {
            href: "#",
            testo: "Link_5"
          }
        ]
      },
      {
        name: "pages",
        links: [
          {
            href: "#",
            testo: "Link_6"
          },
          {
            href: "#",
            testo: "Link_7"
          },
          {
            href: "#",
            testo: "Link_8"
          },
          {
            href: "#",
            testo: "Link_9"
          },
          {
            href: "#",
            testo: "Link_10"
          }
        ]
      },
      {
        name: "courses",
        links: [
          {
            href: "#",
            testo: "Link_11"
          },
          {
            href: "#",
            testo: "Link_12"
          },
          {
            href: "#",
            testo: "Link_13"
          },
          {
            href: "#",
            testo: "Link_14"
          },
          {
            href: "#",
            testo: "Link_15"
          }
        ]
      },
      {
        name: "features",
        links: [
          {
            href: "#",
            testo: "Link_16"
          },
          {
            href: "#",
            testo: "Link_17"
          },
          {
            href: "#",
            testo: "Link_18"
          },
          {
            href: "#",
            testo: "Link_19"
          },
          {
            href: "#",
            testo: "Link_20"
          }
        ]
      },
      {
        name: "blog",
        links: [
          {
            href: "#",
            testo: "Link_21"
          },
          {
            href: "#",
            testo: "Link_22"
          },
          {
            href: "#",
            testo: "Link_23"
          },
          {
            href: "#",
            testo: "Link_24"
          },
          {
            href: "#",
            testo: "Link_25"
          }
        ]
      },
      {
        name: "shop",
        links: [
          {
            href: "#",
            testo: "Link_26"
          },
          {
            href: "#",
            testo: "Link_27"
          },
          {
            href: "#",
            testo: "Link_28"
          },
          {
            href: "#",
            testo: "Link_29"
          },
          {
            href: "#",
            testo: "Link_30"
          }
        ]
      }
    ]
  },

  mounted: function () {
  this.$nextTick(function () {

  })},

  methods: {
    mostraTendina: function(index) {
      this.tendinaAttiva = index;
    },

    chiudiTendina: function(index) {
      this.tendinaAttiva = false;
    }
  }
})
