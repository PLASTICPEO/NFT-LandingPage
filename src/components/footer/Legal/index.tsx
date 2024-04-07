const LegalFooter = () => {
  return (
    <div className="xl:flex items-center justify-between xl:space-y-0 space-y-4 text-[#B8B8B8] text-sm">
      <p>
        2024 © Copyright DMONKEY. All Rights Reserved{" "}
        <a
          className="text-[#B8B8B8] hover:text-[#FFFFFF] animate-ping shadow-2xl shadow-[red]"
          href="https://github.com/PLASTICPEO"
        >
          'PLASTICPEO'
        </a>
      </p>
      <div className="xl:flex items-center justify-center xl:space-x-4 xl:space-y-0 space-y-4 font-[Poppins]">
        <p>Terms Of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default LegalFooter;
