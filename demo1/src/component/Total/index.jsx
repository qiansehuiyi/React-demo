

const Total = ({ parts }) => {
  console.log(parts)
  return <>
    <div>
      {
        parts
          .map(({ exercises }) => exercises)
          .reduce((prev, next) => prev + next)
      }
    </div>
  </>;
}
export default Total