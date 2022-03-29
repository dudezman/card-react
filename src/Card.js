import Avatar from "./Avatar";
import TitleBar from "./TitleBar";
import StartDate from "./StartDate";
import Percent from "./Percent";
import Duration from "./Duration"
import Article from "./Article"
import Msg from "./Msg"
import User from "./User"
function Card(){
    const data = {
        img: "https://e7.pngegg.com/pngimages/39/674/png-clipart-dogecoin-cryptocurrency-bitcoin-money-doge-coin-carnivoran-dog-like-mammal.png"
    }
    return (
        <div className="card w-100 rounded mx-3 h-50 py-4 px-2">
            <div className="row">
                <div className="col-3">
                    <Avatar img={data.img}></Avatar>
                </div>
                <div className="col-8 row">
                    <TitleBar/>   
                    <StartDate date="Fri 8 Apr 22:29"/>
                    <Percent/>
                </div>
                <div className="col-1">
                    Progress
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Duration title="Duration" day="3"/>
                </div>
                <div className="col-6">
                <Duration title="Starts in" day="12"/>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                Progress
               </div>
            </div>
            <div className="row">
                <div className="col-4">
                    mini progress
                </div>
                <div className="col-4">
                    <Article/>
                </div>
                <div className="col-2">
                   <Msg nb="0"/>
                </div>
                <div className="col-2">
                <User nb="1"/>
                </div>
            </div>
        </div>
    );
}
export default Card;