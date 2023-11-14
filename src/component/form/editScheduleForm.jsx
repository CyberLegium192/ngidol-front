import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import ButtonSubmit from "../button/submitButtonMember";
import Setlist from "../select/schedule/setlist";
import Tema from "../select/schedule/tema";
import { useParams, Link } from "react-router-dom";
// readData

function scheduleForm() {
  const { id } = useParams();
  const [data, setData] = useState([{member:''}])
  const [values, setValues] = useState({
    setlist: "",
    tema: "",
    date: "",
    time: "",
    link: "",
    acara: "",
    memberPerform: [{member: ''}],
  });

  useEffect(() => {
    fetch(`http://localhost:3000/schedule/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setValues({
          setlist: data.setlist,
          tema: data.tema,
          date: data.date,
          time: data.time,
          link: data.link,
          acara: data.acara,
          memberPerform: data.memberPerform,
        });
      });
  }, [id]);
  const handleChange =(e, i) => {
    e.preventDefault()
    const {name, value} = e.target
    const onChangeVal = [...values.memberPerform]
    onChangeVal[i][name] = value
    setValues({...values, memberPerform: onChangeVal})
  }
  const handleDelete = (i) => {
    i.preventDefault()
    const deleteValue = [...data]
    deleteValue.splice(i,1)
    setData(deleteValue)
  }



  const handleSubmit = () => {
    try {
      axios
        .patch(`http://localhost:3000/schedule/${id}`, values)
      location.href = "/schedule";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full z-40 h-screen duration-500 top-0 bg-white p-4">
      <div className="flex justify-between">
        <h4 className=" text-2xl uppercase text-red-600 font-bold">
          Schedule Form Update
        </h4>
        <Link className="hover:rotate-90 duration-300" to="/schedule">
          <AiOutlineClose size={30} />
        </Link>
      </div>

      <form
        className="md:pb-0 md:h-auto h-screen min-[360px]:pb-40
      "
      >
        <div
          className="md:grid md:grid-cols-4 lg:gap-x-14 lg:gap-y-8 no-scrollbar
        lg:grid
        lg:grid-cols-4
        mt-5 px-4
        sm:grid
        sm:grid-cols-2
        sm:gap-x-8
        lg:overflow-y-auto
        min-[360px]:h-full
        min-[360px]:flex
        min-[360px]:gap-y-4
        min-[360px]:flex-col
        
        min-[360px]:overflow-y-scroll
        "
        >
          <Setlist setValues={setValues} values={values} />
          {values.setlist !== "event" ? (
            <Tema setValues={setValues} values={values} />
          ) : (
            <div>
              <TextField
                id="standard-basic"
                label="acara"
                color="error"
                variant="standard"
                onChange={(e) =>
                  setValues({ ...values, acara: e.target.value })
                }
                name="acara"
                className="w-full"
                value={values.acara}
              />
            </div>
          )}

          <div>
            <TextField
              id="standard-basic"
              label="Date"
              color="error"
              variant="standard"
              onChange={(e) => setValues({ ...values, date: e.target.value })}
              name="Date"
              className="w-full"
              value={values.date}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Time"
              color="error"
              variant="standard"
              onChange={(e) => setValues({ ...values, time: e.target.value })}
              name="Time"
              type="time"
              className="w-full"
              value={values.time}
            />
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Link to web"
              color="error"
              variant="standard"
              onChange={(e) => setValues({ ...values, link: e.target.value })}
              name="Link to web"
              className="w-full"
              value={values.link}
            />
          </div>

          <div className="col-span-3">

            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 min-[340px]:grid-cols-1 w-full gap-x-3 gap-y-3">
              {values.memberPerform.map((val, i) => (
                <div className="flex items-center mt-3" key={i}>
                  <TextField
                    id="standard-basic"
                    label="Fistname"
                    color="error"
                    variant="standard"
                    value={val.member}
                    onChange={(e) => handleChange(e, i)}
                    name="member"
                    className="w-full"
                  />
                  <button
                    className="font-poppins mt-2 cursor-pointer btn-sm"
                    onClick={(i) => handleDelete(i)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        <div className="mt-4">
          <ButtonSubmit handleSubmit={handleSubmit} />
        </div>
        </div>
      </form>
    </div>
  );
}

export default scheduleForm;
