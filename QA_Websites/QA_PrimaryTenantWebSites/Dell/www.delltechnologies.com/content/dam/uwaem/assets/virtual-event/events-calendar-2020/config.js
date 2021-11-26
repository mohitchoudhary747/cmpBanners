/* eslint-disable no-unused-vars */
// prettier-ignore
var eventsCalendarConfig = {
  sources: {

    // NA
    "en-us": [ // united states
      { source: "aem", countries: ["us", "ca"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13935", filterByLocale: false },
    ],
    "en-ca": [ // canada
      { source: "aem", countries: ["us", "ca"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13935", filterByLocale: false },
    ],
    "fr-ca": [ // canada
      { source: "aem", countries: ["us", "ca"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13935", filterByLocale: false },
    ],

    // EMEA
    "en-al": [ // albania
      { source: "aem", countries: ["al"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "de-at": [ // austria de
      { source: "aem", countries: ["at"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12671", filterByLocale: false, webinarsPageLocale: "de-de" }
    ],
    "ru-az": [ // azerbaijan
      { source: "aem", countries: ["az"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "ru-ru" }
    ],
    "ru-by": [ // belarus
      { source: "aem", countries: ["by"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "ru-ru" }
    ],
    "nl-be": [ // belgium en
      { source: "aem", countries: ["be"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18143", filterByLocale: false }
    ],
    "fr-be": [ // belgium fr
      { source: "aem", countries: ["be"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18143", filterByLocale: false, webinarsPageLocale: "nl-be" }
    ],
    "en-ba": [ // bosnia/herz
      { source: "aem", countries: ["ba"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-bg": [ // bulgaria
      { source: "aem", countries: ["bg"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-hr": [ // croatia
      { source: "aem", countries: ["hr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "cs-cz": [ // czech rep
      { source: "aem", countries: ["cz"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "da-dk": [ // denmark
      { source: "aem", countries: ["dk"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13223", filterByLocale: false }
    ],
    "en-lt": [
      {
        source: "aem",
        countries: ["al", "at", "az", "by", "be", "be", "ba", "bg", "hr", "cz", "dk", "ee", "fi", "fr", "ge", "de", "gr", "hu", "ie", "it", "lv", "lu", "mk", "nl", "no", "pl", "pt", "ro", "ru", "rs", "sk", "si", "es", "se", "ch", "ch", "tr", "ua", "gb", "af", "dz", "ao", "am", "bh", "cm", "ci", "eg", "ga", "gm", "gh", "iq", "il", "jo", "kz", "ke", "kw", "lb", "lr", "mg", "", "ma", "ng", "om", "pk", "qa", "rw", "sa", "sn", "sl ", "za", "tz", "ug", "ye", "zm"],
        includeGlobalEvents: true,
      },
      { source: "brighttalk", channelid: "10739", filterByLocale: false }
    ],
    "en-ee": [ // estonia
      { source: "aem", countries: ["ee"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "fi-fi": [ // finland
      { source: "aem", countries: ["fi"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13223", filterByLocale: false }
    ],
    "fr-fr": [ // france
      { source: "aem", countries: ["fr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false }
    ],
    "ru-ge": [ // georgia
      { source: "aem", countries: ["ge"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "ru-ru" }
    ],
    "de-de": [ // germany
      { source: "aem", countries: ["de"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12671", filterByLocale: false }
    ],
    "el-gr": [ // greece
      { source: "aem", countries: ["gr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "hu-hu": [ // hungary
      { source: "aem", countries: ["hu"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-ie": [ // ireland
      { source: "aem", countries: ["ie"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18260", filterByLocale: false }
    ],
    "it-it": [ // italy
      { source: "aem", countries: ["it"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13067", filterByLocale: false }
    ],
    "en-lv": [ // latvia
      { source: "aem", countries: ["lv"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "fr-lu": [ // luxembourg
      { source: "aem", countries: ["lu"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18143", filterByLocale: false, webinarsPageLocale: "nl-be" }
    ],
    "en-mk": [ // macedonia
      { source: "aem", countries: ["mk"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "nl-nl": [ // netherlands
      { source: "aem", countries: ["nl"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18142", filterByLocale: false }
    ],
    "no-no": [ // norway
      { source: "aem", countries: ["no"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13223", filterByLocale: false }
    ],
    "pl-pl": [ // poland
      { source: "aem", countries: ["pl"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13071", filterByLocale: false }
    ],
    "pt-pt": [ // portugal
      { source: "aem", countries: ["pt"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13069", filterByLocale: false, webinarsPageLocale: "es-es" }
    ],
    "ro-ro": [ // romania
      { source: "aem", countries: ["ro"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18234", filterByLocale: false }
    ],
    "ru-ru": [ // russia
      { source: "aem", countries: ["ru"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false }
    ],
    "en-rs": [ // serbia
      { source: "aem", countries: ["rs"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "sk-sk": [ // slovakia
      { source: "aem", countries: ["sk"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-si": [ // slovenia
      { source: "aem", countries: ["si"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "es-es": [ // spain
      { source: "aem", countries: ["es"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13069", filterByLocale: false }
    ],
    "sv-se": [ // sweden
      { source: "aem", countries: ["se"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13223", filterByLocale: false }
    ],
    "fr-ch": [ // switzerland fr
      { source: "aem", countries: ["ch"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18144", filterByLocale: false }
    ],
    "de-ch": [ // switzerland de
      { source: "aem", countries: ["ch"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18144", filterByLocale: false }
    ],
    "tr-tr": [ // turkey
      { source: "aem", countries: ["tr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "14159", filterByLocale: false }
    ],
    "ru-ua": [ // ukraine
      { source: "aem", countries: ["ua"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "ru-ru" }
    ],
    "en-gb": [ // great britain
      { source: "aem", countries: ["gb"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12391", filterByLocale: false }
    ],
    "en-af": [ // afghanistan
      { source: "aem", countries: ["af"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-dz": [ // algeria
      { source: "aem", countries: ["dz"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-ao": [ // angola
      { source: "aem", countries: ["ao"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "ru-am": [ // armenia
      { source: "aem", countries: ["am"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "ru-ru" }
    ],
    "en-bh": [ // bahrain
      { source: "aem", countries: ["bh"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "fr-cm": [ // cameroun
      { source: "aem", countries: ["cm"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "fr-ci": [ // cote d'ivoire
      { source: "aem", countries: ["ci"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "en-eg": [ // egypt
      { source: "aem", countries: ["eg"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "fr-ga": [ // gabon
      { source: "aem", countries: ["ga"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "en-gm": [ // gambia
      { source: "aem", countries: ["gm"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-gh": [ // ghana
      { source: "aem", countries: ["gh"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-iq": [ // iraq
      { source: "aem", countries: ["iq"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false , webinarsPageLocale: "en-ae"}
    ],
    "he-il": [ // israel
      { source: "aem", countries: ["il"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-jo": [ // jordan
      { source: "aem", countries: ["jo"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "ru-kz": [ // khazakhstan
      { source: "aem", countries: ["kz"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12667", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-ke": [ // kenya
      { source: "aem", countries: ["ke"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-kw": [ // kuwait
      { source: "aem", countries: ["kw"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-lb": [ // lebanon
      { source: "aem", countries: ["lb"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-lr": [ // liberia
      { source: "aem", countries: ["lr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "fr-mg": [ // madagascar
      { source: "aem", countries: ["mg"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "en-ae": [ // en/ae -- does not exist in event content fragments
      // { source: "aem", countries: [""], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false }
    ],
    "fr-ma": [ // morocco
      { source: "aem", countries: ["ma"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "en-ng": [ // nigeria
      { source: "aem", countries: ["ng"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-om": [ // oman
      { source: "aem", countries: ["om"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-pk": [ // pakistan
      { source: "aem", countries: ["pk"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-qa": [ // qatar
      { source: "aem", countries: ["qa"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-rw": [ // rwanda
      { source: "aem", countries: ["rw"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-sa": [ // saudi arabia
      { source: "aem", countries: ["sa"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "fr-sn": [ // senegal
      { source: "aem", countries: ["sn"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "12669", filterByLocale: false, webinarsPageLocale: "fr-fr" }
    ],
    "en-sl": [ // sierra leone
      { source: "aem", countries: ["sl"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-za": [ // south africa
      { source: "aem", countries: ["za"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-tz": [ // tanzania
      { source: "aem", countries: ["tz"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-ug": [ // uganda
      { source: "aem", countries: ["ug"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],
    "en-ye": [ // yemen
      { source: "aem", countries: ["ye"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "13221", filterByLocale: false, webinarsPageLocale: "en-ae" }
    ],
    "en-zm": [ // zambia
      { source: "aem", countries: ["zm"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "10739", filterByLocale: false, webinarsPageLocale: "en-lt" }
    ],

    // LATAM
    "es-ar": [ // argentina
      { source: "aem", countries: ["ar"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-cl": [ // chile
      { source: "aem", countries: ["cl"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-co": [ // colombia
      { source: "aem", countries: ["co"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-ai": [ // latam region
      { source: "aem", countries: ["ai"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-mx": [ // mexico
      { source: "aem", countries: ["mx"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-pe": [ // peru
      { source: "aem", countries: ["pe"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-pr": [ // puerto rico
      { source: "aem", countries: ["pr"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "es-ve": [ // venezuela
      { source: "aem", countries: ["ve"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],
    "pt-br": [ // brazil
      { source: "aem", countries: ["br"], includeGlobalEvents: true },
      { source: "brighttalk", channelid: "18127", filterByLocale: true }
    ],

  }
};
