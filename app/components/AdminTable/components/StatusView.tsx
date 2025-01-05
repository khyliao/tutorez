interface IStatusViewProps {
  status: string;
}

const StatusView = ({ status }: IStatusViewProps) => {
  const color = (() => {
    switch (status) {
      case "Активний":
        return "text-[#1F9254] bg-[#D7FFE9] dark:bg-[#c2fcdc]";
      case "Призупинений":
        return "text-[#CD6200] bg-[#FFEBD6] dark:bg-[#fddab4]";
      case "Втрачений":
        return "text-[#A30D11] bg-[#FFE0E1] dark:bg-[#f9cccd]";
    }
  })();

  return (
    <span className={`inline-block px-3 py-2 rounded-3xl ${color}`}>
      {status}
    </span>
  );
};

export default StatusView;
