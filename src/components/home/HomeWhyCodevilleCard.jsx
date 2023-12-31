const HomeWhyCodevilleCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3 flex-col lg:flex-row">
      <span className="flex items-center p-[10px] bg-[--accent3] w-fit rounded-[4px] 600:mt-0 lg:mt-1">
        <img src={icon} alt="" className="600:w-[18px] lg:w-[70px]" />
      </span>

      <div>
        <h3 className=" text-xl font-semibold text-[--pri-col] lg:mt-[8px] lg:text-[20px]">
          {title}
        </h3>

        <p className="text-sm 400:text-[13px] 400:mt-3 lg:text-[15.5px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default HomeWhyCodevilleCard;
