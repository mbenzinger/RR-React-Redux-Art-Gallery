import './App.css';
import { clearData, fetchData, incrementId, decrementId, inputId } from './features/dataSlice'
import { useSelector, useDispatch, connect} from 'react-redux'
import { useEffect} from 'react'

const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

// no idea where thsi code goes
useEffect(() => {
  dispatch(fetchData())
}, [props.objectId, dispatch])
//

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ 'width': '100vw' }} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }


  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => {
        dispatch(inputId(Number(e.target.value)))
      }} />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App)
