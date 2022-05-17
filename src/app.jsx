import Sidebar from './components/sidebar/sidebar'

// TODO: Router는 MyRouter에 있으므로 적절하게 추가
// App -> MyLayout -> left, right -> left: Sidebar, right: MyCalender
// MyLayout 안에 MyRouter 추가할 것

function App() {
    return (
        <Sidebar />
    )
}
export default App
