import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineSquareFoot } from "react-icons/md";
import img from "../../assets/images/ts-1.jpg";
import { FcBusinesswoman } from "react-icons/fc";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const PropertyDetails = () => {
  const propertys = useLoaderData();
  const { id } = useParams();
  const property = propertys.find((property) => property.id == id);
  console.log(property);
  const {
    estate_title,
    relevant_image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = property;
  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex gap-5 mt-10">
        <div className="  w-3/5 shadow-2xl rounded-2xl p-4">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-success">{estate_title}</h1>
            <h2 className=" flex text-3xl font-bold items-center  text-success">
              <HiCurrencyDollar className="text-4xl"></HiCurrencyDollar>
              {price}
            </h2>
          </div>
          <div className="flex justify-between">
            <span className="text-2xl mt-5 flex items-center font-semibold text-success">
              <MdLocationOn className="text-slate-900"></MdLocationOn>
              {location}
            </span>
            <h2 className="flex items-center text-2xl font-semibold text-success">
              <MdOutlineSquareFoot className="text-3xl text-slate-900"></MdOutlineSquareFoot>
              {area}
            </h2>
          </div>
          <img
            className="w-full mt-4 rounded-2xl"
            src={relevant_image}
            alt=""
          />
          <div className="mt-5">
            <h2 className="text-success font-bold text-xl">Description :</h2>
            <p className="text-xs font-semibold mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              debitis dolor, quam corporis odio cupiditate nulla rem dolore
              natus reiciendis consequatur minima commodi inventore error
              architecto adipisci soluta labore laborum atque quisquam
              laudantium! Ratione atque earum, doloremque sunt, obcaecati iusto
              esse repellat eaque deserunt sit sapiente sequi. Id, fuga optio
              quis delectus suscipit aperiam fugiat harum itaque! Tenetur qui
              quia iste laborum iure nam repudiandae eaque repellat. Blanditiis
              alias autem asperiores similique debitis neque iste. Ipsam non
              veritatis soluta? Magni, nostrum saepe! Incidunt distinctio, illum
              est nulla animi sed nemo alias, inventore perspiciatis eius omnis
              quam quisquam soluta unde assumenda veritatis, eum iste libero
              repellendus reprehenderit accusamus. Ipsum, tempore quidem. Vitae
              expedita tenetur iure eaque atque architecto quibusdam autem
              aspernatur necessitatibus quo, sapiente consequuntur sint? Sed
              odit autem quod vitae excepturi similique tempore nobis, dolorum
              repellendus eveniet fuga natus itaque nostrum iusto doloremque
              dolor! Ducimus fuga illum fugit itaque quos hic, placeat qui
              voluptate nulla dolorum explicabo ipsam laborum pariatur vel eaque
              maiores atque veritatis iste autem voluptas eveniet sapiente nobis
              deserunt. Nobis doloribus delectus eius modi, quisquam voluptate
              nemo in natus soluta deleniti ratione aperiam, ducimus magnam
              consequatur ex illo alias veritatis labore officia iure eaque
              laborum nisi! Error?
            </p>
            <div className="mt-4">
              <h1 className="text-success font-bold text-xl">
                Property Details
              </h1>
              <div className="flex gap-20 mt-5">
                <h4 className="font-bold text-lg ml-">
                  Property ID:{" "}
                  <span className="text-base text-slate-500">V254680</span>
                </h4>
                <h4 className="font-bold text-lg">
                  Property Type:{" "}
                  <span className="text-base text-slate-500">House</span>
                </h4>
                <h4 className="font-bold text-lg">
                  Property status:{" "}
                  <span className="text-base text-slate-500">For Sale</span>
                </h4>
              </div>
              <div className="flex gap-20 mt-5">
                <h4 className="font-bold text-lg">
                  Property Price:
                  <span className="text-base text-slate-500 ml-1">{price}</span>
                </h4>
                <h4 className="font-bold text-lg">
                  Rooms: <span className="text-base text-slate-500">6 </span>
                </h4>
                <div className="ml-24">
                  <h4 className="font-bold text-lg">
                    Bedrooms:{" "}
                    <span className="text-base text-slate-500">7</span>
                  </h4>
                </div>
              </div>
              <div className="flex gap-28 mt-5">
                <h4 className="font-bold text-lg">
                  Bath: <span className="text-base text-slate-500">4</span>
                </h4>
                <h4 className="font-bold text-lg ml-24">
                  Garages: <span className="text-base text-slate-500">2</span>
                </h4>
                <h4 className="font-bold text-lg ml-12">
                  Year Built:{" "}
                  <span className="text-base text-slate-500">10/6/2020</span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="border-success w-1/3 shadow-2xl rounded-2xl">
          <h2 className="text-center text-success text-2xl font-bold mt-2 relative">
            <FcBusinesswoman className="absolute ml-12 text-4xl"></FcBusinesswoman>
            Agent Information
          </h2>
          <div className="p-4">
            <hr className="mt-2" />
            <hr />
          </div>
          <div className="flex justify-center gap-10 mt-5">
            <div>
              <img src={img} className="rounded-full w-28 h-28" alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-success">
                Lisa Clark
              </h2>
              <p className="text-lg mt-2 font-semibold text-success">
                Agent of Property
              </p>
            </div>
          </div>
          <div className="p-6 mt-4">
            <Link>
              <h2 className=" flex text-xl font-bold gap-5">
                <MdLocationOn className="text-success text-3xl"></MdLocationOn>{" "}
                302 Av Park, New York
              </h2>
            </Link>
            <Link>
              <h2 className="flex text-xl font-bold gap-5 mt-5">
                <MdAddCall className="text-success text-3xl"></MdAddCall>{" "}
                01718388359
              </h2>
            </Link>
            <Link>
              <h2 className="flex text-xl font-bold gap-5 mt-5">
                <MdEmail className="text-success text-3xl"></MdEmail>{" "}
                n87635429@gmail.com
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
