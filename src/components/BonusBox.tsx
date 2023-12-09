import {Button} from "@mui/material";

type BonusProps = {
  bonusCode: string
}

const BonusBox = ({bonusCode}: BonusProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-white text-[100px] md:text-[13rem]">300%</p>
      <p className="text-white text-[40px] md:text-[4.25rem]">WELCOME BONUS</p>

      <div className="flex items-center border border-dashed border-neutral-500 rounded-[100px] my-[60px]">
        <p className="text-[#f73427] text-[2.5rem] pl-9 pr-5">{bonusCode}</p>
        <span className="block h-[80px] w-px bg-neutral-500"/>
        <div
          className="flex items-center cursor-pointer hover:bg-neutral-800 hover:rounded-r-[100px] h-[80px] z-50"
          onClick={() => navigator.clipboard.writeText(bonusCode)}
        >
          <p className="text-white text-[1.25rem] pl-9 pr-10">COPY CODE</p>
        </div>
      </div>

      <Button
        color="warning"
        onClick={() => alert("Redirect")}
        sx={{
          background: "#ff0000",
          height: "80px",
          width: "360px",
          borderRadius: "100px",
          zIndex: "50",
          ":hover": {background: "#be0c00"}
        }}
      >
        <p className="text-white text-[1.5rem] font-bold">PLAY NOW</p>
      </Button>
    </div>
  )
}

export default BonusBox;