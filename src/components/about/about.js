import React from 'react'
import './about.css'


export default function About() {
    return(
        <div className='grid'>
            <div>
                <h4 className='about margin-btm'>ABOUT</h4>
            </div>
            <div>
                <h1 className='margin-btm'>Find Out More <span>About Us</span></h1>
            </div>
            <div>
                <h3 className='about-text'>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita <div>at voluptas atque vitae autem.</div></h3>
            </div>
            <div className='grid-row'>
                <div className='image-margin'>
                    <img src='https://bootstrapmade.com/demo/templates/BizLand/assets/img/about.jpg' width='95%' height='80%'/>
                </div>
                <div className='head-text'>
                    <div className='main-text'>
                        <h3 style={{
                            marginBottom:-20
                        }}>Voluptatem dignissimos provident quasi corporis <br/>voluptates sit assumenda.</h3>
                        <h5 className='italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                    <div className='scnd-text'>
                        <h4 style={{
                            marginBottom:-15
                        }}>Ullamco laboris nisi ut aliquip consequat</h4>
                        <h5>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</h5>
                    </div>
                    <div className='scnd-text'>
                        <h4 style={{
                            marginBottom:-15
                        }}>Magnam soluta odio exercitationem reprehenderi</h4>
                        <h5>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</h5>
                    </div>
                    <div className='btm-text'>
                        <h4>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}