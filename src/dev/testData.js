const TestData = {}
const userId = 1
const date = '2022-05'
const day = '01'

TestData[userId] = {
    container: {
        year: '',
        month: '',
        [date]: {
            calendar: {
                [day]: {
                    todo: [
                        {
                            content: '',
                            startDate: '',
                            endDaate: '',
                        }
                    ],
                }
            },
        },
        theme: {
            color: '',
            backgroundColor: '',
        },
        boxStyle: {
            padding: '',
            margin: '',
        },
        fetchOption: {
            userId: 1,
            year: '',
            month: '',
            themeMode: '',
        }
    }
}