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
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('');
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
        setIngredients(foundProject.fields.ingredients)
        setMethod(foundProject.fields.method)
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
      ingredients,
      method,
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="date">Date Started:</label>
      <input
        type="date"
        id="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        placeholder="choose category"
        onChange={(e) => setCategory(e.target.value)}>
          <option value="Wine">Wine</option>
          <option value="Beer">Beer</option>
          <option value="Pickles">Pickles</option>
          <option value="Misc.">Misc.</option>
      </select>
      <label htmlFor="field1"></label>
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
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea
        id="ingredients"
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}/>
      <label htmlFor="method">Method:</label>
      <textarea
        id="method"
        onChange={(e) => setMethod(e.target.value)}
        value={method}
      />
      <label htmlFor>Notes:</label>
      <textarea
        id="notes"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
