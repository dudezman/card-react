
import TitleBar from "./TitleBar";
import StartDate from "./StartDate";
import Percent from "./Percent";
import Duration from "./Duration"
import Article from "./Article"
import Progress from "./Progress";
import Msg from "./Msg"
import User from "./User"
import TinyChart from "./TinyChart";
function Card(){
    const data = {
        img: "https://e7.pngegg.com/pngimages/39/674/png-clipart-dogecoin-cryptocurrency-bitcoin-money-doge-coin-carnivoran-dog-like-mammal.png"
    }
    return (
        <div className="card w-full border shadow rounded p-10 h-[220px]">
            <div className="flex justify-between">
                <div className=" flex justify-start">

               <img src={data.img} alt="" className="w-[72px] h-[72px] rounded-full"></img>
                <div className="col-span-4  pl-25 text-left">
                    <TitleBar/>  <br/> 
                    <StartDate date="Fri 8 Apr 22:29"/>
                    <Percent/>
                </div>

                </div>
                <div className="text-right">
                    <TinyChart></TinyChart>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="">
                    <Duration title="Duration" day="3"/>
                </div>
                <div className=" text-right">
                <Duration title="Starts in" day="12"/>
                </div>
            </div>

            <div className="grid grid-cols-1">
                <div className="">
                <Progress val={50}/>

               </div>
            </div>
            <div className="grid grid-cols-12 mt-1">
                <div className="col-span-6">
                <Progress val={20}/>
                </div>
                <div className="col-span-2 text-center">
                    <Article/>
                </div>
                <div className="col-span-2"/>

                <div className="text-right">
                   <Msg nb="0"/>
                </div>
                <div className="text-right">
                <User nb="1"/>
                </div>
            </div>
        </div>
    );
}
export default Card;
