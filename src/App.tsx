import './App.css'
import Layout from "./components/Layout.tsx";
import witcher from "./assets/img/witcher.png"
import parallax1 from "./assets/img/sparks_front.png"
import parallax2 from "./assets/img/sparks_back.png"
import Parallax from "./components/Parallax.tsx";

function App() {
  return (
    <Layout>
      <Parallax
        background={witcher}
        parallaxImage1={parallax1}
        parallaxImage2={parallax2}
      />
    </Layout>
  )
}

export default App
