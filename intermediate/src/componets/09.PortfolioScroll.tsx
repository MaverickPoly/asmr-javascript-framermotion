import PortfolioSection from "./utils/PortfolioSection";

const portfolioItems = [
  {
    title: "ASMR Python Django",
    description: "Beginner to Advanced Django Full stack Projects",
  },
  {
    title: "ASMR Java DSA",
    description: "Different Data Structures and Algorithms implemented in Java",
  },
  {
    title: "Altair Edu",
    description: "Full stack website for learning programming",
  },
  {
    title: "Altair Edu",
    description: "Full stack website for learning programming",
  },
];

const PortfolioScroll = () => {
  return (
    <div className="flex flex-col items-center gap-24 bg-gradient-to-br from-black to-neutral-900 py-24 w-full">
      <h1 className="text-4xl font-bold text-white">My Portfolio</h1>
      {portfolioItems.map((item, index) => {
        return <PortfolioSection key={index} {...item} />;
        // return <h1>{item.title}</h1>;
      })}
    </div>
  );
};

export default PortfolioScroll;
