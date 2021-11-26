// JavaScript Document

///////////////////////////////////////////
//	CONFIG
///////////////////////////////////////////


///////////////////////////////////////////
//	GLOBALS
///////////////////////////////////////////


///////////////////////////////////////////
//	MAIN
///////////////////////////////////////////
/* eslint-disable */

var json = {};

var jsonMain = {
  navroot: {
    'title': "Menu",
    'href': 'index.htm',
    'target': '',
    // 'dellMetrics': "{'btnname':'nav|sub|dtw|home'}",
  },
  menu:
  [
    // {
    //   'title': "Home",
    //   'href': 'dtw-index.htm',
    //   'dellMetrics': "{'btnname':'nav|sub|dtw|index'}",
    //   'class': 'mobile-only'
    // },
    {
      'title': "The Experience",
      'href': '/index.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|index'}",
    },
    {
      'title': "Agenda",
      'href': '/agenda.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|agenda'}",
      
    },
    {
      'title': "Keynotes & Gurus",
      'href': 'javascript:void();',
      // 'dellMetrics': "{'btnname':'nav|sub|dtw|keynotes-and-gurus'}"
      'submenu': [
        [
          {
            'title': "Keynotes",
            // 'description': "",
            'href': '/keynotes.htm',
            'dellMetrics': "{'btnname':'nav|sub|dtw|keynotes-and-gurus|keynotes'}",
          },
          {
            'title': "Speakers",
            // 'description': "",
            'href': '/speakers.htm',
            'dellMetrics': "{'btnname':'nav|sub|dtw|keynotes-and-gurus|speakers'}",
          }
        ]
      ]
    },
    {
      'title': "Breakout Sessions",
      'href': '/breakout-sessions.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|breakout-sessions'}",
      
    },
    {
      'title': "Sponsors",
      'href': '/sponsors.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|sponsors'}",
      
    },
    {
      'title': "Blog",
      'href': 'https://blog.delltechnologiesworld.com/',
      // 'target': "",
      'dellMetrics': "{'btnname':'nav|sub|dtw|blog'}",
      'class': ''
    },
    {
      'title': "Register Now",
      'href': 'https://onlinexperiences.com/Launch/QReg.htm?ShowUUID=47A2EFAE-2260-4D1F-8FAD-61C8E803BD98',
      'dellMetrics': "{'btnname':'nav|sub|dtw|register'}",
      'class': 'mobile-only button-with-icon button-with-icon--registration'
    },

    {
      'title': "Save the Date",
      'href': '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/ics/DTWe_SavetheDate.ics',
      'target': "_self",
      'dellMetrics': "{'btnname':'nav|sub|dtw|save-the-date'}",
      'class': 'mobile-only button-with-icon button-with-icon--save-the-date'
    }
  ]
};
var jsonContingency = {
  navroot: {
    'title': "Menu",
    'href': 'index.htm',
    'target': '',
    // 'dellMetrics': "{'btnname':'nav|sub|dtw|home'}",
  },
  menu:
  [
    // {
    //   'title': "Home",
    //   'href': 'dtw-index.htm',
    //   'dellMetrics': "{'btnname':'nav|sub|dtw|index'}",
    //   'class': 'mobile-only'
    // },
    {
      'title': "The Experience",
      'href': '/live/index.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|live|index'}",
    },
    // {
    //   'title': "Agenda",
    //   'href': '/agenda.htm',
    //   'dellMetrics': "{'btnname':'nav|sub|dtw|live|agenda'}",
      
    // },
    {
      'title': "Keynotes",
      'href': 'javascript:void();',
      // 'dellMetrics': "{'btnname':'nav|sub|dtw|live|keynotes-and-gurus'}"
      'submenu': [
        [
          {
            'title': "Keynotes",
            // 'description': "",
            'href': '/live/keynotes.htm',
            'dellMetrics': "{'btnname':'nav|sub|dtw|live|keynotes-and-gurus|keynotes'}",
          },
          {
            'title': "Speakers",
            // 'description': "",
            'href': '/live/speakers.htm',
            'dellMetrics': "{'btnname':'nav|sub|dtw|live|keynotes-and-gurus|speakers'}",
          }
        ]
      ]
    },
    {
      'title': "Breakout Sessions",
      'href': '/live/breakout-sessions.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|breakout-sessions'}",
      
    },
    {
      'title': "Interactive Demos",
      'href': '/live/interactive-demos.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|interactive-demos'}",
      
    },
    {
      'title': "Sponsors",
      'href': '/live/sponsors.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|sponsors'}",
      
    },
    {
      'title': "Blog",
      'href': 'https://blog.delltechnologiesworld.com/',
      // 'target': "",
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|blog'}",
      'class': ''
    },
    {
      'title': "Register Now",
      'href': 'https://onlinexperiences.com/Launch/QReg.htm?ShowUUID=47A2EFAE-2260-4D1F-8FAD-61C8E803BD98',
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|register'}",
      'class': 'mobile-only button-with-icon button-with-icon--registration'
    },

    {
      'title': "Save the Date",
      'href': '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2020/ics/DTWe_SavetheDate.ics',
      'target': "_self",
      'dellMetrics': "{'btnname':'nav|sub|dtw|live|save-the-date'}",
      'class': 'mobile-only button-with-icon button-with-icon--save-the-date'
    }
  ]
};
var jsonPostEvent = {
  navroot: {
    'title': "/World",
    'href': '',
    'target': '',
    'dellMetrics': "{'btnname':'nav|sub|dtw|index'}",
  },
  menu:
  [
    // {
    //   'title': "Home",
    //   'href': '/post-event/index.htm',
    //   'dellMetrics': "{'btnname':'nav|sub|dtw|post-event|index'}",
    //   'class': 'mobile-only'
    // },
    // {
    //   'title': "/World",
    //   'href': '/index.htm',
    //   'dellMetrics': "{'btnname':'nav|sub|dtw|index'}",
    // },
    {
      'title': "The Experience",
      'href': '/content/emc/en/events/delltechnologiesworld/index.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|experience'}",
      'class': 'delltechnologiesworld-link'
    },
    {
      'title': "Keynotes and Gurus",
      'href': '/content/emc/en/events/delltechnologiesworld/keynotes.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|keynotes'}",
      'class': 'delltechnologiesworld-link'
    },
    {
      'title': "Speakers",
      'href': '/content/emc/en/events/delltechnologiesworld/speakers.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|speakers'}",
      'class': 'delltechnologiesworld-link'
    },
    {
      'title': "Sponsors",
      'href': '/content/emc/en/events/delltechnologiesworld/sponsors.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|sponsors'}",
      'class': 'delltechnologiesworld-link'
    },
    {
      'title': "2020 Session Catalog",
      'href': '/content/emc/en/events/delltechnologiesworld/2020/sessions.htm',
      'dellMetrics': "{'btnname':'nav|sub|dtw|sessions'}",
      'class': 'delltechnologiesworld-link'
    }
  ],
  sideMenu:
  [
    {
      'title': "Save the Date",
      'href': '/content/dam/uwaem/production-design-assets/en/microsites/dellemcworld/2021/ics/dtw21-savethedate.ics',
      'dellMetrics': "{'btnname':'nav|sub|dtw|save-the-date'}",
      'class': 'delltechnologiesworld-link with-icon icon-save-the-date'
    },
    {
      'title': "Sign Up",
      'href': 'https://web.cvent.com/event/a1bcaedc-00fc-43a9-b24b-066e11a8396c/regProcessStep1',
      'target': '_blank',
      'dellMetrics': "{'btnname':'nav|sub|dtw|sign-up'}",
      'class': 'delltechnologiesworld-link blue-cta with-icon icon-sign-up'
    }
  ]
};
/* eslint-enable */

