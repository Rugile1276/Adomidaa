var lang;
var enLangElem = $( "#en" );
var ltLangElem = $( "#lt" );

var langEnTrans = {
    langMainNav: "Main",
    langServicesNav: "Services",
    langInternationalCargoCarriageNav: "International cargo carriage",
    langExpeditionNav: "Expedition",
    langWarehousingNav: "Warehousing",
    langGalleryNav: "Gallery",
    langContactsNav: "Contacts",
    langReadMore: "Read more",
    // Cargo move
    langInternationalCargoCarriageDescription: "European operations",
    langCargoCarriageWesternEurope: "Cargo carriage in Western Europe",
    langCargoCarriageWesternEuropeDesc: "Daily steel, paper, construction materials and frozen goods deliveries in Benelux, France and Germany",
    langPartlyCargoCarriage: "FTL and LTL",
    langPartlyCargoCarriageDesc:"FTL and LTL network across all EU thanks to extensive partner network and warehousing agreements",
    langCargoCarriageSeaTransportation:"Cargo carriage by the sea",
    langCargoCarriageSeaTransportationDesc: "Operation in ports of Great Britain and Italy",
    langCargoCarriageToEasternEurope:"Cargo carriage in Eastern Europe",
    langCargoCarriageToEasternEuropeDesc:"Best prices and constant availability own and contract partner trucks for import/export to eastern Europe",
    // Warehousing
    langWarehousingService:"Warehousing services",


    langContactsDescription: "Adomida - our services to you",
    langOwner: "Owner",
    langPhone: "Phone",
    langEmail: "Email",
    langAdress: "Adress",
    langManager: "Manager"
};


var langLtTrans = {
    langMainNav: "Pagrindinis",
    langServicesNav: "Paslaugos",
    langInternationalCargoCarriageNav: "Krovinių pervežimas",
    langExpeditionNav: "Ekspedicija",
    langWarehousingNav: "Sandėliavimas",
    langGalleryNav: "Partneriai",
    langContactsNav: "Kontaktai",
    langReadMore: "Skaityti daugiau",
    // Cargo move
    langInternationalCargoCarriageDescription: "Darbas Europoje",
    langCargoCarriageWesternEurope: "Krovinių pervežimas vakarų Europoje",
    langCargoCarriageWesternEuropeDesc: "Kasdieniniai plieno, popieriaus, statybinių medžiagų bei šaldytos produkcijos pervežimai Belgijoje, Nyderlanduose, Prancūzijoje bei Vokietijoje",
    langPartlyCargoCarriage: "Dalinių krovinių pervežimas",
    langPartlyCargoCarriageDesc:"Pilnų ir dalinių krovinių tinklas visoje Europoje dėka sutarčių su logistikos partneriais",
    langCargoCarriageSeaTransportation:"Krovinių pervežimas vandens transportu",
    langCargoCarriageSeaTransportationDesc: "Dirbame Didžiosios Britanijos bei Italijos uostuose",
    langCargoCarriageToEasternEurope:"Krovinių pervežimas rytų Europoje",
    langCargoCarriageToEasternEuropeDesc:"Geriausios kainos ir pastovūs transporto srautai importui bei eksportui rytų Europoje – nuosavas transportas bei kontraktiniai vežėjai",
    // Warehousing
    langWarehousingService:"Sandėliavimo - perkrovimo paslaugos",

    langContactsDescription: "Adomida - mūsų paslaugos jums",
    langOwner: "Direktorius",
    langPhone: "Telefonas",
    langEmail: "El. paštas",
    langAdress: "Adresas",
    langManager: "Vadybininkas"
};
//When language is changed, active class style should be added
function setActiveClass (chandeToLang, elemToAddClass, elemToRemovClass) {
  lang = localStorage.getItem("lang");

  if (!elemToAddClass.hasClass("active")) {
    lang = chandeToLang;
    localStorage.setItem("lang", lang);

    if (elemToRemovClass.hasClass("active")){
      elemToRemovClass.removeClass("active");
    }
    if (!elemToAddClass.hasClass("active")){
        elemToAddClass.addClass("active");
    }
  }
}
//Translate inner text
function translate (translation) {
  $('[id^=lang]').each(function(index) {
    var key = $(this).attr("id");
    $(this).text(translation[key]);
  })
}

//Keep selected language after refresh
$(document).ready(function() {
  if (localStorage.getItem("lang") == undefined){
    lang = localStorage.setItem("lang", "lt");
  }

  if (localStorage.getItem("lang") == "en") {
    setActiveClass("en", enLangElem, ltLangElem);
    translate(langEnTrans);
  }else {
    setActiveClass("lt", ltLangElem, enLangElem);
    translate(langLtTrans);
  }
});

//Change language after selecting it
enLangElem.click(function() {
  setActiveClass("en", enLangElem, ltLangElem);
  translate(langEnTrans);
});

ltLangElem.click(function() {
  setActiveClass("lt", ltLangElem, enLangElem);
  translate(langLtTrans);
});
