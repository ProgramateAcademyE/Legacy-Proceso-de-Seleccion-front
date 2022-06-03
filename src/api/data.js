export const ITEMS = [
  {
    name: "Dashboard",
    icon: "fas fa-th-large",
    id: 1,
    items: [
      {
        name: "Estadisticas",
        pathname: "/dashboard",
      },
      { name: " Administrador de Usuarios", pathname: "/Users" },
      { name: "Agregar Administradores", pathname: "/register-admin" },
    ],
  },
  {
    name: "Convocatorias",
    icon: "fab fa-connectdevelop",
    id: 2,
    items: [
      {
        name: "Administrar Convocatorias",
        pathname: "/convocatoria",
      },
      {
        name: "Pruebas Técnicas",
        pathname: "/prueba",
      },
      {
        name: "Aspirantes Inscritos",
        pathname: "/convocatorias-aspirantes",
      },
    ],
  },
  // {
  // name: "Aspirantes",
  // icon: "far fa-user",
  // id: 3,
  // items: [
  // {
  // name: "Informacion Aspirantes",
  // pathname: "/InfoAspirants",
  // },
  // ],

  // },

  {
    name: "Calificaciones",
    icon: "fas fa-user-edit",
    id: 5,
    items: [
      {
        name: "SoloLearn",
        pathname: "/calificacion-sololearn",
      },
      {
        name: "Carta de Motivacion",
        pathname: "/motivationLetter",
      },
      {
        name: "Prueba Tecnica",
        pathname: "/calificacion-prueba-tecnica",
      },
    ],
  },
  {
    name: "Entrevistador - Observador",
    icon: "fa fa-star",
    id: 6,
    items: [
      {
        name: "Citas programadas",
        pathname: "/entrevistadordashboard",
      },
    ],
  },

  {
    name: "Moderador",
    icon: "fa fa-smile",
    id: 7,
    items: [
      {
        name: "Agenda programada",
        icon: "fa fa-calendar",
        pathname: "/moderadordashboard",
      },
      {
        name: "Crear entrevistas y assesments",
        icon: "fa fa-plus-circle",
        pathname: "/moderadorcrearentrevistayassesment",
      },
      {
        name: "Listado General Entrevistas",
        icon: "fa fa-list",
        pathname: "/moderadortablaentrevistas",
      },
      {
        name: "Entrevistadores",
        icon: "fa fa-star",
        pathname: "/moderadorentrevistadores",
      },
      {
        name: "Observadores",
        icon: "fa fa-smile",
        pathname: "/moderadorobservadores",
      },
      {
        name: "Aspirantes citados",
        icon: "fa fa-bullhorn",
        pathname: "/moderadoraspirantescitados",
      },
    ],
  },
];
export const ITEMS_ASPIRANTS = [
  {
    name: "Dashboard de progreso",
    icon: "fas fa-th-large",
    items: [],
    pathname: "/dashboard",
    id: 8,
  },
  {
    name: "Aplicar a la convocatoria",
    icon: "fa fa-bullhorn",
    items: [],
    pathname: "/Convocatoriasaspirante",
    id: 9,
  },
  {
    name: "Formulario de inscripcion",
    icon: "far fa-file-alt",
    items: [],
    pathname: "/inscripcion",
    id: 10,
  },

  {
    name: "Prueba Técnica",
    icon: "fas fa-laptop-code",
    items: [],
    pathname: "/aspirante",
    id: 11,
  },
  //{
  // name: "Entrevistador",
  // icon: "fas fa-star",
  //
  // id: 13,
  // items: [
  // {
  // name: "Inicio Entrevistador",
  // pathname: "/entrevistadordashboard",
  // },
  // {
  // name: "Aspirante Citados",
  // pathname: "/entrevistadoraplicantescitados",
  // },
  // ],
  //},
  //
  //{
  // name: "Observador",
  // icon: "far fa-smile",
  // id: 14,
  // items: [
  // {
  // name: "Inicio Observador",
  // pathname: "/observadordashboard",
  //
  // },
  // ],
  //},
];

export const ITEMS_MODERATOR = [
  {
    name: "INICIO",
    icon: "fas fa-th-large",
    items: [],
    pathname: "/dashboard",
    id: 15,
  },
  {
    name: "Agenda programada",
    icon: "fa fa-calendar",
    items: [],
    pathname: "/moderadordashboard",
    id: 16,
  },
  {
    name: "Crear entrevistas y assesments",
    icon: "fa fa-plus-circle",
    items: [],
    pathname: "/moderadorcrearentrevistayassesment",
    id: 17,
  },
  {
    name: "Listado General Entrevistas",
    icon: "fa fa-list",
    items: [],
    pathname: "/moderadortablaentrevistas",
    id: 18,
  },
  {
    name: "Entrevistadores",
    icon: "fa fa-star",
    items: [],
    pathname: "/moderadorentrevistadores",
    id: 19,
  },
  {
    name: "Observadores",
    icon: "fa fa-smile",
    items: [],
    pathname: "/moderadorobservadores",
    id: 20,
  },
  {
    name: "Aspirantes citados",
    icon: "fa fa-bullhorn",
    items: [],
    pathname: "/moderadoraspirantescitados",
    id: 21,
  },
];

export const CONVOCATORY = [
  {
    id: "618af60371d0ac754e708e31",
    name: "Programate",
    initialDate: "",
    finalDate: "",
    program: "Goyn",
    maxQuotas: 23,
    initialBootcampDate: "",
    finalBootcampDate: "",
    parameterization: {
      personalProfile: 20,
      sololearn: 234567,
      motivationLetter: 2345,
    },
    residenceCountry: "",
    residencyDepartment: "",
    maxAge: 18,
    maxSocioeconomicStratus: 4,
    test: {},
    usersRegisted: ["618e8a293dbcd0c5c40124dc"],
    test: {},
    status: true,
  },
  {
    id: "618c39993a9cca7088b85e05",
    name: "Programate 2.0",
    initialDate: "",
    finalDate: "",
    program: "Regional",
    maxQuotas: 50,
    initialBootcampDate: "",
    finalBootcampDate: "",
    parameterization: {
      personalProfile: 20,
      sololearn: 234567,
      motivationLetter: 2345,
    },
    residenceCountry: "",
    residencyDepartment: "",
    maxAge: 18,
    maxSocioeconomicStratus: 3,
    test: {},
    usersRegisted: [
      "618c352d3ad3f3933bfb3b59",
      "618e8a293dbcd0c5c40124dc",
      "6189bb71cf8fc583a3800001",
      "618e8a413dbcd0c5c40124dd",
      "618e8a4f3dbcd0c5c40124de",
    ],
    test: {},
    status: true,
  },
];

export const ITEMS_INTERVIEWER = [
  {
    name: "INICIO",
    icon: "fas fa-th-large",
    items: [],
    pathname: "/dashboard",
    id: 22,
  },
  {
    name: "Citas programadas",
    icon: "fa fa-calendar",
    items: [],
    pathname: "/entrevistadordashboard",
    id: 23,
  },
  //{
  // name: "Aspirante citados",
  // icon: "fa fa-bullhorn",
  // items: [],
  // pathname: "/entrevistadoraplicantescitados",
  // id: 14,
  //},
  //{
  // name: "Observador assesment",
  // icon: "fa fa-smile",
  // items: [],
  // pathname: "/observadorassesment",
  // id: 14,
  //},
];
