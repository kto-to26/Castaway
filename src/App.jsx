import './App.scss';
import Episode from './episode/Episode';
import Comment from "./comments/Comment";

// img for episode
import { epOne } from './image';
import { epTwo } from './image';
import { epThree } from './image';
import {star} from "./image"
// footer
// logo
import {inst} from "./image"
import {tw} from "./image"
import {fc} from "./image"

// links
import { linkOne } from './image';
import { linkTwo } from './image';
import { linkThree } from './image';
import { linkFour } from './image';
import { linkFive } from './image';


// props
const Data = {
  episode: [
    {
      img: epOne,
      type: 'Gear',
      num: 'Episode 3',
      name: 'Should you get outboard audio gear?',
      main:
        'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
    },
    {
      img: epTwo,
      type: 'Tips & Tricks',
      num: 'Episode 2',
      name: 'Mic tricks to take you to the next level',
      main:
        'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
    },
    {
      img: epThree,
      type: 'Gear',
      num: 'Episode 1',
      name: 'The best microphone under $200',
      main:
        'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    },
  ],
  comments:[
    {
      stars:star,
      main:"I can’t recommend this podcast enough",
      name:"Betty Lacey"
    },
    {
      stars:star,
      main:"Jacob is the best in the business",
      name:"Adam Driver"
    },
    {
      stars:star,
      main:"A wealth of audio knowledge",
      name:"Marcus Brown"
    },
    {
      stars:star,
      main:"Every episode is a gem!",
      name:"Jessica Knowl"
    },
    {
      stars:star,
      main:"Whoa whoa, let me take some notes!",
      name:"Scott Adams"
    },
    {
      stars:star,
      main:"I’ve upped my game considerably since I started listening",
      name:"Steven Blast"
    },
  ],
  footer:{
    logo:[
      {
        img:inst,
      link:"https://www.instagram.com/"
      },
      {
        img:tw,
      link:"https://twitter.com/"
      },
      {
        img:fc,
      link:"https://www.facebook.com/"
      },

    ],
    nav:{
      left:[
        {
          name:"Home",
          link:"#Home"
        },  
        {
          name:"About",
          link:"#about"
        },
        {
          name:"Episodes",
          link:"#episodes"
        },
        {
          name:"Contact",
          link:"#contact"
        },
      ],
      right:[
        {name:"Style Guide"},
        {name:"Instructions"},
        {name:"Changelog"},
        {name:"Credit"},
        {name:"Powered by Webflow"},
        {name:"Licenses"},
      ]
    },
      link:[
        {img:linkOne},
        {img:linkTwo},
        {img:linkThree},
        {img:linkFour},
        {img:linkFive},
      ]
    
  }

};

console.log(Data.episode[0]);

function App() {



  return (
    <>
      <section className="wrapper">
        <a href="" id='Home'></a>
        {/* header */}
        <header>
          {/* logo */}
          <div className="header__logo">
            <a href="">Castaway</a>
          </div>
          {/* links */}
          <ul className="header__links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#episodes">Episodes</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
        {/* block1 */}
        <section className="block1">
          <div className="block1__wrapper">
            {/* left */}
            <div className="block1__wrapper__left"></div>
            {/* right */}
            <div className="block1__wrapper__right">
              {/* text */}
              <div className="block1__wrapper__right__text">
                Take your <br /> podcast to the <p><span>next</span> <span>level</span></p>
              </div>
              {/* links */}
              <div className="block1__wrapper__right__link">
                <p>Listen on</p>
                {/* link */}
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <a href="" id="episodes"></a>
        {/* episodes */}
        <section className="episodes">
          {/* up */}
          <div className="episodes__up">
            <h1 className="episodes__up-text">Latest episodes</h1>
            <a className="episodes__up-but">View all episodes</a>
          </div>
          {/* episode */}
          <div className="episodes__content">
          <ul>
  {Data.episode.map((episode, index) => (
    <li key={index}>
      <Episode data={episode}></Episode>
    </li>
  ))}
</ul>
          </div>
        </section>

        <a href="" id='about'></a>
        {/* block 2 */}
        <section className="block2">
          <div className="block2__wrapper">
            <div className="block2__wrapper-left">
              <a href="" className="block2__wrapper-left-link"></a>
              <p className="block2__wrapper-left-meet">Meet your host</p>
              <h1 className="block2__wrapper-left-name">Jacob Paulaner</h1>
              <p className="block2__wrapper-left-main"><span>Jacob has a background in audio engineering, and has been podcasting since the early days.</span> <br /> <span>He’s here to help you level up your game by sharing everything he’s learned along the way.</span></p>
            </div>
            <div className="block2__wrapper-right"></div>
          </div>
        </section>
        <a href="" id='contact'></a>
        {/* subscribe */}
        <section className="subscribe">
          <div className="subscribe__wrapper">
            <div className="subscribe__wrapper-left">
              <div className="subscribe__wrapper-left-type">Email Newsletter</div>
              <div className="subscribe__wrapper-left-main">
              Subscribe <br /> for updates
              </div>
            </div>

            <div className="subscribe__wrapper-right">
              <form action="">
                <input type="name" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </section>

        {/* comments */}
        <section className="comments">
          <ul>
            {Data.comments.map((comment,index)=>(
              <li key={"comment" + index}>
                <Comment data={comment}></Comment>
              </li>
            ))}
            
          </ul>
        </section>

        {/* footer */}
        <footer>
          <div className="footer__wrapper">
            <div className="footer__wrapper-logo">
              <div className="footer__wrapper-logo-main"><a href="#Home">Castaway</a></div>
              <ul>
               {Data.footer.logo.map((img,index)=>{
                 return <li key={"logo" + index}><a href={img.link}><img src={img.img} alt=""/></a></li>
               })}
              </ul>
            </div>
            <div className="footer__wrapper-nav">
              <ul className="footer__wrapper-nav-left">
                {Data.footer.nav.left.map((i,index)=>(
                  
                    <li key={"left" + index}><a href={i.link}>{i.name}</a></li>
                  
                ))}
              </ul>
              <ul className="footer__wrapper-nav-right">
                {Data.footer.nav.right.map((i,index)=>(
                  <li key={"right" + index}><a href="#">{i.name}</a></li>
                ))}
              </ul>
            </div>
            <ul className="footer__wrapper-link">
              {Data.footer.link.map((i,index)=>(
                <li key={"link" + index}><a href="#"><img src={i.img} alt=""/></a></li>
              ))}
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
