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
    <div className="flex flex-col min-h-screen bg-gray-50 md:flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1 px-4 py-4 md:px-8 md:py-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Central main content */}
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
              <ProfileHeader />
              <SearchBar />
            </div>
            <div className="mb-8">
              <DashboardCard />
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex-1">
                <DestinationList />
              </div>
              <DiscountBanner />
            </div>
          </div>
          {/* Right sidebar */}
          <div className="w-full md:w-96 flex flex-col gap-6 mt-8 md:mt-0">
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
