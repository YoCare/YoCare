export default {
    elementId: "main-navbar",
    isUsingVueRouter: true,
    mobileBreakpoint: 992,
    collapseButtonOpenColor: "#7964fe",
    collapseButtonCloseColor: "#7964fe",
    showBrandImageInMobilePopup: true,
    ariaLabelMainNav: "Main Navigation",
    /*brandImagePath: "./home",
    brandImage: require("@/assets/logo.png"),
    brandImageAltText: "brand-image",*/
    tooltipAnimationType: "shift-away",
    tooltipPlacement: "bottom",
    menuOptionsLeft: [
        {
            type: "link",
            text: "",
            path: "/home",
            iconRight: '<i class="mdi mdi-home"></i>',
        },
        {
            type: "link",
            text: "Teoria",
            arrowColor: "#7964fe",
            subMenuOptions: [
                {
                    type: "link",
                    text: "Sezioni",
                    path: "/sezioni",
                    iconLeft: '<i class="mdi mdi-arrow-bottom-right"></i>'
                },
                {
                    type: "link",
                    text: "Covid-19",
                    path: "/chapter/covid",
                    iconLeft: '<i class="mdi mdi-arrow-bottom-right"></i>'
                },
                {
                    type: "link",
                    text: "Fake News",
                    path: "/chapter/fakenews",
                    iconLeft: '<i class="mdi mdi-arrow-bottom-right"></i>'
                },
            ]
        },
        {
            type: "link",
            text: "Consigli",
            path: "/chapter/consigli",
            //iconRight: '<i class="mdi mdi-arrow-bottom-right"></i>',
        },
        {
            type: "link",
            text: "Quiz",
            path: "/quiz",
            //iconRight: '<i class="mdi mdi-arrow-bottom-right-thick"></i>',
        },
    ],
    menuOptionsRight: [
        {
            type: "link",
            text: "Aiuto",
            path: "/help",
            iconLeft: '<i class="mdi mdi-help" />',
        },
        {
            type: "link",
            text: "Crediti",
            path: "/about",
            iconLeft: '<i class="mdi mdi-account-group" />',
        },
        {
            type: "link",
            text: "",
            path: "",
            iconRight: '&nbsp;&nbsp;&nbsp;',
        }
    ]
}