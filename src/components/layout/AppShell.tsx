import { Outlet } from "react-router";
import Header from "./Header";
import MobileNav from "./MobileNav";
import TimelineBar from "@/components/timeline/TimelineBar";

export default function AppShell() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <Outlet />
      </main>
      <div className="hidden md:block">
        <TimelineBar />
      </div>
      <MobileNav />
    </div>
  );
}
