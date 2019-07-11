import React from 'react'
import { Bar } from 'react-chartjs-2';
import { chain } from 'lodash';

const mapToDataItems = costs => {
    const categoryProp = cost => cost.category;

    const costsByCategories = chain(costs)
        .groupBy(categoryProp)
        .toPairs()
        .orderBy(([category]) => category)
        .value();

    const labels = costsByCategories.map(([category]) => category);

    const dataItems = costsByCategories
        .map(([, costs]) => costs)
        .map(costs => costs.reduce((sum, cost) => cost.value + sum, 0));

    return [labels, dataItems];
};

const CostsChart = ({ costs }) => {

    const [labels, dataItems] = mapToDataItems(costs);

    const data = {
        labels,
        datasets: [{
            label: 'Cost',
            data: dataItems,
            backgroundColor: 'lightblue'
        }]
    };
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>

    );
};


export default CostsChart;
