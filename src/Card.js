import Avatar from "./Avatar";
import TitleBar from "./TitleBar";
import StartDate from "./StartDate";
import Percent from "./Percent";
import Duration from "./Duration"
import Article from "./Article"
import Msg from "./Msg"
import User from "./User"
import Progress from "./Progress"
function Card(){
    const data = {
        img: "https://e7.pngegg.com/pngimages/39/674/png-clipart-dogecoin-cryptocurrency-bitcoin-money-doge-coin-carnivoran-dog-like-mammal.png"
    }
    return (
        <div className="card w-100 rounded mx-3 h-50 py-4 px-2">
            <div className="grid grid-cols-12">
                <div className="">
                    <Avatar img={data.img}></Avatar>
                </div>
                <div className="col-span-4 text-left">
                    <TitleBar/>   
                    <StartDate date="Fri 8 Apr 22:29"/>
                    <Percent/>
                </div>
                <div className="col-span-6"/>

                <div className="text-right">
                    Progress
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