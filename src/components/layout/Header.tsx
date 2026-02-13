import { NavLink } from "react-router";
import { Globe, List } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchInput from "@/components/ui/SearchInput";
import { useExplorer } from "@/context/ExplorerContext";

export default function Header() {
  const { state, dispatch } = useExplorer();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="flex items-center justify-between px-4 h-14 max-w-screen-2xl mx-auto">
        <NavLink to="/map" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-slate-800 leading-tight">
              COTEN RADIO
            </h1>
            <p className="text-[10px] text-slate-500 leading-tight">
              アーカイブ
            </p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-1 mx-4">
          <NavLink
            to="/map"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              )
            }
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">地図で探す</span>
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              )
            }
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:inline">シリーズ一覧</span>
          </NavLink>
        </nav>

        <div className="w-48 lg:w-64 shrink-0">
          <SearchInput
            value={state.filters.searchQuery}
            onChange={(v) => dispatch({ type: "SET_SEARCH", value: v })}
          />
        </div>
      </div>
    </header>
  );
}
