import reactImg from '../assets/react-core-concepts.png'

//  used for getting random element in the array
const descriptions = ['Fundamental', 'Core', 'Amazing']
function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}

export default function Header(){
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}