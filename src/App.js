import SelectComponent from "./Components/Charts/SelectComponent";
import CurrencyConverter from "./Components/Exchange/CurrencyConverter";
import Search from "./Components/Search/Search";
import TimeSeries,{} from "./Components/Sidebar/TimeSeries";
import CoinCurrency from "./Components/Currency/CoinCurrency";
import PieChart from "./Components/PieChart/PieChart";

function App() {

  

  return (
    <div className="main-container flex mx-3">
      
        <div>
            <div>
              <div className="flex  border m-3">
                  <CoinCurrency/>
                  <div className="m-3 mx-12">
                    <Search/>
                  </div>
              </div> 

              <div className="border m-3">
                  <SelectComponent/>
              </div>
            </div>
            
            
            <div className="flex border m-3">
              <PieChart/>
              <CurrencyConverter/>
            </div>
        </div>
        <div className="border my-3">
            <TimeSeries/>
        </div>
      </div>
  
         
  );
}

export default App;
