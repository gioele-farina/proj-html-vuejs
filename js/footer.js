var footer = new Vue({
  el: '#footer',
  data: {
    address: "382 NE 191 St # 87394 Miami, FL 33179-3899",
    telephone: "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
    mail: "support@maxcoach.com",
    socials: [
      {
        name: "facebook",
        link: "#",
        icona: 'fab fa-facebook-square'
      },
      {
        name: "twitter",
        link: "#",
        icona: 'fab fa-twitter'
      },
      {
        name: "instagram",
        link: "#",
        icona: 'fab fa-instagram'
      },
      {
        name: "linkedin",
        link: "#",
        icona: 'fab fa-linkedin'
      }
    ],

    explore: [
      {
        link_name: "Start here",
        link_href: "#"
      },
      {
        link_name: "Blog",
        link_href: "#"
      },
      {
        link_name: "About us",
        link_href: "#"
      },
      {
        link_name: "Success story",
        link_href: "#"
      },
      {
        link_name: "Courses",
        link_href: "#"
      },
      {
        link_name: "Contact us",
        link_href: "#"
      }
    ],

    information: [
      {
        link_name: "Membership",
        link_href: "#"
      },
      {
        link_name: "Purchase guide",
        link_href: "#"
      },
      {
        link_name: "Privacy policy",
        link_href: "#"
      },
      {
        link_name: "Term of services",
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
