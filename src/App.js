import Header from './Header'
import FloatingBar from './Floating_Bar'
import Body from './Body'
import Background from './assets/images/jeffrey-blum-5v1QSY62ZBs-unsplash.jpg'

const pageStyle = {
  background: `url(${Background}) no-repeat center center fixed`,
  WebkitBackgroundSize: 'cover',
  backgroundSize: 'cover'
}

function App() {
  return (
    <div className='container-fluid' style={pageStyle}>
      <Header />
      <FloatingBar />
      <Body />
    <p>{`${Background}`}</p>
      {/* <Footer/> */}
    </div>
  )
}

export default App;

