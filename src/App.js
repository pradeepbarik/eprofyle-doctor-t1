import Header from './components/desktop/header';
import Main from './components/desktop/main';
import Banner from './components/desktop/banner';
import Treatments from './components/desktop/treatments';
import ConsultingTiming from './components/desktop/consulting-timing';
import Footer from './components/desktop/footer';
function App() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <Treatments />
        <ConsultingTiming />
      </Main>
      <Footer />
    </>
  );
}

export default App;
