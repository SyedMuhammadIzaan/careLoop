import { useEffect, useState } from 'react'
import Navbar from '../../components/client/Navbar'
import Herobanner from '../../components/client/Herobanner'
import { doctorsData } from '../../constants/doctorsData'
// import CardComp from '../../components/client/Card'
import { filteredDoctors } from '../../handlers/doctorHandler'
import type { Doctor } from '../../interface/DoctorInterface'
import Input from '../../components/common/Input'
import DoctorList from '../../components/client/Doctor/DoctorList'
import LoadMoreButton from '../../components/client/Doctor/LoadMoreButton'
import Footer from '../../components/Footer'
// import type { Doctor } from '../../interface/DoctorInterface'

const Home = () => {
  const [searchDoctor, setSearchDoctor] = useState<string>("");
  const [filteredDoctorList, setFilteredDoctorList] = useState<Doctor[]>([]);
  const [visibleDoctors, setVisibleDoctors] = useState(6);
  useEffect(() => {
    if (searchDoctor) {
      setFilteredDoctorList(filteredDoctors(searchDoctor));
    }

  }, [searchDoctor])
  console.log("Filtered Doctor List", filteredDoctorList)

  const doctorsToShow =
    filteredDoctorList && filteredDoctorList.length > 0 ? filteredDoctorList : doctorsData;

  const visibleList = doctorsToShow.slice(0, visibleDoctors);
  return (
    <div>
      <div className='navbar-container border-2 border-slate-600 w-full'>
        <Navbar />
      </div>
      <div className='herobanner-container w-full h-full max-w-[1200px] mx-auto box-border'>
        <Herobanner />
      </div>
      <div className="doctor-container border-2 w-full max-w-[1200px] mx-auto box-border">
        <div className="search-container w-full flex justify-end mt-10">
          <div className='w-3/12'>
            <Input placeholder='Search doctors...' value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
          </div>
          {/* <input
            type="text"
            value={searchDoctor}
            onChange={(e) => setSearchDoctor(e.target.value)}
            placeholder="Search doctors..."
            className="border-2 border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>
        <div className='w-full h-full flex flex-wrap gap-9 justify-evenly py-10'>
          <DoctorList doctors={visibleList} />
          {/* {
            filteredDoctorList && filteredDoctorList.length > 0 ?
            filteredDoctorList.map((doctorsData) =>
            <CardComp key={doctorsData.id} data={doctorsData} />
            )
            :
            doctorsData
            ?
            doctorsData.map((doctor) =>
            <CardComp key={doctor.id} data={doctor} />
            )
            :
            <p>No doctors available</p>
            } */}
        </div>
        <LoadMoreButton onClick={() => setVisibleDoctors((prev) => prev + 6)} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home