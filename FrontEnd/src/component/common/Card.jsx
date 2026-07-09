import { GoReport } from "react-icons/go";

const Card = ({props}) => {
  return (
    <div className="group rounded-[30px] border border-gray-200 bg-white p-5  shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-100 ">
      
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white ">
        {props.icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {props.title}
      </h3>

      {/* Description */}
      <p className="mt-5  leading-relaxed text-gray-500">
        {props.content}
      </p>

    </div>
  );
};

export default Card;