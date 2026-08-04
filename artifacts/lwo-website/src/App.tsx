import { Route, Switch } from 'wouter';
import Homepage from '@/pages/Homepage';
import AboutPage from '@/pages/AboutPage';
import ServicePage from '@/pages/ServicePage';
import StoragePage from '@/pages/StoragePage';
import MovingPage from '@/pages/MovingPage';
import PaintingPage from '@/pages/PaintingPage';
import DesignPage from '@/pages/DesignPage';
import RelocationPage from '@/pages/RelocationPage';
import NotFound from '@/pages/not-found';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services/office-installations" component={ServicePage} />
      <Route path="/services/commercial-storage" component={StoragePage} />
      <Route path="/services/commercial-moving" component={MovingPage} />
      <Route path="/services/commercial-painting" component={PaintingPage} />
      <Route path="/services/commercial-design-furniture" component={DesignPage} />
      <Route path="/services/commercial-relocation" component={RelocationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
