import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, PyramidSeries, AccumulationLegend } from "@syncfusion/ej2-react-charts";

import { Header } from '../../components';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Sales Information" />
      <div className='w-full'>
        <AccumulationChartComponent>
          <Inject services={[PyramidSeries, AccumulationDataLabel, AccumulationLegend, AccumulationSelection, AccumulationSelection, AccumulationTooltip]} />
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid