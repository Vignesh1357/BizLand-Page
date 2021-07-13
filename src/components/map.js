import React from 'react'
import ButtonAppBar from './appBar';
import Home from './home/home';
import Cards from './cards/cards'
import About from './about/about';
import Services from './services/services';
import SecondCards from './cards/secondCard';
import Contact from './contactUs/contact';
import ThirdCards from './cards/thirdCard';
import Form from './form/form';

var cardOne=1
var cardTwo=2

var dataOne = [
    {
        id: 1,
        title:"Lorem Ipsum",
        content: "Lorem Ipsum Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
    },
    {
        id:2,
        title:"Sed ut perspiciatis",
        content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
        id:3,
        title:"Magni Dolores",
        content:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
        id: 4,
        title:"Nemo Enim",
        content:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    }
]
var dataTwo=[{
        id:1,
        title:232,
        content:"Happy Clients"
    },
    {
        id:1,
        title:521,
        content:"Projects"
    },
    {
        id:1,
        title:1463,
        content:"Hours of Support"
    },
    {
        id:1,
        title:15,
        content:"Hard Workers"
    },]

var dataThree=[{
        id:1,
        title:'Lorem Ipsum',
        content:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    {   
        id:2,
        title:'Sed ut perspiciatis',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    {   
        id:3,
        title:'Magni Dolores',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {   
        id:4,
        title:'Nemo Enim',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    {   
        id:5,
        title:'Dele cardo',
        content: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
    },
    {   
        id:6,
        title:'Divera don',
        content: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
    },]

var dataFour=[{
        id:1,
        title:"Our Address",
        content:"A108 Adam Street, New York, NY 535022"
    },
    {
        id:2,
        title:"Email Us",
        content:"contact@example.com"
    },
    {
        id:3,
        title:"Call Us",
        content:"+1 5589 55488 55"
    }
]
export default function Map() {
  return (
    <>
    <ButtonAppBar />
    <Home />
    <Cards data={dataOne} card={cardOne} />
    <About />
    <Cards data={dataTwo} card={cardTwo}/>
    <Services/>
    <SecondCards data={dataThree}/>
    <Contact />
    <ThirdCards data={dataFour}/>
    <Form />
    </>
  );
}