(function (DTWORLD) {
  'use strict';


  /* SUBMENU
  ========================================================================== */
  DTWORLD.submenu = {
    init: function () {
      console.log('DTWORLD.submenu.init')
      this.submenu = null
      this.submenuItems = null
      this.AEMPath = '/content/emc/en/microsites/dellemcworld/'
      this.AEMPath2020 = '/content/emc/en/events/delltechnologiesworld/'
      this.localPathsArray = [
        {
          localDomain: 'io.local',
          localDirectory: '/rebellion-workspace/dell-tech-cloud-site/html/'
        }
      ]

      if (location.pathname.indexOf('live') > -1) {
        console.log('ON CONTINGENCY PAGE');
        json = jsonContingency;
      } else if (location.pathname.indexOf('post-event') > -1) {
        console.log('ON POST EVENT PAGE');
        json = jsonPostEvent;
      } else if (location.pathname.indexOf('during-event') > -1) {
        console.log('ON DURING EVENT PAGE');
        json = jsonMain;
      } else {
        json = jsonPostEvent;
      }

      var subnavContainer = document.getElementsByClassName('rdc-header-subnav')[0];
      if (subnavContainer) {
        // DTWORLD.submenu.parseJSON();
      }

      DTWORLD.submenu.bindEvents();
      // DTWORLD.submenu.fixPath();
      // DTWORLD.submenu.fixNavLinks();
      setTimeout(function () {
        DTWORLD.submenu.selectActive();
      }, 1000)

      window.addEventListener('resize', DTWORLD.submenu.resizeEventHandler)

      // contingency nav
      if (location.pathname.indexOf('live') > -1) {
        console.log('ON CONTINGENCY PAGE');
        var headerContainer = document.getElementsByClassName('dt-world-header')[0];
        if (headerContainer) {
          headerContainer.classList.add('contingency');
        }
        var subnavContainer = document.getElementsByClassName('rdc-header-subnav')[0];
        if (subnavContainer) {
          subnavContainer.classList.add('contingency');
        }
      } else if (location.pathname.indexOf('post-event') > -1) {
        console.log('ON POST EVENT PAGE');
        var headerContainer = document.getElementsByClassName('dt-world-header')[0];
        if (headerContainer) {
          headerContainer.classList.add('post-event');
        }
        var subnavContainer = document.getElementsByClassName('rdc-header-subnav')[0];
        if (subnavContainer) {
          subnavContainer.classList.add('post-event');
        }
      }else if (location.pathname.indexOf('during-event') > -1) {
        console.log('ON DURING EVENT PAGE');
        var headerContainer = document.getElementsByClassName('dt-world-header')[0];
        if (headerContainer) {
          headerContainer.classList.add('during-event');
        }
        // var subnavContainer = document.getElementsByClassName('rdc-header-subnav')[0];
        // if (subnavContainer) {
        //   subnavContainer.classList.add('during-event');
        // }
      }
    },

    resizeEventHandler: function () {
      if (DTWORLD.submenu.submenu.find('.has-dropdown.dd-open').find('.rdc-header-menu-dropdown')[0]) {
        DTWORLD.submenu.setDropDownPosition(DTWORLD.submenu.submenu.find('.has-dropdown.dd-open').find('.rdc-header-menu-dropdown')[0])
      }
    },

    fixPath: function () {
      var that = this
      for (var i = 0; i < this.localPathsArray.length; i++) {
        var localPathObj = this.localPathsArray[i]
        var localDomain = localPathObj.localDomain
        var localPath = localPathObj.localDirectory
        console.log(localDomain, localPath)
        if (window.location.href.indexOf(localDomain) > -1) {
          jQuery('.rdc-header-subnav a').each(function () {
            // console.log(this)
            jQuery(this).attr('href', jQuery(this).attr('href').replace(that.AEMPath, localPath));
          });
          return 'http://io.local/rebellion-workspace/dell-tech-cloud-site/html/'
        }
      }

      return
    },

    fixNavLinks: function () {
      console.log(window.location)
      if (location.hostname.indexOf('preview.delltechnologies.com') > -1 || location.hostname.indexOf('preview-delltechnologies.emc.com') > -1) {
        console.log('on preview')
        // jQuery('.rdc-header-subnav a:not(.delltechnologiesworld-link), .dt-world-header .header-logo a').each(function () {
        //   // console.log(this)
        //   var href = jQuery(this).attr('href')
        //   if (href && href.indexOf('javascript') === -1 && href.indexOf('https') === -1) {
        //     jQuery(this).attr('href', jQuery(this).attr('href').replace(href, '/en-us/microsites/dellemcworld/2020' + href));
        //   }
        // });
        // for /en-us/events/delltechnologiesworld/2020/ directory
        // jQuery('.rdc-header-subnav a.delltechnologiesworld-link').each(function () {
        //   // console.log(this)
        //   var href = jQuery(this).attr('href')
        //   if (href && href.indexOf('javascript') === -1 && href.indexOf('https') === -1) {
        //     jQuery(this).attr('href', jQuery(this).attr('href').replace(href, '/en-us/events/delltechnologiesworld/2020' + href));
        //   }
        // });
      } else if (location.hostname.indexOf('io.local') > -1) {
        console.log('on local')
        jQuery('.rdc-header-subnav a, .dt-world-header .header-logo a').each(function () {
          // console.log(this)
          var href = jQuery(this).attr('href')
          console.log(href)
          // console.log(href.indexOf('javascript'))
          if (href && href.indexOf('javascript') === -1 && href.indexOf('https') === -1) {
            jQuery(this).attr('href', jQuery(this).attr('href').replace(href, '/rebellion-workspace/dell-tech-world-2020/html' + href));
          }
        });
      } else if (location.hostname.indexOf('delltechnologiesworld.com') > -1 && location.pathname.indexOf('/2020/') > -1) {
        console.log('on delltechnologiesworld 2020 do nothing')
        jQuery('.rdc-header-subnav a, .dt-world-header .header-logo a').each(function () {
          console.log(this)
          var href = jQuery(this).attr('href')
          if (href && href.indexOf('javascript') === -1 && href.indexOf('https') === -1) {
            console.log('href: ' + href)
            var href2 = href.replace('/en-us/microsites/dellemcworld/2020', '')
            console.log('href2: ' + href2)

            var href3 = href2.replace(href2, '/2020' + href2)
            console.log('href2: ' + href2)

            jQuery(this).attr('href', href3);
          }
        });
      }
    },

    selectActive: function () {
      // console.log('selectActive()')
      var firstTier = document.getElementsByClassName('first-tier-list-item')
      for (var i = 0; i < firstTier.length; i++) {
        // console.log(firstTier[i])
        var firstTier_a = firstTier[i].getElementsByTagName('a')[0]
        // console.log(firstTier_a)
        // for (var s = 0; s < firstTier_a.length; s++) {
        var a = firstTier_a
        // console.log(a.getAttribute('href'))
        var href = a.getAttribute('href')//.replace('https://preview.emc.com/', '')
        // console.log(window.location.pathname)
        // console.log(href)
        href = DTWORLD.submenu.removeHash(href)
        // console.log(href)
        if (window.location.pathname.indexOf(href) > -1) {
          // console.log('found one', href)
          a.parentNode.classList.add('active')
          // firstTier[i].parentNode.classList.add('active')
        }
        // }
      }

      var dd = document.getElementsByClassName('rdc-header-menu-dropdown')
      // var location = window.location
      // console.log('location', location)
      // var origin = location.origin

      for (var i = 0; i < dd.length; i++) {
        // console.log(dd[i])
        var dd_a = dd[i].getElementsByTagName('a')
        // console.log(dd_a)
        for (var s = 0; s < dd_a.length; s++) {
          var a = dd_a[s]
          // console.log(a.getAttribute('href'))
          var href = a.getAttribute('href')//.replace('https://preview.emc.com/', '')
          // console.log(window.location.pathname)
          // console.log(href)
          href = DTWORLD.submenu.removeHash(href)
          if (window.location.pathname.indexOf(href) > -1) {
            // console.log('found one', href)
            a.parentNode.classList.add('active')
            dd[i].parentNode.classList.add('active')
          }
        }
      }
    },

    removeHash: function (href) {
      var myLink = href.split('.htm')[0] + '.htm';
      // console.log(myLink)
      return myLink;
    },

    parseJSON: function () {
      console.log('parseJSON()')
      var RDCHeaderSubnav = document.getElementsByClassName('rdc-header-subnav')[0]

      // create submenu container
      // var submenDiv = document.createElement('div')
      // submenDiv.classList.add('rdc-header-subnav');
      // GHFHeaderComponent.appendChild(submenDiv)

      var submenInnerDiv = document.createElement('div')
      submenInnerDiv.classList.add('rdc-header-inner');
      RDCHeaderSubnav.appendChild(submenInnerDiv)

      var submenTopDiv = document.createElement('div')
      submenTopDiv.classList.add('rdc-header-top');
      submenInnerDiv.appendChild(submenTopDiv)

      var submenWrapperDiv = document.createElement('div')
      submenWrapperDiv.classList.add('rdc-header-wrapper');
      submenInnerDiv.appendChild(submenWrapperDiv)

      // submeu left
      var submenLeftDiv = document.createElement('div')
      submenLeftDiv.classList.add('rdc-header-left');
      submenWrapperDiv.appendChild(submenLeftDiv)

      var submenLeftTitleDiv = document.createElement('div')
      submenLeftTitleDiv.classList.add('rdc-header-page-title');
      submenLeftDiv.appendChild(submenLeftTitleDiv)

      // var sTitleNode = document.createElement('span')

      var titleTextNode = DTWORLD.submenu.createANode(json.navroot)
      submenLeftTitleDiv.appendChild(titleTextNode)

      // sTitleNode.appendChild(titleTextNode)

      //submeu right
      var submenRightDiv = document.createElement('div')
      submenRightDiv.classList.add('rdc-header-right');
      submenWrapperDiv.appendChild(submenRightDiv)

      var menuContainer = document.createElement('div')
      menuContainer.classList.add('rdc-header-menu');
      menuContainer.classList.add('json-build');
      submenRightDiv.appendChild(menuContainer)


      var ulNode = document.createElement('ul')
      ulNode.classList.add('first-tier-list')
      menuContainer.appendChild(ulNode)

      var menuJSON = json.menu
      for (var i = 0; i < menuJSON.length; i++) {
        var liNode = document.createElement('li')
        liNode.classList.add('first-tier-list-item')
        ulNode.appendChild(liNode)
        menuJSON[i].classList = 'first-tier'
        var aNode = DTWORLD.submenu.createANode(menuJSON[i])
        liNode.appendChild(aNode)

        if (aNode.classList.contains('mobile-only')) {
          console.log('found mobile only parent')
          liNode.classList.add('mobile-only')
        }

        // SUBMENU
        if(menuJSON[i].submenu) {
          liNode.classList.add('has-dropdown')
          DTWORLD.submenu.createSubmenu(menuJSON[i].submenu, liNode)
        }
      }

      var ulNode = document.createElement('ul')
      ulNode.classList.add('first-tier-list-side-menu')
      menuContainer.appendChild(ulNode)

      var menuJSON = json.sideMenu
      if(menuJSON) {
        for (var i = 0; i < menuJSON.length; i++) {
          var liNode = document.createElement('li')
          liNode.classList.add('first-tier-list-item')
          ulNode.appendChild(liNode)
          menuJSON[i].classList = 'first-tier'
          var aNode = DTWORLD.submenu.createANode(menuJSON[i])
          liNode.appendChild(aNode)

          if (aNode.classList.contains('mobile-only')) {
            console.log('found mobile only parent')
            liNode.classList.add('mobile-only')
          }

          // SUBMENU
          if(menuJSON[i].submenu) {
            liNode.classList.add('has-dropdown')
            DTWORLD.submenu.createSubmenu(menuJSON[i].submenu, liNode)
          }
        }
      }
    },

    createSubmenu: function (submenuObject, container) {
      // console.log(submenuObject)
      // console.log(container)

      var submenuDivNode = document.createElement('div')
      submenuDivNode.classList.add('rdc-header-menu-dropdown')
      container.appendChild(submenuDivNode)

      var clone = container.getElementsByTagName('a')[0].cloneNode(true)
      clone.classList.add('drop-down-title-button')
      clone.classList.add('mobile-title-clone')
      clone.classList.remove('dellmetrics-dataclick')
      clone.removeAttribute('data-metrics')
      submenuDivNode.appendChild(clone)

      for (var p = 0; p < submenuObject.length; p++) {
        var submenUllNode = document.createElement('ul')
        submenUllNode.classList.add('second-tier-list')
        submenuDivNode.appendChild(submenUllNode)

        var submenu = submenuObject[p]
        for (var s = 0; s < submenu.length; s++) {
          // console.log(submenu[s])
          var submenuLiNode = document.createElement('li')
          submenuLiNode.classList.add('second-tier-list-item')
          // console.log(submenu[s].class)
          if (submenu[s].class) {
            submenuLiNode.classList.add(submenu[s].class)
          }
          submenuLiNode.classList.add('second-tier-list-item')
          submenUllNode.appendChild(submenuLiNode)
          submenu[s].classList = 'second-tier'
          var aNode = DTWORLD.submenu.createANode(submenu[s])
          submenuLiNode.appendChild(aNode)

          // console.log(submenu[s].submenu)
          if(submenu[s].submenu){
            DTWORLD.submenu.createSecondarySubmenu(submenu[s].submenu, submenuLiNode)
          }
        }
      }
    },

    createSecondarySubmenu: function (submenuObject, container) {
      var submenuDivNode = document.createElement('div')
      submenuDivNode.classList.add('submenu');
      submenuDivNode.classList.add('secondary');
      container.appendChild(submenuDivNode)

      var submenUllNode = document.createElement('ul')
      submenuDivNode.appendChild(submenUllNode)

      var submenu = submenuObject
      for (var s = 0; s < submenu.length; s++) {
        var submenuLiNode = document.createElement('li')
        submenUllNode.appendChild(submenuLiNode)
        var aNode = DTWORLD.submenu.createANode(submenu[s])
        submenuLiNode.appendChild(aNode)
      }
    },

    createANode: function (obj) {
      // console.log(obj)
      var aNode = document.createElement('a')

      var absolutePath = ''

      // console.log('obj.href: ' + obj.href)
      // console.log(obj.href.indexOf('javascript'))
      // console.log(obj.href.indexOf('https'))

      // console.log('absolutePath: ' + absolutePath)

      // absolutePath = '/rebellion-workspace/dell-tech-world-2020/html/'

      // var dWrapperNode = document.createElement('div')
      // dWrapperNode.classList.add('rdc-header-menu-item-wrapper');
      // aNode.appendChild(dWrapperNode)

      var sTitleNode = document.createElement('span')
      sTitleNode.classList.add('title');
      var titleTextNode = document.createTextNode(obj.title);
      aNode.appendChild(sTitleNode)
      aNode.classList.add('rdc-header-menu-item')
      aNode.setAttribute('href', absolutePath + obj.href);
      aNode.setAttribute('title', obj.title);
      if (obj.target) {
        aNode.setAttribute('target', obj.target);
      }
      sTitleNode.appendChild(titleTextNode)

      if (obj.description) {
        var sDescNode = document.createElement('span')
        sDescNode.classList.add('desc');
        var descTextNode = document.createTextNode(obj.description);
        aNode.appendChild(sDescNode)
        // aNode.classList.add('title-desc')
        sDescNode.appendChild(descTextNode)
      }

      if (obj.classList) {
        // console.log(obj.classList)
        aNode.classList.add(obj.classList)
      }

      if(obj.class) {
        var str = obj.class;
        // console.log(str)

        if (str.indexOf('mobile-only') > -1) {
          // console.log('found mobile-only')
          // console.log(obj)
          // console.log(obj.classList)
          // aNode.classList.add(obj.classList)
        }
      }

      if(obj.classList === 'second-tier'){
        var arrowEl = document.createElement('div')
        arrowEl.classList.add('icon-arrow');
        sTitleNode.appendChild(arrowEl)
      }

      if (obj.class) {
        // console.log(aNode.parentElement)
        var classArray = obj.class.split(' ')
        for (var i = 0; i < classArray.length; i++) {
          aNode.classList.add(classArray[i])
        }
      }

      if (obj.dellMetrics) {
        // console.log(obj.dellMetrics)
        aNode.classList.add('dellmetrics-dataclick')
        aNode.setAttribute('data-metrics', obj.dellMetrics);
      }
      // console.log(aNode)
      return aNode
    },

    bindEvents: function () {
      var that = this;
      this.submenu = $('.rdc-header-menu')
      this.submenuItems = this.submenu.find('> ul > li')
      // console.log(this.submenuItems)
      var ciArray = null;
      var current = null;
      var myClickedItem = null;
      var activeClick = null;

      this.submenu.find('.has-dropdown > a').on('click', function (e) {
        e.preventDefault()

        ciArray = that.submenu.find('.has-dropdown');
        myClickedItem = $(this)[0];

        // find current item clicked in ciArray and remove element
        for (var i = 0; i < ciArray.length; i++) {
          current = $(ciArray[i]).find('> a')[0]

          if(current === myClickedItem) {
            // console.log('found one', i)
            activeClick = ciArray.splice(i, 1)
          }
        }

        ciArray.removeClass('dd-open')
        $(this).parent().toggleClass('dd-open')

        DTWORLD.submenu.setDropDownPosition($(this).parent().find('.rdc-header-menu-dropdown')[0])
      })

      // bind dropdown title button to click to close function
      this.submenu.find('.drop-down-title-button').on('click', function (e) {
        e.preventDefault()
        $(this).parent().parent().toggleClass('dd-open')
      })

      // bind dropdown title button to click to close function
      $('.rdc-header-page-title').on('click', function (e) {
        // console.log('window.innerWidth ', window.innerWidth)
        if (window.innerWidth < 1280) {
          e.preventDefault();
          $(this).toggleClass('title-expanded');
          $('.rdc-header-right').toggleClass('expanded');
          $('.rdc-header-subnav').toggleClass('subnav-expanded');
          // console.log('title clicked');
        }
      })

      $(document).on('click', function (event) {
        if(!$(event.target).closest('.first-tier-list-item').length){
          $('.dropdown-menu').slideUp('fast');
          // console.log($(event.target).closest('.first-tier-list-item'))
          // console.log('close this')
          // console.log(activeClick)
          $(activeClick).removeClass('dd-open')
        }
      });
    },

    setDropDownPosition: function (dd) {
      dd.style.cssText = ''

      var dropdownRec = dd.getBoundingClientRect(),
        windowWidth = window.innerWidth

      var offsetRight = windowWidth - dropdownRec.right
      // console.log(offsetRight)

      if (windowWidth >= 980 && offsetRight < 0) {
        dd.style.left = offsetRight - 10 + 'px'
      }
    }
  }
}(window.DTWORLD = window.DTWORLD || {}));


