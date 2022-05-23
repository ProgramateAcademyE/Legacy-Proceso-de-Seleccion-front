import React from "react";

export const columns = [
  {
    name: "Fecha",
    selector: "fecha",
    sortable: true
  },
  {
    name: "Jornada",
    selector:"jornada",
    sortable: true,
  },
  {
    name: "Convocatoria",
    selector: "convocatoria",
    sortable: true,
    grow: 2
    //cell: d => <span>{d.convocatoria.join(", ")}</span>
  },
  {
    name: "# Aspirantes",
    selector: "aspirantes",
    sortable: true,
    grow:2
  },
  {
    name: "# Entrevistadores",
    selector: "entrevistadores",
    sortable: true,
    grow:2
  },
  {
    name: "# Observadores",
    selector: "observadores",
    sortable: true,
    grow:2
  },
  {
    name: "# Salas",
    selector: "salas",
    sortable: true,
    grow:2
  },
  {
    name: "Ver detalles",
    selector: "detalle",
    sortable: true,
    grow: 2
  },
];

export const data = [
  {fecha:"16/05/2022", jornada:"pm", convocatoria:"Schools", aspirantes:10, entrevistadores:5, observadores:6,salas:10, detalle:"ver mas detalles" },
  {fecha:"17/05/2022", jornada:"am", convocatoria:"Progamate Schools",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"18/05/2022", jornada:"pm", convocatoria:"Progamate Academy",aspirantes:10, entrevistadores:3, observadores:4,salas:12, detalle:"ver mas detalles" },
  {fecha:"19/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:6, entrevistadores:4, observadores:3,salas:5, detalle:"ver mas detalles" },
  {fecha:"20/05/2022", jornada:"pm", convocatoria:"Progamate Academy",aspirantes:4, entrevistadores:2, observadores:2,salas:9, detalle:"ver mas detalles" },
  {fecha:"21/05/2022", jornada:"pm", convocatoria:"Progamate Academy",aspirantes:10, entrevistadores:5, observadores:6,salas:10, detalle:"ver mas detalles" },
  {fecha:"22/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"22/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"22/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"22/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"22/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },

  {fecha:"16/05/2022", jornada:"pm", convocatoria:"Schools", aspirantes:10, entrevistadores:5, observadores:6,salas:10, detalle:"ver mas detalles" },
  {fecha:"17/05/2022", jornada:"am", convocatoria:"Progamate Schools",aspirantes:8, entrevistadores:5, observadores:5,salas:8, detalle:"ver mas detalles" },
  {fecha:"18/05/2022", jornada:"pm", convocatoria:"Progamate Academy",aspirantes:10, entrevistadores:3, observadores:4,salas:12, detalle:"ver mas detalles" },
  {fecha:"19/05/2022", jornada:"am", convocatoria:"Progamate Academy",aspirantes:6, entrevistadores:4, observadores:3,salas:5, detalle:"ver mas detalles" },
];
