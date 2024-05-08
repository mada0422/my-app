import './App.css';
import React from 'react';
import styles from './App.module.css';
import image from './images/clinta.jpg';
import image2 from './images/gene.jpg';
import image3 from './images/room.jpg';
import image4 from './images/wax.jpg';

class Home extends React.Component {

    callMe = () => {
        console.log("suna-ma")
        var testObject = { 'one': 1, 'two': 2, 'three': 3 };

        // Put the object into storage
        localStorage.setItem('testObject', JSON.stringify(testObject));

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('testObject');

        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    }
    
    render() {
        return (
            <div>
                <h2 style={{ margin: 0, lineHeight: 2.4 }}

                >
                    <p className={styles.underline}>
                        Beauty plus
                    </p>
                </h2>

                <div className={styles.chenar}>
                    <p className={styles.text}>Brow Lamination & Lash Lift: Lift Your Brows AND Your Lashes</p>
                    <p style={{ margin: "10px", textAlign: "center", color: "#a47225" }}

                    >Lash lamination is a treatment that is performed directly on the natural lashes,
                        through a thorough lifting process and, if necessary, coloring.
                        The main purpose of this procedure is to nourish the hair,
                        enriching the structure of the hair both inside and outside with keratin and vitamins,
                        giving it elasticity and shine, overall a visibly healthier appearance.
                        The whole procedure allows both the arching of very straight eyelashes
                        and the arrangement of tangled eyelashes.</p>


                </div>
                <div class={styles.chenar}>
                    <table>
                        <tr>
                            <td>  <img src={image} /></td>
                            <td> <p className={styles.text}>LASH LIFT “DON’TS” IN THE FIRST 24 HOURS AFTER TREATMENT</p>
                                <ul className={styles.listLash}>
                                    <li>Don’t get your eyelashes wet</li>
                                    <li>Don’t apply mascara or eye makeup</li>
                                    <li>Don’t sweat</li>
                                    <li>Don’t go into a sauna</li>
                                    <li>Don’t use oil-based products</li>
                                    <li>Don’t rub your eyes</li>
                                </ul></td>
                            <td>
                                <img src={image2} />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.chenar}>
                    <p className={styles.text}>Price List</p>
                    <table className={styles.tablePrices}>
                        <tr>
                            <td className={styles.tdPrices}><h4> Eyelashes/Eyebrows and Dyeing</h4>
                                <ol>
                                    <li>Eyelash lift 25£</li>
                                    <li>Eyebrows lift 30£</li>
                                </ol>
                            </td>
                            <td className={styles.tdPrices}>
                                <h4>Dyeing</h4>
                                <ol>
                                    <li> Eyelashes 5£</li>
                                    <li>Eyebrows 5£</li>
                                </ol>
                            </td>
                        </tr>
                    </table>


                </div>
                <div className={styles.chenar}>

                    <p className={styles.text}> Bikini? Brazilian? Hollywood?
                        Pick your favourite waxing treatment and be summer-ready in no time at our comfortable salon.</p>

                    <aside style={{ textAlign: "center" }}>
                        <img src={image3} />
                    </aside>
                </div>

                <div className={styles.chenar}>
                    <p className={styles.text}>Price List Waxing</p>
                    <ol>
                        <li>Full Arms 15£</li>
                        <li>Half Arms 12£</li>
                        <li>Upper Lip 4£</li>
                        <li>Whole Face 13£</li>
                        <li>Underarms 10£</li>
                        <li>Full Legs 18£</li>
                        <li>Half Legs 13£</li>
                        <li>Bikini 12£</li>
                        <li>Hollywood 25£</li>
                        <li>Brazilian 20£</li>
                        <li>Full Body 50£</li>
                    </ol>

                </div>
                <div className={styles.chenar}>
                    <p className={styles.text}> I am waiting for you in a warm and welcoming space for wax treatment,
                        eyelash/eyebrow lamination and eyelash/eyebrow dyeing ❤️</p>
                </div>
                <div className={styles.chenar}>
                    <aside>
                        <img src={image4} />



                        <div>
                            <h3>Contacts</h3>
                            <div>
                                <a href="tel:+447423608114">
                                    <span>C:</span>
                                    +447423608114
                                </a>
                                <button onClick={this.callMe}>Suna-ma</button>
                            </div>
                            <div>
                                <a href="ancaioana1998@yahoo.com">
                                    <span>E:</span>
                                    ancaioana1998@yahoo.com
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>





        );
    }
}

export default Home;