import { NavLink } from "react-router";
import { Globe, List, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors",
      isActive ? "text-red-600" : "text-slate-400"
    );

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-slate-200 md:hidden">
      <div className="flex items-center justify-around h-14">
        <NavLink to="/map" className={linkClass}>
          <Globe className="h-5 w-5" />
          地図
        </NavLink>
        <NavLink to="/browse" className={linkClass}>
          <List className="h-5 w-5" />
          一覧
        </NavLink>
        <NavLink to="/browse?search=true" className={linkClass}>
          <Search className="h-5 w-5" />
          検索
        </NavLink>
      </div>
    </nav>
  );
}
