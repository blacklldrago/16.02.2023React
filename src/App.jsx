import style from './App.module.css';
import logo from './img/logo.png'
import arrow from './img/arrow.png'
import farmer from './img/Farmer.png'
import bag from './img/bag.png'
import house from './img/house.png'
import bottle from './img/bottle.png'
import chem from './img/chem.png'
import shop from './img/shop.png'
import notes from './img/notes.png'
import muscle1 from './img/muscle1.png'
import muscle2 from './img/muscle2.png'
import lines1 from './img/line.png'
import need from './img/need.png'
import circle from './img/circle.png'
import eduardo from './img/eduardo.png'
import ivan from './img/Ivan.png'
import stars from './img/stars.png'
import woman from './img/woman.png'
import ninenine from './img/ninenine.png'
import lineUp from './img/lineUP.png'
import line3 from './img/line3.png'
import plus1 from './img/plus.png'
import logo1 from './img/whitelogo.png'
import email from './img/emal.png'
import threelines from './img/threelines.png'
import {Card, Card2, Card3, Card4} from './components/Card'

function App() {
  return <div>
    <div className={style["container1"]}>
      <div className={style["container"]}>

        <div className = {style["navbar"]}>
              <div className={style["cbd-logo"]}>
                <img src={logo} alt="" />
              </div>
              <div className = {style["secta"]}>
                <ul>
                  <li>Home</li>
                  <li>Novel Food Law</li>
                  <li>Our products</li>
                  <li>Our services</li>
                  <li>Delivery-Supply</li>
                  <li>About us</li>
                  <li>Contact Us</li>
                  <li>News</li>
                </ul>
          </div>
          <div className={style["menu"]}>
            <img src={threelines} alt="" />
          </div>
        </div>
        <div className={style["doctor"]}>
            <h1>Novel Food CBD White Label</h1>
            <p>Here under the title you can place the text, which will describe the essence of this site in a few sentences.</p>
            <button>CBD product line</button>
        </div>
        <div className={style["arRow"]}>
            <img src={arrow} alt="" />
        </div>
      </div>
    </div>
    <div className={style["container2"]}>
      <div className = {style["container"]}>
        <h1 className={style["who"]}>Who we help</h1>
        <div className = {style["threeCards"]}> 
            <Card
            imgUrl={farmer}
            job="THE FARMER"
            description="As the CBD industry grows, more and more farmers are seeing the value in being fully vertically integrated and turn their crop into a marketable product. Our services allow farmers to accomplish this while maintaining their focus on farming."
            />
            <Card
            imgUrl = {bag}
            job="THE ENTREPRENEUR"
            description="Great ideas often times need help with execution and processes. By working closely with one of our account managers, entrepreneurs are able to carry out their vision by utilizing the various services we have to offer."
            />
            <Card
            imgUrl = {house}
            job="THE SMALL BUSINESS"
            description="Getting a small business up and running is challenging. We specialize in assisting hemp companies as they look to enter the market. Whatever it is, our team can get you running smoothly."
            />
        </div>
      </div>
    </div>
    <hr className={style["line"]} />
    <div className = {style["container3"]}>
      <div className={style["container"]}>
          <h1 className={style["label"]}>Eu gpm novel food compliant white label manufacturer</h1>
          <div className = {style["compliant"]}>
            <Card2
            imgUrl={bottle}
            job="WORLD-CLASS MANUFACTURING"
            description="Our CBD products are made using the highest quality organic industrial hemp in a GMP-certified facility."
            />
            <Card2
            imgUrl={chem}
            job="PRODUCT FORMULATION "
            description="Our team of formulators will guide you through the process, ins and outs of formulating your own product"
            />
            <Card2
            imgUrl={notes}
            job="IN-HOUSE DESIGN STUDIO"
            description="Our designers can help your product line look cohesive and stand out with beautiful looking labels and packaging."
            />
            <Card2
            imgUrl={shop}
            job="FULFILLMENT SERVICES"
            description="Store your product in our California fulfillment center and let us pick, pack, and ship products for you affordably."
            />
          </div>
      </div>
    </div>
    <div className={style["container4"]}>
        <div className={style["container"]}>
          <div className={style["lines"]}>
              <img src={lines1} alt="" />
          </div>
          <div className={style["product"]}>
                <div className="muscle1">
                  <img src={muscle1} alt="" />
                </div>
                <div className={style["text-product"]}>
                  <h1>Don't reinvent the wheel</h1>
                  <p>Jumpstart your CBD business with our pre-formulated CBD products. </p>
                  <button>CBD product line</button>
                </div>
                <div className="muscle2">
                  <img src={muscle2} alt="" />
                </div>
          </div>
          <div className = {style["need"]}>
            <img src={need} alt="" />
          </div>
        </div>
    </div>
    <div className = {style["container5"]}>
        <div className={style["container"]}>
            <h1 className={style["sitBack"]}>Sit back and let us bulild your cbd product line-fast</h1>
            <div className={style["circle"]}>
              <img src={circle} alt="" />
            </div>
        </div>
    </div>
    <div className = {style["container6"]}>
        <div className={style["container"]}>
            <h1 className={style["test"]}>Testimonials</h1>
            <div className={style["mentors"]}>
            <Card3
            imgUrl={eduardo}
            name = "Eduardo L"
            nine = {ninenine}
            star={stars}
            description = "HWL far exceeded my expectations.  I am new to the CBD market and their team walked me through every step of the way making sure I build my business efficiently."
            />
            <Card3
            imgUrl = {ivan}
            name = "Ivan H"
            nine = {ninenine}
            star = {stars}
            description = "I don't think these guys sleep.  They are available 7 days a week and the owners were always available to answer questions - even after the sale!  Well done!"
            />
            <Card3
            imgUrl = {woman}
            name = "Eduardo L"
            nine = {ninenine}
            star={stars}
            description = "HWL does not short cut anything!  Ultra high quality product that I am proud and confident to sell to my customers!"
            />
            </div>
            <div className = {style["lineUp"]}>
                <img src={lineUp} alt="" />
            </div>
            <div className = {style["line3"]}>
                <img src={line3} alt="" />
            </div>
        </div>
    </div>
    <div className={style["container7"]}>
        <div className = {style["container"]}>
            <h1 className={style["headQ"]}>Frequently asked questions</h1>
            <div className={style["questions"]}>
            <Card4 
              que="Can you make products using full spectrum  oil, isolate?"
              plus={plus1}
            />
            <Card4
              que="Do you sell bulk oils?"
              plus={plus1}
            />
            <div className={style["dash"]}>

            <Card4
              que="How long does it take to make my order"
              plus={plus1}
              />
            <Card4
              que="Do you export products out of the country?"
              plus={plus1}
              />
              </div>
            </div>
        </div>
    </div>   
    <div className = {style["container8"]}>
        <div className={style["container"]}>
            <div className={style["firstRow"]}>
                <div className="imgL">
                  <img src={logo1} alt=""/>
                </div>
                <div className = {style["firstList"]}>
                  <ul>
                    <li>Home</li>
                    <li>Novel Food Law</li>
                    <li>Our products</li>
                    <li>Our services</li>
                  </ul>
                </div>
                <div className={style["secondList"]}>
                  <ul>
                    <li>Delivery-Supply</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>News</li>
                  </ul>
                </div>
                <div className = {style["connect"]}>
                    <h1>+3726028473</h1>
                    <img src={email} alt=""/>
                </div>
            </div>
            <hr  className={style["lastLine"]}/>
            <div className={style["secondRow"]}>
                <div className={style["copywrite"]}>
                      <p>©2020 CBD white label. All Reghts Reserved</p>
                </div> 
                <div className={style["right-c"]}>
                    <div className={style["privacy"]}>
                      <p>Privacy Policy</p>
                    </div>
                    <div className={style["condition"]}>
                      <p>Tearms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
}
export default App;
