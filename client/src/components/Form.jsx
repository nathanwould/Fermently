import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";

function Form(props) {
  const params = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState('');
  const [field8, setField8] = useState('');
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [ingredient4, setIngredient4] = useState('');
  const [ingredient5, setIngredient5] = useState('');
  const [ingredient6, setIngredient6] = useState('');
  const [ingredient7, setIngredient7] = useState('');
  const [ingredient8, setIngredient8] = useState('');
  const [ingredient9, setIngredient9] = useState('');
  const [ingredient10, setIngredient10] = useState('');
  const [ingredient11, setIngredient11] = useState('');
  const [ingredient12, setIngredient12] = useState('');
  const [method1, setMethod1] = useState('');
  const [method2, setMethod2] = useState('');
  const [method3, setMethod3] = useState('');
  const [method4, setMethod4] = useState('');
  const [method5, setMethod5] = useState('');
  const [method6, setMethod6] = useState('');
  const [method7, setMethod7] = useState('');
  const [method8, setMethod8] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (props.projects.length > 0 && params.id) {
      const foundProject = props.projects.find((project) => params.id === project.id);

      if (foundProject) {
        setTitle(foundProject.fields.title)
        setDate(foundProject.fields.date)
        setCategory(foundProject.fields.category)
        setField1(foundProject.fields.field1)
        setField2(foundProject.fields.field2)
        setField3(foundProject.fields.field3)
        setField4(foundProject.fields.field4)
        setField5(foundProject.fields.field5)
        setField6(foundProject.fields.field6)
        setField7(foundProject.fields.field7)
        setField8(foundProject.fields.field8)
        setIngredient1(foundProject.fields.ingredient1)
        setIngredient2(foundProject.fields.ingredient2)
        setIngredient3(foundProject.fields.ingredient3)
        setIngredient4(foundProject.fields.ingredient4)
        setIngredient5(foundProject.fields.ingredient5)
        setIngredient6(foundProject.fields.ingredient6)
        setIngredient7(foundProject.fields.ingredient7)
        setIngredient8(foundProject.fields.ingredient8)
        setIngredient9(foundProject.fields.ingredient9)
        setIngredient10(foundProject.fields.ingredient10)
        setIngredient11(foundProject.fields.ingredient11)
        setIngredient12(foundProject.fields.ingredient12)
        setMethod1(foundProject.fields.method1)
        setMethod2(foundProject.fields.method2)
        setMethod3(foundProject.fields.method3)
        setMethod4(foundProject.fields.method4)
        setMethod5(foundProject.fields.method5)
        setMethod6(foundProject.fields.method6)
        setMethod7(foundProject.fields.method7)
        setMethod8(foundProject.fields.method8)
        setNotes(foundProject.fields.notes)
      }
  }
}, [props.reviews, params.id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      date,
      category,
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
      field7,
      field8,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      ingredient6,
      ingredient7,
      ingredient8,
      ingredient9,
      ingredient10,
      ingredient11,
      ingredient12,
      method1,
      method2,
      method3,
      method4,
      method5,
      method6,
      method7,
      method8,
      notes,
    };
    if (params.id) {
      const projectURL = `${baseURL}/${params.id}`
      await axios.put(projectURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
      props.setToggleFetch((curr) => !curr)
      history.push("/")
    }
  }
  // {document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.datepicker');
  //   var instances = M.Datepicker.init(elems, options);
  // });}

  return (
    <form className="projectDetails" onSubmit={handleSubmit}>
      <div className="projectTitle">
        <label htmlFor="title">Title:</label>
        <input
        type="textInput"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
            />
        <label htmlFor="date">Date Started:</label>
        <input
          type="date"
          class="datepicker"
          onChange={(e) => setDate(e.target.value)}
        />
        <div id="category">
        <label htmlFor="category">Category:</label>
      <select
        placeholder="choose category"
        onChange={(e) => setCategory(e.target.value)}>
          <option value="Wine">Wine</option>
          <option value="Beer">Beer</option>
          <option value="Pickles">Pickles</option>
          <option value="Misc.">Misc.</option>
          </select>
        </div>
        </div>
        <div className="projectActions">
          <button id="submit" type="submit">Save</button>
        </div>
        <div className="projectFields">
      <label htmlFor="field1">Misc. Fields:</label>
      <input
        type="text"
        id="field1"
        onChange={(e) => setField1(e.target.value)}
        value={field1}
      />
      <label htmlFor="field2"></label>
      <input
        type="text"
        id="field2"
        onChange={(e) => setField2(e.target.value)}
        value={field2}
      />
      <label htmlFor="field3"></label>
      <input
        type="text"
        id="field3"
        onChange={(e) => setField3(e.target.value)}
        value={field3}
      />
      <label htmlFor="field4"></label>
      <input
        type="text"
        id="field4"
        onChange={(e) => setField4(e.target.value)}
        value={field4}
      />
      <label htmlFor="field5"></label>
      <input
        type="text"
        id="field5"
        onChange={(e) => setField5(e.target.value)}
        value={field5}
      />
      <label htmlFor="field6"></label>
      <input
        type="text"
        id="field6"
        onChange={(e) => setField6(e.target.value)}
        value={field6}
      />
      <label htmlFor="field7"></label>
      <input
        type="text"
        id="field7"
        onChange={(e) => setField7(e.target.value)}
        value={field7}
      />
      <label htmlFor="field8"></label>
      <input
        type="text"
        id="field8"
        onChange={(e) => setField8(e.target.value)}
        value={field8}
          />
          </div>
      <div className="projectIngs">
      <label htmlFor="ingredient">Ingredients:</label>
      <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient1(e.target.value)}
          value={ingredient1} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient2(e.target.value)}
          value={ingredient2} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient3(e.target.value)}
          value={ingredient3} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient4(e.target.value)}
          value={ingredient4} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient5(e.target.value)}
          value={ingredient5} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient6(e.target.value)}
          value={ingredient6} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient7(e.target.value)}
          value={ingredient7} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient8(e.target.value)}
          value={ingredient8} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient9(e.target.value)}
          value={ingredient9} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient10(e.target.value)}
          value={ingredient10} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient11(e.target.value)}
          value={ingredient11} />
        <input
        type="text"
        className="ingredient"
        onChange={(e) => setIngredient12(e.target.value)}
          value={ingredient12} />
      </div>
      <div className="projectMethod">
      <label htmlFor="method">Method:</label>
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod1(e.target.value)}
        value={method1}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod2(e.target.value)}
        value={method2}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod3(e.target.value)}
        value={method3}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod4(e.target.value)}
        value={method4}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod5(e.target.value)}
        value={method5}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod6(e.target.value)}
        value={method6}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod7(e.target.value)}
        value={method7}
      />
      <input
        type="text"
        className="method"
        onChange={(e) => setMethod8(e.target.value)}
        value={method8}
        />
        </div>
      <div className="projectNotes">
      <label htmlFor>Notes:</label>
      <textarea
        id="notes"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
        />
        </div>
      </form>
  );
}

export default Form;
