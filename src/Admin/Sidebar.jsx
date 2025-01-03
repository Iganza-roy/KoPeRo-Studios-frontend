import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useContext, createContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CrewContext } from '../context/CrewContext';
import logo from '../assets/camera_side.png';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const { currentUser } = useContext(CrewContext);

  return (
    <aside className='h-screen flex'>
      <nav className='h-full flex flex-col bg-blue bg-opacity-5 border-r border-r-slate-800 shadow-sm'>
        <div className='p-4 pb-2 flex items-center justify-between'>
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? 'w-28' : 'w-0'
            }`}
            alt=''
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className='p-1.5 rounded-lg bg-slate-700 hover:bg-slate-800'
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>

        <div className='border-t border-t-slate-500 flex p-3'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt='Avatar'
            className='w-10 h-10 rounded-md'
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? 'w-52 ml-3 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <div className='leading-4'>
              <h4 className='font-semibold'>{currentUser?.full_name}</h4>
              <span className='text-xs text-gray-600'>
                {currentUser?.email}
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, to, alert }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = location.pathname === to;

  return (
    <li
      onClick={() => navigate(to)}
      className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? 'bg-gradient-to-tr from-slate-800 to-slate-700 text-light'
              : 'hover:bg-slate-500 text-slate-400'
          }
        `}
    >
      <span className='text-3xl'>{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-slate-800 text-light text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
