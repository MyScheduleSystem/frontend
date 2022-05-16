import { getTodoFetchResult } from '../dev/testData'

const calenderFetcher = {}

calenderFetcher.fetchOption = {}

calenderFetcher.getTodoFetchResult = () => {
    // TODO: axios
    // 현재는 Dev니까 그냥 Data 가져오자
    const data = getTodoFetchResult()
    return data
}

calenderFetcher.getFetchOptionResult = () => {
    const fetchOption = calenderFetcher.fetchOption
    fetchOption.userId = 1
    fetchOption.year = '2022'
    fetchOption.month = '05'
    // TODO: fetchOption을 활용해서 잘 fetch 해보자
}

Object.freeze(calenderFetcher)
export default calenderFetcher