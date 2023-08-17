'use client';

import Chart from 'react-google-charts';

export const options = {
  legend: 'none',
  pieSliceText: 'label',
  theme: 'maximized',
  chartArea: { top: '5%', height: '90%' },
  colors: ['#3366cc', '#4775d1', '#5c85d6', '#7094db', '#85a3e0']
};

interface LocationChartData {
  data: any[];
}

const TopLocation: React.FC<LocationChartData> = ({ data }) => {
  const topData = data.length > 6 ? data.slice(0, 6) : data;

  return (
    <>
      <p className='font-medium'>Top 5 countries</p>
      <Chart
        chartType='PieChart'
        data={topData}
        options={options}
        width={'100%'}
        height={'400px'}
      />
    </>
  );
};

export default TopLocation;
