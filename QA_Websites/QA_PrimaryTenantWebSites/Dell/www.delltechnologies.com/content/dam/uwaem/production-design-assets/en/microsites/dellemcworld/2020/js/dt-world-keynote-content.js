
///////////////////////////////////////////
//	GLOBALS
///////////////////////////////////////////

// var keynoteWeds1 = {
//   title: 'The digital future is now',
//   description: 'Overnight the world changed and to meet our evolving reality, the pace of innovation accelerated. This is our collective opportunity to unite, elevate and advance our industries and our world. As IT leaders and humanitarians, we play a critical role in delivering the promise of digital transformation to solve our greatest challenges and create a bright future. Join Michael Dell and special guests to explore how technology and digital transformation can lead the way to economic recovery and human progress.',
//   videoID: '6191988840001',
//   speakers: [
//     {
//       name: 'Michael Dell',
//       title: 'Chairman & CEO, Dell Technologies',
//       photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-dell-no-shadow-2x.jpg',
//       twitter: 'https://twitter.com/MichaelDell',
//       linkedin: 'http://www.linkedin.com/in/mdell'
//     }
//   ]
// };

// var keynoteWeds2 = {
//   title: 'Technology accelerating transformation and opportunity',
//   description: 'The fourth industrial revolution will enable breakthroughs in artificial intelligence (AI) and automation technology that create new innovations and opportunities across industries. To do that, organizations must unlock the power of data and embrace digital transformation. Hear from COO and Vice Chairman Jeff Clarke, VMware CEO Pat Gelsinger and customers about the emerging technologies shaping business continuity and the future of technology.',
//   videoID: '6191988840001',
//   speakers: [
//     {
//       name: 'Jeff Clarke',
//       title: 'Chief Operating Officer and Vice Chairman, Dell Technologies',
//       photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-clarke-no-shadow-2x.jpg',
//       twitter: 'https://twitter.com/JClarkeatDell',
//       linkedin: 'https://www.linkedin.com/in/jeff-clarke-b592451b'
//     },
//     {
//       name: 'Pat Gelsinger',
//       title: 'CEO, VMware',
//       photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-gelsinger-no-shadow-2x.jpg',
//       twitter: 'https://twitter.com/PGelsinger',
//       linkedin: 'https://www.linkedin.com/in/patgelsinger'
//     }
//   ]
// };

///////////////////////////////////////////
//	MAIN
///////////////////////////////////////////
/* eslint-disable */
 
(function (DTWorldKeynotes) {
    'use strict';
     /* CONTENT
    ========================================================================== */
    DTWorldKeynotes.content = {

      keynoteWeds1 : {
        title: 'The digital future is now',
        description: 'Overnight the world changed and to meet our evolving reality, the pace of innovation accelerated. This is our collective opportunity to unite, elevate and advance our industries and our world. As IT leaders and humanitarians, we play a critical role in delivering the promise of digital transformation to solve our greatest challenges and create a bright future. Join Michael Dell and special guests to explore how technology and digital transformation can lead the way to economic recovery and human progress.',
        videoID: '6191988840001',
        speakers: [
            {
            name: 'Michael Dell',
            title: 'Chairman & CEO, Dell Technologies',
            photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-dell-no-shadow-2x.jpg',
            twitter: 'https://twitter.com/MichaelDell',
            linkedin: 'http://www.linkedin.com/in/mdell'
            }
        ]
        }
    }
  
    /* APP
    ========================================================================== */
    DTWorldKeynotes.app = {
      init: function () {
  
        this.bindEvents();

      },
  
      bindEvents : function () {
        // Weds Keynote #1
        jQuery("#keynote-weds-1 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'The digital future is now',
            description: 'Overnight the world changed and to meet our evolving reality, the pace of innovation accelerated. This is our collective opportunity to unite, elevate and advance our industries and our world. As IT leaders and humanitarians, we play a critical role in delivering the promise of digital transformation to solve our greatest challenges and create a bright future. Join Michael Dell and special guests to explore how technology and digital transformation can lead the way to economic recovery and human progress.',
            videoID: '6202033787001',
            speakers: [
              {
                name: 'Michael Dell',
                title: 'Chairman & CEO, Dell Technologies',
                photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-dell-no-shadow-2x.jpg',
                twitter: 'https://twitter.com/MichaelDell',
                linkedin: 'http://www.linkedin.com/in/mdell'
              },
              {
                name: 'Tami Erwin',
                title: 'CEO, Verizon Business',
                photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-erwin-2x.jpg',
                twitter: 'https://twitter.com/TamiErwinVZ',
                linkedin: 'https://www.linkedin.com/in/tamierwin/'
              }
            ]
            }
          );
          console.log("Play Weds Keynote 1");
        });

        // Weds Keynote #2
        jQuery("#keynote-weds-2 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'Technology accelerating transformation and opportunity',
            description: 'The fourth industrial revolution will enable breakthroughs in artificial intelligence (AI) and automation technology that create new innovations and opportunities across industries. To do that, organizations must unlock the power of data and embrace digital transformation. Hear from COO and Vice Chairman Jeff Clarke, VMware CEO Pat Gelsinger and customers about the emerging technologies shaping business continuity and the future of technology.',
            videoID: '6202070744001',
            speakers: [
              {
                name: 'Jeff Clarke',
                title: 'Chief Operating Officer and Vice Chairman, Dell Technologies',
                photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-clarke-no-shadow-2x.jpg',
                twitter: 'https://twitter.com/JClarkeatDell',
                linkedin: 'https://www.linkedin.com/in/jeff-clarke-b592451b'
              },
              {
                name: 'Pat Gelsinger',
                title: 'CEO, VMware',
                photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-gelsinger-no-shadow-2x.jpg',
                twitter: 'https://twitter.com/PGelsinger',
                linkedin: 'https://www.linkedin.com/in/patgelsinger'
              },
              {
                name: 'Robert B. Carter',
                title: 'Executive Vice President, Information Services & Chief Information Officer, FedEx Corporation',
                photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-carter-2x.jpg',
                twitter: 'https://twitter.com/robcarter1',
                linkedin: 'https://www.linkedin.com/in/robcarter1'
              }
            ]
          });
          console.log("Play Weds Keynote 2");
        });

        // Weds Keynote #3
        jQuery("#keynote-weds-3 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'Accelerating our digital future',
            description: 'Technology innovation is accelerating but what does this acceleration look like over the long-term, how do new emerging technologies work together and what will they enable? Join John Roese, Dell Technologies CTO, as he helps you explore the digital future and the endless possibilities a digital transformation strategy can unlock for your organization, no matter what challenges you encounter next. <br><br> For more on the edge statistic cited in this keynote, check out: <a href="https://www.gartner.com/smarterwithgartner/what-edge-computing-means-for-infrastructure-and-operations-leaders/" target="_blank" rel="noopener">Gartner – What Edge Computing Means for Infrastructure and Operations Leaders</a>.',
            videoID: '6202855838001',
            speakers: [
            {
              name: 'John Roese',
              title: 'President, P&O Chief Technology Officer, Dell Technologies',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-roese-no-shadow-2x.jpg',
              twitter: 'https://twitter.com/theictoptimist',
              linkedin: 'https://www.linkedin.com/in/johnroese/'
            }
            ]
          });
          console.log("Play Weds Keynote 3");
        });

        // Weds Keynote #4
        jQuery("#keynote-weds-4 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'Accelerating human transformation & resilience',
            description: 'In 2020, the global pandemic accelerated digital transformation – we are home schooling, remote working and social distancing. These events are melting old habits, raising new concerns and challenges, and shaping new behavior patterns worldwide – all of which have technology at the core. Just as important as the technology that fuels our future, human transformation is underway – to a kinder, more generous and selfless world. If we get it right, we will emerge stronger than ever.',
            videoID: '6202033407001',
            speakers: [
            {
              name: 'Allison Dew',
              title: 'Chief Marketing Officer, Dell Technologies',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-dew-no-shadow-2x.jpg',
              twitter: 'https://twitter.com/alliedewsays',
              linkedin: 'https://www.linkedin.com/in/allison-dew-45875035/'
            },
            {
              name: 'Angela Duckworth',
              title: 'Founder and CEO of Character Lab and the Rosa Lee and Egbert Chang Professor at the University of Pennsylvania',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-duckworth-2x.jpg',
              twitter: 'https://twitter.com/angeladuckw',
              linkedin: 'https://www.linkedin.com/in/angeladuckworth/'
            }
            ]
          });
          console.log("Play Weds Keynote 4");
        });

        // Thurs Keynote #1
        jQuery("#keynote-thurs-1 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'The power of partnering',
            description: 'The current business climate demands agility and flexibility, and the businesses that can rapidly evolve and adapt to major changes in the markets, customer behaviors and new technologies have a competitive advantage. Dell Technologies and its vast ecosystem of Global Alliances, Solution Providers, OEM and Design Solutions partners deliver transformative solutions and services that span all industries—healthcare, manufacturing, energy, retail, safety/security. Hear how our differentiated technology solutions and program offerings empower our partner community to help accelerate and grow our customer businesses.',
            videoID: '6200399033001',
            speakers: [
            {
              name: 'Bill Scannell',
              title: 'President, Global Sales & Customer Operations',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-scannell-2x.jpg',
              twitter: 'https://twitter.com/BillScannell2',
              linkedin: 'https://www.linkedin.com/in/bill-scannell-7bb83768'
            },
            {
              name: 'Cheryl Cook',
              title: 'SVP Global Partner & Design Solutions Marketing, Dell Technologies',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-cook-2x.jpg',
              twitter: 'https://twitter.com/CookCherylS',
              linkedin: 'https://www.linkedin.com/in/cherylscook/'
            },
            {
              name: 'Rola Dagher',
              title: 'Global Channel Chief, Dell Technologies',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-rola-2x.jpg',
              twitter: 'https://twitter.com/RolaDagher',
              linkedin: 'https://www.linkedin.com/in/roladagher/'
            },
            {
              name: 'Denise Millard',
              title: 'SVP Global Alliances, Dell Technologies',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-millard-2x.jpg',
              twitter: 'https://twitter.com/deniseemillard',
              linkedin: 'https://www.linkedin.com/in/denise-millard-0407b632/'
            }
            ]
          });
           console.log("Play Thurs Keynote 1");
        });

        // Thurs Keynote #2
        jQuery("#keynote-thurs-2 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'TED Salon: Defining the future',
            description: 'Artificial intelligence and machine learning, robots and automation, synthetic biology and designing life, 5G and instantaneous connectivity…how will these technological advancements have real world impact and enable scalable solutions to some of humanity’s biggest challenges? In a time that feels environmentally, socially, politically and economically uncertain, technology (and those who create it) will be a crucial driver of inclusive productivity, progress and prosperity for all. Let’s look at what\'s possible.',
            videoID: '6200690716001',
            speakers: [
            {
              name: 'Simone Ross​',
              title: 'Technology Curator, TED​',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-ross-2x.jpg',
              twitter: 'https://twitter.com/SCR10',
              linkedin: 'https://www.linkedin.com/in/scr10/'
            },
            {
              name: 'Genevieve Bell',
              title: 'Director of the 3A Institute, and Senior Fellow at Intel',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-bell-2x.jpg',
              linkedin: 'https://www.linkedin.com/in/genevievebell/'
            },
            {
              name: 'Mainak Mazumdar',
              title: 'Chief Data and Research Officer, Nielsen',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-mainak-2x.jpg',
              twitter: 'https://twitter.com/mainak',
              linkedin: 'https://www.linkedin.com/in/mainakmazumdar/'
            },
            {
              name: 'Amanda Little',
              title: 'Author, Journalist, Professor',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-little-2x.jpg',
              twitter: 'https://twitter.com/littletrip',
              linkedin: 'https://www.linkedin.com/in/amanda-griscom-little-2480bb25/'
            },
            {
              name: 'Paul D. Miller aka DJ Spooky',
              title: 'Composer, multimedia artist, writer',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-spooky-2x.jpg',
              twitter: 'https://twitter.com/djspooky'
            }
            ]
          });
            console.log("Play Thurs Keynote 2");
        });

        // Thurs Keynote #3
        jQuery("#keynote-thurs-3 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'The future of human-robot interaction',
            description: 'The robots are coming and they are getting smarter, evolving from single task devices (think Roomba) into machines that can make their own decisions and autonomously navigate public spaces. From transportation systems, hospitals and the military, to the Robotization of our workplaces and households, robots will be everywhere and will increasingly interact with people. Dr. Darling explains why people fear some robots and empathize with others, while also prompting — and answering — questions about what society’s relationship with these robots could look like in the future.',
            videoID: '6200688414001',
            speakers: [
            {
              name: 'Dr. Kate Darling',
              title: 'Leading Expert in Social Robotics and MIT Media Lab Research Specialist',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-darling-no-shadow-2x.jpg',
              twitter: 'https://twitter.com/grok_'
            }
            ]
          });
            console.log("Play Thurs Keynote 3");
        });

        // Thurs Keynote #4
        jQuery("#keynote-thurs-4 .btn.play").on("click", function (e) {            
          e.preventDefault();
          window.dveMediaPlayer.playMedia({
            title: 'Redefining possible: How technology is pushing the boundaries of what\'s next',
            description: 'If there is one thing 2020 has taught us is that our world is unpredictable. We’ve been thrown curveballs at every turn as we work to imagine our new normal — some that propel us and some that seemingly limit us. What if we could challenge what\'s expected and define our new realities? Hear four inspiring stories of how people are using technology to create new opportunities for society and redefining what was thought possible. Because we may not know what’s in store but we should always be open to the possibilities.',
            videoID: '6200691724001',
            speakers: [
            {
              name: 'Charles Lim',
              title: 'Chief Technology Officer, eSight',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-lim-2x.jpg',
              linkedin: 'https://www.linkedin.com/in/charlesqlim'
            },
            {
              name: 'Jasmine Crowe',
              title: 'Founder, Goodr',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-crowe-2x.jpg',
              twitter: 'https://twitter.com/jasminecrowe',
              linkedin: 'https://www.linkedin.com/in/jasminecrowe'
            },
            {
              name: 'Jenna Blaha',
              title: 'Technology Editor and Consultant',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-blaha-2x.jpg',
              twitter: 'https://twitter.com/jennablaha',
              linkedin: 'https://www.linkedin.com/in/jennablaha'
            },
            {
              name: 'Beatie Wolfe',
              title: 'Pioneering musician and artist',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-wolfe-2x.jpg',
              twitter: 'https://twitter.com/beatiewolfe',
              linkedin: 'https://www.linkedin.com/in/beatiewolfe/'
            },
            {
              name: 'Lauren Ancel Meyers',
              title: 'Cooley Centennial Professor of Integrative Biology and Statistics & Data Sciences, Director of the COVID-19 Modeling Consortium, The University of Texas',
              photo: '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/images/speakers/speaker-meyers-2x.jpg',
              twitter: 'https://twitter.com/meyerslab'
            }
            ]
          });
            console.log("Play Thurs Keynote 4");
        });

      }
    };
  
  
    /* Init functions
    ========================================================================== */
    DTWorldKeynotes.startup = {
      init: function () {
        DTWorldKeynotes.app.init();
      }
    };
  }(window.DTWorldKeynotes = window.DTWorldKeynotes || {}));
  
  jQuery(document).ready(window.DTWorldKeynotes.startup.init); // Ready event
  
  