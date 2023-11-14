import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import { AiOutlineEye } from 'react-icons/ai'
import { BsTrash } from "react-icons/bs";
import axios from "axios";
function NewsPage() {
  const [api, setApi] = useState([]); // FETCHING DATA IN MEMBERPAGE
  const handleDelete = (item) => {
    var val = confirm(`ingin menghapus data ${item.news}??`);
    if (val == true) {
      axios.delete(`http://localhost:3000/news/${item.id}`);
      setTimeout(function () {
        location.reload();
      }, 700);
    } else {
      alert("silahkan cek kembali");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((resp) => resp.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <div className="p-5 pt-1 relative">
      <div className="flex py-6">
        <h3 className="text-2xl text-black font-poppins capitalize">News</h3>
        <div className="flex justify-between w-3/4">
          <Link className="btn btn-sm btn-accent px-5 ml-5" to="/news/register">
            ADD
          </Link>
          <button className="btn btn-sm btn-secondary px-5">filter</button>
        </div>
      </div>

      <div className="overflow-y-scroll h-screen no-scrollbar pb-64">
        <div
          className=" gap-x-3 mt-7 gap-y-3
          "
        >
          <div className="w-screen">
            <table className="table overflow-x-hidden table-zebra">
              <thead className="w-ful">
                <tr className="w-full">
                  <th></th>
                  <th>News</th>
                  <th>Tema</th>
                  <th>Tanggal</th>
                  <th>JAM</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="">
                {
                    api.map((item) => <TableNews handleDelete={handleDelete} item={item} key={item.id}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

const TableNews = ({handleDelete, item}) => {
  return (
    <tr>
      <th className="w-5">{item.id}</th>
      <td className="w-4/12">
        {item.news}
      </td>
      <td className="w-32 ">{item.tema}</td>
      <td className="w-52">{item.date}</td>
      <td className="w-20">{item.time}</td>
      <td>
        <div className="tooltip tooltip-top" data-tip='read'>
            <Link className="btn btn-xs btn-secondary" to={item.link}><AiOutlineEye size={19} /></Link>
        </div>

        <div className="tooltip mx-2" data-tip="edit">
          <Link to={`/news/update/${item.id}`} className="btn btn-xs btn-primary">
            <BiPencil size={19} />
          </Link>
        </div>

        <div className="tooltip" data-tip="delete">
          <button className="btn btn-xs btn-accent">
            <BsTrash size={19} onClick={(e) => handleDelete(item)} />
          </button>
        </div>


      </td>
    </tr>
  );
};

export default NewsPage;
