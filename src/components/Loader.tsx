import { SquareLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SquareLoader color="#0932f5" size={40} loading={true} />
    </div>
  )
}

export default Loader
