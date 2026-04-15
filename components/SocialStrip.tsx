import {
  CalendarCheck2,
  Users,
  Building2,
  HeartPulse,
  Pill,
  FlaskConical,
  House,
  type LucideIcon,
} from "lucide-react";

const specialties: { name: string; color: string; Icon: LucideIcon }[] = [
  { name: "Book Appointment", color: "bg-sky-500", Icon: CalendarCheck2 },
  { name: "Talk to Doctors", color: "bg-blue-600", Icon: Users },
  { name: "Hospitals & Clinics", color: "bg-pink-500", Icon: Building2 },
  { name: "Healthcare", color: "bg-cyan-500", Icon: HeartPulse },
  { name: "Medicine & Supplies", color: "bg-violet-500", Icon: Pill },
  { name: "Lab Testing", color: "bg-orange-500", Icon: FlaskConical },
  { name: "Home Care", color: "bg-teal-600", Icon: House },
];

export default function SpecialtyStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-[1360px] px-3  sm:-mt-12 sm:px-5 md:-mt-14 lg:-mt-16 lg:px-8">
      <div className="rounded-4xl  bg-slate-200 px-3 py-4 text-slate-900  sm:px-5 sm:py-5 md:px-6 lg:px-10 lg:py-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
          {specialties.map((item) => (
            <div key={item.name} className="flex min-h-[92px] flex-col items-center justify-start gap-2 text-center sm:min-h-[102px] sm:gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm sm:h-14 sm:w-14 ${item.color}`}>
                <item.Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
              <span className="text-[11px] font-semibold  text-slate-800 sm:text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}