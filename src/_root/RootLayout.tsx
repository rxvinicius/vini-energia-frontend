import { Outlet } from 'react-router-dom';

import { Topbar } from '@/components/shared';
import { TOPBAR_HEIGHT } from '@/components/shared/Topbar';

const RootLayout = () => (
  <div className="w-full md:flex">
    <Topbar />

    <section
      className="flex flex-1 h-full"
      style={{ paddingTop: TOPBAR_HEIGHT }}
    >
      <Outlet />
    </section>
  </div>
);

export default RootLayout;
