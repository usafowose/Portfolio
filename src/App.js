import Header from './Header'
import FloatingBar from './Floating_Bar'
import Body from './Body'
import Background from './assets/images/glow-wave-system.jpg'
const pageStyle = {
  background: `url(${Background}) no-repeat center center fixed`,
  WebkitBackgroundSize: 'cover',
  backgroundSize: 'cover'
}

function App() {
  return (
    <div className='container-fluid' style={pageStyle}>
      <Header tabNames={['Home', 'Link', 'Menu', 'Disabled', 'Extra', 'Stuff']}/>
      <FloatingBar />
      <Body />
      {/* <Footer/> */}
    </div>
  )
}

export default App;

