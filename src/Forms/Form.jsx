// Form.jsx
import { useRef, useEffect, useReducer } from 'react';
import { formReducer, FORM_REDUCER_DEFAULT_VALUES } from './formReducer';

export default function Form() {
  const inputName = useRef();
  const inputDate = useRef();
  const inputSelect = useRef();
  const inputCheck = useRef();

  const [formValuesReducer, dispatch] = useReducer(
    formReducer,
    FORM_REDUCER_DEFAULT_VALUES
  );

  useEffect(() => {
    inputName.current.value = 'asad';
    inputDate.current.value = new Date().toISOString().substring(0, 10);
    inputSelect.current.value = ''; // يعرض option فارغة
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  // نبعث القيم للـ reducer
  dispatch({
    type: 'INPUT_CHANGE',
    payload: { name: 'name', value: inputName.current.value }
  });

  dispatch({
    type: 'INPUT_CHANGE',
    payload: { name: 'date', value: inputDate.current.value }
  });

  dispatch({
    type: 'SELECT_CHANGE',
    payload: { name: 'select', value: inputSelect.current.value }
  });

  dispatch({
    type: 'CHECK_CHANGE',
    payload: { name: 'check', value: inputCheck.current.checked }
  });

  // 🧹 نفرّغ القيم من الفورم
  inputName.current.value = "";
  inputDate.current.value = "";
  inputSelect.current.value = "";
  inputCheck.current.checked = false;
};

  return (
    <div className="container">
      <form>
        <div>
          <h2>
            <strong>Date : </strong>
          </h2>
          {new Date().toLocaleString()}
        </div>

        <div>
          <h2>
            <strong>Values : </strong>
          </h2>
          {JSON.stringify(formValuesReducer)}
        </div>
        <br />

        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            ref={inputName}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            ref={inputDate}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="select">Select</label>
          <select name="select" className="form-control" ref={inputSelect}>
            <option value="" disabled>
              Select your country
            </option>
            <option value="Tunisie">Tunisie</option>
            <option value="Maroc">Maroc</option>
            <option value="Algerie">Algerie</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="check" className="form-check-label">
            Accept
          </label>
          <input
            type="checkbox"
            name="check"
            className="form-check-input"
            ref={inputCheck}
          />
        </div>

        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}
