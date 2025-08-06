import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import ScheduleList from "./components/ScheduleList";
import ProfileHeader from "./components/ProfileHeader";
import SearchBar from "./components/SearchBar";
import DestinationList from "./components/DestinationList";
import DiscountBanner from "./components/DiscountBanner";
import DashboardCard from "./components/DashboardCard";
import jimmy from "./assets/jimmy.png";
import "./index.css";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 px-8 py-8">
        <div className="flex flex-row gap-8">
          {/* Central main content */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <ProfileHeader />
              <SearchBar />
            </div>
            <div className="mb-8">
              <DashboardCard />
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <DestinationList />
              </div>
              <DiscountBanner />
            </div>
          </div>
          {/* Right sidebar */}
          <div className="w-96 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={jimmy}
                alt="Jemmy Max"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-800">Jemmy Max</div>
                <div className="text-sm text-gray-400">Traveler Enthusiast</div>
              </div>
              <button className="ml-auto text-gray-400 text-xl">▼</button>
            </div>
            <Calendar />
            <ScheduleList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
