import Avatar from "./Avatar";
import TitleBar from "./TitleBar";

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
                <div className="col-8">
                    <TitleBar></TitleBar>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}
export default Card;