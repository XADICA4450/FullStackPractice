import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../Constant/constant";
import axios from "axios"
import { PiCarProfileDuotone } from "react-icons/pi";
import { MdRefresh } from "react-icons/md";
import { IoSearch } from "react-icons/io5";




import styles from "./home.module.scss";
import Grid from '@mui/material/Grid2';


import { LuShoppingCart } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";



import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/context";



const Home = () => {
    const [shoes, setShoes] = useState([])
    const [shoesCopy, setShoesCopy] = useState([])
 


    const { toggleWishlist } = useContext(WishlistContext)



    const getShoes = async () => {
        try {
            const res = await axios(`${BASE_URL}`)
      
            setShoes(res.data.data)
            console.log(res.data.data);
            
            setShoesCopy(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

   
    useEffect(() => {
        getShoes()
    }, [])


   

    return (

        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="shoes page" />
            </Helmet>

            <div className={styles.imgg}>
                <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt=""  />
              <div className={styles.perfect}>  <h1>Findin Your  Perfect Shoes</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> 
                Officia, eveniet repellat? Optio maiores vero neque? Exercitationem. <br/>
                sit amet consectetur adipisicing elit
                
                </p>
                <button className={styles.now}>Shop Now</button></div>
                
            </div>


            <div className={styles.cardss}>
                <div className={styles.card}>
                <PiCarProfileDuotone className={styles.pi} />
            <h1> Free Shipping</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eligendi sequi nulla voluptas, esse fuga qui quia et <br/>   amet consectetur adipisicing elitbeatae magni officiis?</p>
                </div>

                <div className={styles.card}>
                <MdRefresh className={styles.md} />

            <h1> Free Returns</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eligendi sequi nulla voluptas, esse fuga qui quia et <br/>   amet consectetur adipisicing elitbeatae magni officiis?</p>
                </div>
                <div className={styles.card}>
                <IoSearch className={styles.io}/>

            <h1> Customer Support</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Eligendi sequi nulla voluptas, esse fuga qui quia et <br/>   amet consectetur adipisicing elitbeatae magni officiis?</p>
                </div>
           
            </div>
            <hr/>
           
            
            <div>
            <div className={styles.pic}>
                <img className={styles.image} src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
               <div className={styles.title}>
               <h3>Collection</h3>
               <h1>Women</h1>
               </div>
               <img className={styles.image} src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
               <div className={styles.title}>
               <h3>Collection</h3>
               <h1>Children</h1>
               </div>
               <img className={styles.image} src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
               <div className={styles.title}>
               <h3>Collection</h3>
               <h1>Men</h1>
               </div>
            </div>


                <div className="container">

                    <div className={styles.shoes}>
                        <Grid container spacing={2}>
                            {
                                shoes.length > 0 && shoes.map((s) => {
                                    return (<Grid size={{ xs: 12, md: 6, lg: 4 }} key={s._id}>
                                        <div className={styles["shoe"]}>
                                            <img src={s.imageUrl} alt={s.name} />
                                            <h3 className={styles.name}>{s.name}</h3>
                                            <h3 className={styles.description}>{s.description}</h3>
                                            <p className={ styles.price}>${s.price} </p>



                                            
                                            <button className={styles["cart"]}> <LuShoppingCart />
                                                Add to Cart</button>
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                <Link to={`/${s._id}`}><FaInfoCircle /></Link>
                                                <FaRegHeart onClick={() => { toggleWishlist(s) }} />
                                            </div>
                                        </div>
                                    </Grid>)
                                })
                            }
                        </Grid>
                    </div>

                </div>
            </div >
        </>

    )
}

export default Home