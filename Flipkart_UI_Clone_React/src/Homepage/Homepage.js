import React from 'react';
import Categories from './Categories';
import HomeCarousel from './Homecarousel';
//import Carousrel from './Carousrel';
import './Homepage.css';
import CarouselDealsOfDay from './CarouselDealsOfDay';
import  Carousel  from './Carousel';
import Image from 'react-bootstrap/Image'
import NavBar from './NavBar';
//import { getByTitle } from '@testing-library/react';

function Homepage() {
    return (
        <div>
            <NavBar />
            <Categories />
            <HomeCarousel /> 
            <div className="side--ad--homepage">
                    <div className="img--ad--homepage">
                        <img src="https://rukminim1.flixcart.com/flap/464/708/image/e910ae1f9ed2be97.jpg?q=70" alt="no"/>
                    </div>
            </div>
            <CarouselDealsOfDay 

            title={"Deals of the Day"}
            img1={"https://rukminim1.flixcart.com/image/150/150/kfzq8i80/pen/p/g/b/parker-9000023617-original-imafwcffhythtahc.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/kk5rgy80/top/s/k/m/l-tttp004113-tokyo-talkies-original-imafzkjfja835znk.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kndi4y80/watch/b/c/e/fs5756-fossil-original-imag227dk2rr2ead.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/jwaztzk0/cases-covers/back-cover/c/y/w/ringke-b07sbfm9tt-original-imafhyryq7wbvu46.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/jw6pifk0/t-shirt/h/b/n/s-9045005-harvard-original-imafgwnud4qwgdak.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/flap/150/150/image/6b8628c877fdb9ed.jpg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/k12go7k0/suitcase/6/h/r/s01-3-combo-set-28-24-20-s01-3-combo-set-28-24-20-cabin-check-in-original-imafkpvjgzgczzbh.jpeg?q=70"}   

            productName1={"Stationery&OfficeSuppl..."}
            productName2={"Tops,Nighty,Bra..."} 
            productName3={"Timex,Sonata,Wrong..."} 
            productName4={"MobileBackCovers"} 
            productName5={"Sparx,Bruton&More"} 
            productName6={"U.S.Pola,UCB,Roadster"} 
            productName7={"Belts,WalletsCombos"} 
            productName8={"TopSellingAccessories"} 

            offer1={"Upto70%+Extra10%Off"}
            offer2={"From₹149-399"}
            offer3={"From₹399"}
            offer4={"Extra10%Off"}
            offer5={"From₹199+Extra10%Off"}
            offer6={"From₹249+Extra10%Off"}
            offer7={"From₹199+Upto10%Off"}
            offer8={"60-80%Off"}
            
            keywords1={"Notebooks, Pens..."}
            keywords2={"Provogue,Dreamble,Metr..."}
            keywords3={"PriceLikeNeverBefore"}
            keywords4={"FromRingke&Spigen"}
            keywords5={"CasualShoesForMen's"}
            keywords6={"T_Shirts,Jeans,Jackets..."}
            keywords7={"#TopSelling"}
            keywords8={"Backpacks,Belts,Wallets..."}
        
            />

            <Carousel 
            
            title={"Headphones & Speakers"}
            img1={"https://rukminim1.flixcart.com/image/150/150/krayqa80/headphone/x/9/r/rma2010-realme-original-imag54ey5mxggzcy.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/k9d3p8w0/headphone/j/v/f/rockerz-255f-rockerz-255-boat-original-imafr68zshenv3ya.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kbtp0280/headphone/8/v/b/tedpm20-bk-mivi-original-imaft33hphgycrwz.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/headphone/dynamic/z/j/h/jbl-c150siublk-original-imafeyby52kxehz2.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/kiqbma80-0/speaker/soundbar/l/l/o/aavante-bar-3100d-boat-original-imafygcgjbcerj7f.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/k5h2jrk0/speaker/home-theatre/c/w/n/intex-it-2616-tufb-os-original-imafz5g7njyhb2vg.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/k2f1n680/headphone/9/g/s/boat-rockerz-400-super-extra-bass-original-imafg95ztgz7z8yz.jpeg?q=70"}   

            productName1={"HeadPhones"}
            productName2={"WireLess Earphones"} 
            productName3={"Bluetooth Speakers"} 
            productName4={"TruewirelessEarbuds"} 
            productName5={"Wired Earphones"} 
            productName6={"Dolby Enabled"} 
            productName7={"Home Theaters"} 
            productName8={"BluetoothHeadphones"} 

            offer1={"Explore More"}
            offer2={"From ₹899"}
            offer3={"Explore More"}
            offer4={"Explore More"}
            offer5={"From ₹399"}
            offer6={"Up To 50% Off"}
            offer7={"Shop Now"}
            offer8={"From ₹899"}
            
            keywords1={"New Launches"}
            keywords2={"ForWorkFromHomeCal..."}
            keywords3={"New Launches"}
            keywords4={"New Launches"}
            keywords5={"Mi,boAt,realme&more"}
            keywords6={"HomeTheatres&Soundb..."}
            keywords7={"New Launches"}
            keywords8={"JBL,boAt&More"}
            
            />
            <div className="brand--homepage">
                    <div className="img--brand--homepage">
                        <Image src="https://rukminim1.flixcart.com/flap/480/480/image/28bd10243125450e.jpg?q=50" alt="no" rounded responsive/>
                        <Image src="https://rukminim1.flixcart.com/flap/480/480/image/0ea5db73aeeb9296.jpg?q=50" alt="no" rounded responsive/>
                        <Image src="https://rukminim1.flixcart.com/flap/480/480/image/2d86c8d4f37e8af3.jpg?q=50" alt="no" rounded responsive/>
                    </div>
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Wedding Gifting Range"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/kh9gbrk0hlty2aw/pendant-locket/z/z/v/1-p81087-sukkhi-original-imafxfttbygacqzg.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/k4n2avk0/showpiece-figurine/s/g/g/buddha-f4set1-nice-choice-original-imafgnjwny5wjgdn.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kao98cw0/jharokha/9/n/u/wojh503-ecraftindia-original-imafs6wzuzcr2yaf.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kuvkcy80/flower-basket/c/7/h/best-for-home-office-table-decoration-or-gift-table-flower-pot-original-imag7ws8cej5txpb.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/knknc7k0/valentine-gift-set/a/m/s/k1combomkpaza55-k1portal-original-imag27vpkgpwbf3t.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/k9bo9e80/idli-maker/r/h/g/rbin-1104-renberg-original-imafr572anyxvfa7.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/kfu0h3k0/condiment-set/k/m/s/211-3d-metro-super-store-original-imafw79uyk4qzffp.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/kwtkxow0/makeup-kit/f/r/i/fashion-changer-makeup-kit-5-piece-makeup-brushes-6-piece-makeup-original-imag9f9fzk8essxy.jpeg?q=70"}    

            productName1={"Pendants&Lockets"}
            productName2={"Showpieces&Figurines"} 
            productName3={"Jharokhas"} 
            productName4={"Flower Baskets"} 
            productName5={"Gift Sets"} 
            productName6={"Idli Makers"} 
            productName7={"Condiment Sets"} 
            productName8={"MakeupKits&Combo"} 

            offer1={"Min80% Off"}
            offer2={"Min70% Off"}
            offer3={"Min40% Off"}
            offer4={"Min60% Off"}
            offer5={"Min70% Off"}
            offer6={"Min50% Off"}
            offer7={"Min60% Off"}
            offer8={"Min50% Off"}
            
            keywords1={"Grab Now!"}
            keywords2={"Buy Now!"}
            keywords3={"Grab Now!"}
            keywords4={"Explore Now!"}
            keywords5={"Discover Now!"}
            keywords6={"Hurry,Don'tMissOut"}
            keywords7={"Great Savings!"}
            keywords8={"Shop Now!"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Top Picks On Men's Clothing"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/ksez24w0/t-shirt/v/0/g/m-84790302-puma-original-imag5zk4fswuzx8h.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/jvsf3ww0/jacket/g/z/z/l-1826111-invictus-original-imafghx9m4b7nqyz.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/jbgtnrk0/blazer/a/y/q/44-blkp01-redwood-original-imafyr84ngqzxvqb.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kflftzk0/jacket/p/c/w/m-hljk000342-highlander-original-imafwyypzzjecdaj.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/flap/150/150/image/57b64c251e5af10e.jpg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/k13w4280/cap/x/d/e/free-polo9-huntsman-era-original-imafkryzgsu3dfvc.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/k0mqtu80/sweatshirt/c/q/u/m-m7aw19swtsh021a-metronaut-original-imafkdasep2zmsts.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/jpk2z680/shirt/a/y/q/xl-c501-towelblue-dennis-lingo-original-imafbryzzcnw92cw.jpeg?q=70"}   

            productName1={"BestDealsOnTopBrands"}
            productName2={"Roadster,HRX,Wrogn..."} 
            productName3={"PartyBlazersForMen"} 
            productName4={"Jackets,sweatshirts&M.."} 
            productName5={"Cool Cargos"} 
            productName6={"Premium Caps"} 
            productName7={"Men's Winterwear"} 
            productName8={"Denim shirts"} 

            offer1={"Min 40% Off"}
            offer2={"Min 60% Off"}
            offer3={"Under ₹1500"}
            offer4={"Min 40% Off"}
            offer5={"Upto 60% Off"}
            offer6={"Upto 60% Off"}
            offer7={"Under ₹799"}
            offer8={"Min 60% Of"}
            
            keywords1={"LouisPhillippe,GAP,Van..."}
            keywords2={"T-Shirts,Jeans"}
            keywords3={"Best Prices"}
            keywords4={"Winter is Here!"}
            keywords5={"Grab or Gone!"}
            keywords6={"U.S.P.A.,Adidas"}
            keywords7={"Metronaut,Billion"}
            keywords8={"Not to be Missed!"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Ease your Daily Chores"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/k5ihzm80/inverter/v/k/z/zelio-1100-12v-luminous-original-imafz6gnztg3p8fg.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/j95y4cw0/iron/a/e/r/usha-ei-1602-original-imaezyzszwgv7hf5.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/mixer-grinder-juicer/j/g/h/bajaj-amaze-amaze-original-imadtfh3nyvkgg5g.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/jw5a2kw0/electric-kettle/s/p/a/bajaj-juvel-original-imafgwdzjfhzfutm.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/jf751u80/iron/r/w/e/flipkart-smartbuy-irdns1000gb-irdns1000gb-original-imaf3pn2jyfnyf8z.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/kv5kfww0/vacuum-cleaner/h/n/e/seagull-milagrow-original-imag846wddgegqhc.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/jf8khow0/iron/8/w/c/nova-plus-1100-w-amaze-ni-10-original-imaf3qxpabhhdwss.jpeg?q=70"}   

            productName1={"Sewing Machines"}
            productName2={"Inverters"} 
            productName3={"USHAEI1602wDr.."} 
            productName4={"JuicerMixerGrinders"} 
            productName5={"Electric Kettles"} 
            productName6={"SmartBuy1000.."} 
            productName7={"MilagrowSeagullRoboti.."} 
            productName8={"NovaPlusAmazeNi101.."} 

            offer1={"Shop Now!"}
            offer2={"From ₹499"}
            offer3={"₹629"}
            offer4={"Shop Now!"}
            offer5={"₹469"}
            offer6={"₹489"}
            offer7={"₹11,990"}
            offer8={"₹474"}
            
            keywords1={"Usha,Singer&More"}
            keywords2={"Luminous,Microtek"}
            keywords3={"Trending!"}
            keywords4={"Shop Now!"}
            keywords5={"Bajaj"}
            keywords6={"Shop Now!"}
            keywords7={"GoogleAssiant.."}
            keywords8={"Shop Now!"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 

            title={"Furniture Bestsellers"} 

            img1={"https://rukminim1.flixcart.com/image/150/150/ke7ff680/hammock-swing/j/f/u/q3-jkaf-y3l0-furniture-kart-original-imafux96kpy7grch.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/jfk00i80/inflatable-sofa/d/g/q/pvc-leatherette-2-seater-inflatable-sofa-color-black-wds-original-imaf3j6fzyhywqrq.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/k44hksw0/outdoor-chair/n/a/5/pp-polypropylene-9100-plastic-chairs-set-of-4-matt-and-gloss-original-imafn3uqc3vssuyq.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/j7p2tu80/office-study-chair/g/g/n/leatherette-geeken-brn-hb-01pc-dzyn-furnitures-original-imaexwygggpdgzeh.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/jjkbhjk0/book-shelf/7/w/k/particle-board-egypt-book-case-cum-display-unit-frosty-white-original-imaf73h4zddxahpm.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/kekadu80/hammock-swing/d/t/k/fc-sj-01-furniture-kart-original-imafv7bh7v349hhh.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/jq189e80/sofa-set/k/r/p/red-black-chenille-tulip-bls-3-1-1-bharat-lifestyle-red-black-original-imafc3y4kgtuw2py.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/jtltw280/storage-organizer/f/b/s/sp-88741-samaypro-original-imaf6fff8fhshjss.jpeg?q=70"}  

            productName1={"HammockAndSwings"}
            productName2={"Top20InFlatableSofa"} 
            productName3={"Outdoor Chairs"} 
            productName4={"Office Chairs"} 
            productName5={"BookShelves"} 
            productName6={"Hammock&Swings"} 
            productName7={"Sofa Sets"} 
            productName8={"Shoe Racks"} 

            offer1={"From ₹199"}
            offer2={"From ₹1,169"}
            offer3={"From ₹479"}
            offer4={"From ₹3,190"}
            offer5={"From ₹599"}
            offer6={"From ₹299"}
            offer7={"Min 30% Off"}
            offer8={"From ₹149"}
            
            keywords1={"Tendy Collection"}
            keywords2={"Cozy Corner"}
            keywords3={"Nilkamal,Avro"}
            keywords4={"Leather,Fabric&More"}
            keywords5={"NewMadeInIndiaCollec..."}
            keywords6={"MTHUB,Swingzy..."}
            keywords7={"Fabric&Leatherette"}
            keywords8={"NIkamal,Ebee&More"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Top Offers On"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/klv7ekw0/laptop-bag/8/j/t/15-6-inch-safety-cover-15-6-sleeve-slip-case-xbolt-original-imagyw6zyhmttjgb.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kgwld3k0-0/watch/2/q/t/m2led-rubyfashion-original-imafxfgzybwhxhkf.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kdt50nk0/bag/j/r/7/olsk010-ol-skool-25-original-imafum9ybkf6regh.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/k4rcmfk0pkrrdj/watch-refurbished/p/h/q/c-ng3124sl02-fastrack-original-imafgg5d2bsh7ysp.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/knrsjgw0/backpack/g/6/7/premium-vegan-leather-bnf-0094-laptop-backpack-b-9-fashion-original-imag2dtstjbmwzew.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/k547l3k0/sling-bag/q/y/w/trio-quin-trapeze-crossbody-bag-trio-quin-dob-trapeze-crossbody-original-imafnvgucaw8hq4d.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/jn4x47k0/backpack/g/3/v/stanza-11894-backpack-wildcraft-original-imaf7qdcyjehwb6h.jpeg?q=70"}  

            productName1={"Casio,Fastrack&More"}
            productName2={"Laptop Bags"} 
            productName3={"NeverSeenBefore"} 
            productName4={"Laptop Bags"} 
            productName5={"Titan,Fastrack,Timex.."} 
            productName6={"LowestPricesOnBackpa.."} 
            productName7={"DailyObjects"} 
            productName8={"Wildcraft"} 

            offer1={"Upto 80% Off"}
            offer2={"Under ₹199"}
            offer3={"From ₹99"}
            offer4={"Min 60%"}
            offer5={"Upto 70% Off"}
            offer6={"Under ₹799"}
            offer7={"Min 40%"}
            offer8={"From ₹599"}
            
            keywords1={"Women Watches"}
            keywords2={"Expandable Sleeve"}
            keywords3={"Watches"}
            keywords4={"Skybags,Wildcraft&More"}
            keywords5={"#Stylish Watches"}
            keywords6={"Skybags,AmericanTouri.."}
            keywords7={"Handbags&Clutches"}
            keywords8={"Backbags"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Men's Footwear"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/kpinwy80/shoe/n/f/j/6-brd-439-6-birde-green-original-imag3qhkaf3pzmdf.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/k0flmkw0/shoe/s/c/h/dtaw19fw-030-8-ducati-red-original-imafk8cy7ggueb23.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kiqbma80-0/shoe/w/l/u/12189601-42-jack-jones-castlerock-original-imafygseqn8gyfzz.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kq5iykw0/shoe/j/d/p/6-pns8563412-robbie-jones-white-original-imag48by38jyp5hz.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/kjhgzgw0-0/shoe/4/0/c/cj0291-100nike-10-nike-white-black-flash-crimson-oracle-aqua-original-imafzfg4srdt4s5y.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/jvqzo280/shoe/k/a/u/gc-1868115-43-woodland-camel-original-imafgkz6s3fmrhgf.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/k7xnukw0/sandal/k/f/t/zxt301-5-calibrel-brown-original-imafq2a7kuanyty9.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/kjn6qvk0-0/shoe/d/c/v/ck2669-001nike-12-nike-black-white-smoke-grey-original-imafz5vwe5t53z3t.jpeg?q=70"}  

            productName1={"BesySellingFootWear"}
            productName2={"Levi's,Ducati&More"} 
            productName3={"Jack&Jones,WROGN&..."} 
            productName4={"BestSellingFootwear"} 
            productName5={"Nike,ADIDAS,Puma.."} 
            productName6={"Woodland,Bata,RedTap.."} 
            productName7={"Season'sBestSeller"} 
            productName8={"Nike,Skechers"} 

            offer1={"From ₹199"}
            offer2={"30-60% Off"}
            offer3={"Min 30% Off"}
            offer4={"30-60% Off"}
            offer5={"Upto 60% Off"}
            offer6={"Upto 60% Off"}
            offer7={"From ₹399"}
            offer8={"Upto 40% Off"}
            
            keywords1={"Men'sCasualShoes,San..."}
            keywords2={"Men's Sneakers"}
            keywords3={"CasualShoes,Sneakers..."}
            keywords4={"Men's Sneakers"}
            keywords5={"RunningShoes..."}
            keywords6={"CasualShoes,Sneakers,..."}
            keywords7={"Men'sSandals&Slippers.."}
            keywords8={"Men'sSports Shoes.."}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Home Makeover"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/kwqq1zk0/television/f/g/x/-original-imag9cjzwcc9hsjm.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/sewing-machine/f/c/y/usha-marvella-original-imaegyvtgv6k4rvk.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kk2wl8w0/egg-cooker/x/e/n/double-layer-electric-egg-boiler-ny-egg-egg-cooker-14-eggs-egg-original-imafzgfbns4a6gtg.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/jwxuvm80/hammock-swing/f/j/c/h-swing-carry-bird-original-imafhghuucvupzzj.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/jo8xg280/wardrobe-closet/n/h/9/particle-board-w4wal00ed2wmp-flipkart-perfect-homes-american-original-imaf9m4hh8mg5e79.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/kf75fgw0/electric-cooker/c/q/f/flipkart-smartbuy-classic-original-imafvpsmwmvqzgwg.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/j752nww0/wardrobe-closet/u/j/g/particle-board-kosmo-apex-3-door-dresser-wardrobe-in-walnut-original-imaexe2fzfsurgrr.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/ke1pnrk0/sofa-sectional/s/m/b/blue-polycotton-mfm0093-muebles-casa-blue-original-imafusptmzsnmnfw.jpeg?q=70"}  

            productName1={"MostTrendingTVs"}
            productName2={"Sewing Machines"} 
            productName3={"Egg Cookers"} 
            productName4={"Swings"} 
            productName5={"Wardrobes"} 
            productName6={"ElectricRiceCookers"} 
            productName7={"Wardobes"} 
            productName8={"Sofas"} 

            offer1={"Upto 60% Off"}
            offer2={"Shop Now"}
            offer3={"From ₹249"}
            offer4={"From ₹1,499"}
            offer5={"From ₹5,999"}
            offer6={"From ₹299"}
            offer7={"From ₹6,999"}
            offer8={"From ₹5,99"}
            
            keywords1={"FreeInstallationIn48Hrs.."}
            keywords2={"Usha,Singer&More"}
            keywords3={"Nova,Kent&More"}
            keywords4={"TrendyMadeInIndianColl.."}
            keywords5={"TrendyMadeInIndianColl."}
            keywords6={"Butterfly,Panasonic.."}
            keywords7={"GoLocalFurniture"}
            keywords8={"Nikamal,Kurlon.."}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Best Battery Phones"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/kbb49zk0/mobile/x/f/u/tecno-spark-power-2-lc8-original-imafszvfcwxdgngz.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/kcm9t3k0/mobile/p/p/q/vivo-x50-pro-vivo-2006-original-imaftppahwbc6myx.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/kcauaa80/mobile/2/p/u/poco-m2-pro-mzb9621in-original-imaftg9fkdpgbgxq.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kavefm80/mobile/6/y/t/samsung-galaxy-m11-sm-m115fzkeins-original-imafscjyhxwghgwf.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/k51cpe80pkrrdj/mobile/z/y/h/oppo-a9-2020-cph1937-original-imafkhhxh2vsxnmq.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/kbs9k7k0/mobile/w/4/r/realme-x3-superzoom-rmx2085-original-imaft26hvewk4dpj.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/kjvrdzk0/mobile/k/k/r/iqoo-3-i1927-original-imafzcqszgwhrgvr.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/k6zda4w0/mobile/s/n/9/tecno-camon-15-pro-cd8-original-imafpbhc7p25zda7.jpeg?q=70"}  

            productName1={"TecnoSparkPower2"}
            productName2={"ViVoX50Pro"} 
            productName3={"POCOM2Pro"} 
            productName4={"SAMSUNG Galaxy"} 
            productName5={"OPPO A9 2020"} 
            productName6={"realmeX3SuperZoom"} 
            productName7={"IQOO3"} 
            productName8={"Tecno Camon"} 

            offer1={"6000mAh Battery"}
            offer2={"4315mAh Battery"}
            offer3={"5000mAh Battery"}
            offer4={"5000mAh Battery"}
            offer5={"5000mAh Batter"}
            offer6={"4200mAh Batter"}
            offer7={"4440mAh Batter"}
            offer8={"4000mAh Batter"}
            
            keywords1={"₹9999"}
            keywords2={"Now₹49990"}
            keywords3={"Now₹14999"}
            keywords4={"Now₹12999"}
            keywords5={"₹16990"}
            keywords6={"Now₹27990"}
            keywords7={"Now₹34990"}
            keywords8={"Now₹16990"}
            
            />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <Carousel 
            
            title={"Books & Stationary"} 
            img1={"https://rukminim1.flixcart.com/image/150/150/jybvafk0/key-chain/f/g/u/heart-shape-photo-frame-for-gifting-purposes-keychain-ecstasy-original-imafh4zn3whuchgq.jpeg?q=70"}  
            img2={"https://rukminim1.flixcart.com/image/150/150/jdg9ocw0/card-holder/p/h/r/exclusive-black-stainless-steel-debit-credit-card-holder-original-imaeyqf8cyaxvuuv.jpeg?q=70"}  
            img3={"https://rukminim1.flixcart.com/image/150/150/jhp5si80/stuffed-toy/u/g/y/original-express-cap-teddy-premium-quality-non-toxic-super-soft-original-imaf5nz5x9zw4r2z.jpeg?q=70"}  
            img4={"https://rukminim1.flixcart.com/image/150/150/kihqz680-0/block-construction/q/l/i/mega-jumbo-pack-230-pcs-building-blocks-set-in-multicolour-with-original-imafy9yhhd2etqjx.jpeg?q=70"}  
            img5={"https://rukminim1.flixcart.com/image/150/150/k0flmkw0/vehicle-pull-along/s/5/w/car-set-hot-wheels-original-imafk4vkh8vhvxys.jpeg?q=70"}  
            img6={"https://rukminim1.flixcart.com/image/150/150/jjiw1ow0/desk-organizer/f/w/r/metal-mesh-desk-organizer-black-pen-and-clip-holder-shrih-original-imaey85d7fguztqe.jpeg?q=70"}  
            img7={"https://rukminim1.flixcart.com/image/150/150/jt395zk0/pencil/u/6/a/df912-apsara-original-imafeghj4fyzthub.jpeg?q=70"}  
            img8={"https://rukminim1.flixcart.com/image/150/150/jyeq64w0/remote-control-toy/f/s/v/mini-racing-4-channel-skyler-collection-original-imafggm4vnwqevxt.jpeg?q=70"}  

            productName1={"Key Chains"}
            productName2={"Card Holder"} 
            productName3={"Soft Toys"} 
            productName4={"Puzzles"} 
            productName5={"ToyCars,Trains&Bikes"} 
            productName6={"Desk Organisers"} 
            productName7={"Pencil"} 
            productName8={"RemoteControlToys"} 

            offer1={"From ₹49"}
            offer2={"From ₹99"}
            offer3={"Up to 80% Off"}
            offer4={"From ₹69"}
            offer5={"From ₹99"}
            offer6={"Up to 50% Off"}
            offer7={"From ₹49"}
            offer8={"Under ₹599"}
            
            keywords1={"Explore Now"}
            keywords2={"Explore Now"}
            keywords3={"DimpyStuff&More"}
            keywords4={"Miss&Chief&More"}
            keywords5={"HotWheels,FisherPrice.."}
            keywords6={"Explore Now"}
            keywords7={"Apsara,Faber_Castell&"}
            keywords8={"Miss&Chief,Simba&more"}
            
            />

        </div>
    )
}

export default Homepage;
