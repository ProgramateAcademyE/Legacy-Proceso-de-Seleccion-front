import React from "react";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut, defaults } from "react-chartjs-2";
import "./Doughtnut.scss";

Chart.register(ChartDataLabels);
Chart.defaults.plugins.datalabels;
defaults.plugins.legend.position = "bottom";

const DoughtnutHtml = ({ item }) => {
    const { cssScore } = item;
    const css = cssScore.toString().slice(2)
    let pendiente = 100 - css;
    const data = {
        datasets: [
            {
                label: "# of Votes",
                data: [`${css}`, `${pendiente}`],
                backgroundColor: ["#0038FF", "#D7D7D7"],
                hoverBackgroundColor: ["#0038FF", "#D7D7D7"],
            },
        ],
        labels: ["Progreso", "Pendiente"],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                color: "#ffffff",
                formatter: function (value, context) {
                    return Math.round(value) + "%";
                },
            },
        },
    };

    return (
        <div className="graph mt-2">
            <Doughnut data={data} options={options} width={400} height={250} />
        </div>
    );
};

export default DoughtnutHtml;
