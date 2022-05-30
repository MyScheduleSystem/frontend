import { Chart } from 'react-google-charts'
import { mssPieChartOption } from '../../chartOption/chartOption'

const title = "My Dailty Activities"
const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
]
const chartSizeOpt = { width: '400px', height: '400px' }

const MssPieChart = () => {
    const chartOption = mssPieChartOption(title, data, chartSizeOpt)
    return (
        <Chart
            chartType={chartOption.chartType}
            data={chartOption.data}
            options={chartOption.options}
            width={chartOption.width}
            height={chartOption.height}
        />
    )
}

export default MssPieChart