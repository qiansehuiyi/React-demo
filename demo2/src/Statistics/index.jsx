
import Item from '../components/Item'
const Statistics = ({ good, neutral, bad }) => {


  const all = good + neutral + bad

  const avge = (good * 1 + neutral * 0 + bad * (-1)) / all

  const positive = ((good * 1) / all).toFixed(2) + '%'
  return <>
    {
      all
        ? <>
          <Item>good:{good}</Item>
          <Item >neutral:{neutral}</Item>
          <Item>bad:{bad}</Item>
          <Item >all:{all}</Item>
          <Item>avge:{avge}</Item>
          <Item>positive:{positive}</Item>
        </>
        : <>请投票</>

    }
  </>
}

export default Statistics
