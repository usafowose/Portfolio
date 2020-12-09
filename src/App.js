import Header from './components/Header'
import FloatingBar from './components/Floating_Bar'
import Body from './components/Body'
import Background from './assets/images/glow-wave-system.jpg'


const pageStyle = {
  background: `url(${Background}) no-repeat center center fixed`,
  WebkitBackgroundSize: 'cover',
  backgroundSize: 'cover'
}

function App () {
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

