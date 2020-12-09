var footer = new Vue({
  el: '#footer',
  data: {
    address: "",
    mail: "",
    social: [
      {
        name: "facebook",
        link: "#",
        icona: ""
      },
      {
        name: "twitter",
        link: "#",
        icona: ""
      },
      {
        name: "instagram",
        link: "#",
        icona: ""
      },
      {
        name: "linkedin",
        link: "#",
        icona: ""
      }
    ],

    explore: [
      {
        link_name: "start here",
        link_href: "#"
      },
      {
        link_name: "blog",
        link_href: "#"
      },
      {
        link_name: "about us",
        link_href: "#"
      },
      {
        link_name: "success story",
        link_href: "#"
      },
      {
        link_name: "courses",
        link_href: "#"
      },
      {
        link_name: "contact us",
        link_href: "#"
      }
    ],

    information: [
      {
        link_name: "membership",
        link_href: "#"
      },
      {
        link_name: "purchase guide",
        link_href: "#"
      },
      {
        link_name: "privacy policy",
        link_href: "#"
      },
      {
        link_name: "term of services",
        link_href: "#"
      }
    ]

  },

  mounted: function () {
  this.$nextTick(function () {

  })},

  methods: {

  }
})
