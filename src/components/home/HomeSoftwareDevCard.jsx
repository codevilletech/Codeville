

const HomeSoftwareDevCard = ({ icon, title, text }) => {
  return (
    <div className='flex flex-col'>
      <span className="flex items-center p-[10px] bg-[--accent3] w-fit rounded-[4px]">
        <img src={icon} alt="" />
      </span>

      <div>
        <h3 className="mt-[8px] text-xl font-semibold text-[--pri-col] lg:text-[20px]">
          {title}
        </h3>

        <p className="mt-3 text-sm 400:text-[13px] lg:text-[15.5px]">{text}</p>
      </div>
    </div>
  );
};

export default HomeSoftwareDevCard;
