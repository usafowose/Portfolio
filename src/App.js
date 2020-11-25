import Header from './Header'
import FloatingBar from './Floating_Bar'
import Body from './Body'

function App() {
  return (
    <div className='container-fluid' style={{ background: 'darkslategrey' }}>
      <Header />
      <FloatingBar />
      <Body />
    </div>
  )
}

export default App;

