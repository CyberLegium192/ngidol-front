import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import ButtonSubmit from "../button/submitButtonMember";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link, useParams } from "react-router-dom";

function updateMerch() {
  
  const [values, setValues] = useState({
    product: '',
    imgProg: null,
    price: '',
    link: '',
  })
  const {id} = useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/merch/${id}`)
    .then(resp => resp.json())
    .then(data => {
      setValues({
        product: data.product,
        imgProg: data.image,
        price: data.price,
        link: data.link,
      })
    })
  }, [id])
  


  const handleSubmit = () => {
    var vall = confirm("apakah data yang di masukan sudah benar?");
    if (vall == true) {
      var formData = new FormData();
      formData.append("product", values.product)
      formData.append("image", values.imgProg)
      formData.append("price", values.price)
      formData.append("link", values.link)
      axios.patch(`http://localhost:3001/edit/merch/${id}`, formData);
      setTimeout(function () {
        location.href = "/merch";
      }, 700);
    }
    console.log(values.imgProg)
  };

  return (
    <div className="w-full z-40 h-screen duration-500 bg-white p-4">
      <div className="flex justify-between">
        <h4 className=" text-2xl uppercase text-red-600 font-bold">
          Merchendise Form Update
        </h4>
        <Link to="/merch" className="hover:rotate-90 duration-300">
          <AiOutlineClose size={30} />
        </Link>
      </div>

      <form
        className="md:pb-0 md:h-auto h-screen min-[360px]:pb-40
      "
      >
        <div
          className="md:grid md:grid-cols-2 lg:gap-x-14 lg:gap-y-8 no-scrollbar
        lg:grid
        lg:grid-cols-2
        mt-5 px-4
        sm:grid
        sm:grid-cols-1
        sm:gap-x-8
        lg:overflow-y-auto
        min-[360px]:h-full
        min-[360px]:flex
        min-[360px]:gap-y-4
        min-[360px]:flex-col
        
        min-[360px]:overflow-y-scroll
        "
        >
          <div>
            <TextField
              id="standard-basic"
              label="product name"
              color="error"
              variant="standard"
              onChange={(e) => setValues({...values, product: e.target.value})}
              value={values.product}
              name="product name"
              className="w-full"
            />
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="price"
              color="error"
              variant="standard"
              onChange={(e) => setValues({...values, price: e.target.value})}
              value={values.price}
              name="price"
              type="number"
              className="w-full"
            />
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="Link to web"
              color="error"
              variant="standard"
              onChange={(e) => setValues({...values, link: e.target.value})}
              value={values.link}
              name="Link to web"
              className="w-full"
            />
          </div>

          <div className="flex justify-center">
            <FileUpload setValues={setValues} values={values}/>
          </div>

        </div>
        <div className="mt-4">
          <ButtonSubmit handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 0,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 1,
  whiteSpace: 'nowrap',
  width: 0,
});

const FileUpload = ({setValues, values}) => {
    const [image, setImage] = useState(null)
    const user = `http://localhost:3001/merch/images/${values.imgProg}`
    const handleUpload = (e) => {
      setValues({...values, imgProg: e.target.files[0]})
        setImage(URL.createObjectURL(e.target.files[0]))
    }
  return (
    <div className="w-56 lg:flex lg:flex-col lg:justify-center">
      <img
        src={image === null ? `${user}` : image}
        className="w-56 h-28 lg:m-auto shadow mb-5 object-cover"
        alt=""
      />

      <Button
        component="label"
        variant="outlined"
        size="small"
        color="error"
        className="mt-8"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput
          type="file"
          name="image"
          onChange={(e) => handleUpload(e)}
        />
      </Button>
    </div>
  );
};

export default updateMerch;
