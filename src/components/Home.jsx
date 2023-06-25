import CanvasLens from './canvas/Home/CanvasLens'
import transition from '../transition'

function OverlayCanvas() {

    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%', zIndex: 40,}}>
         <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          dev collective
        </a>
        <div style={{ position: 'absolute', top: "50%", right: 40, color: "white", fontSize: '24px' }}>— Simon Brachmann</div>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', color: "white" }}>08/01/2023</div>
        </div>
    )
  }

const Home = () => {
  return (
    <>
        <OverlayCanvas/>
        <CanvasLens/>
        {/* <CanvasProject/> */}
    </>
  )
}

export default transition(Home)