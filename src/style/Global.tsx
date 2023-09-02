import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .bn-head{
    font-size: 7rem;
    color: linear-gradient(#53dee9,#7645d9);
  }
.bg-opacity{
  background: rgba(21,21,21,.5);
}
.backgroundCarda{
  background: rgba(21,21,21,.6);
}
.backgroundCardaaa{
  background: none;
}
.fontWeightText{
  font-weight:200 !important;
}
.twentyFour{
  font-size: 24px;
}
.eighteenFour{
  font-size: 18px;
}
  .backbg{
    background-image: url('/images/Bg.jpg');
    background-size: cover;
    background-repeat: norepeat;
  }
  @import url('https://fonts.googleapis.com/css?family=Exo:400,700');

*{
    margin: 0px;
    padding: 0px;
}

body{
    font-family: 'Exo', sans-serif;
}


.context {
    width: 100%;
    position: absolute;
    top:50vh;
    
}

.context h1{
    text-align: center;
    color: #fce119;
    font-size: 50px;
}


.area{
    background: #fce119;  
    background: -webkit-linear-gradient(to left, #fce119, #fce119);  
    width: 100%;
    height:100vh;
    
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 10px;
    height: 10px;
    background: rgba(252, 225, 25, 0.6);
    animation: animate 25s linear infinite;
    bottom: 250px;
    border-radius: 50%;
}

.circles li:nth-child(1){
    left: 25%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
    border-radius: 50%;
}


.circles li:nth-child(2){
    left: 10%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 18s;
    border-radius: 50%;
}

.circles li:nth-child(3){
    left: 70%;
    width: 15px;
    height: 15px;
    animation-delay: 4s;
    border-radius: 50%;
}

.circles li:nth-child(4){
    left: 40%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 18s;
    border-radius: 50%;
}

.circles li:nth-child(5){
    left: 65%;
    width: 10px;
    height: 10px;
    animation-delay: 0s;
    border-radius: 50%;
}

.circles li:nth-child(6){
    left: 75%;
    width: 5px;
    height: 5px;
    animation-delay: 3s;
    border-radius: 50%;
}

.circles li:nth-child(7){
    left: 35%;
    width: 5px;
    height: 5px;
    animation-delay: 3s;
    border-radius: 50%;
}

.circles li:nth-child(8){
    left: 50%;
    width: 17px;
    height: 17px;
    animation-delay: 15s;
    animation-duration: 45s;
    border-radius: 50%;
}

.circles li:nth-child(9){
    left: 20%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    animation-duration: 50s;
    border-radius: 50%;
}

.circles li:nth-child(10){
    left: 85%;
    width: 5px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 11s;
    border-radius: 50%;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 50%;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 1;
        border-radius: 50%;
    }

}

.wrapper {
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    overflow: hidden;
  }
  
  .main-div {
    position: relative;
    margin: 10px;
    background-color: transparent;
  }
  
  .main-div1::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 50%;
    -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
            box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
    z-index: -1;
    -webkit-animation-name: yellow-shadow;
            animation-name: yellow-shadow;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 2s;
            animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  
  .main-div1::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 50%;
    -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
            box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
    z-index: -1;
    -webkit-animation-name: cyan-shadow;
            animation-name: cyan-shadow;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 2s;
            animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  
  .main-div2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
            box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
    z-index: -1;
    -webkit-animation-name: gradient-shadow;
            animation-name: gradient-shadow;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 2s;
            animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }
  
  .main-div3::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    -webkit-box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
            box-shadow: 0 0 17px 3px #ffff01,0 0 4px 2px #ffff01;
    z-index: -1;
    -webkit-animation-name: half-yellow-shadow;
            animation-name: half-yellow-shadow;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 5s;
            animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  
  .main-div3::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
            box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
    z-index: -1;
    -webkit-animation-name: half-cyan-shadow;
            animation-name: half-cyan-shadow;
    -webkit-animation-timing-function: ease;
            animation-timing-function: ease;
    -webkit-animation-duration: 5s;
            animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  
  h1 {
    font-size: 50px;
    margin: 0;
    position: relative;
    z-index: 3;
    padding: 20px;
    // background-color: #fce119;
    color: #fff;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  
  @-webkit-keyframes yellow-shadow {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: 50%;
      left: 0;
    }
    50% {
      top: 50%;
      left: 50%;
    }
    75% {
      top: 0;
      left: 50%;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  
  @keyframes yellow-shadow {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: 50%;
      left: 0;
    }
    50% {
      top: 50%;
      left: 50%;
    }
    75% {
      top: 0;
      left: 50%;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
  
  @-webkit-keyframes cyan-shadow {
    0% {
      right: 0;
      bottom: 0;
    }
    25% {
      right: 0;
      bottom: 50%;
    }
    50% {
      right: 50%;
      bottom: 50%;
    }
    75% {
      right: 50%;
      bottom: 0;
    }
    100% {
      right: 0;
      bottom: 0;
    }
  }
  
  @keyframes cyan-shadow {
    0% {
      right: 0;
      bottom: 0;
    }
    25% {
      right: 0;
      bottom: 50%;
    }
    50% {
      right: 50%;
      bottom: 50%;
    }
    75% {
      right: 50%;
      bottom: 0;
    }
    100% {
      right: 0;
      bottom: 0;
    }
  }
  
  @-webkit-keyframes gradient-shadow {
 
    0% {
      -webkit-box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
              box-shadow: 0 0 17px 3px #0ff,0 0 4px 2px #0ff;
    }
    50% {
      -webkit-box-shadow: 0 0 17px 3px #686855,0 0 4px 2px #686855;
              box-shadow: 0 0 17px 3px #686855,0 0 4px 2px #686855;
    }
    100% {
      -webkit-box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
              box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
    }
    
  }
  
  @keyframes gradient-shadow {
    0% {
        -webkit-box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
                box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
      }
      50% {
        -webkit-box-shadow: 0 0 17px 3px #686855,0 0 4px 2px #686855;
                box-shadow: 0 0 17px 3px #686855,0 0 4px 2px #686855;
      }
      100% {
        -webkit-box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
                box-shadow: 0 0 17px 3px #fce119,0 0 4px 2px #fce119;
      }
  }
  
  @-webkit-keyframes half-yellow-shadow {
    0% {
      top: 0;
      left: 0;
      height: 50%;
      width: 50%;
    }
    16.66% {
      top: 0;
      left: 0;
      height: 50%;
      width: 100%;
    }
    32.32% {
      top: 0;
      left: 50%;
      height: 50%;
      width: 50%;
    }
    49.98% {
      top: 50%;
      left: 50%;
      height: 50%;
      width: 50%;
    }
    66.64% {
      top: 50%;
      left: 0;
      height: 50%;
      width: 100%;
    }
    83.3% {
      top: 50%;
      left: 0;
      height: 50%;
      width: 50%;
    }
    100% {
      top: 0;
      left: 0;
      height: 50%;
      width: 50%;
    }
  }
  
  @keyframes half-yellow-shadow {
    0% {
      top: 0;
      left: 0;
      height: 50%;
      width: 50%;
    }
    16.66% {
      top: 0;
      left: 0;
      height: 50%;
      width: 100%;
    }
    32.32% {
      top: 0;
      left: 50%;
      height: 50%;
      width: 50%;
    }
    49.98% {
      top: 50%;
      left: 50%;
      height: 50%;
      width: 50%;
    }
    66.64% {
      top: 50%;
      left: 0;
      height: 50%;
      width: 100%;
    }
    83.3% {
      top: 50%;
      left: 0;
      height: 50%;
      width: 50%;
    }
    100% {
      top: 0;
      left: 0;
      height: 50%;
      width: 50%;
    }
  }
  
  @-webkit-keyframes half-cyan-shadow {
    0% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 50%;
    }
    16.66% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 100%;
    }
    32.32% {
      bottom: 0;
      right: 50%;
      height: 50%;
      width: 50%;
    }
    49.98% {
      bottom: 50%;
      right: 50%;
      height: 50%;
      width: 50%;
    }
    66.64% {
      bottom: 50%;
      right: 0;
      height: 50%;
      width: 100%;
    }
    83.3% {
      bottom: 50%;
      right: 0;
      height: 50%;
      width: 50%;
    }
    100% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 50%;
    }
  }
  
  @keyframes half-cyan-shadow {
    0% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 50%;
    }
    16.66% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 100%;
    }
    32.32% {
      bottom: 0;
      right: 50%;
      height: 50%;
      width: 50%;
    }
    49.98% {
      bottom: 50%;
      right: 50%;
      height: 50%;
      width: 50%;
    }
    66.64% {
      bottom: 50%;
      right: 0;
      height: 50%;
      width: 100%;
    }
    83.3% {
      bottom: 50%;
      right: 0;
      height: 50%;
      width: 50%;
    }
    100% {
      bottom: 0;
      right: 0;
      height: 50%;
      width: 50%;
    }
  }
.cardback{
    background: linear-gradient(#7645d9,#53dee9);
}
.backgroundColor{
    background-color: #000;
}
.timeline-TweetList-tweet:first-of-type {
    
    background: #000 !important;
}
.bottom-img{
    margin-left: auto;
    margin-right: auto;
    margin-top: 58px;
}
.presale-title{
    font-size:24px;
  }
  .presale-lineheight{
    line-height: 2.2rem;
  }
  .head-light{
      color: #fff;
  }
  .presale_tile{
    font-size: 20px;
  }
  .cardWidth{
    max-width: 36.5%;
  }
  .head_title{
    background: -webkit-linear-gradient(top,#7645d9 40%,#53dee9 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
<<<<<<< HEAD
.presale-head{
  font-size: 30px;
  font-weight: 900;
}
.presale-ans{
  font-size:24px;
  padding-left:10px;
}
.cardHead{
  background: linear-gradient(#7645d9,#53dee9);
    font-size: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
}
.headtopa{
  padding-left: 25px;
  padding-right: 25px;
}
.presaleCard{
  background: linear-gradient(#7645d9,#53dee9);
}
`

export default GlobalStyle
