import './App.css';
import Bcard from './Bcard';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {
  const data=[{
plan:"FREE",
price:"$0",
feat:[{
  title:"Single User",
  isEnable:true
},{
  title:"5GB Storage",
  isEnable:true
},{
  title:"limited Public Projects",
  isEnable:true
},{
  title:"Community Access",
  isEnable:false
},{
  title:"Unlimited Private Projects",
  isEnable:false
},{
  title:"Dedicated Phone Support",
  isEnable:false
},{
  title:"Free Subdomain",
  isEnable:false
},{
  title:"Monthly Status Reports",
  isEnable:false
}]
  },{
    plan:"PLUS",
    price:"$19",
    feat:[{
      title:"Single User",
      isEnable:true
    },{
      title:"20GB Storage",
      isEnable:true,
      isBold:true
    },{
      title:"Unlimited Public Projects",
      isEnable:true
    },{
      title:"Community Access",
      isEnable:true
    },{
      title:"Unlimited Private Projects",
      isEnable:true
    },{
      title:"Dedicated Phone Support",
      isEnable:false
    },{
      title:"Free Subdomain",
      isEnable:false
    },{
      title:"Monthly Status Reports",
      isEnable:false
    }]
  },{
    plan:"PRO",
    price:"$53",
    feat:[{
      title:"Multi User",
      isEnable:true,
      isBold:true
    },{
      title:"50GB Storage",
      isEnable:true,
      isBold:true
    },{
      title:"Unlimited Public Projects",
      isEnable:true
    },{
      title:"Community Access",
      isEnable:true
    },{
      title:"Unlimited Private Projects",
      isEnable:true
    },{
      title:"Dedicated Phone Support",
      isEnable:true
    },{
      title:"Free Subdomain",
      isEnable:true
    },{
      title:"Monthly Status Reports",
      isEnable:true
    }]
  }]
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
{
  data.map((item)=>{
    return(
      <Bcard cData={item}></Bcard>
    );
  })
}
      </div>
  </div>
</section>
  );
}

export default App;