jQuery(document).ready(
  function (){
    window.DTWORLD.submenu.init()
  }
); // Ready event

jQuery(document).ready(function () {
  jQuery('a[href*=QReg]').each(function (ix, el) {
    var urlParams = ['cid', 'dgc', 'lid', 'AffiliateData'];
    var originalHREF = jQuery(el).attr('href');
    var newHREF = originalHREF.trim();
    var separator = originalHREF.indexOf('?') >= 0 ? '&' : '?';
    for (var p = 0; p < urlParams.length; p++) {
      if (UW.util.getUrlParameter(urlParams[p])) {
        newHREF += separator + urlParams[p] + '=' + UW.util.getUrlParameter(urlParams[p]);
        separator = '&';
      }
    }
    jQuery(el).attr('href', newHREF);
  });
});

// copy tracking codes from page URL to Cvent links
var dellcopyurlparams = {

  paramsAllowedToCopy: { // add values to this list, set to true if you want them copied. remove or set to false if you don't want them copied
    RefID: true,
    dgc: true,
    cid: true,
    lid: true
  },

  init: function () {
    var targetAs = document.querySelectorAll('a[href*="cvent\.com"]');
    for (var i = 0; i < targetAs.length; i++) {
      dellcopyurlparams.copy(targetAs[i]);
    }
  },
  getParams: function (url) {
    formVars={};
    if (url.indexOf('?') >= 0) {
      sGet = url.substr(url.indexOf('?') + 1);
      sGet = sGet.split('&amp;').join('&');
      var sNVPairs = sGet.split('&');
      for (var i=0; i < sNVPairs.length; i++) {
        var sNV = sNVPairs[i].split('=');
        formVars[sNV[0]] = sNV[1];
      }
      return formVars;
    } else {
      return false;
    }
  },
  copy: function (el) {
    var newQueryString = '?';
    var formURL = el.getAttribute('href');
    var formVars = dellcopyurlparams.getParams(formURL);
    var urlVars = dellcopyurlparams.getParams(window.location.href);
    if (formVars) {
      base = formURL.slice(0, formURL.indexOf('?'));
    } else {
      base = formURL;
      formVars = {};
    }
    if (urlVars) {
      pageURL = window.location.href.slice(0, window.location.href.indexOf('?'));
    } else {
      pageURL = window.location.href;
    }
    for (v in urlVars) {
      if (dellcopyurlparams.paramsAllowedToCopy[v]) {
        formVars[v] = urlVars[v];
      }
    }
    for (v in formVars) {
      newQueryString += (v + '=' + formVars[v] + '&');
    }
    newQueryString=newQueryString.slice(0, -1);
    el.setAttribute('href', base + newQueryString);
  }
};

window.addEventListener('DOMContentLoaded', dellcopyurlparams.init);
dellcopyurlparams.init();
