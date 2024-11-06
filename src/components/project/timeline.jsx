import Card from "@/components/project/card";
import formatDate from "@/utils/format-date";
import { parseCustomDate } from "@/utils/format-date";
const today = new Date();

const DateBox = ({ date }) => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white border border-gray-400 rounded-lg px-4 py-2 font-bold">
      {date}
    </div>
  );
};

export default function Timeline({ projects }) {
  return (
    <div>
      <ul className="timeline timeline-snap-icon timeline-vertical  ">
        <li border className="grid grid-cols-6">
          <div className="timeline-start col-span-1"></div>
          <div className="timeline-middle col-span-1">
            <DateBox date={formatDate(today.toLocaleDateString())}></DateBox>
          </div>
          <div className="timeline-end timeline-box col-span-4"></div>
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </li>
        {/* Timeline */}
        {projects.map((item) => {
          return (
            <li className="grid grid-cols-6  w-full " key={item.title}>
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="timeline-start col-span-1"></div>
              <div className="timeline-middle col-span-1">
                {parseCustomDate(item.enddate) > today ? null : (
                  <DateBox date={item.enddate} />
                )}
              </div>
              <div className="timeline-end col-span-4 py-4 px-4 w-[50rem] ">
                <Card data={item} />
              </div>
              <hr class="h-px m-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </li>
          );
        })}

        <li border className="grid grid-cols-6">
          <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="timeline-start col-span-1"></div>
          <div className="timeline-middle col-span-1">
            <DateBox date={"1st Jan 2022"}></DateBox>
          </div>
          <div className="timeline-end timeline-box col-span-4"></div>
          {/* <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" /> */}
        </li>
      </ul>
    </div>
  );
}
