import {useState} from 'react'
import star from './images/icon-star.svg';
import thanks from './images/illustration-thank-you.svg'

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState('')

  const Button = ({number}) => {
    return <button onClick={() => setItems(number)} className="btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150">{number}</button>;
  }

  return(
            <>
              {!isSubmitted && (
              <div className="wrapper">
                <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
                <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
                <p className="text-gray-400 mb-10"> Please let us know how we did with your support request. All feedback is appreciated
                  to help us improve our offering!</p>
                  <ul className="grid grid-cols-5 gap-3 mb-10">
                    <li><Button number={1} /></li>
                    <li><Button number={2} /></li>
                    <li><Button number={3} /></li>
                    <li><Button number={4} /></li>
                    <li><Button number={5} /></li>
                  </ul>

                <div className="text-center">
                <button onClick={() => {setIsSubmitted(true)}} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Submit</button>
                </div>

              </div>
              )}

              {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} /> }
            </> 
        );
}

const ThankYou = ({items, setIsSubmitted}) => {
  return(
    <div className="wrapper">
      <img src={thanks} alt="" className="block mx-auto mb-10" />
      <div className="flex items-center justify-center">
      <p className="p-rating bg-gray-700 text-center rounded-full px-4 pt-1 text-sm">You selected {items} out of 5</p>
      </div>
      <h2 className="text-gray-100 text-3xl my-6 text-center">Thank you!</h2>
      <p className="text-gray-400 mb-10 text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      <div className="text-center">
                <button onClick={() => {setIsSubmitted(false)}} className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full">Rate again</button>
                </div>
    </div>
  )
}

        export default App;
