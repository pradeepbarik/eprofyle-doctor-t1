import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import DesktopView from "./components/desktop";
import Mobileview from './components/mobile';
function App() {
  if (isMobile) {
    return (
        <MobileView>
          <div>
            <Mobileview />
          </div>
        </MobileView>
    )
  }
  return (
      <BrowserView>
        <DesktopView />
      </BrowserView>
  );
}

export default App;
