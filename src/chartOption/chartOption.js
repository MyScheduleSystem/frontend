// options: { title, backgroundColor, ... }
// data: array[[]]
// chartSizeOpt: width, height

function mssPieChartOption(title, data, chartSizeOpt) {
    const chartType = 'PieChart'
    const option = {
        chartType: chartType,
        data: data,
        width: chartSizeOpt.width,
        height: chartSizeOpt.height,
        options: {
            title: title,
        },
    }
    return option
}

function mssCalendarChartOption(title, data, chartSizeOpt) {
    const chartType = 'Calendar'
    const option = {
        chartType: chartType,
        data: data,
        width: chartSizeOpt.width,
        height: chartSizeOpt.height,
        options: {
            title: title,
        },
    }
    return option
}

export {
    mssPieChartOption,
    mssCalendarChartOption,
}